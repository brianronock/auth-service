# Auth Service

This is the authentication service for our project. It handles user authentication, authorization, and related security features.

## Features

- User registration and login
- Password hashing and verification
- JWT token generation and validation
- Role-based access control

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/brianronck/auth-service.git
    ```
2. Navigate to the project directory:
    ```bash
    cd auth-service
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start  
    ```
2. The server will be running at `http://localhost:3000`.

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=5003
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Login a user
- `GET /profile` - Get user profile (requires authentication)

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [bkcrono@gmail.com](mailto:bkcrono@gmail.com).
