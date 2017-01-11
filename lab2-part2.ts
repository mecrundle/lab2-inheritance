// In lab1-part2.ts write a SavingsAccount class with the exact same functionality as your CheckingsAccount class (you can copy -> paste -> rename).

// The only thing that is different about your SavingsAccount class is that there should be a limit on the number of withdrawals you can make.

// Specifically, each instance of the SavingsAccount class should only be allowed to make 3 withdrawals. Any calls that exceed that limit should not perform the withdrawal and additionally should print out an error message for the user to see.

class SavingsAccount {
	private balance: number;

	constructor(private initialBalance:number, private ownerName:string){
		this.balance = initialBalance;
	}

	deposit(num:number) {
		this.initialBalance += num;
	}

	withdraw(num:number) {
		this.withdrawals = this.withdrawals + 1;
        if (this.withdrawals < 4) {
            this.balance = this.balance - num;
        } else {
            console.log("Error, you can only make 3 withdraws at a time");
        }
	}

	checkBalance(num:number) {
		console.log(this.initialBalance + " " + this.ownerName);
	}
}