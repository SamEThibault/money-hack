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
            'Budget': ['Use the 50/30/20 rule - Of your after-tax income, put 50% to fixed costs (needs), 30% to discretionary funds (wants), and 20% to savings or debt repayment',
                        'Always have a cash cushion of some sort, enough money to cover 3 to 6 months\' worth of expenses',
                        'Keep all bills and receipts organized in case you need to refer back to them in the future',
                        'Set short-term and long-term goals. Be reasonable with these goals and try to revisit them yearly or after a big life change'],
            'Save': 'Start saving for retirement ASAP. The sooner you invest, the more money you will have in the future',
            'Debt': ['Pay more than your minimum payment if possible', 'Re-examine your budget and check if any money can be freed up to use to pay extra on your debts'],
            'MONEYHACK': ['Consider committing tax fraud', 'Get another job', 'Get promoted', 'Steal from your family (Don\'t get caught)']
            }
        return tips