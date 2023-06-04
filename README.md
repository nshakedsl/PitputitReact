# Pitputit

**Milestone 2 branch:**

Targil 3 (Milestone 2) is on branch Milestone2.

In this exercise, we transformed our static client code into a dynamic one by implementing a web server.
## Authors:
![Authors](/client/public/images/Authors.jpeg)
1. Shaked Solomon
2. Ofir Gurvits
3. Naama Matzliach

This reposetory, is a React App.
There are 3 pages:
1. SignUp page.
2. Login page.
3. Chats page.

This project is a React App for chatting between different users. We called the website Pitputit, which is similar to the Hebrew word for "to chat" or "to talk".



## Cloning and Running Instructions:


### 1. Create a database using MongoDB.
- using MongoDB Compass are provided below (you can use also Mongosh):
- Ensure that the MongoDB Compass application is installed.
- Open the downloaded application and note the following message via the default URI:
    ```
    "mongodb://localhost:27017"
    ```

- Click the connect button.



### 2. To clone the repository, follow these steps:

In the terminal, navigate to the directory where you want to clone the repository.

Enter the following command:
```
clone https://github.com/nshakedsl/Pitputit.git
```
Change your branch by writing :
```
git checkout -b milestone2
```


### 3. create env file: 
- create `.env.local` file 
- put the file into `server/config/` directory. 
- fill the file by writing the following data:
- `CONNECTION_STRING`- Login details 
- `PORT` - The port you want to run on  it.
- `SECRET_KEY` - A random string

#### For example:

```
CONNECTION_STRING="mongodb://localhost:27017/Pitputit"
PORT=8080
SECRET_KEY="_______"
```
### 4. To run the program:

- To run the project- enter to server folder:
```
cd server
```
- To install the libraries:
 ```
 npm i
 ```
- And run it by:
```
npm start
```
- Navigate in the browser to Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

- Then you can create users and use the application.


### The assignment parts:
#### In the first part:
We modified the React code to enable communication with a built-in server.
This step served as preparatory code for the subsequent parts.

#### In the second part:
We developed a web server using Node.js.
As a result, when any input is entered through the login, the details are saved.
We implemented a Node.js server following the MVC architecture, which offers the same functionality as the server in the first part. Additionally, it performs additional validation checks to ensure that the entered details are correct before saving them to MongoDB.

#### In the third part:
We established real-time communication.
Users can log in through the login screen and send messages to each other while they are both logged in on their respective browsers. The recipient user immediately receives and sees the message without needing to request it.
### Switching Between Pages

To move between the pages, click on "Not registered? Click here to register" on the Login page to access the register/signUp page. To go from the Login page to the Chats page, click on the Log in button after you entered the password and username you signed up with. 

## Pages
### SignUp page:
On the registration screen, users can enter a username, password, nickname, and picture. There is also an option to go to the login screen by clicking on "Already registered? Click here to login."

### Login page:
On the login screen, users can enter a username and password. There is a place to upload a picture. There is also an option to go to the signup screen by clicking on "Not registered? Click here to register."

### Chats page:
The chat screen is divided into two parts. In the left part of the screen, users can see a list of all the chats they are currently engaged in. In the right part of the screen, the correspondence is displayed, including messages with the selected recipient.
## Design -css and boostrap:
The design of the user interface was created using BOOTSTRAP and CSS. Images and additional CSS files can be found in the "public/images" and "Style" folders, respectively.


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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
