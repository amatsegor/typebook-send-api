"use strict";
var TextMessageRouter_1 = require("./routers/TextMessageRouter");
var AttachmentMessageRouter_1 = require("./routers/AttachmentMessageRouter");
var UrlMessageRouter_1 = require("./routers/UrlMessageRouter");
var QuickReplyMessageRouter_1 = require("./routers/QuickReplyMessageRouter");
var SenderActionMessageRouter_1 = require("./routers/SenderActionMessageRouter");
/**
 * Created by amatsegor on 5/22/17.
 */
var Message = (function () {
    function Message() {
    }
    Message.textMessage = function (message, metadata) {
        return new TextMessageRouter_1.TextMessageRouter(message, metadata);
    };
    Message.audioMessage = function (audioUrl) {
        return new UrlMessageRouter_1.UrlMessageRouter("audio", audioUrl);
    };
    Message.fileMessage = function (fileUrl) {
        return new UrlMessageRouter_1.UrlMessageRouter("file", fileUrl);
    };
    Message.videoMessage = function (videoUrl) {
        return new UrlMessageRouter_1.UrlMessageRouter("video", videoUrl);
    };
    Message.imageMessage = function (videoUrl) {
        return new UrlMessageRouter_1.UrlMessageRouter("image", videoUrl);
    };
    Message.attachmentMessage = function () {
        return new AttachmentMessageRouter_1.AttachmentMessageRouter();
    };
    Message.quickReplyMessage = function () {
        return new QuickReplyMessageRouter_1.QuickReplyRouter();
    };
    Message.senderActionMessage = function () {
        return new SenderActionMessageRouter_1.SenderActionMessageRouter();
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map