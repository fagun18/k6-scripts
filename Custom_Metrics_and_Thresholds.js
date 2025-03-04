import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Define custom metrics
const responseTime = new Trend('response_time');
const successRate = new Rate('success_rate');

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
    thresholds: {
        response_time: ['p(95)<500'], // 95th percentile response time should be < 500ms
        success_rate: ['rate>0.95'], // Success rate should be > 95%
    },
};

export default function () {
    let response = http.get(targetUrl);
    responseTime.add(response.timings.duration);
    successRate.add(response.status === 200);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
