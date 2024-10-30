{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

   public  addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

   private getBalance() {
      return this._balance;
    }

    getHiddenMethod(){
      return this.getBalance()
    }
  }

  class StudentAccount extends BankAccount{
    test(){
      this.
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  goribManusherAccount.

  //
}
