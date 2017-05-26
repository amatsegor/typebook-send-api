/**
 * Created by amatsegor on 5/24/17.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractMessageRouter_1 = require("./AbstractMessageRouter");
var UrlMessageBuilder_1 = require("../message_builders/UrlMessageBuilder");
var FacebookMessage_1 = require("../models/FacebookMessage");
var AttachmentMessageBuilder_1 = require("../message_builders/AttachmentMessageBuilder");
var UrlMessageRouter = (function (_super) {
    __extends(UrlMessageRouter, _super);
    function UrlMessageRouter(type, url) {
        _super.call(this);
        this.url = url;
        this.type = type;
    }
    UrlMessageRouter.prototype.to = function (recipientId) {
        var facebookMessage = new FacebookMessage_1.FacebookMessage({ id: recipientId });
        facebookMessage.message = new AttachmentMessageBuilder_1.AttachmentMessageBuilder(facebookMessage).url(this.type, this.url).getAttachmentMessage();
        return new UrlMessageBuilder_1.UrlMessageBuilder(facebookMessage);
    };
    return UrlMessageRouter;
}(AbstractMessageRouter_1.AbstractMessageRouter));
exports.UrlMessageRouter = UrlMessageRouter;
