import os
from peewee import *
from dotenv import load_dotenv

load_dotenv()

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
    age = AutoField()
    salary = AutoField()
    debt = AutoField()

    groceries = AutoField()
    food = AutoField()
    gas = AutoField()
    entertainment = AutoField()
    other = AutoField()
    rent = AutoField()
    bills = AutoField() # sum of cellphone, utilities, and internet, (maybe car payments)

    class Meta:
        database = db

db.connect()
db.create_tables([User])