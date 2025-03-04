# **K6 Scripts Repository** 🚀

![K6 in Action](https://raw.githubusercontent.com/grafana/k6-action/master/k6.gif)

Welcome to the **K6 Scripts Repository**! This repository contains a collection of **open-source, customizable, and advanced K6 scripts** for performance testing. Whether you're testing APIs, websites, databases, or WebSocket connections, these scripts are designed to help you simulate real-world load and identify performance bottlenecks.

---

## **Table of Contents** 📚
1. [What is K6?](#what-is-k6-)
2. [Why Use K6?](#why-use-k6-)
3. [Why Use These Scripts?](#why-use-these-scripts-)
4. [Script Categories](#script-categories-)
5. [How to Use These Scripts](#how-to-use-these-scripts-)
6. [How to Install K6](#how-to-install-k6-)
   - [Windows](#installing-k6-on-windows)
   - [Mac](#installing-k6-on-mac)
   - [Kali Linux](#installing-k6-on-kali-linux)
7. [Contributing](#contributing-)
8. [License](#license-)
9. [More Details](#more-details-)
10. [About the Author](#about-the-author-)

---

## **What is K6?** 🤔

[K6](https://k6.io/) is an open-source, developer-centric performance testing tool built for testing the performance of APIs, microservices, and websites. It is written in Go and uses JavaScript for scripting, making it highly efficient and easy to integrate into modern development workflows.

---

## **Why Use K6?** 🚀

K6 stands out from other performance testing tools due to its **simplicity**, **scalability**, and **developer-friendly approach**. Below is a comparison table highlighting why K6 is a better choice:

| Feature                | K6                          | JMeter                     | Gatling                    | Locust                     |
|------------------------|-----------------------------|----------------------------|----------------------------|----------------------------|
| **Ease of Use**        | JavaScript-based scripting  | XML-based configuration    | Scala-based scripting      | Python-based scripting     |
| **Performance**        | High (built in Go)          | Moderate                   | High                       | Moderate                   |
| **Scalability**        | Excellent                  | Good                       | Good                       | Good                       |
| **CI/CD Integration**  | Seamless                   | Requires plugins           | Requires plugins           | Requires plugins           |
| **Real-Time Metrics**  | Yes                        | No                         | Yes                        | Yes                        |
| **Community Support**  | Strong                     | Strong                     | Moderate                   | Moderate                   |
| **Cost**               | Free (open-source)          | Free (open-source)         | Free (open-source)         | Free (open-source)         |

---

## **Why Use These Scripts?** 💡

- **Open Source**: All scripts are free to use and modify.
- **Customizable**: Easily change the target URL, virtual users (VUs), and duration.
- **Wide Range of Scenarios**: From API load testing to WebSocket and database testing.
- **Beginner-Friendly**: Clear instructions and examples for quick setup.
- **Advanced Features**: Includes custom metrics, thresholds, and integrations.

---

## **Script Categories** 🗂️

### **1. API Load Testing** 🌐
- Basic API load testing.
- Multi-step API workflows.
- OAuth2 authentication testing.

### **2. WebSocket Testing** 📡
- WebSocket connection testing.
- Latency measurement.

### **3. Database Testing** 🗄️
- Simulate database queries via API.
- Test database performance under load.

### **4. Webhook Testing** 🔗
- Simulate webhook payloads.
- Test webhook endpoint performance.

### **5. Browser Testing** 🌍
- Simulate user interactions with websites.
- Use the `k6 browser` module for end-to-end testing.

### **6. Advanced Scenarios** 🛠️
- Custom metrics and thresholds.
- Real-time monitoring with Grafana Cloud.
- Distributed load testing.

---

## **How to Use These Scripts** 🛠️

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/fagun18/k6-scripts.git
   ```

2. **Navigate to the Script Directory**:
   ```bash
   cd k6-scripts
   ```

3. **Modify the Script**:
   - Update the `targetUrl`, `VUs`, and `duration` in the script.
   - Add any additional configuration as needed.

4. **Run the Script**:
   ```bash
   k6 run script-name.js
   ```

---

## **How to Install K6** 📥

### **Installing K6 on Windows**

#### **Using Chocolatey (Package Manager)**:
1. Open PowerShell as Administrator.
2. Run the following command:
   ```bash
   choco install k6
   ```
3. Verify the installation:
   ```bash
   k6 version
   ```

#### **Manual Installation**:
1. Download the Windows installer from the [official K6 website](https://k6.io/docs/get-started/installation/).
2. Run the installer and follow the on-screen instructions.
3. Add K6 to your system PATH if necessary.

---

### **Installing K6 on Mac**

#### **Using Homebrew (Package Manager)**:
1. Open Terminal.
2. Run the following command:
   ```bash
   brew install k6
   ```
3. Verify the installation:
   ```bash
   k6 version
   ```

#### **Manual Installation**:
1. Download the macOS binary from the [official K6 website](https://k6.io/docs/get-started/installation/).
2. Move the binary to `/usr/local/bin`:
   ```bash
   mv k6 /usr/local/bin/
   ```
3. Verify the installation:
   ```bash
   k6 version
   ```

---

### **Installing K6 on Kali Linux**

#### **Using APT (Package Manager)**:
1. Open Terminal.
2. Add the K6 repository:
   ```bash
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
   echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
   sudo apt-get update
   ```
3. Install K6:
   ```bash
   sudo apt-get install k6
   ```
4. Verify the installation:
   ```bash
   k6 version
   ```

#### **Manual Installation**:
1. Download the Linux binary from the [official K6 website](https://k6.io/docs/get-started/installation/).
2. Make the binary executable:
   ```bash
   chmod +x k6
   ```
3. Move the binary to `/usr/local/bin`:
   ```bash
   sudo mv k6 /usr/local/bin/
   ```
4. Verify the installation:
   ```bash
   k6 version
   ```

---

## **Contributing** 🤝

We welcome contributions! If you have a script or improvement to share, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License** 📜

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **More Details** 🔍

For more details on performance testing, K6, and best practices, visit:  
👉 [fagun.sqatesting.com](https://fagun.sqatesting.com/#home)

---

## **About the Author** 👨‍💻

### **Mejbaur Bahar Fagun**  
**Software Engineer in Test (L2) | Testing Team Lead @ DEVxHUB**  
- Expert in Agile, Test Automation & Security  
- Bug Bounty Hunter  
- Security Analyst  

<img src="https://th.bing.com/th/id/OIP.y2Bf6p-2HUsmEPR3NlaNdQHaHa?rs=1&pid=ImgDetMain" alt="Mejbaur Bahar Fagun" width="150" height="150" />  

Connect with me:  
- **GitHub**: [github.com/fagun18](https://github.com/fagun18)  
- **LinkedIn**: [linkedin.com/in/mejbaur](https://www.linkedin.com/in/mejbaur/)  
- **Website**: [fagun.sqatesting.com](https://fagun.sqatesting.com/#home)  

---

## **Get Started Today!** 🎉

Explore the scripts, customize them for your needs, and start performance testing like a pro! If you find this repository helpful, don't forget to ⭐ **star** it and share it with your network.

Happy Testing! 🚀

---
