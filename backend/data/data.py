import pandas as pd
import re
import numpy as np

class DataFormat():

    def format_txt_to_csv(self, filename):
        with open('../app/temp/' + filename, 'r') as file:
            filedata = file.read()

            filedata = filedata.replace(',' , '.')

        with open('../app/temp/' + filename, 'w') as file:
            file.write(filedata)

        with open('../app/temp/' + filename) as infile:
            data = re.sub('\t+', ',', infile.read())
            data = data.replace(',\n', '\n')

            print(data, file=open('../app/temp/spendingHabits.csv', 'w'))   

        read_file = pd.read_csv(r'../app/temp/spendingHabits.csv')
        read_file.to_csv(r'../app/temp/spendingHabits.csv', index=False, header=["Transaction Date", "Registration Date", "Transaction Number", "Description", "Amount ($)"]) 

    def parseToDict(self):
        info = pd.read_csv(r"../app/temp/spendingHabits.csv")
        dates = info['Transaction Date'].values
        desc = info['Description'].values
        amount = info['Amount ($)'].values      
        datesList = dates.tolist()
        descList = desc.tolist()
        amountList = amount.tolist()
        userInfo = {"dates": datesList, "description": descList, "amount": amountList}
        df = pd.DataFrame(userInfo)
        return df

#DataFormat().format_txt_to_csv()
# DataFormat().parseToDict()
        
        