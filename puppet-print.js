const puppeteer = require('puppeteer')
 
async function printPDF() {
  // https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  // would need to authenticate user, then goto another page?
  await page.goto('https://blog.echobind.com/love-em-or-lose-em-employee-relationships-101-45bd069c5d', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });
 
  await browser.close();
  return pdf
}

module.exports = printPDF