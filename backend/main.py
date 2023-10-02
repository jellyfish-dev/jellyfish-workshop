from typing import Union

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from jellyfish import RoomApi

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

room_api = RoomApi()


@app.get("/")
def read_root(request: Request):
    rooms = room_api.get_all_rooms()
    return templates.TemplateResponse('index.html', {'request': request, 'rooms': rooms})


@app.get("/rooms/{room_id}")
def read_item(request: Request, room_id: str):
    room = room_api.get_room(room_id)
    return templates.TemplateResponse('room.html', {'request': request, 'room': room})


@app.get("/create")
def create(request: Request):
    return templates.TemplateResponse('create.html', {'request': request})
