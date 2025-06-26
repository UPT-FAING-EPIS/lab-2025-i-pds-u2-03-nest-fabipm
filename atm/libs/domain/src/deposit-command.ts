import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * <summary>
 *   Represents a command to deposit a specific amount into an account.
 * </summary>
 * <implements>ICommand</implements>
 */
export class DepositCommand implements ICommand {
  /**
   * <summary>
   *   The account where the deposit will be made.
   * </summary>
   * <type>Account</type>
   */
  _account: Account;

  /**
   * <summary>
   *   The amount to deposit into the account.
   * </summary>
   * <type>number</type>
   */
  _amount: number;

  /**
   * <summary>
   *   Initializes a new instance of the DepositCommand class.
   * </summary>
   * <param name="account">The account to deposit into.</param>
   * <param name="amount">The amount to deposit.</param>
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  /**
   * <summary>
   *   Executes the deposit action on the associated account.
   * </summary>
   * <returns>void</returns>
   */
  Execute(): void {
    this._account.Deposit(this._amount);
  }
}