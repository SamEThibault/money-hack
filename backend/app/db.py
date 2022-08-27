import os
from peewee import *

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

    class Meta:
        database = db

db.connect()
db.create_tables([User])