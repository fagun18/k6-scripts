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
    if (!check(response, {
        'Status is 200': (r) => r.status === 200,
    })) {
        console.error(`Request failed with status ${response.status}`);
    }
    sleep(1); // Simulate user think time
}
