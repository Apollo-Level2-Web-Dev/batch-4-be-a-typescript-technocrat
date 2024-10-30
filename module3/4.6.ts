{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //getter
    get balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);

  // goribManusherAccount.deposit = 0;
  // goribManusherAccount.addDeposit(20); // function call korte hsse
  goribManusherAccount.deposit = 50;
  // const myBalance = goribManusherAccount.getBalance(); // function call korte hsse

  const myBalance = goribManusherAccount.balance; // property er mto kore
  console.log(myBalance);

  //
}
