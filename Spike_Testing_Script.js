import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const stages = [
    { duration: '10s', target: 100 }, // Sudden spike to 100 users
    { duration: '1m', target: 100 }, // Stay at 100 users
    { duration: '10s', target: 0 }, // Sudden drop to 0 users
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
