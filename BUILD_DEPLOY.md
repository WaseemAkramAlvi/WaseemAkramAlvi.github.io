# Build & Deploy Guide

## Local Development

Start the dev server:
```bash
npm run dev
```

## Building

Build for production:
```bash
npm run build
```

Output will be in the `dist/` directory.

## Deployment

### Automatic (via GitHub Actions)
Simply push to the `main` branch - GitHub Actions will automatically:
1. Install dependencies
2. Run linter
3. Build the project
4. Deploy to `gh-pages` branch

### Manual Deployment

```bash
npm run deploy
```

Or use `gh-pages` CLI directly:
```bash
npx gh-pages -d dist
```

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality |
| `npm run deploy` | Build and prepare for deployment |

## GitHub Pages Configuration

- **Repository**: WaseemAkramAlvi.github.io
- **Deployment Branch**: gh-pages
- **Custom Domain**: waseemakram.me (via CNAME)
- **Source**: Builds from `main` branch → publishes to `gh-pages`

## Workflow

1. Make changes on `main` branch
2. Push to GitHub
3. GitHub Actions automatically builds and deploys
4. Site updates at https://waseemakram.me (or https://WaseemAkramAlvi.github.io)
