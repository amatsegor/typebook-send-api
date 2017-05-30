"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractMessageRouter_1 = require("./AbstractMessageRouter");
var QuickReplyMessageBuilder_1 = require("../message_builders/QuickReplyMessageBuilder");
var FacebookMessage_1 = require("../models/FacebookMessage");
/**
 * Created by amatsegor on 5/25/17.
 */
var QuickReplyRouter = (function (_super) {
    __extends(QuickReplyRouter, _super);
    function QuickReplyRouter() {
        _super.apply(this, arguments);
    }
    QuickReplyRouter.prototype.to = function (recipientId) {
        return new QuickReplyMessageBuilder_1.QuickReplyMessageBuilder(new FacebookMessage_1.FacebookMessage({ id: recipientId }));
    };
    return QuickReplyRouter;
}(AbstractMessageRouter_1.AbstractMessageRouter));
exports.QuickReplyRouter = QuickReplyRouter;
//# sourceMappingURL=QuickReplyMessageRouter.js.map