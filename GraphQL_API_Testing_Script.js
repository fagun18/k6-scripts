import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'https://test-api.k6.io/graphql'; // Change this to your GraphQL endpoint
const query = `
    query {
        crocodiles {
            id
            name
            sex
        }
    }
`;
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let headers = { 'Content-Type': 'application/json' };
    let response = http.post(targetUrl, JSON.stringify({ query: query }), { headers: headers });
    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Data returned': (r) => r.json('data.crocodiles').length > 0,
    });
    sleep(1); // Simulate user think time
}
