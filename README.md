# Track your spending habits

## Intro

You can use this app to track your spending habits. I have supplied some mock data\
in the PurchaseContex.js file. You can add more purchases to the table.\
The pop-up form does not use any form validation, so in order for this app\
to work properly, make sure you input your cost as just a numerical value.

## Running the Project

To run project, clone repository and run `npm install` in the root directory\
to install the package dependencies. Then, run `npm start` to start the server\
and interact with the app. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
This will run the app in the development mode. The page will reload if you make edits.

## About

This project displays my learning of React and implements the Hooks feature to update\
and pass state while keeping the Components written as functions. It also shows the use\
of Contexts. Bootstrap and React-Bootstrap are used along with media queries to get\
a responive layout.

## Features List

- I retrieve data from a quote generator API and display it with the use of Axios
- I create an array of purchases objects and display 
- You can add a new purchase with the Add button. 
- The added purchase will get added to your local storage (clear it when you are done)
- The total is displayed at the bottom with use of the reduce method
- The cost user input from the form is input as a string and I convert it to\
a floating value to store in an array that gets used to calculate the total
- You can filter by category with the dropdown 
- Filtering by category will also filter the total and will filter the table also
- This project was created with React, and uses Context and Hooks 
