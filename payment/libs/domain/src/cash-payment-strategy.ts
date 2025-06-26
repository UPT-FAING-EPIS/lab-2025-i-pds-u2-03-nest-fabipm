import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * <summary>
 *   Implements the payment strategy for cash payments.
 * </summary>
 * <implements>IPaymentStrategy</implements>
 */
export class CashPaymentStrategy implements IPaymentStrategy {
    /**
     * <summary>
     *   Processes the payment using cash.
     * </summary>
     * <param name="amount">The amount to be paid in cash.</param>
     * <returns>True if the payment is successful.</returns>
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " By Cash");
        return true;
    }
}