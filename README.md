# Poetry Finder

An AI-powered classical poetry search tool that uses semantic understanding to find the most relevant poems from PoetryDB's collection based on themes and sentiments.

## Features

- 🤖 **AI-Powered Semantic Search** - Uses TensorFlow.js Universal Sentence Encoder to understand the meaning of your query, not just keywords
- 📚 **Thousands of Classic Poems** - Searches PoetryDB's extensive collection of public domain poetry
- 🎨 **Classical Design** - Beautiful, ornamental UI inspired by antique poetry books
- ⚡ **Fast & Free** - Runs entirely in the browser, no backend required

## How It Works

1. Enter a theme or sentiment (e.g., "burden of leadership", "heartbreak", "nature")
2. The app extracts keywords and searches PoetryDB's API
3. AI ranks results by semantic relevance to your query
4. Displays the most thematically relevant poem in full

## Technology Stack

- **Frontend**: Pure HTML/CSS/JavaScript
- **AI/ML**: TensorFlow.js + Universal Sentence Encoder
- **API**: PoetryDB (public domain poetry database)
- **Fonts**: Google Fonts (Playfair Display, Crimson Text)

## Deployment Instructions

### Option 1: Deploy to Netlify (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the entire folder
5. Your site will be live at `yoursite.netlify.app`

**OR use Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up for a free account
3. Click "Add New" → "Project"
4. Import your Git repository or drag/drop the folder
5. Click "Deploy"
6. Your site will be live at `yoursite.vercel.app`

**OR use Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/" (root) folder
6. Your site will be live at `yourusername.github.io/repo-name`

### Option 4: Deploy to Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign up for a free account
3. Click "Create a project"
4. Connect your Git repository or upload files directly
5. Deploy with default settings
6. Your site will be live at `yoursite.pages.dev`

## Files Included

- `index.html` - Main application file
- `netlify.toml` - Netlify configuration (security headers, redirects)
- `vercel.json` - Vercel configuration (security headers, routing)
- `README.md` - This file

## Configuration Files

### netlify.toml
- Configures security headers
- Sets up caching for performance
- Handles routing

### vercel.json
- Configures security headers
- Sets up static file serving
- Handles routing

## Performance Notes

- **First Load**: ~5MB download for AI model (one-time, cached)
- **Subsequent Loads**: Model loads from browser cache instantly
- **API Calls**: Cached to minimize requests to PoetryDB

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ❌ Internet Explorer (not supported)

Requires modern browser with WebGL support for TensorFlow.js.

## Local Development

Simply open `index.html` in a web browser. No build process or dependencies required!

For live reload during development:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

## Custom Domain (Optional)

Both Netlify and Vercel support custom domains on the free tier:

1. Go to your project settings
2. Add custom domain
3. Update your DNS records as instructed
4. Enable HTTPS (automatic on both platforms)

## License

This project uses:
- TensorFlow.js (Apache 2.0)
- PoetryDB API (public domain content)
- Google Fonts (Open Font License)

## Credits

- Poetry database: [PoetryDB](https://poetrydb.org/)
- AI model: [TensorFlow.js Universal Sentence Encoder](https://www.tensorflow.org/js)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ using AI-powered semantic search
