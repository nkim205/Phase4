**Table of Contents**
- [Installation Guide](#installation-guide)
- [Running The Application](#running-the-application)
- [Mini Git Guide](#mini-git-guide)
- [Useful Extentions](#useful-extentions)

# Installation Guide
1. Install node.js from https://nodejs.org/en/download
2. Open the folder where you want to store this repository
3. Clone the repo with `git clone https://github.com/nkim205/Phase4.git` then open the `Phase4` folder
5. CD into the `./frontend` folder with `cd frontend/` then install its dependencies with `npm install`. This should install the `./node_modules` folder.
6. CD out of `./frontend` then into the `./backend` folder first with `cd ..` then `cd backend/`. 
7. Then, install the backend dependencies first with `npm init -y` then with `npm install express mysql2 cors dotenv`, this should also create a `./node_modules` folder.

# Running The Application
To run the application, you need to have both the front and backend running. To do so, you will need to open a second terminal, the button for which can be found in the top right of your terminal window. Simply click the `+` button to open a second terminal, and navigate between the 2 by clicking on the window you want open.

In one of the terminals, make sure you are working from the `./frontend` folder. e.g. if your command line looks like `nkim0324@Nathans-MacBook-Air Phase4 %`, that means you are working out of the `Phase4` folder. If this is the case, CD into the `./frontend` folder with `cd frontend/`.

In your other terminal window, if make sure you are working out of the `./backend` folder by doing `cd backend/`.

To run the servers:
1. In the `./frontend` folder, run `npm run dev`
2. In the `./backend` folder, run `node server.js`

# Mini Git Guide
To get the most recent changes: `git pull`
To push changes:
1. `git add .`
2. `git commit -m "<Insert a useful message on what you worked on>"`
3. `git push`

***Make sure to pull changes before working to prevent merge conflicts and out of date files. Also make sure Phase4 is your root directory and you are not working out of the frontend or backend directories before pushing and pulling changes.***

# Useful Extentions
- **Auto Rename Tag**
  - Automatically rename paired HTML/XML tag
- **Visual Studio Code CSS Intellisense for HTML**
- **htmltagwrap**
  - Wraps your text selection in HTML tags
- **IntelliSense for CSS class names in HTML**
  - Adds auto completion for class attributes
- **Live Server**
  - Auto updates your frontend when you save changes rather than having to restart the server everytime
- **Prettier - Code formatter**
- **Simple React Snippets**
- **Tailwind CSS IntelliSense**
  - Adds auto completion for TailwindCSS className attributes