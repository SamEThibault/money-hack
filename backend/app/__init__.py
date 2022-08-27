from flask import Flask, request
from flask_cors import CORS
from app import test

app = Flask(__name__)
CORS(app)


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