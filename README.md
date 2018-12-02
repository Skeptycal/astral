# Astral [![Build Status](https://travis-ci.org/astralapp/astral.svg?branch=master)](https://travis-ci.org/astralapp/astral)

An open source application that allows you to organize your GitHub Stars with ease. Use the [hosted version](https://app.astralapp.com) free, or self-host your own instance with the instructions below!

## Installation

### Prerequisites

- To run this project, you must have PHP 7 and Node.js installed.
- You should setup a host on your web server for your local domain. For this you could also configure Laravel Homestead or Valet.
- [Create a new GitHub OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) so you can plug in your API keys.

### Step 1

Begin by cloning this repository to your machine, and installing all Composer & NPM dependencies.

```bash
git clone git@github.com:astralapp/astral.git
cd astral && composer install && npm install
php artisan astral:install
npm run dev
```

### Step 2

Next, boot up a server to visit the app. If you're using a tool like Laravel Valet, the URL will likely default to `http://astral.test`. That's pretty much it!
