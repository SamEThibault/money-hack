import os
from flask import Flask, request
from flask_cors import CORS
from app import test
from peewee import *
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)


############ DB #############
db = MySQLDatabase(
    os.getenv("MYSQL_DATABASE"),
    user=os.getenv("MYSQL_USER"),
    password=os.getenv("MYSQL_PASSWORD"),
    host=os.getenv("MYSQL_HOST"),
    port=3306
)
print(db)

class User(Model):
    password = CharField()
    username = CharField()
    age = CharField()
    salary = CharField()
    debt = CharField()

    groceries = CharField()
    food = CharField()
    gas = CharField()
    entertainment = CharField()
    other = CharField()
    rent = CharField()
    bills = CharField() # sum of cellphone, utilities, and internet, (maybe car payments)

    class Meta:
        database = db

db.connect()
db.create_tables([User])

############################

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
        test.UnitTest().test(name)
        return name
    except Exception as e:
        print(e)



@app.route("/", methods=["GET"])
def sendName():
    return {"name": "bozo cheese"}


@app.route("/file", methods=["POST"])
def getFile():
    f = request.files['file']
    f.save('temp/' + f.filename)

    # call Logan's function (to parse the text file)

    # read the returned dict, add the sums of each category and send them to the User's table
    # call the budgetting / investing calulations
    return 'W'


# sign up endpoint: checks to see if name is unique, and adds user to Users table
@app.route("/signup", methods=["POST"])
def signup():
    try:
        print(request)
        name = request.form["name"]
        # password = request.form["password"]
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