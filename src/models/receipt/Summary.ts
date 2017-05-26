/**
 * Created by amatsegor on 5/25/17.
 */

export class Summary {
    total_cost: number;
    subtotal: number;
    shipping_cost: number;
    total_tax: number;

    constructor(totalCost: number) {
        this.total_cost = totalCost;
    }

    withSubtotal(subtotal: number): Summary {
        this.subtotal = subtotal;
        return this;
    }

    withShippingCost(shippingCost: number): Summary {
        this.shipping_cost = shippingCost;
        return this;
    }

    withTax(tax: number): Summary {
        this.total_tax = tax;
        return this;
    }
}