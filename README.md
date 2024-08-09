# FieldService Microservices Project

This project consists of microservices for managing field service requests using NestJS and `pnpm` for package management.

## Prerequisites

- Node.js (>= 14.x)
- `pnpm` (>= 6.x)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fieldservice-microservices.git
   cd fieldservice-microservices
   ```

2. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```

## Running the Project

To start the microservices, use the following command:
```bash
pnpm run start:dev
```

This will start all the microservices in development mode.

## Project Structure

The project is structured as follows:
```
fieldservice-microservices/
├── apps/
│   ├── workorder/
│   └── location/
├── libs/
│   ├── common/
│   └── utils/
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

- **apps/**: Contains the individual microservices.
  - **workorder/**: Microservice for managing work orders.
  - **location/**: Microservice for managing locations.
- **libs/**: Contains shared libraries and utilities.
  - **common/**: Common modules and services.
  - **utils/**: Utility functions and helpers.
- **pnpm-workspace.yaml**: Configuration for `pnpm` workspace.
- **package.json**: Root package configuration.

## Usage

### WorkOrder Microservice

#### Create a WorkOrder
```bash
curl -X POST http://localhost:3000/workorders -H "Content-Type: application/json" -d '{"title": "Fix AC", "description": "Air conditioner not working", "status": "open", "locationId": 1}'
```

#### Get All WorkOrders
```bash
curl http://localhost:3000/workorders
```

### Location Microservice

#### Create a Location
```bash
curl -X POST http://localhost:3000/locations -H "Content-Type: application/json" -d '{"address": "123 Main St", "city": "Anytown", "state": "CA", "zipCode": "12345", "latitude": 34.0522, "longitude": -118.2437}'
```

#### Get All Locations
```bash
curl http://localhost:3000/locations
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [`LICENSE`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsolmon%2Fgithub%2Fworkorder%2FLICENSE%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/solmon/github/workorder/LICENSE") file for details.
```

This README provides a comprehensive guide to setting up and using the field service microservices project with `pnpm` and NestJS.