import { notification } from "antd";

class ErrorHandler {
    static handleExpectedError(error: string): void {
          // Log the error to a centralized error tracking system
          console.error('An error occurred:', error);

          // Display a user-friendly error message
          return notification.error({
              message: 'Oops! Something went wrong.',
              description: error,
              duration: 5,
          })
    }
    
    static handleUnexpectedError(error: Error): void {
        // Log the error to a centralized error tracking system
        console.error('An unexpected error occurred:', error);

        // Display a user-friendly error message
        return notification.error({
            message: 'Oops! Something went wrong. Please try again later.',
            description: error.message,
            duration: 5,
        })

        // Perform any additional error handling logic here
        // ...
    }

}

export default ErrorHandler;
