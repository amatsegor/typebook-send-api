/**
 * Created by amatsegor on 5/25/17.
 */

export declare class Summary {
    total_cost: number;
    subtotal: number;
    shipping_cost: number;
    total_tax: number;

    constructor(totalCost: number);

    withSubtotal(subtotal: number): Summary;

    withShippingCost(shippingCost: number): Summary;

    withTax(tax: number): Summary;
}