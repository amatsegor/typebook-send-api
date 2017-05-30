"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractMessageBuilder_1 = require("./AbstractMessageBuilder");
/**
 * Created by amatsegor on 5/25/17.
 */
var QuickReplyMessageBuilder = (function (_super) {
    __extends(QuickReplyMessageBuilder, _super);
    function QuickReplyMessageBuilder(facebookMessage) {
        _super.call(this, facebookMessage);
        this.quickReplyMessage = new QuickReplyMessage("");
    }
    QuickReplyMessageBuilder.prototype.withTitle = function (title) {
        this.quickReplyMessage.text = title;
        return this;
    };
    QuickReplyMessageBuilder.prototype.withQuickReplies = function (qr1, qr2, qr3) {
        this.quickReplyMessage.quick_replies = [qr1, qr2, qr3];
        return this;
    };
    QuickReplyMessageBuilder.prototype.isValid = function () {
        return this.quickReplyMessage.text.length > 0;
    };
    QuickReplyMessageBuilder.prototype.build = function () {
        if (!this.isValid()) {
            throw new Error("Builder is not ready!");
        }
        this.facebookMessage.message = this.quickReplyMessage;
        return this.facebookMessage;
    };
    return QuickReplyMessageBuilder;
}(AbstractMessageBuilder_1.AbstractMessageBuilder));
exports.QuickReplyMessageBuilder = QuickReplyMessageBuilder;
var QuickReplyMessage = (function (_super) {
    __extends(QuickReplyMessage, _super);
    function QuickReplyMessage(text) {
        _super.call(this);
        this.text = text;
    }
    return QuickReplyMessage;
}(AbstractMessageBuilder_1.AbstractMessage));
exports.QuickReplyMessage = QuickReplyMessage;
var QuickReply = (function () {
    function QuickReply(content_type, payload) {
        this.content_type = content_type;
        this.payload = payload;
    }
    QuickReply.textAndImage = function (text, imageUrl, payload) {
        var reply = new QuickReply("text", payload);
        reply.title = text;
        reply.image_url = imageUrl;
        return reply;
    };
    QuickReply.location = function (payload) {
        return new QuickReply("location", payload);
    };
    return QuickReply;
}());
exports.QuickReply = QuickReply;
//# sourceMappingURL=QuickReplyMessageBuilder.js.map