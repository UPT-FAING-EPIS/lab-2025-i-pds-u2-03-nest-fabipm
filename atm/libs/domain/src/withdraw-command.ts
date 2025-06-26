import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * <summary>
 *   Represents a command to withdraw a specific amount from an account.
 * </summary>
 * <implements>ICommand</implements>
 */
export class WithdrawCommand implements ICommand {
  /**
   * <summary>
   *   The account from which the withdrawal will be made.
   * </summary>
   * <type>Account</type>
   */
  _account: Account;

  /**
   * <summary>
   *   The amount to withdraw from the account.
   * </summary>
   * <type>number</type>
   */
  _amount: number;

  /**
   * <summary>
   *   Initializes a new instance of the WithdrawCommand class.
   * </summary>
   * <param name="account">The account to withdraw from.</param>
   * <param name="amount">The amount to withdraw.</param>
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  /**
   * <summary>
   *   Executes the withdraw action on the associated account.
   * </summary>
   * <returns>void</returns>
   */
  Execute(): void {
    this._account.Withdraw(this._amount);
  }
}