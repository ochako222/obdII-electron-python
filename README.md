# Electron-Python Integration Project

## Overview
This project is an Electron application that integrates Python scripts, allowing you to run Python functions from a desktop app built with Electron. The application includes buttons that trigger Python scripts and display the output within the app.

## Technologies Used
- **Electron**: For building cross-platform desktop applications using web technologies.
- **TypeScript**: Provides static typing for JavaScript.
- **Node.js**: For executing JavaScript outside the browser and handling Electron processes.
- **Python**: Executes scripts and provides output to the Electron app.

## Project Structure

    project-root
        ├── src
            ├── main.ts
            ├── renderer.ts 
            ├── index.html
        ├── script.py
        ├── dist
            ├── main.js
            ├── renderer.js
        ├── tsconfig.json
        ├── package.json

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project-root

2.  **Install dependencies**:
    ```bash 
    npm install
    ```

3. **Compile TypeScript:**
    ```bash
    npx tsc
    ```

## Running the Application

1. **Start the Electron app:**
    ```bash
    npx electron dist/main.js
    ```
This command launches the Electron application, where you can interact with the buttons to execute Python scripts.

# Python Script

The Python script (script.py) contains simple functions that are executed based on button clicks in the Electron app. The output of the script is sent back to the Electron renderer process and displayed in the UI.

