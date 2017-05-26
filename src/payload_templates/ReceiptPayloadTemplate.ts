import {SharablePayloadTemplate} from "./SharablePayloadTemplate";
import {ReceiptElement} from "../models/elements/ReceiptElement";
import {Address} from "../models/receipt/Address";
import {Summary} from "../models/receipt/Summary";
import {Adjustment} from "../models/receipt/Adjustment";
/**
 * Created by amatsegor on 5/25/17.
 */

export class ReceiptPayloadTemplate extends SharablePayloadTemplate {
    receipt_name: string;
    order_number: string;
    currency: string;
    payment_method: string;
    order_url: string;
    timestamp: string;
    elements: ReceiptElement[];
    address: Address;
    summary: Summary;
    adjustments: Adjustment[];

    constructor(templateType: string, receiptName: string, orderNumber: string, currency: string, paymentMethod: string, summary: Summary) {
        super(templateType);
        this.receipt_name = receiptName;
        this.order_number = orderNumber;
        this.currency = currency;
        this.payment_method = paymentMethod;
        this.summary = summary;
    }

    withOrderUrl(orderUrl: string): ReceiptPayloadTemplate {
        this.order_url = orderUrl;
        return this;
    }

    withElements(...elements: ReceiptElement[]): ReceiptPayloadTemplate {
        this.elements = elements;
        return this;
    }

    withAddress(address: Address): ReceiptPayloadTemplate {
        this.address = address;
        return this;
    }

    withAdjustments(...adjustments: Adjustment[]): ReceiptPayloadTemplate {
        if (adjustments.length > 0){
            this.adjustments = adjustments;
        }
        return this;
    }
}