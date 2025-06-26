import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * <summary>
 *   Implements the payment strategy for debit card payments.
 * </summary>
 * <implements>IPaymentStrategy</implements>
 */
export class DebitCardPaymentStrategy implements IPaymentStrategy {
    /**
     * <summary>
     *   Processes the payment using a debit card.
     * </summary>
     * <param name="amount">The amount to be paid using the debit card.</param>
     * <returns>True if the payment is successful.</returns>
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " using Debit Card");
        return true;
    }
}