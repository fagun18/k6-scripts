import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/public/crocodiles/'; // Change this to your target URL
const vus = 50; // Number of virtual users
const duration = '5m'; // Test duration

export const options = {
    scenarios: {
        europe_load: {
            executor: 'shared-iterations',
            vus: vus,
            iterations: 1000,
            maxDuration: duration,
            exec: 'europeTest',
        },
        us_load: {
            executor: 'shared-iterations',
            vus: vus,
            iterations: 1000,
            maxDuration: duration,
            exec: 'usTest',
        },
    },
};

export function europeTest() {
    let response = http.get(targetUrl);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}

export function usTest() {
    let response = http.get(targetUrl);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
