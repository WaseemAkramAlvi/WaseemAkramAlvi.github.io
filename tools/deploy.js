#!/usr/bin/env node

/**
 * Deploy script for GitHub Pages
 * Usage: node tools/deploy.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');

try {
  console.log('🏗️  Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  if (!fs.existsSync(distDir)) {
    throw new Error('Build failed: dist directory not found');
  }

  console.log('✅ Build successful!');
  console.log(`📁 Dist directory: ${distDir}`);
  console.log('');
  console.log('To deploy to GitHub Pages:');
  console.log('  1. Push to main branch: git push origin main');
  console.log('  2. GitHub Actions will automatically deploy to gh-pages');
  console.log('');
  console.log('Or deploy manually with:');
  console.log(`  gh-pages -d dist`);
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
