Playwright Script for Hacker News Articles
In this task, I created a script using Playwright to validate that the first 100 articles on the Hacker News Newest page are sorted from newest to oldest.

What the Script Does:

Launches a Chromium browser using Playwright.
Navigates to the Hacker News "newest" page.
Extracts the timestamps of the first 100 articles.
Checks if there are exactly 100 articles.
Verifies that the articles are sorted in descending order by time.

How to Run the Script:

1. Install the dependencies using command below:
npm install

2. Run the script using command below:
node index.js


Tools Used:

JavaScript
Playwright (for browser automation)


