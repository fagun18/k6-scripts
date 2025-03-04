import { browser } from 'k6/experimental/browser';

// Configurable variables
const targetUrl = 'https://test-site.k6.io'; // Change this to your target URL
const vus = 5; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    scenarios: {
        browser: {
            executor: 'shared-iterations',
            vus: vus,
            iterations: 10,
            maxDuration: duration,
        },
    },
};

export default function () {
    const page = browser.newPage();
    page.goto(targetUrl);
    page.screenshot({ path: 'screenshot.png' });
    page.close();
}
