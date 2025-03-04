import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
    thresholds: {
        http_req_failed: ['rate<0.1'], // Less than 10% of requests should fail
        http_req_duration: ['p(95)<500'], // 95th percentile response time should be < 500ms
    },
};

export default function () {
    let response = http.get(targetUrl);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
