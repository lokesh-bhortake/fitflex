# FitFlex Gym Website

Welcome to the [FitFlex Gym Website](https://fitflexgym.netlify.app/) README!
FitFlex Gym Website is a frontend project built with React, MaterialUI, RapidAPI, and the Stripe Payment Gateway. This project allows users to browse exercise selections, search for exercise videos, and make seamless payments for gym memberships using the Stripe Payment Gateway.

[![FitFlex Gym Website](screenshot.png)](https://fitflexgym.netlify.app/)

## Table of Contents

- [Features](#features)
- [APIs Used](#apis-used)
- [Installation](#installation)
- [Setting Up Stripe Payments](#setting-up-stripe-payments)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Browse a selection of exercises from ExerciseDB API.
- Search for exercise videos using YouTube Search and Download API.
- Seamlessly make payments using the Stripe Payment Gateway.

## APIs Used

FitFlex Gym Website leverages the power of two external APIs to provide a comprehensive experience to users:

- **ExerciseDB API** by Justin (RapidAPI Link: [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)): This API offers a selection of exercises that users can browse through on the website. It provides valuable information about various exercises that can be performed at the gym.

- **YouTube Search and Download API** by h0p3rwe (RapidAPI Link: [YouTube Search and Download API](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)): This API is integrated to help users find exercise videos on YouTube. Users can view specific exercise tutorials to follow along during their workouts.

## Installation

To get started with FitFlex Gym Website on your local machine, follow these steps:

1. **Clone the repository from GitHub:**

   ```bash
   git clone https://github.com/your-username/fitflex-gym-website.git
   cd fitflex-gym-website
   ```

2. **Install project dependencies using npm:**

   ```bash
   npm install
   ```

3. **Obtain API Keys:**
   - Sign up on [RapidAPI](https://rapidapi.com/) and subscribe to the ExerciseDB and YouTube Search and Download APIs.
   - Create a `.env` file in the project root directory and add your RapidAPI key as follows:
     ```env
     VITE_RAPID_API_KEY=your-rapidapi-key
     ```

## Setting Up Stripe Payments

To accept payments through the FitFlex Gym Website, you need to set up your Stripe account and obtain the necessary links for each plan. Follow the steps below:

1. **Create a Stripe Account:**
   If you don't have a Stripe account, you can sign up at [Stripe](https://stripe.com/) to create one.

2. **Obtain Plan Links:**
   In the utils/index.jsx file, locate the plans array containing plan details. Replace the link property with actual payment links from your Stripe account.

3. **Test Payments:**
   Use Stripe's test mode for verification before going live. Update links for test/live modes and ensure plans/pricing match those in your Stripe account.

## Contributing

I welcome contributions to the FitFlex Gym Website project! To contribute, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix.
3. Make your changes, commit them, and push to your fork.
4. Submit a pull request detailing your changes.

## Contact

For any questions, concerns, or collaboration inquiries, feel free to reach out to me:

- Email: lb5102001@gmail.com
- LinkedIn: [Lokesh Bhortake](https://www.linkedin.com/in/lokesh-bhortake/)

I appreciate your interest in FitFlex Gym Website! Your feedback and contributions are valuable to me.
