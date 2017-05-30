"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SharablePayloadTemplate_1 = require("./SharablePayloadTemplate");
/**
 * Created by amatsegor on 5/25/17.
 */
var ReceiptPayloadTemplate = (function (_super) {
    __extends(ReceiptPayloadTemplate, _super);
    function ReceiptPayloadTemplate(templateType, receiptName, orderNumber, currency, paymentMethod, summary) {
        _super.call(this, templateType);
        this.receipt_name = receiptName;
        this.order_number = orderNumber;
        this.currency = currency;
        this.payment_method = paymentMethod;
        this.summary = summary;
    }
    ReceiptPayloadTemplate.prototype.withOrderUrl = function (orderUrl) {
        this.order_url = orderUrl;
        return this;
    };
    ReceiptPayloadTemplate.prototype.withElements = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i - 0] = arguments[_i];
        }
        this.elements = elements;
        return this;
    };
    ReceiptPayloadTemplate.prototype.withAddress = function (address) {
        this.address = address;
        return this;
    };
    ReceiptPayloadTemplate.prototype.withAdjustments = function () {
        var adjustments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            adjustments[_i - 0] = arguments[_i];
        }
        if (adjustments.length > 0) {
            this.adjustments = adjustments;
        }
        return this;
    };
    return ReceiptPayloadTemplate;
}(SharablePayloadTemplate_1.SharablePayloadTemplate));
exports.ReceiptPayloadTemplate = ReceiptPayloadTemplate;
//# sourceMappingURL=ReceiptPayloadTemplate.js.map