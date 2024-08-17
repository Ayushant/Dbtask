# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# React Dashboard Project

## Description

Welcome to the **React Dashboard Project**, where data meets design in a seamless and interactive experience. This React application showcases an elegant and dynamic dashboard that leverages `react-google-charts` for sophisticated data visualization and `react-bootstrap` for a responsive, modern interface. With an intuitive design, users can effortlessly add or remove charts to tailor their dashboard to their needs.

## Features

- **Interactive Chart Visualization**: Immerse yourself in visually compelling pie charts that provide insightful data representation using `react-google-charts`.
- **Dynamic Widget Management**: Effortlessly customize your dashboard with the ability to add or remove charts on-the-fly through a sleek user interface.
- **Responsive Design**: Enjoy a polished, mobile-friendly experience courtesy of `react-bootstrap`, ensuring your dashboard looks great on any device.

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Development Server**

    ```bash
    npm start
    ```

    Your application will be up and running at `http://localhost:3000`, ready to bring your data to life.

## Components

### `App.js`

The entry point of the application, orchestrating the display of the `Dashboard` and `ChartPage` components.

### `Dashboard.js`

The heart of your dashboard experience, featuring dynamic widget management that allows users to add or view various charts.

### `ChartPage.js`

A sophisticated view for detailed charts, where users can easily add or remove visual data representations with a click.

## Data Management

### Using JSON

The application relies on a JSON file to manage and provide data for the dashboard. This file is essential for defining categories and widget content. 

- **Location**: `public/data.json`
- **Structure**:
  ```json
  {
    "categories": {
      "Category1": [
        { "id": "widget1", "name": "Widget 1" },
        { "id": "widget2", "name": "Widget 2" }
      ],
      "Category2": [
        { "id": "widget3", "name": "Widget 3" }
      ]
    }
  }

