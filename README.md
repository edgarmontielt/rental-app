<h1 align="center">Rental App</h1>

<h3 align="center">
 This repository containing the code to the frontend of rental application with nextjs and react.
</h3>

## Technologies



## Getting Started

Clone the repository

```bash
git clone https://github.com/edgarmontielt/rental-app.git
```

Rebuild node_modules:

```bash
npm install
```

Write the enviroment variables: 

```bash
.env.development.local
# or
.env.test.local
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Set enviroment variables to development
```
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
DATABASE_URL=
```

#### For Development in:

````bash
.env.development.local
````

#### For Testing in:

````bash
.env.test.local
````