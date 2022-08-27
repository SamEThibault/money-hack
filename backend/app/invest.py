class InvestInfo():

    def __init__(self):
        self.name = "hello"

    def tips_high(self):
        tips = {
            'RRSP': ['An RRSP or a Registered Retirement Savings Plan is a savings plan, registered with the Canadian federal government that you can contribute to for retirement purposes',
                    'Invest in RRSP first due to higher income bracket to reduce income tax'],
            'TFSA': ['A TFSA or a Tax-Free Savings Account is a way to set money aside, tax free, throughout your lifetime','Invest in TFSA second to allow RRSP to build up'],
            'Budget': ['Use the 50/30/20 rule - Of your after-tax income, put 50% to fixed costs (needs), 30% to discretionary funds (wants), and 20% to savings or debt repayment',
                        'Always have a cash cushion of some sort, enough money to cover 3 to 6 months\' worth of expenses',
                        'Keep all bills and receipts organized in case you need to refer back to them in the future',
                        'Set short-term and long-term goals. Be reasonable with these goals and try to revisit them yearly or after a big life change',
                        'Budget to zero every month - track every dollar you earn and give it a job in your budget'],
            'Save': 'Start saving for retirement ASAP. The sooner you invest, the more money you will have in the future',
            'Debt': ['Pay more than your minimum payment if possible', 'It\'s better to pay off your debt first before investing', 
                    'Re-examine your budget and check if any money can be freed up to use to pay extra on your debts',
                    'Use the debt snowball method to quickly pay off your debts'],
            'Debt-Snowball': ['The debt snowball method is a debt-reduction strategy where you pay off debt in order of smallest to largest, gaining momentum as you knock out each remaining balance.',
                             ['List your debts from smallest to largest regardless of interest rate', 'Make minimum payments on all your debts except the smallest',
                                    'Pay as much as possible on your smallest debt', 'Repeat until each debt is paid in full']],
            'MONEYHACK': ['Consider committing tax fraud', 'Get another job', 'Get promoted', 'Steal from your family (Don\'t get caught)']
            }
        return tips

    def tips_low(self):
        tips = {
            'RRSP': ['An RRSP or a Registered Retirement Savings Plan is a savings plan, registered with the Canadian federal government that you can contribute to for retirement purposes',
                    'Invest in RRSP second due to lower income bracket as reduction of income tax is not a necessity'],
            'TFSA': ['A TFSA or a Tax-Free Savings Account is a way to set money aside, tax free, throughout your lifetime','Invest in TFSA first to build up savings'],
            'Budget': ['Use the 50/30/20 rule - Of your after-tax income, put 50% to fixed costs (needs), 30% to discretionary funds (wants), and 20% to savings or debt repayment',
                        'Always have a cash cushion of some sort, enough money to cover 3 to 6 months\' worth of expenses',
                        'Keep all bills and receipts organized in case you need to refer back to them in the future',
                        'Set short-term and long-term goals. Be reasonable with these goals and try to revisit them yearly or after a big life change',
                        'Budget to zero every month - track every dollar you earn and give it a job in your budget'],
            'Save': 'Start saving for retirement ASAP. The sooner you invest, the more money you will have in the future',
            'Debt': ['Pay more than your minimum payment if possible', 'It\'s better to pay off your debt first before investing', 
                    'Re-examine your budget and check if any money can be freed up to use to pay extra on your debts',
                    'Use the debt snowball method to quickly pay off your debts'],
            'Debt-Snowball': ['The debt snowball method is a debt-reduction strategy where you pay off debt in order of smallest to largest, gaining momentum as you knock out each remaining balance.',
                             ['List your debts from smallest to largest regardless of interest rate', 'Make minimum payments on all your debts except the smallest',
                                    'Pay as much as possible on your smallest debt', 'Repeat until each debt is paid in full']],
            'MONEYHACK': ['Consider committing tax fraud', 'Get another job', 'Get promoted', 'Steal from your family (Don\'t get caught)']
            }
        return tips