$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting manual deployment..."

# Resolve project and dist paths safely
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$distPath = (Join-Path $projectRoot "dist")

Write-Host "📁 Project root: $projectRoot"
Write-Host "📁 Dist path: $distPath"

# Build first to be sure
Write-Host "📦 Building project..."
Push-Location $projectRoot
npm run build
Pop-Location

if (-not (Test-Path $distPath)) {
    throw "Build failed: dist directory not found at $distPath"
}

# Deploy from dist without touching root repo
Write-Host "🔧 Initializing git in dist..."
Push-Location $distPath
if (Test-Path (Join-Path $distPath ".git")) {
    Remove-Item (Join-Path $distPath ".git") -Recurse -Force
}
git init
git add .
git commit -m "Deploy: $(Get-Date)"

# Rename branch to gh-pages
git branch -M gh-pages

# Add remote
Write-Host "🔗 Adding remote..."
git remote add origin https://github.com/WaseemAkramAlvi/WaseemAkramAlvi.github.io.git

# Push
Write-Host "📤 Pushing to gh-pages..."
git push -f origin gh-pages
Pop-Location

Write-Host "✅ Deployment complete!"
