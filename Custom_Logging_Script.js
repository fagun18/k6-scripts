import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let response = http.get(targetUrl);
    if (response.status === 200) {
        console.log(`Request to ${targetUrl} succeeded`);
    } else {
        console.error(`Request to ${targetUrl} failed with status ${response.status}`);
    }
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
