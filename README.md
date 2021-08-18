# project-auth-api


### .env
PORT=8000

SECRET=footballteam

### Running the app: npm start ,
### nodemon Endpoint: /signin ,

{
  "user": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im11bnRoZXIiLCJpYXQiOjE2MjkyOTg1NjN9.oLWb-IwA3G9sccngcXispZzs6X_we1SvHJC657OSLHY",
    "capabilities": [
      "read",
      "create",
      "update",
      "delete"
    ],
    "id": 1,
    "username": "munther",
    "password": "$2b$10$sARBgFvN8YWskcCNKXxcdujTT4/aOpdWxuc3mDwphAramLRyfLEki",
    "role": "admin",
    "createdAt": "2021-08-18T13:30:25.452Z",
    "updatedAt": "2021-08-18T13:30:25.452Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im11bnRoZXIiLCJpYXQiOjE2MjkyOTg1NjN9.oLWb-IwA3G9sccngcXispZzs6X_we1SvHJC657OSLHY"
}



### nodemon Endpoint: /team ,

[
  {
    "id": 1,
    "teamName": "barca",
    "favPlayer": "Agouro",
    "hisNumber": 9,
    "yourComment": "the player not bad",
    "createdAt": "2021-08-18T14:36:38.768Z",
    "updatedAt": "2021-08-18T14:36:38.768Z"
  },
  {
    "id": 4,
    "teamName": "razan",
    "favPlayer": "oojjjoo",
    "hisNumber": 7,
    "yourComment": "the player not bad",
    "createdAt": "2021-08-18T14:57:06.065Z",
    "updatedAt": "2021-08-18T14:57:06.065Z"
  },
  {
    "id": 3,
    "teamName": "mayyada",
    "favPlayer": "newone",
    "hisNumber": 15,
    "yourComment": "the player not bad",
    "createdAt": "2021-08-18T14:41:37.197Z",
    "updatedAt": "2021-08-18T14:57:46.188Z"
  }
]


![Capture](Capture.PNG)