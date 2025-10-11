# 🚀 Node.js Demo App – CI/CD with GitHub Actions & Docker

```
How do you deploy an application using GitHub Actions?

GitHub Actions makes deploying your application smooth and automated as part of you CI/CD pipeline.
Here’s how it works step-by-step:
```


This is a sample Node.js web application that demonstrates how to:

✅ Build a web app using Node.js & Express

✅ Containerize it with Docker

✅ Automate deployment with a CI/CD pipeline (GitHub Actions)

✅ Push Docker images to Docker Hub

## 📌 Project Structure
nodejs-demo-app/
│── app.js              # Main Node.js application

│── package.json        # Node.js dependencies & scripts

│── Dockerfile          # Docker instructions to build image

│── .github/workflows/  # GitHub Actions CI/CD pipeline
│    └── main.yml

│── README.md           # Project documentation

🌍 Features of the App

Simple homepage with styled HTML

API endpoint /api/status → Returns app status in JSON

API endpoint /greet?name=YourName → Returns personalized greeting

Counter API /api/increment → Increases counter each time you call it

Logs requests with timestamps

## 🐳 Docker Support

The app can run inside a Docker container.

Build the image locally:
docker build -t nodejs-demo-app:local .

Run the container:
docker run -d -p 3000:3000 nodejs-demo-app:local


Then open in browser → http://localhost:3000

## ⚙️ CI/CD Pipeline with GitHub Actions

The pipeline is defined in .github/workflows/main.yml.

What happens when you push code to main branch:

Checkout code

Install dependencies (npm install)

Run tests (if available)

Build Docker image

Push image to Docker Hub automatically 🎉

No manual steps needed → Everything runs automatically!

## 🔑 Secrets Configuration

We use GitHub Secrets to store sensitive information:

DOCKERHUB_USERNAME → Your Docker Hub username

DOCKERHUB_TOKEN → Docker Hub access token

These are used in the workflow for secure login to Docker Hub.

## 🚀 How Others Can Test

Clone this repo:

git clone https://github.com/YourGitHubUser/nodejs-demo-app.git
cd nodejs-demo-app


Run app locally:

npm install
npm start


App runs at: http://localhost:3000

Or run from Docker (pulled from Docker Hub):

docker run -d -p 3000:3000 <your-dockerhub-username>/nodejs-demo-app:latest


Final Result?
A fully automated pipeline that:
Detects changes
Runs tests
Deploys safely and reliably
All from your GitHub repo


```
⚙️ ⚙️  Quick Recap/What we learned

Jenkins/GitHub Actions pipeline = Automation script
→ defines “what steps to run and in what order”

Dockerfile = Blueprint for the container image
→ defines “what your container should contain and how it should run”

They work together, but serve different purposes 💡

⚙️ Detailed Explanation:
🧱 1️⃣ What the pipeline does:

In your YAML (or Jenkinsfile):

Checkout code from GitHub

Install dependencies

Run tests

Build Docker image (using Dockerfile)

Push image to Docker Hub

So, the pipeline tells when and how to build.

🧩 2️⃣ What the Dockerfile does:

The Dockerfile tells what goes inside the image.
```
