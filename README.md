# Farmio HK Limited Marketplace

Welcome to the Farmio HK Limited Marketplace! This marketplace is designed to connect buyers and sellers, providing a platform for buying and selling products.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Notes](#notes)

## Introduction
The Farmio HK Limited Marketplace aims to bridge the gap between sellers and buyers by creating a direct channel for buying and selling products. Our platform allows users, whether buyers or sellers, to demand different prices for their products. Additionally, users have the ability to upgrade their existing listings.

## Features
Here are some key features of the Marketplace:

1. Validation Checks: The marketplace ensures that duplicate users are not created and all inputs are entered using the `yup` library.
2. Creating and Getting Records: Users can create new records, such as product listings or user accounts, and retrieve existing records.
3. Updating: Users have the ability to update their listings for existing prices.

These features contribute to the functionality and flexibility of the Farmio HK Limited Marketplace, providing users with a seamless experience in managing their data and transactions.

## Requirements
1. Make sure that the latest verson of `nodejs` is installed on your machine.
2. No other application should be running on port 3000.

## Installation
To run the Farmio HK Limited Marketplace locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Hannan-Javed/Marketplace`
2. Install the required dependencies: `npm install`
4. Start the development server: `npm start`

## Usage
Once the development server is running, you can use postman to post as a buyer, seller, products, or prices. You can also get a record of these using the get method.

## Notes
Rerunning the file or saving any file while the development server is running will delete all the data that was entered and sent and stored in the arrays.
