from data import DataFormat
# from peewee import *

class Parse():
    def __init__(self):
        self.categories = {"FOOD" : ["TIM HORTONS", "LE PELE MELE", "LA P'TITE GRENOUILLE", "MAC'S SUSHI", "Shawarma Palace Rideau", "A&W", "CAGE GATINEAU", "STARBUCKS COFFEE"],
             "GROCERIES" : ["DOLLARAMA", "WAL-MART SUPERCENTER", "RUSSELL FOODLAND"], 
             "OTHER": ["IMPERIAL BARBER SHOP", "HAWKINS CAR WASH", "STITCH IT"], 
             "ENTERTAINMENT" : [], 
             "GAS" : ["MR. GAS", "SHELL", "PETROCAN-500"],
             "RENT" : ["Rent"],
             "BILLS" : ["Utilities", "Rogers Internet", "Rogers Cell"]
             }
        self.communicator = DataFormat()

    def function(self):
        #user = User.get_or_none(User.username == name)
        data = self.communicator.parseToDict()
        foodSum = 0
        grocerySum = 0
        otherSum = 0
        entertainmentSum = 0
        gasSum = 0
        rentSum = 0
        billsSum = 0
        
        # sum variables for each category
        i = -1
        for desc in data['description']:
            i += 1
            for food in self.categories['FOOD']:
                if food in desc:
                    foodSum += data['amount'][i]
            for grocery in self.categories['GROCERIES']:
                if grocery in desc:
                    grocerySum += data['amount'][i]
            for other in self.categories['OTHER']:
                if other in desc:
                    otherSum += data['amount'][i]
            for entertainment in self.categories['ENTERTAINMENT']:
                if entertainment in desc:
                    entertainmentSum += data['amount'][i]
            for gas in self.categories['GAS']:
                if gas in desc:
                    gasSum += data['amount'][i]
            for rent in self.categories['RENT']:
                if rent in desc:
                    rentSum += data['amount'][i]
            for bills in self.categories['BILLS']:
                if bills in desc:
                    billsSum += data['amount'][i]
            
        # user.food = foodSum
        # user.groceries = grocerySum
        # user.gas = gasSum
        # user.entertainment = entertainmentSum
        # user.other = otherSum
        # user.bills = billsSum
        # user.rent = rentSum

Parse().function()