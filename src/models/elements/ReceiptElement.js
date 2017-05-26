/**
 * Created by amatsegor on 5/25/17.
 */
"use strict";
var ReceiptElement = (function () {
    function ReceiptElement(title, price) {
        this.title = title;
        this.price = price;
    }
    ReceiptElement.prototype.withSubtitle = function (subtitle) {
        this.subtitle = subtitle;
        return this;
    };
    ReceiptElement.prototype.withQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    ReceiptElement.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    ReceiptElement.prototype.withImage = function (imageUrl) {
        this.image_url = imageUrl;
        return this;
    };
    return ReceiptElement;
}());
exports.ReceiptElement = ReceiptElement;
