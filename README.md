# SaaS Tool README
## Deployment Link : https://jcourier.onrender.com
## Overview
This project is a Software as a Service (SaaS) tool built to automate email sending based on provided name and email address. The tool is developed using React for the front-end and Express.js for the back-end. It utilizes Brevo for SMTP email sending functionality.

## Features
Email Automation: Upon providing a name and email address, the tool sends an automated email to the specified email address.  
React Front-end: The user interface is developed using React, providing a smooth and responsive experience.  
Express.js Back-end: Express.js is used to handle server-side logic, including email sending functionality.  
Brevo SMTP Integration: Brevo is integrated for SMTP services, ensuring reliable email delivery.  
# Installation
Clone the repository to your local machine.  
git clone https://github.com/Jayant061/JCourier  
Navigate to the project directory.  
Install dependencies for both the front-end and back-end.  
## Install front-end dependencies  
cd client  
npm install  

## Install back-end dependencies
cd ..  
cd server  
npm install  
# Configuration
Before running the application, ensure that you have configured the necessary environment variables.  
In client directory create a file named credentialls.js  
export const baseURL=your-server-url  

## Brevo Configuration: 
Obtain your Brevo SMTP credentials (SMTP server, port, username, password) and set them as environment variables. These variables should be set in the .env file located in the server directory.  

Example .env file:  

APIKEY=your-api-key  
SMTPKEY=your-smtp-key  
USER=your-email-id  
FROM=your-id-to-be-displayed-in-email  
# Usage
Start the back-end server.  
cd server  
npm start for production runtime  
npm run devStart for development runtime  
Start the front-end development server.  
cd ../client  
npm start  
Access the application in your web browser at http://localhost:3000.  
# Deployment
For deployment, follow the standard deployment procedures for React and Express.js applications. Ensure that you have configured your environment variables appropriately for the production environment.  

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.  

# License
This project is licensed under the ISC License.  

# Acknowledgements
Brevo: Thanks to Brevo for providing SMTP services for this project.  
React: The front-end of this project is developed using React.  
Express.js: The back-end server is built with Express.js.  
# Contact
For any inquiries or support, feel free to contact the project maintainers at jayantthakur108@gmail.com.
