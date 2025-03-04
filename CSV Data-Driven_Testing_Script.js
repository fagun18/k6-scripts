import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

// Load CSV data
const csvData = new SharedArray('csv data', function () {
    return papaparse.parse(open('./data.csv'), { header: true }).data; // Replace with your CSV file path
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
    // Use dynamic data from the CSV file
    let row = csvData[__VU - 1]; // Get data for the current virtual user
    let response = http.get(`${baseUrl}/public/crocodiles/${row.id}/`);
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
