/**
 * Created by amatsegor on 5/25/17.
 */

export class ReceiptElement {
    title: string;
    subtitle: string;
    quantity: number;
    price: number;
    currency: string;
    image_url: string;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    withSubtitle(subtitle: string): ReceiptElement {
        this.subtitle = subtitle;
        return this;
    }

    withQuantity(quantity: number): ReceiptElement {
        this.quantity = quantity;
        return this;
    }

    withCurrency(currency: string): ReceiptElement {
        this.currency = currency;
        return this;
    }

    withImage(imageUrl: string): ReceiptElement {
        this.image_url = imageUrl;
        return this;
    }
}