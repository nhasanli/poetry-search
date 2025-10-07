// Netlify serverless function to rank poems by thematic relevance using Claude API

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { query, poems } = JSON.parse(event.body);

    if (!query || !poems || !Array.isArray(poems)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Query and poems array are required' })
      };
    }

    const apiKey = process.env.CLAUDE_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }

    // Prepare poems for Claude with truncated content (first 15 lines to save tokens)
    const poemSummaries = poems.map((poem, index) => {
      const excerpt = poem.lines.slice(0, 15).join('\n');
      return `[${index}] "${poem.title}" by ${poem.author}\n${excerpt}${poem.lines.length > 15 ? '\n...(truncated)' : ''}`;
    }).join('\n\n---\n\n');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: `You are analyzing poems for thematic relevance to a search query.

Query: "${query}"

Poems to rank:
${poemSummaries}

Task: Rank these poems by how thematically relevant they are to "${query}". Consider the main theme, emotional tone, subject matter, and overall message - not just keyword matching.

Return ONLY a JSON array of objects with this exact format:
[
  {"index": 0, "relevance": 0.85, "reason": "brief explanation"},
  {"index": 1, "relevance": 0.42, "reason": "brief explanation"}
]

Rules:
- relevance must be a number between 0 and 1
- Sort by relevance (highest first)
- Include all poems
- Keep reasons under 15 words
- Return valid JSON only, no other text`
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    const responseText = data.content[0].text.trim();

    // Parse the JSON response
    let rankings;
    try {
      rankings = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Claude response:', responseText);
      throw new Error('Invalid response format from Claude');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ rankings })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
