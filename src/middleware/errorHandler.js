/***********************************************************
    src/middleware/errorHandler.js
/********************************************************************************************************
- Purpose: Defines the global error handler for the app, which catches and handles errors thrown in the application.
Variables
- No additional variables beyond those passed to the error handler (`err`, `req`, `res`, `next`).
Functions:
- `errorHandler()`: This function handles errors globally. It sets the appropriate status code based on the error (defaulting to 500 for server errors) and sends a JSON response containing the error message and stack trace (the stack is hidden in production mode).
Description:
- This middleware ensures that errors thrown in the application are properly handled and returned in a consistent format. It is typically the last middleware in the stack and catches any errors from previous middlewares or route handlers.
********************************************************************************************************/

import { configure } from "../config/config.js"


export const errorHandler = (err, req, res, next) => {

    console.error(`Error: ${err.message}`);

    // Set default status code (500 - Internal Server Error)
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
        message: err.message,
        stack: configure.nodeEnv === "production" ? "🥞" : err.stack,
    });
};