from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from pydantic import BaseModel


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

class Data(BaseModel):
  data: str

@app.put('/put')
async def put_test(data: Data):
  print('put data: ', data.data)
  return { 'put_data': 'put data'}

@app.post('/post')
async def post_test(data: Data):
  print('post data: ', data.data)
  return { 'post_data': 'post data'}

# @app.post("/token")
# async def get_token(token: Token):
#   url = 'https://www.google.com/recaptcha/api/siteverify'
#   payload = {'secret': '', 'token': token.token}
#   r = requests.post(url, params=payload)
#   return r
