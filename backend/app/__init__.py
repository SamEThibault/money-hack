import os
from flask import Flask, request
from flask_cors import CORS
from peewee import *
from dotenv import load_dotenv
from app.db import User

from data.parse import Parse
from app.budget import Budget

load_dotenv()
app = Flask(__name__)
CORS(app)

categories = {"FOOD" : ["TIM HORTONS", "LE PELE MELE", "LA P'TITE GRENOUILLE", "MAC'S SUSHI", "Shawarma Palace Rideau", "A&W", "CAGE GATINEAU", "STARBUCKS COFFEE"],
             "GROCERIES" : ["DOLLARAMA", "WAL-MART SUPERCENTER", "RUSSELL FOODLAND"], 
             "OTHER": ["IMPERIAL BARBER SHOP", "HAWKINS CAR WASH", "STITCH IT"], 
             "ENTERTAINMENT" : [], 
             "GAS" : ["MR. GAS", "SHELL", "PETROCAN-500"]
             }

@app.route("/", methods=["POST"])
def getName():
    try:
        name = request.form["name"]
        print("NAME: " + name)
        return name
    except Exception as e:
        print(e)
        return "Error"

@app.route("/", methods=["GET"])
def sendName():
    return {"name": "bozo cheese"}

@app.route("/file", methods=["POST"])
def getFile():
    f = request.files['file']
    f.save('temp/' + f.filename)

    # call Logan's function (to parse the text file)
    #################### find a way to get the name in with the file in the request #####################
    user = User.get_or_none(User.username == "bruh")

    # budget = Budget().budget(int(user.salary))
    budget = Budget().budget(70000)
    discretionary = budget[0]
    TFSA = budget[1]
    RRSP = budget[2]
    leftover = budget[3]
    tips = budget[4]

    parse = Parse().parse()
    user.food = round(parse[0], 2)
    user.groceries = round(parse[1], 2)
    user.other= round(parse[2], 2)
    user.entertainment = round(parse[3], 2)
    user.gas = round(parse[4], 2)
    user.rent = round(parse[5], 2)
    user.bills = round(parse[6], 2)

    res = {"food" : user.food, "groceries" : user.groceries, 
           "other" : user.other, "entertainment" : user.entertainment,
           "gas" : user.gas, "rent" : user.rent, "bills" : user.bills,
           "discretionary" : discretionary, "TFSA" : TFSA, "RRSP" : RRSP, 
           "leftover" : leftover, "tips" : tips}
    return res

# sign up endpoint: checks to see if name is unique, and adds user to Users table
@app.route("/signup", methods=["POST"])
def signup():
    try:
        print(request)
        name = request.form["name"]
        password = request.form["password"]
    except Exception as e:
        print(e)
        return {"body" : "Error", "status" : 400}

    q = User.select().where(User.username == name)
    # username must be unique, if it already exists, return error
    if q.exists():
        return {"body" : "User already exists!", "status" : 400}
    User.create(username=name, password=password)
    return {"body" : "Success", "status" : 200}

# sign in endpoint: checks to see if user exists, and then if passwords match
@app.route("/signin", methods=["POST"])
def signin():
    name = request.form["name"]
    password = request.form["password"]
    user = User.get_or_none(User.username == name)

    if user != None:
        if user.password == password:
            return {"body" : "Login successful", "status" : 200}
        else:
            return {"body" : "Incorrect password, please try again", "status" : 400}

    return {"body" : "Invalid username or password, please try again", "status" : 400}

# endpoint to add all financial information to the user
@app.route("/addinfo", methods=["POST"])
def addInfo():
    name = request.form["name"]

    user = User.get_or_none(User.username == name)
    user.age == request.form["age"]
    user.salary == request.form["salary"]
    user.debt == request.form["debt"]
    return {"body" : "Information updated.", "status" : 200}