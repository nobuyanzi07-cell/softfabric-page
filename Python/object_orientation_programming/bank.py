"""
Abstractions.
Bank Class →
deposits, withdrawl,
show account,
getter and setter. →
→ easy to scale function <understing>
______________________________________

→ Login account
→ Create account
→ Deposit
→ Withdrawl
→ account balance
"""

"""
Static <it does not change>.<class properties> properties. <Belong to the class>
Static Method<>.Class method. <Function belongs to the class>

Why would you want to use a class property.<>
"""

class BankAccount:
    clients = 0  # static
    bank_name = "Post Bank"  # static property

    def __init__(self, name, balance, account_no):
        self.name = name
        self._balance = balance
        self.account_no = account_no
        BankAccount.add_client()

    # Getter
    @property
    def balance(self):
        print("somebody tried to read johns balance")
        return self._balance

    # Setter
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return
        if value < 0:
            print("Ensure new balance must not be less than 0")
            return
        self._balance = value

    # Instance methods
    def deposit(self):
        pass

    def withdrawl(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self._balance}")
        print(f"Account No {self.account_no}")

    # Static Method
    @staticmethod
    def calculate_interest(amount, year):
        rate = 10
        interest_per_year = amount * (rate / 100)
        interest_total = interest_per_year * year
        total = amount + interest_total
        print(f"If you take a loan of ${amount}, interest rate per year {interest_per_year}")
        print(f"Total interest {interest_total}, total to pay {total} after {year}")

    # Class Method
    @classmethod
    def add_client(cls):
        cls.clients = cls.clients + 1


# Example usage
john = BankAccount(name="John Mwangi", balance=0, account_no="223344223")
print("Total Clients", BankAccount.clients)

samuel = BankAccount(name="Samuel", balance=0, account_no="223344223")
print("Total Clients", BankAccount.clients)

BankAccount.calculate_interest(50000, 3)
