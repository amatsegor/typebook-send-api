"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractMessageBuilder_1 = require("./AbstractMessageBuilder");
var UrlPayloadTemplate_1 = require("../payload_templates/UrlPayloadTemplate");
/**
 * Created by amatsegor on 5/24/17.
 */
var AttachmentMessageBuilder = (function (_super) {
    __extends(AttachmentMessageBuilder, _super);
    function AttachmentMessageBuilder() {
        _super.apply(this, arguments);
        this.attachmentMessage = new AttachmentMessage({ type: "", payload: null });
    }
    AttachmentMessageBuilder.prototype.withButtons = function (buttonPayload) {
        return this.withType("template").withPayload(buttonPayload);
    };
    AttachmentMessageBuilder.prototype.generic = function (genericPayload) {
        return this.withType("template").withPayload(genericPayload);
    };
    AttachmentMessageBuilder.prototype.list = function (listPayload) {
        return this.withType("template").withPayload(listPayload);
    };
    AttachmentMessageBuilder.prototype.openGraph = function (openGraphPayload) {
        return this.withType("template").withPayload(openGraphPayload);
    };
    AttachmentMessageBuilder.prototype.url = function (type, url) {
        return this.withType(type).withPayload(new UrlPayloadTemplate_1.UrlPayloadTemplate(url));
    };
    AttachmentMessageBuilder.prototype.withType = function (type) {
        this.attachmentMessage.attachment.type = type;
        this.facebookMessage.message = this.attachmentMessage;
        return this;
    };
    AttachmentMessageBuilder.prototype.withPayload = function (payload) {
        this.attachmentMessage.attachment.payload = payload;
        this.facebookMessage.message = this.attachmentMessage;
        return this;
    };
    AttachmentMessageBuilder.prototype.isValid = function () {
        if (!this.attachmentMessage.attachment.payload)
            return false;
        if (!this.attachmentMessage.attachment.type)
            return false;
        return true;
    };
    AttachmentMessageBuilder.prototype.getAttachmentMessage = function () {
        return this.attachmentMessage;
    };
    return AttachmentMessageBuilder;
}(AbstractMessageBuilder_1.AbstractMessageBuilder));
exports.AttachmentMessageBuilder = AttachmentMessageBuilder;
var AttachmentMessage = (function (_super) {
    __extends(AttachmentMessage, _super);
    function AttachmentMessage(attachment) {
        _super.call(this);
        this.attachment = attachment;
    }
    return AttachmentMessage;
}(AbstractMessageBuilder_1.AbstractMessage));
exports.AttachmentMessage = AttachmentMessage;
//# sourceMappingURL=AttachmentMessageBuilder.js.map