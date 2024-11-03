# creating backend for ecommerse application

- Routes
- Authentication
  POST /api/auth/register: Register a new user
  POST /api/auth/login: Log in a user and receive a JWT token
  Product Management
  GET /api/products: Get a list of all products
  GET /api/products/:id: Get details of a specific product
  Order Management
  POST /api/orders: Create a new order (JWT-protected)
  GET /api/orders/:id: Retrieve an order by ID (JWT-protected)
  PUT /api/orders/:id: Update the order status, e.g., after payment success/failure (JWT-protected)
