import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/private/crocodiles/'; // Change this to your target URL
const authToken = 'your-auth-token-here'; // Replace with your authentication token
const vus = 5; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let headers = {
        'Authorization': `Bearer ${authToken}`,
    };
    let response = http.get(targetUrl, { headers: headers });
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
