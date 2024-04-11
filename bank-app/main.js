class BankAccount {
    static nextAccountNumber = 1001;
    
    constructor(name, startAmount) {
      this.accountNumber = BankAccount.nextAccountNumber++;
      this.name = name;
      this.balance = startAmount;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Successfully deposited $${amount}`);
      } else {
        console.log("Invalid deposit amount");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Successfully withdrawn $${amount}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  
    getBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  // Create three instances of the BankAccount class
  const account1 = new BankAccount("Sakib", 1000);
  const account2 = new BankAccount("rakib", 500);
  const account3 = new BankAccount("akib", 5000);
  
  // console.log(account1);
  // Demonstrate functionality
 account1.deposit(200);
 account1.withdraw(300);
 account1.displayAccountInfo();

  
  account2.deposit(100);
  account2.withdraw(700);
  account2.displayAccountInfo();

  account3.deposit(2560);
  account3.withdraw(245);
  account3.displayAccountInfo();