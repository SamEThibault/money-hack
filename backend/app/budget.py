from app.info import InitialInfo
from app.invest import InvestInfo

class Budget():

    def __init__(self):
        self.name = "hello"
        self.info_communicator = InitialInfo()
        self.invest_communicator = InvestInfo()

    def budget(self, salary):
        salary_taxed = self.info_communicator.salary_taxed(salary)
        disposable, savings = self.disposable(salary_taxed, salary)

        if salary >= 100000:
            RRSP = self.RRSP(salary, savings)
            TFSA = self.TFSA(savings-RRSP)
            tips = self.invest_communicator.tips_high()
        else:
            TFSA = self.TFSA(savings)
            RRSP = self.RRSP(salary, (savings-TFSA))
            tips = self.invest_communicator.tips_low()

        leftover = savings - TFSA - RRSP

        discretionary = disposable - savings
        print("Each month you have $%.2f for discretionary spending" % (discretionary/12))
        print("Please invest $%.2f into your TFSA" % (TFSA))
        print("Please invest $%.2f into your RRSP" % (RRSP))
        print("Leftover $%.2f" % (leftover))
        print(tips['RRSP'] + '\n' + tips['TFSA'])

        return [discretionary/12, TFSA, RRSP, leftover, tips]

    def disposable(self, salary_taxed, salary):
        bills = (salary_taxed*0.5)/12 #28000
        print(salary_taxed)
        disposable = salary_taxed - (bills*12) #60% for discretionary, 40% savings/investing
        savings = disposable*0.4

        return disposable, savings

    def TFSA(self, savings):
        if savings >= 6000:
            TFSA = 6000
        else:
            TFSA = savings
        return TFSA

    def RRSP(self, salary, savings):
        if savings > 0.18*salary or savings > 27830 : 
            RRSP = 27830
        else:
            RRSP = savings
        return RRSP 