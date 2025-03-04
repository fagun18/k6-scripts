import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = __ENV.TARGET_URL || 'https://test-api.k6.io/public/crocodiles/'; // Use environment variable or default
const vus = __ENV.VUS || 10; // Use environment variable or default
const duration = __ENV.DURATION || '1m'; // Use environment variable or default

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let response = http.get(targetUrl);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
