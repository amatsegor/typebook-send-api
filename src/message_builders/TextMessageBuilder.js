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
var TextMessageBuilder = (function (_super) {
    __extends(TextMessageBuilder, _super);
    function TextMessageBuilder() {
        _super.apply(this, arguments);
    }
    TextMessageBuilder.prototype.isValid = function () {
        if (!this.facebookMessage)
            return false;
        var textMessage = this.facebookMessage.message;
        if (!textMessage.text)
            return false;
        return true;
    };
    return TextMessageBuilder;
}(AbstractMessageBuilder_1.AbstractMessageBuilder));
exports.TextMessageBuilder = TextMessageBuilder;
var TextMessage = (function (_super) {
    __extends(TextMessage, _super);
    function TextMessage(text, metadata) {
        _super.call(this);
        this.text = text;
        this.metadata = metadata;
    }
    return TextMessage;
}(AbstractMessageBuilder_1.AbstractMessage));
exports.TextMessage = TextMessage;
