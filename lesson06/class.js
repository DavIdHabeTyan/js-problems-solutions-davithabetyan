//homework 1  Create an Author class and a Book class.
// Author should have: name, email, gende
describe('classes', () => {

  describe('1. ', () => {
    class Author {
      #name;
      #email;
      #gender;

      constructor(name, email, gender) {
        this.#name = name;
        this.#email = email;
        this.#gender = gender;
      }



      set name(name) {
          if (name === '') {
              throw new Error(`name field of Author cannot be empty`);
          }
          this.#name = name;
      }
fit
      get email() {
        return this.#email;
      }

      set email(email) {
          if (email === '') {
              throw new Error(`email field of Author cannot be empty`);
          }
          this.#email = email;
      }


      set gender(gender) {
          if (gender === '') {
              throw new Error(`gender field of Author cannot be empty`);
          }
          this.#gender = gender;
      }

      toString() {
        return 'author'
      }
    }

    class Book {
      #title;
      #author;
      #price;
      #quantity;


      get title() {
        return this.#title;
      }

      set title(title) {
        if (title === '') {
          throw new Error(`title field of Book cannot be empty`);
        }
        this.#title = title;
      }


      get author() {
        return this.#author;
      }

      set author(author) {
        if (author === '') {
          throw new Error(`author field of Book cannot be empty`);
        }
        this.#author = author;
      }


      get price() {
        return this.#price;
      }

      set price(price) {
        if (price === '') {
          throw new Error(`price field of Book cannot be empty`);
        }
        this.#price = price;
      }


      get quantity() {
        return this.#quantity;
      }

      set quantity(quantity) {
        if (quantity === '') {
          throw new Error(`quantity field of Book cannot be empty`);
        }
        this.#quantity = quantity;
      }

    }

    test('1. ', () => {

    })
  });


//homework 2 Create an Account class. Account should have: id, name, balance. It
// should have setters for name and balance, and getters for all fields.
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