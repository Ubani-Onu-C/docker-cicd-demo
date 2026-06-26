# 🚀 Dockerised Node.js App with CI/CD Pipeline

![CI/CD Pipeline](https://github.com/Ubani-Onu-C/docker-cicd-demo/actions/workflows/deploy.yml/badge.svg)

## 📌 Project Overview
A production-style Node.js web application containerised with Docker and deployed 
through a fully automated CI/CD pipeline using GitHub Actions.

## 🛠️ Technologies Used
- **Node.js** — Backend runtime
- **Docker** — Containerisation
- **GitHub Actions** — CI/CD automation
- **Linux/Alpine** — Container OS

## ⚙️ Pipeline Stages
1. **Build & Test** — Installs dependencies and runs tests automatically on every push
2. **Docker Build** — Builds the Docker image and verifies the container runs correctly

## 🐳 Run Locally with Docker
```bash
# Clone the repo
git clone https://github.com/Ubani-Onu-C/docker-cicd-demo.git
cd docker-cicd-demo

# Build the Docker image
docker build -t docker-cicd-demo .

# Run the container
docker run -p 3000:3000 docker-cicd-demo

# Visit in your browser
open http://localhost:3000
```

## 👨‍💻 About the Author
**Ubani Onu Chukwu** — Senior Telecom & DevOps Engineer with 15+ years managing 
large-scale network infrastructure for MTN and Airtel Nigeria. Now applying that 
infrastructure expertise to modern DevOps practices.

🔗 [LinkedIn](https://www.linkedin.com/in/onuchukwu-ubani-10004741/)
