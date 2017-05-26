"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FacebookMessage_1 = require("../models/FacebookMessage");
var TextMessageBuilder_1 = require("../message_builders/TextMessageBuilder");
var AbstractMessageRouter_1 = require("./AbstractMessageRouter");
/**
 * Created by amatsegor on 5/24/17.
 */
var TextMessageRouter = (function (_super) {
    __extends(TextMessageRouter, _super);
    function TextMessageRouter(message, metadata) {
        _super.call(this);
        this.message = message;
        this.metadata = metadata;
    }
    TextMessageRouter.prototype.to = function (recipientId) {
        this.facebookMessage = new FacebookMessage_1.FacebookMessage({ id: recipientId });
        this.facebookMessage.message = new TextMessageBuilder_1.TextMessage(this.message, this.metadata);
        return new TextMessageBuilder_1.TextMessageBuilder(this.facebookMessage);
    };
    return TextMessageRouter;
}(AbstractMessageRouter_1.AbstractMessageRouter));
exports.TextMessageRouter = TextMessageRouter;
