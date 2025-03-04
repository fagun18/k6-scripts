import ws from 'k6/ws';
import { check, sleep } from 'k6';

// Configurable variables
const targetUrl = 'ws://echo.websocket.org'; // Change this to your WebSocket URL
const vus = 10; // Number of virtual users
const duration = '1m'; // Test duration

export const options = {
    vus: vus,
    duration: duration,
};

export default function () {
    let response = ws.connect(targetUrl, null, function (socket) {
        socket.on('open', () => {
            socket.send('Hello from K6');
        });

        socket.on('message', (message) => {
            check(message, {
                'Received correct message': (m) => m === 'Hello from K6',
            });
            socket.close();
        });
    });

    check(response, {
        'WebSocket connection successful': (r) => r && r.status === 101,
    });
    sleep(1); // Simulate user think time
}
