# React Web Worker Demo

A simple React application created using Vite, demonstrating the use of Web Workers for background calculations. Web Workers allow you to perform time-consuming computations without blocking the main thread, ensuring a smooth user experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Web Worker](#web-worker)
- [License](#license)

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone this repository:

   ```shell
   git clone https://github.com/abhimax/web-worker-demo.git

   ```

2. install dependancies:
   ```shell
   npm install
   ```
3. up the project

   ```shell
   npm run dev
   ```

## Usage

This React application serves as a demonstration of how to utilize Web Workers for background calculations. It provides a simple user interface where you can trigger time-consuming calculations without freezing the main thread. The Web Worker will handle these calculations independently, ensuring a smooth user experience.

## Project Structure

The project structure is organized as follows:

- src/ - Contains the source code for the React application.
- components/ - React components used in the application.
- workers/ - Web Worker scripts reside in this directory.
- public/ - Static assets and the HTML template.
- package.json - Defines project dependencies and scripts.
- vite.config.js - Configuration file for the Vite build tool.

## Web Worker

Web Workers are a fundamental part of this project. They are located in the src/workers/ directory. The use of Web Workers allows you to offload computationally intensive tasks to a separate thread, preventing the main thread from becoming unresponsive. This results in a more responsive user interface.

The Web Worker in this project is responsible for performing background calculations when triggered by the user interface. The main application communicates with the worker using the Worker API, passing data to the worker and receiving results asynchronously.

## License

This project is licensed under the MIT License
