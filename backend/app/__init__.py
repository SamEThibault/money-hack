from flask import Flask, request
from flask_cors import CORS
from app import test

app = Flask(__name__)
CORS(app)

categories = {"FOOD" : ["TIM HORTONS", "LE PELE MELE", "LA P'TITE GRENOUILLE", "MAC'S SUSHI", "Shawarma Palace Rideau", "A&W", "CAGE GATINEAU", "STARBUCKS COFFEE"],
             "GROCERIES" : ["DOLLARAMA", "WAL-MART SUPERCENTER", "RUSSELL FOODLAND"], 
             "OTHER": ["IMPERIAL BARBER SHOP", "HAWKINS CAR WASH", "STITCH IT"], 
             "ENTERTAINMENT" : [], 
             "GAS" : ["MR. GAS", "SHELL", "PETROCAN-500"]}

@app.route("/", methods=["POST"])
def getName():
    try:
        name = request.form["name"]
        test.UnitTest().test(name)
    except Exception as e:
        print(e)
    return name


@app.route("/", methods=["GET"])
def sendName():
    return {"name": "bozo cheese"}


@app.route("/file", methods=["POST"])
def getFile():
    f = request.files['file']
    f.save('temp/' + f.filename)
    return 'W'