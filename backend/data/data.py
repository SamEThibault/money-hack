import pandas as pd
import re
import numpy as np

class DataFormat():

    def format_txt_to_csv(self):
        with open('myBadSpendingHabits.txt', 'r') as file:
            filedata = file.read()

            filedata = filedata.replace(',' , '.')

        with open('myBadSpendingHabitsFormat.txt', 'w') as file:
            file.write(filedata)

        with open('myBadSpendingHabitsFormat.txt') as infile:
            data = re.sub('\t+', ',', infile.read())
            data = data.replace(',\n', '\n')

            print(data, file=open('spendingHabits.csv', 'w'))   

        read_file = pd.read_csv(r'spendingHabits.csv')
        read_file.to_csv(r'spendingHabits.csv', index=False, header=["Transaction Date", "Registration Date", "Transaction Number", "Description", "Amount ($)"]) 

    def parseToDict(self):
        info = pd.read_csv(r"spendingHabits.csv")
        dates = info['Transaction Date'].values
        desc = info['Description'].values
        amount = info['Amount ($)'].values      
        datesList = dates.tolist()
        descList = desc.tolist()
        amountList = amount.tolist()
        userInfo = {"dates": datesList, "description": descList, "amount": amountList}
        
        