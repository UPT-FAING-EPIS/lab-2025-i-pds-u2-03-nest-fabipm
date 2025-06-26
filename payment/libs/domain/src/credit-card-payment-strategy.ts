import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * <summary>
 *   Implements the payment strategy for credit card payments.
 * </summary>
 * <implements>IPaymentStrategy</implements>
 */
export class CreditCardPaymentStrategy implements IPaymentStrategy {
    /**
     * <summary>
     *   Processes the payment using a credit card.
     * </summary>
     * <param name="amount">The amount to be paid using the credit card.</param>
     * <returns>True if the payment is successful.</returns>
     */
    public Pay(amount: number): boolean
    {
        console.info("Customer pays Rs " + amount + " using Credit Card");
        return true;
    }    
}