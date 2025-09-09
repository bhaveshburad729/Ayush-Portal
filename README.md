<p align="center">
  <img src="https://github.com/psankhe28/pre-sih/assets/84843461/a1fb57e6-91cc-4d2e-ac52-837ae1de9487" alt="Ayush" width="200">
</p>
<p align="center">
  <b>Ayush Portal - A Platform for Startups</b>
</p>
<p align="center">
  <b>Team Code_Slayers</b>
</p>
<hr>

<details>
<summary>Table of Contents</summary>

- [About the Project](#about)
- [Main Features](#features)
- [How It Works](#how-it-works)
- [How to Run This Project](#how-to-run-this-project)
- [Technology Used](#technology)
- [Important Links](#important-links)
- [Our Team](#team)

</details>

## 📱 About

Ayush Portal helps connect startups, mentors, and investors in India. We want to make it easier for people to start and grow their businesses by providing all the tools they need in one place.

## ⭐ Main Features

- **Safe User Verification:** We check important documents like GST, PAN, and patents to make sure all users are genuine

- **Smart Mentor Matching:** Our system helps startups find the right mentors based on their needs

- **Easy Communication:** Users can talk through video calls and chat rooms without any technical problems

- **Professional Presentations:** Startups can create good-looking pitch presentations to show investors

- **Language Support:** Available in all Indian languages so everyone can use it

- **Easy to Use:** Works well for people with disabilities and follows all accessibility rules

- **Complete Dashboard:** See all your important information, updates, and profiles in one place

- **Visual Information:** See startup data and government programs through easy-to-understand maps and charts

- **Investor Tools:** Investors can track their investments and find new startups to support

- **Mentor Ratings:** We use smart technology to rate mentors based on user feedback

- **Find Incubators:** Easily find startup support centers near you

- **Investment Updates:** Get weekly news about latest startup investments

## 🔄 How It Works
![How Ayush Portal Works](https://github.com/psankhe28/pre-sih/assets/82211574/27fd3808-e118-4462-98a3-5b233dc79c2d)

## 🚀 How to Run This Project

### Prerequisites
- Node.js installed on your computer
- MongoDB installed locally or MongoDB Atlas account
- Git installed on your computer

### Step 1: Clone the Project
```bash
git clone https://github.com/bhaveshburad729/Ayush-Portal.git
cd Ayush-Portal
```

### Step 2: Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the backend folder and add:
```
OPENAI_API_KEY= "Your Open API Key"
PORT=5000
JWT_SECRET=Your JWT secret key
JWT_EXPIRE=7d
```

### Step 3: setup Server
```bash
cd Server
npm install
```

Create a `.env` file in the backend folder and add:
```
MONGODB_URI="Your MongoDB cluster URL"
```
In config at dbconnect.js set 
```
connectionString = "Your mongoDB Cluster"
```
```
npm start
```

### Step 4: Setup Frontend
```bash
cd ../client
npm install
npm install --legacy-peer-deps

```
Create a `.env` file in the client folder and add:
```
PUBLIC_URL=http://localhost:3000
REACT_APP_BACKEND_URL=http://localhost:5000
```
```
npm start
```

### Common Issues and Solutions:
- If you see "port already in use" error, try changing the port in .env file
- Make sure MongoDB is running before starting the backend
- If packages are missing, run `npm install` again

## 🔗 Important Links

- [Project Code](https://github.com/bhaveshburad729/Ayush-Portal)

## 💻 Technology

**Frontend:**
- React.js
- Node.js
- Socket IO
- CSS
- Chakra UI

**Database:**
- MongoDB

**APIs:**
- Finnhub API

**Machine Learning:**
- Natural Language Processing (NLP)

## 👥 Our Team

Team Code_Slayers:
- [Bhavesh Burad](https://github.com/bhaveshburad729)
- [Lokesh Patil](https://github.com/lokesh-patil57)
