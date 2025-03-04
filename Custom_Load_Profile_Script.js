import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const stages = [
    { duration: '30s', target: 10 }, // Ramp-up to 10 users
    { duration: '1m', target: 50 }, // Ramp-up to 50 users
    { duration: '30s', target: 10 }, // Ramp-down to 10 users
    { duration: '1m', target: 0 }, // Ramp-down to 0 users
];

export const options = {
    stages: stages,
};

export default function () {
    let response = http.get(targetUrl);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
