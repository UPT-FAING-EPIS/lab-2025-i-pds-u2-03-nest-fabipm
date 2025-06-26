/**
 * Represents a bank account with basic operations like withdraw and deposit.
 * This class manages account balance and enforces business rules for transactions.
 * 
 * @class Account
 * @author Sistema ATM
 * @version 1.0.0
 * @since 2025-06-25
 */
export class Account {
  /**
   * Maximum amount allowed for a single deposit transaction.
   * This limit helps prevent money laundering and ensures compliance with banking regulations.
   * 
   * @type {number}
   * @default 10000
   * @readonly
   * @memberof Account
   */
  public MAX_INPUT_AMOUNT: number = 10000;

  /**
   * Unique identifier for the bank account.
   * This number is used to identify the account in the banking system.
   * 
   * @type {number}
   * @memberof Account
   * @example
   * ```typescript
   * const account = new Account();
   * account.AccountNumber = 123456789;
   * ```
   */
  public AccountNumber: number;

  /**
   * Current balance available in the account.
   * Represents the amount of money currently available for transactions.
   * 
   * @type {number}
   * @memberof Account
   * @example
   * ```typescript
   * const account = new Account();
   * account.AccountBalance = 1000.50;
   * console.log(`Balance: $${account.AccountBalance}`);
   * ```
   */
  public AccountBalance: number;

  /**
   * Withdraws a specified amount from the account balance.
   * This method validates that the withdrawal amount doesn't exceed the current balance.
   * 
   * @param {number} amount - The amount to withdraw from the account
   * @throws {Error} Throws an error if the withdrawal amount exceeds the account balance
   * @memberof Account
   * @example
   * ```typescript
   * const account = new Account();
   * account.AccountBalance = 1000;
   * account.Withdraw(500); // Balance becomes 500
   * ```
   * 
   * @example
   * ```typescript
   * // This will throw an error
   * const account = new Account();
   * account.AccountBalance = 100;
   * account.Withdraw(200); // Error: The input amount is greater than balance.
   * ```
   */
  public Withdraw(amount: number): void {
    if (amount > this.AccountBalance)
      throw new Error('The input amount is greater than balance.');
    this.AccountBalance -= amount;
  }

  /**
   * Deposits a specified amount into the account balance.
   * This method validates that the deposit amount doesn't exceed the maximum allowed limit.
   * 
   * @param {number} amount - The amount to deposit into the account
   * @throws {Error} Throws an error if the deposit amount exceeds the maximum allowed amount
   * @memberof Account
   * @example
   * ```typescript
   * const account = new Account();
   * account.AccountBalance = 1000;
   * account.Deposit(500); // Balance becomes 1500
   * ```
   * 
   * @example
   * ```typescript
   * // This will throw an error
   * const account = new Account();
   * account.Deposit(15000); // Error: The input amount is greater than maximum allowed.
   * ```
   */
  public Deposit(amount: number): void {
    if (amount > this.MAX_INPUT_AMOUNT)
      throw new Error('The input amount is greater than maximum allowed.');
    this.AccountBalance += amount;
  }
}