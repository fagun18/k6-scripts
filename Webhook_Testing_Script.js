import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/webhook'; // Change this to your webhook endpoint
const payload = JSON.stringify({
    event: 'payment_received',
    amount: 100,
    currency: 'USD',
});
const vus = 5; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let headers = { 'Content-Type': 'application/json' };
    let response = http.post(targetUrl, payload, { headers: headers });
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
