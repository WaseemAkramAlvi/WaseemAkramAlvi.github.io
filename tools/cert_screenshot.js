import { chromium } from 'playwright';

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();

try {
  // Vite may choose a different port if 5173 is busy. Try 5173 then 5174.
  const urlsToTry = ['http://localhost:5173', 'http://localhost:5174'];
  let connected = false;
  for (const url of urlsToTry) {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 5000 });
      console.log('Connected to', url);
      connected = true;
      break;
    } catch (err) {
      console.log('Could not connect to', url);
    }
  }
  if (!connected) throw new Error('Could not connect to dev server on tried ports.');
  await page.waitForSelector('.cert-item', { timeout: 10000 });
    // If loader is present, click the enter button to reveal content
    try {
      const enterBtn = await page.waitForSelector('.btn-enter', { timeout: 3000 });
      if (enterBtn) {
        await enterBtn.click();
        // give some time for loader exit animations
        await page.waitForTimeout(800);
      }
    } catch (e) {
      // no loader found; continue
    }
  
    await page.waitForSelector('.cert-item', { timeout: 10000 });

  const items = page.locator('.cert-item');
  const count = await items.count();
  let clicked = false;

  for (let i = 0; i < count; i++) {
    const txt = (await items.nth(i).innerText()).trim().toLowerCase();
    if (txt.includes('microsoft')) {
      await items.nth(i).click();
      clicked = true;
      break;
    }
  }

  if (!clicked && count > 0) {
    await items.nth(0).click();
  }

  await page.waitForSelector('.cert-modal', { state: 'visible', timeout: 5000 });
  const modal = page.locator('.cert-modal');
  await modal.screenshot({ path: 'cert-modal.png' });
  console.log('Screenshot saved to cert-modal.png');
} catch (err) {
  console.error('Error capturing modal:', err);
  process.exitCode = 2;
} finally {
  await browser.close();
}
