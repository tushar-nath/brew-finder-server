# Coffee Shop Finder API

This is the backend API for the Coffee Shop Finder application. It provides endpoints for managing coffee shop data, including creating, reading, updating, and deleting coffee shop information.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- TypeScript
- Express Session for user data storage
- CORS for cross-origin resource sharing
- Dotenv for environment variable management

## Project Structure

- `api/index.ts`: Main server setup and configuration
- `handlers/coffeeShopHandler.ts`: Request handlers for coffee shop operations
- `models/coffeeShopModel.ts`: Mongoose model for coffee shop data
- `services/coffeeShopService.ts`: Business logic for coffee shop operations
- `routes/coffeeShopRoutes.ts`: Route definitions for coffee shop endpoints
- `routes/healthRoute.ts`: Health check endpoint

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with the following variables: `PORT=8000` `MONGODB_URI=your_mongodb_connection_string`
4. Start the server: `npm run start:dev`

## API Endpoints

- `POST /api/coffee-shops`: Add a new coffee shop
- `GET /api/coffee-shops/:id`: Get a coffee shop by ID
- `GET /api/coffee-shops`: List all coffee shops
- `PUT /api/coffee-shops/:id`: Update a coffee shop
- `DELETE /api/coffee-shops/:id`: Delete a coffee shop
- `GET /api/healthcheck`: Health check endpoint

## Environment Variables

- `PORT`: The port on which the server will run (default: 8000)
- `MONGODB_URI`: MongoDB connection string

## Error Handling

The API uses standard HTTP status codes for error responses:

- 200: Successful operation
- 201: Resource created successfully
- 400: Bad request
- 404: Resource not found

## Security

- CORS is configured to allow all origins in development. This should be restricted in production.
- Express sessions are used to store user data.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
