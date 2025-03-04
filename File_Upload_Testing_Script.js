import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

// Load file data
const fileData = new SharedArray('file data', function () {
    return open('./testfile.txt', 'b'); // Replace with your file path
});

// Configurable variables
const targetUrl = 'https://test-api.k6.io/upload'; // Change this to your target URL
const vus = 5; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let headers = { 'Content-Type': 'multipart/form-data' };
    let response = http.post(targetUrl, { file: http.file(fileData, 'testfile.txt') }, { headers: headers });
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
    sleep(1); // Simulate user think time
}
