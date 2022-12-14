<!-- Please update value in the {}  -->

<h1 align="center">Image uploader and gallery</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://tux-systems.co.uk:10005">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://raw.githubusercontent.com/digital-stew/image-uploader/main/public/screenshot.png)

- Drag and drop image sharing app made with next js 13 using the new experimental "app" directory.
- Self hosted on my home server with full SSL

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [NextJS](https://nextjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

Drag and drop image uploader with the ability to share your download link. gallery page to view the uploaded images from all users. The images are given a uuid to prevent naming collisions and the data is stored in a sqlite3 (SQL) database all of witch is transparent to the user. Using nextJS 13 new experimental "app" directory. i have also provided some SSL keys for testing purposes.

Create a env file to change default values:

- ".env.local"

```bash
SQL_DATABASE="./image.db"
```

edit server.js to add production SSL keys.

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/digital-stew/image-uploader

# Install dependencies
$ npm install

# Run the app in dev mode
$ npm run dev

# Build and run production app. administrator privileges needed to start server on port 443
$ npm run build
$ npm run start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [NextJS](https://nextjs.org/)
- [Sqlite3](https://www.npmjs.com/package/sqlite3)
- [formidable](https://www.npmjs.com/package/formidable)
- [uuid](https://github.com/uuidjs/uuid)

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [https:tux-systems.co.uk](https://tux-systems.co.uk)
- GitHub [@digital-stew](https://github.com/digital-stew/)
