# Shopping Mall Website

A responsive full-stack web application for a shopping mall, built with React, Node.js, Express, and MySQL.

The website provides information about shops, restaurants, and services and includes an interactive multi-floor mall map.

## Features

- Responsive layout for desktop and mobile devices
- Shop, restaurant, and service listings
- Interactive multi-floor mall map
- Clickable map areas linked to individual locations
- Floor switching using React state
- REST API for retrieving mall data
- MySQL database integration

## Interactive Mall Map

The mall map is implemented using SVG floor plans.

Each floor contains clickable areas representing individual shops, restaurants, and services. Users can switch between floors and select a location directly on the map to open its information page.

## Architecture

The application consists of a React frontend and a Node.js/Express backend.

The backend connects to a MySQL database and provides API endpoints for retrieving information about shops, restaurants, and services.

The React frontend consumes this data and displays it throughout the application.

## Technologies

### Frontend

- React
- JavaScript
- HTML
- CSS
- SVG

### Backend

- Node.js
- Express
- MySQL
- CORS

## Project Structure

- `client/` – React frontend
- `server/` – Express backend and MySQL integration
