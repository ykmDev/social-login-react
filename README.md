# Social login | React
* Simple Social login with [Passport.js](https://www.passportjs.org/)

## Tech Stacks
* Frontend : Reactjs v18.3
* Backend : Express.js v4.19
* Auth library : Passport v0.5 (Note: Passport v0.6 error have)

# Installation Step
* In client, install React:
``` npx create-react-app . ```
* In client, install React Router:
``` npm install react-router-dom ```

* In backend, create package.json:
``` npm init -y ```
* In backend, install Expressjs Nodemon Passport:
``` yarn add express passport cors nodemon cookie-session ```
* In backend, install passport-google-oauth20:
```  npm install passport-google-oauth20 ```
* In backend, install passport-facebook:
```  npm install passport-facebook ```

## Development Env Running step
* RUN in client: ``` npm start ```
* RUN in backend: ``` npm start ```

![login screen](https://github.com/ykmDev/social-login-react/blob/main/social_login.png)


Error occur in Passport v0.7.0
error: 
``` 
TypeError: req.session.regenerate is not a function
    at SessionManager.logIn
```