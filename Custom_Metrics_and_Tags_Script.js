import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Counter } from 'k6/metrics';

// Define custom metrics
const responseTime = new Trend('response_time');
const errorCount = new Counter('error_count');

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
    responseTime.add(response.timings.duration);
    if (response.status !== 200) {
        errorCount.add(1);
    }
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
