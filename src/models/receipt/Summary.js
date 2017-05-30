/**
 * Created by amatsegor on 5/25/17.
 */
"use strict";
var Summary = (function () {
    function Summary(totalCost) {
        this.total_cost = totalCost;
    }
    Summary.prototype.withSubtotal = function (subtotal) {
        this.subtotal = subtotal;
        return this;
    };
    Summary.prototype.withShippingCost = function (shippingCost) {
        this.shipping_cost = shippingCost;
        return this;
    };
    Summary.prototype.withTax = function (tax) {
        this.total_tax = tax;
        return this;
    };
    return Summary;
}());
exports.Summary = Summary;
//# sourceMappingURL=Summary.js.map