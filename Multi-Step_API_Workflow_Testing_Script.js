import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const baseUrl = 'https://test-api.k6.io'; // Change this to your base URL
const vus = 5; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    // Step 1: Create a resource
    let createPayload = JSON.stringify({ name: 'K6 Resource', description: 'Created by K6' });
    let createResponse = http.post(`${baseUrl}/resources/`, createPayload, {
        headers: { 'Content-Type': 'application/json' },
    });
    check(createResponse, {
        'Create status is 201': (r) => r.status === 201,
    });

    // Step 2: Update the resource
    if (createResponse.status === 201) {
        let resourceId = createResponse.json('id');
        let updatePayload = JSON.stringify({ description: 'Updated by K6' });
        let updateResponse = http.put(`${baseUrl}/resources/${resourceId}/`, updatePayload, {
            headers: { 'Content-Type': 'application/json' },
        });
        check(updateResponse, {
            'Update status is 200': (r) => r.status === 200,
        });
    }

    // Step 3: Delete the resource
    if (createResponse.status === 201) {
        let resourceId = createResponse.json('id');
        let deleteResponse = http.del(`${baseUrl}/resources/${resourceId}/`);
        check(deleteResponse, {
            'Delete status is 204': (r) => r.status === 204,
        });
    }

    sleep(1); // Simulate user think time
}
