// Write a TypeScript class in the lab1-part1.ts file that satisfies the following requirements:

// Has a constructor with the following parameters
// initialBalance (a number)
// ownerName (a string)
// Saves those parameters as private fields in your class
// Has a deposit method which takes a number amount as a parameter and adds it to your account's balance
// Has a withdraw method which takes a number amount as a parameter and subtracts it to your account's balance
// Has a checkBalance method which prints out the current balance of the account and the account owner's name (pro tip: ES6 template literals make this a bit cleaner)

class CheckingsAccount {
	constructor(private initialBalance:number, private ownerName:string){}

	deposit(num:number) {
		this.initialBalance += num;
	}

	withdraw(num:number) {
		this.initialBalance -= num;
	}

	checkBalance(num:number) {
		console.log(this.initialBalance + " " + this.ownerName);
	}
}

let customer:CheckingsAccount = new CheckingsAccount(140000, "George");
customer.deposit(3000);
customer.checkBalance(900);
