import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const baseUrl = 'https://test-api.k6.io'; // Change this to your base URL
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    // Step 1: Fetch list of items
    let response1 = http.get(`${baseUrl}/public/crocodiles/`);
    check(response1, {
        'Fetch list status is 200': (r) => r.status === 200,
    });

    // Step 2: Fetch details of the first item
    if (response1.status === 200) {
        let firstItemId = response1.json()[0].id;
        let response2 = http.get(`${baseUrl}/public/crocodiles/${firstItemId}/`);
        check(response2, {
            'Fetch details status is 200': (r) => r.status === 200,
        });
    }

    sleep(1); // Simulate user think time
}
