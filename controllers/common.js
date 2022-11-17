const puppeteer = require('puppeteer');
const fs = require('fs');

exports.convertHtmlToBytes = function (req, res, next) {
    const htmlstring = req.body.htmlString;
    (async () => {

        // Create a browser instance
        const browser = await puppeteer.launch({
        args: ['--no-sandbox']
        });
      
        // Create a new page
        const page = await browser.newPage();
      
        //Get HTML content from HTML file
        //const html = fs.readFileSync('sample.html', 'utf-8');
        await page.setContent(htmlstring, { waitUntil: 'domcontentloaded' });
      
        // To reflect CSS used for screens instead of print
        await page.emulateMediaType('screen');
      
        // Downlaod the PDF
        const buffer = await page.pdf({    
          // path:"result.pdf",
          margin: { top: '50px', right: '50px', bottom: '50px', left: '50px' },
          printBackground: true,
          format: 'A4',
        });
      
        // Close the browser instance
        await browser.close();
        return res.status(200).json({
            status: 1,
            message: "success.",
            data:buffer
          });
      })();
    
  };
