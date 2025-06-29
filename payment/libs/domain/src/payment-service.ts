import { CashPaymentStrategy } from "./cash-payment-strategy";
import { CreditCardPaymentStrategy } from "./credit-card-payment-strategy";
import { DebitCardPaymentStrategy } from "./debit-card-payment-strategy";
import { PaymentContext } from "./payment-context";

/**
 * <summary>
 *   Provides services to process payments using different payment strategies.
 * </summary>
 */
export class PaymentService {
    /**
     * <summary>
     *   Processes a payment based on the selected payment type and amount.
     * </summary>
     * <param name="SelectedPaymentType">The type of payment selected (CreditCard, DebitCard, Cash).</param>
     * <param name="Amount">The amount to be paid.</param>
     * <returns>True if the payment is successful.</returns>
     * <exception cref="Error">Thrown when an invalid payment option is selected.</exception>
     */
    public ProcessPayment(SelectedPaymentType: number, Amount: number): boolean
    {
        //Create an Instance of the PaymentContext class
        const context = new PaymentContext();
        if (SelectedPaymentType == PaymentType.CreditCard)
        {
            context.SetPaymentStrategy(new CreditCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.DebitCard)
        {
            context.SetPaymentStrategy(new DebitCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.Cash)
        {
            context.SetPaymentStrategy(new CashPaymentStrategy());
        }
        else
        {
            throw new Error("You Select an Invalid Payment Option");
        }
        //Finally, call the Pay Method
        return context.Pay(Amount);;
    }    
}

/**
 * <summary>
 *   Enumeration for different types of payment methods.
 * </summary>
 */
export enum PaymentType
{
    CreditCard = 1,  // 1 for CreditCard
    DebitCard = 2,   // 2 for DebitCard
    Cash = 3, // 3 for Cash
}