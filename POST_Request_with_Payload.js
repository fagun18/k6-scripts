import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const payload = JSON.stringify({
    name: 'K6 Croc',
    sex: 'M',
    date_of_birth: '2023-01-01',
});
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let headers = { 'Content-Type': 'application/json' };
    let response = http.post(targetUrl, payload, { headers: headers });
    check(response, {
        'Status is 201': (r) => r.status === 201,
    });
    sleep(1); // Simulate user think time
}
