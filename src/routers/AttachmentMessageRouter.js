"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FacebookMessage_1 = require("../models/FacebookMessage");
var AttachmentMessageBuilder_1 = require("../message_builders/AttachmentMessageBuilder");
var AbstractMessageRouter_1 = require("./AbstractMessageRouter");
/**
 * Created by amatsegor on 5/24/17.
 */
var AttachmentMessageRouter = (function (_super) {
    __extends(AttachmentMessageRouter, _super);
    function AttachmentMessageRouter() {
        _super.apply(this, arguments);
    }
    AttachmentMessageRouter.prototype.to = function (recipientId) {
        return new AttachmentMessageBuilder_1.AttachmentMessageBuilder(new FacebookMessage_1.FacebookMessage({ id: recipientId }));
    };
    return AttachmentMessageRouter;
}(AbstractMessageRouter_1.AbstractMessageRouter));
exports.AttachmentMessageRouter = AttachmentMessageRouter;
//# sourceMappingURL=AttachmentMessageRouter.js.map