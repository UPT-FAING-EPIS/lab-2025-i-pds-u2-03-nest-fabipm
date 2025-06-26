import { ICommand } from './icommand.interface';

/**
 * <summary>
 *   Represents an ATM (Automated Teller Machine) that executes a command.
 * </summary>
 * <remarks>
 *   The ATM class uses the Command design pattern to perform actions.
 * </remarks>
 */
export class ATM {
  /**
   * <summary>
   *   The command to be executed by the ATM.
   * </summary>
   * <type>ICommand</type>
   */
  _command: ICommand;

  /**
   * <summary>
   *   Initializes a new instance of the ATM class with a specific command.
   * </summary>
   * <param name="command">The command to associate with the ATM.</param>
   */
  constructor(command: ICommand) {
    this._command = command;
  }

  /**
   * <summary>
   *   Executes the associated command's action.
   * </summary>
   * <returns>void</returns>
   */
  public Action(): void {
    this._command.Execute();
  }
}