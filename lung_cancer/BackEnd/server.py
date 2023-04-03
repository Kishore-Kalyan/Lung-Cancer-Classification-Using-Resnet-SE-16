from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import cv2
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import get_file 
from tensorflow.keras.utils import load_img 
from tensorflow.keras.utils import img_to_array
from tensorflow import expand_dims
from tensorflow.nn import softmax

app = FastAPI()

# origins = [
#     "http://localhost",
#     "http://localhost:3000",
#     "http://localhost:5173/",
# ]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = load_model("final_lung.h5")

CLASS_NAMES = ["ACA", "SCC", "Benin"]


@app.get("/ping")
async def ping():
    return "Hello, I am alive"


def read_file_as_image(data):
    image = Image.open(BytesIO(data))
    image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    lst=[]
    lst.append(cv2.resize(image,(256,256)))
    image=np.asarray(lst)
    return image


@app.post("/predict")
async def predict(
        file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    
    predictions = MODEL.predict(image)
    print(predictions)
    predicted_class = CLASS_NAMES[np.argmax(predictions,axis=1)[0]]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)