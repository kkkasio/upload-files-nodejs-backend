## Backend Upload file NodeJS 😀

![](https://img.shields.io/github/languages/top/kkkasio/upload-files-nodejs-backend.svg)
![](https://img.shields.io/snyk/vulnerabilities/github/kkkasio/upload-files-nodejs-backend.svg)
![](https://img.shields.io/github/last-commit/kkkasio/upload-files-nodejs-backend/master.svg)

## Frontend Repository

[https://github.com/kkkasio/upload-files-reactjs-frontend](https://github.com/kkkasio/upload-files-reactjs-frontend)

### Description

Basic upload files to localstorage or AWS s3

### Future Implementations (to do)

- [ ] User Registration
- [ ] JWT Autentication
- [ ] User Confirmation (email)
- [ ] Manage Profile
- [ ] Manage files
- [ ] Preview file before download

### How to start

create .env file in root folder same configuration example in .env.example

```sh
#APP ULR
APP_URL=http://localhost:3000

#STORAGE TYPE - local or s3
STORAGE_TYPE=s3

#Mongo (using atlasdb)
MONGO_URL=

#AWS CONFIG
AWS_ACESS_KEY_ID=
AWS_SECRET_ACCES_KEY=
AWS_DEFAULT_REGION=us-east-1
```

Use **`yarn`** to download dependencies.

Use **`yarn dev`** to run project on dev development.

**or**

Use **`yarn start`** to run project on production.
