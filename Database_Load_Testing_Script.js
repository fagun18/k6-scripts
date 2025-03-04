import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/db-query'; // Change this to your database API endpoint
const query = 'SELECT * FROM users WHERE id = 1'; // Replace with your SQL query
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let payload = JSON.stringify({ query: query });
    let headers = { 'Content-Type': 'application/json' };
    let response = http.post(targetUrl, payload, { headers: headers });
    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Data returned': (r) => r.json('data').length > 0,
    });
    sleep(1); // Simulate user think time
}
