import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const vus = 100; // Number of virtual users
const duration = '5m'; // Test duration

export const options = {
    scenarios: {
        distributed_load: {
            executor: 'shared-iterations',
            vus: vus,
            iterations: 1000,
            maxDuration: duration,
        },
    },
};

export default function () {
    let response = http.get(targetUrl);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
