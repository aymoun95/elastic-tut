# Earthquake Watch App

A full-stack application that visualizes earthquake data from the USGS API using Elasticsearch for data storage and retrieval, and a React frontend for searching and filtering.

## Features

- **Data Ingestion**: Automatically fetches and indexes earthquake data from USGS (All Earthquakes - Past 30 Days).
- **Search & Filter**: Filter earthquakes by:
  - Type (Earthquake, Quarry Blast, Ice Quake, Explosion)
  - Magnitude (2.5+, 5.5+, 6.1+, 7+, 8+)
  - Location (City, State, Country)
  - Date Range (Past 7, 14, 21, 30 days)
  - Sort Order (Magnitude Ascending/Descending)
- **Visuals**: Responsive UI with earthquake details cards.

## Tech Stack

- **Client**: React, Vite, CSS
- **Server**: Node.js, Express, Elasticsearch Client
- **Database**: Elasticsearch (Elastic Cloud)

## Prerequisites

- Node.js (v18+ recommended)
- An Elastic Cloud deployment (or local Elasticsearch instance)

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd earthquake-app
```

### 2. Server Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory based on `.env.example`:

```bash
cp .env.example .env
```

Update `.env` with your Elastic Cloud credentials:

```ini
CLOUD_ID=your_cloud_id
API_KEY=your_api_key
```

Start the server:

```bash
npm start
```

The server will start on port `3001` and begin ingesting data from USGS.

### 3. Client Setup

Open a new terminal, navigate to the client directory and install dependencies:

```bash
cd ../client
npm install
```

Start the development server:

```bash
npm run dev
```

The client will typically run on `http://localhost:5173`.

## Usage

1. Open the client URL in your browser.
2. Use the dropdowns and search bar to filter earthquake data.
3. Click "Search" to retrieve results from your Elasticsearch index.

## Project Structure

- `client/`: React frontend application.
- `server/`: Express backend and data ingestion scripts.
- `config/`: Configuration files.
