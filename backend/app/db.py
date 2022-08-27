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
    age = IntegerField(default=0)
    salary = DoubleField(default=0)
    debt = DoubleField(default=0)

    groceries = DoubleField(default=0)
    food = DoubleField(default=0)
    gas = DoubleField(default=0)
    entertainment = DoubleField(default=0)
    other = DoubleField(default=0)
    rent = DoubleField(default=0)
    bills = DoubleField(default=0) # sum of cellphone, utilities, and internet, (maybe car payments)

    class Meta:
        database = db

db.connect()
db.create_tables([User])