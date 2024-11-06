# Kubernetes Cluster Management Application

This application, built using Golang, offers seamless interaction with Kubernetes clusters through the Kubernetes API. It incorporates robust authentication mechanisms to secure access, allowing users to manage pods and retrieve logs efficiently.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
  - [Authentication](#authentication)
  - [Pod Management](#pod-management)
  - [Debugging Tools](#debugging-tools)
- [Setup](#setup)
- [Usage](#usage)

## Overview

The application leverages the Kubernetes API through Golang, offering seamless and secure management of Kubernetes clusters. It supports various authentication methods and provides comprehensive pod management and debugging capabilities.

## Tech Stack

- **Frontend**: Built with Next.js, TypeScript, and JSX, delivering a responsive, user-friendly interface for cluster management.
- **Backend**: Uses Client-Go for Kubernetes API interactions, Gin for API handling, and PostgreSQL for data storage and persistence.

## Features

### 1. Authentication

- **OAuth Integration**: Supports GitHub and Google account login for seamless user authentication.
![OAuth](/frontend/image/1.png)
- **Normal Login**: Offers a basic form-based login as an alternative.
![Login](/frontend/image/2.png)
- **JWT Token Authentication**: Secures API access with JSON Web Tokens.

![dashboard](/frontend/image/dashboard.png)

### 2. Pod Management

- **Pod Listing**: Retrieves and displays all active pods in the cluster.
![Login](/frontend/image/list.png)
- **Pod Updates**: Allows updates to pod specifications, including image changes.
![Login](/frontend/image/patch.png)
- **Pod Deletion**: Enables deletion of specific pods when necessary.
![Login](/frontend/image/delete.png)
- **Pod Creation**: Facilitates the creation of new pods with specified configurations.
![Login](/frontend/image/create.png)

### 3. Debugging Tools

- **Pod Logs**: Provides access to the logs of running pods for troubleshooting and debugging.
![Login](/frontend/image/logs.png)
- **Dynamic Endpoint Changes**: Allows dynamic adjustments to endpoints based on user input or application state.
![Login](/frontend/image/exec.png)

## Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Big-Leu/go_ui.git
   cd frontend

2. **How to start**
   ```bash
   npm i
   npm run dev //to start in the development mode
