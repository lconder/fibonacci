# Welcome to Fibonacci API

I'm going to explain how and why I developed this API the way I did, but first, the versions of **node** and **npm** with which it was built were: **16.20.2** and **8.19.4**, respectively. To run this demo, simply execute: **npm install** and then **node index**.

## Routes and validators

This is where it all begins. First, you need to access the URL ***/v1/fibonacci***, which will validate that the query contains the value of n > 0.

## Controllers

Once past the router, it delegates the responsibility to the controller, which is responsible for communication between the application layer and the Node.js middleware.

## Application

This is our business logic; here, we simply make use of our domain, which is the Fibonacci Class.

## Domain

Here, we only execute the Fibonacci class using a static recursive method called "fibonacci."

## Future implementations

- **SignUp and Login:** We could implement user registration with its corresponding login, which can generate JWT for authentication.

- **Auth:** With the aforementioned JWT, we can create an authentication middleware.

- **Versioning:** Currently, the version is just a string "v1," but we can go further to create a comprehensive API versioning ecosystem.

- **Error Middleware:** We can create middleware that captures errors, for example, we could use it with Joi.

- **Testing:** Implementing a testing library like Jest would be beneficial.
