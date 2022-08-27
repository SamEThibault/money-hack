class InitialInfo():

    def __init__(self):
        self.name = "hello"

#Salary minus tax deductions
    def salary_taxed(self, salary):
        taxSum = 0
        startSalary = salary

        while True:
            if salary <= 13229: 
                break
            elif 13230 <= salary <= 44740:
                taxedSalary = salary - 13230
                taxSum += (taxedSalary)*0.2005
                salary = 13229
            elif 44741 <= salary <= 48535:
                taxedSalary = salary - 44740
                taxSum += (taxedSalary)*0.2415
                salary = 44740
            elif 48536 <= salary <= 78786:
                taxedSalary = salary - 48536
                taxSum += (taxedSalary)*0.2965
                salary = 48535
            elif 78787 <= salary <= 89482:
                taxedSalary = salary - 78787
                taxSum += (taxedSalary)*0.3148
                salary = 78786
            elif 89483 <= salary <= 92827:
                taxedSalary = salary - 89483
                taxSum += (taxedSalary)*0.3389
                salary = 89482
            elif 92828 <= salary <= 97069:
                taxedSalary = salary - 92828
                taxSum += (taxedSalary)*0.3791
                salary = 92827
            elif 97070 <= salary <= 150000:
                taxedSalary = salary - 97070
                taxSum += (taxedSalary)*0.4341
                salary = 97069
            elif 150001 <= salary <= 150473:
                taxedSalary = salary - 150001
                taxSum += (taxedSalary)*0.4497
                salary = 150000
            elif 150474 <= salary <= 214368:
                taxedSalary = salary - 150474
                taxSum += (taxedSalary)*0.4818
                salary = 150473
            elif 214369 <= salary <= 220000:
                taxedSalary = salary - 214369
                taxSum += (taxedSalary)*0.5197
                salary = 214368
            else:
                taxedSalary = salary - 220001
                taxSum += (taxedSalary)*0.5353
                salary = 220000


        taxedSalary = startSalary - taxSum
        return taxedSalary