

class InitialInfo():

    def __init__(self):
        self.name = "hello"

    def create_context(self, age, salary, debt, payments):
        context = {
            'age': age,
            'salary': salary,
            'debt': debt,
            'payments': payments
        }
        return print(context)

#Salary minus tax deductions
    def salary_taxed(self, context):
        return

#Salary minues tax deductions and payments
    def return_salary(self, context):
        return

age = '24'
salary = '70000'
debt = '20000'
payments = '200'

InitialInfo().create_context(age, salary, debt, payments)