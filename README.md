# 🚀 BCAS Token API
This is an API you can use to store and retrieve token related data.   
Tokens are digital assets that operate on an existing blockchain network and aim to offer a wide range of functionalities within a specific project's ecosystem.
They are an integral part of decentralized applications
and decentralized finance operations and grant to their holders certain rights or privileges.

## 1️⃣ Launching the server locally

### Pre-configuration steps:
  1. Install `NodeJs` version `18` or newer
  2. Install or update `Docker` to the latest version
  3. Ensure you don't have already a PostreSQL server running locally

### Launch instructions
  1. At the root of the project run `npm install`
  2. Run `npm run dev` command

  At this point a docker container should be generated with 2 images: NodeJs and PostgreSQL.   
  The server is accessible at `localhost:3000`.   
  To visit the documentation you can access `localhost:3000/api-docs`

  In order to access the local database you can use the following credentials:
- Host: `localhost`
- Port: `35432`
- Username: `user`
- Password: `pass`
- Database: `db`

## 2️⃣ Access the deployed server
  The server is live at `https://capable-korry-maxbcastest.koyeb.app/`   
  Here you can also access the documentation on`/api/docs` page.   
  ❗Please pay attention at the selected server while making requests via Swagger.

  The NodeJs app was deployed on `https://www.koyeb.com/` while the database server is provided by `https://www.aiven.io/`

    
In order to access the remote database you can use the following credentials:
  - Host: `pg-16c95977-maxim-380f.j.aivencloud.com`
  - Port: `23640`
  - Username: `avnadmin`
  - Password: `AVNS_2GBfZDSahvbA5tjDBN6`
  - Database: `defaultdb`

> [!IMPORTANT]
> Since tokens are unique assets on blockchain, you cannot add multiple tokens with identical tickers.
