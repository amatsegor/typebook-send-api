"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractMessageBuilder_1 = require("./AbstractMessageBuilder");
/**
 * Created by amatsegor on 5/24/17.
 */
var UrlMessageBuilder = (function (_super) {
    __extends(UrlMessageBuilder, _super);
    function UrlMessageBuilder() {
        _super.apply(this, arguments);
    }
    UrlMessageBuilder.prototype.isValid = function () {
        if (!this.facebookMessage)
            return false;
        var attachment = this.facebookMessage.message.attachment;
        if (!attachment.payload)
            return false;
        if (!attachment.type)
            return false;
        return true;
    };
    return UrlMessageBuilder;
}(AbstractMessageBuilder_1.AbstractMessageBuilder));
exports.UrlMessageBuilder = UrlMessageBuilder;
//# sourceMappingURL=UrlMessageBuilder.js.map