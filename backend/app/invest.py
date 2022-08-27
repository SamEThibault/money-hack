class InvestInfo():

    def __init__(self):
        self.name = "hello"

    def tips_high(self):
        tips = {
            'RRSP': 'Invest in RRSP first due to higher income bracket to reduce income tax',
            'TFSA': 'Invest in TFSA second to allow RRSP to build up'
            }
        return tips

    def tips_low(self):
        tips = {
            'RRSP': 'Invest in RRSP second due to lower income bracket as reduction of income tax is not a necessity',
            'TFSA': 'Invest in TFSA first to build up savings',
            'Budget': 'INVEST YOUR MONEY BOZO'
            }
        return tips