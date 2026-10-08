# MVP

## An app where users can search and order products online.

## Images, etc and login and authentication

## order products.

# Tools Technology

# Backend python <Fast Api>

# Orm <prisma orm>

# images Cloudflare <>

# STEP 1 Backend Developer

-Create or Model our DB
-Use drawsql.
--

# Create your db on beekeper studio using sql.

# setting up our project folder structure.

# Install dependency

pipenv install fastapi "uvicorn[standard]" prisma

# Initialize prisma

-pipenv run prisma init

- check the follwing should be in your initialzie
- use node version 22
  generator client {
  provider = "prisma-client-py"
  enable_experimental_decimal=true
  }

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

-- pipenv run prisma db pull
-- pipenv run prisma generate

-- pipenv run prisma db pull
-- pipenv run prisma generate

--Connect to our db

-- Routes we begine. user member routes.
   -> signup <create an account>
   -> login <authentication>

-- for data validation(optional) use pydantic
   pipenv install pydantic 'pydantic[email]'