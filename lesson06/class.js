class Account {
  #id;
  #name;
  #balance;

  constructor(id, name, balance) {
    this.#id = id;
    this.#name = name;
    this.#balance = balance;
    if (!Number(id) && !String(name) && !Number(balance)) throw new Error("Invalid data type");
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name
  }

  get balance() {
    return this.#balance;
  }
  set balance(balance) {
    this.#balance = balance;
  }

  credit(amount) {
    return this.#balance + amount;
  }

  debit(amount) {
    if(this.#balance - amount >= 0) {
      return amount
    } else {
      return "Amount exceeded balance"
    }

  }

  transferTo(anotherAccount, amount) {
    if(this.#balance - amount >= 0) {
      this.#balance -= amount;
      anotherAccount += this.#balance
      return this.#balance
    } else {
      return "Amount exceeded balance"
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if(Object.keys(accountFirst) === Object.keys(accountSecond)) {
      return true
    }

    // toString() {
    //
    // }

  }

}
const account = new Account('457821125', 'David', 4500)

console.log(account.transferTo( 0, 3500))