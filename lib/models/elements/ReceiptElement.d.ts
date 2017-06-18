/**
 * Created by amatsegor on 5/25/17.
 */

export declare class ReceiptElement {
    title: string;
    subtitle: string;
    quantity: number;
    price: number;
    currency: string;
    image_url: string;

    constructor(title: string, price: number);

    withSubtitle(subtitle: string): ReceiptElement;

    withQuantity(quantity: number): ReceiptElement;

    withCurrency(currency: string): ReceiptElement;

    withImage(imageUrl: string): ReceiptElement;
}