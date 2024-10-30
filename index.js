// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");

  //Extract the timestamps for the first 100 articles
  const timestamps = await page.$$eval(".age", (nodes) =>
    nodes.map((node) => node.innerText)
  );


  console.log(`Found ${timestamps.length} timestamps.`);

  // Check if there are exactly 100 articles
  if (timestamps.length !== 100) {
    console.error(
      `Error: Expected 100 articles but found ${timestamps.length}.`
    );
    await browser.close();
    process.exit(1);  // Exit with failure status
   }

   console.log("100 articles found. Validating order...");

   // validate that timestamps are in descending order (newest to oldest)
   const sortedDescending = timestamps.every((time, index, arr) => {
    if (index === 0) return true; // Skip the first element
    // Compare the current timestamp with the previous one
    return time <= arr[index - 1];
    });


    if (sortedDescending) {
      console.log("Success: Articles are sorted from newest to oldest.");
    } else {
      console.error("Error: Articles are not sorted correctly.");
    }


    // Close the browser
    await browser.close();
   }

   (async () => {
     await sortHackerNewsArticles();
   })();
