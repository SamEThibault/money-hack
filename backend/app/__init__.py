# python -m venv pyenv
# source pyenv/Scripts/activate
# pip install -r requirements.txt

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
    
# var myHeaders = new Headers();
# myHeaders.append("Disallow", "/not-for-robots.html");
# myHeaders.append("User-Agent", "*");

# var urlencoded = new URLSearchParams();

# var requestOptions = {
#   method: 'GET',
#   headers: myHeaders,
#   body: urlencoded,
#   redirect: 'follow'
# };

# fetch("localhost:5000/", requestOptions)
#   .then(response => response.text())
#   .then(result => console.log(result))
#   .catch(error => console.log('error', error));
