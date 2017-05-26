"use strict";
/**
 * Created by amatsegor on 5/25/17.
 */
var SenderActionMessageBuilder = (function () {
    function SenderActionMessageBuilder(recipientId) {
        this.message = new SenderActionMessage({ id: recipientId }, "");
    }
    SenderActionMessageBuilder.prototype.markSeen = function () {
        this.message.sender_action = "mark_seen";
        return this.build();
    };
    SenderActionMessageBuilder.prototype.typingOn = function () {
        this.message.sender_action = "typing_on";
        return this.build();
    };
    SenderActionMessageBuilder.prototype.typingOff = function () {
        this.message.sender_action = "typing_off";
        return this.build();
    };
    SenderActionMessageBuilder.prototype.isValid = function () {
        return (["mark_seen", "typing_on", "typing_off"].indexOf(this.message.sender_action) != -1);
    };
    SenderActionMessageBuilder.prototype.build = function () {
        if (!this.isValid()) {
            throw new Error("Builder is not ready!");
        }
        return this.message;
    };
    return SenderActionMessageBuilder;
}());
exports.SenderActionMessageBuilder = SenderActionMessageBuilder;
var SenderActionMessage = (function () {
    function SenderActionMessage(recipient, senderAction) {
        this.recipient = recipient;
        this.sender_action = senderAction;
    }
    return SenderActionMessage;
}());
