import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

// Load test data from a JSON file
const testData = new SharedArray('test data', function () {
    return JSON.parse(open('./data.json')); // Replace with your JSON file path
});

// Configurable variables
const baseUrl = 'https://test-api.k6.io'; // Change this to your base URL
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    // Use dynamic data from the JSON file
    let item = testData[__VU - 1]; // Get data for the current virtual user
    let response = http.get(`${baseUrl}/public/crocodiles/${item.id}/`);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
