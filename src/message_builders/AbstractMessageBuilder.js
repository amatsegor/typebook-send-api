"use strict";
/**
 * Created by amatsegor on 5/24/17.
 */
var AbstractMessageBuilder = (function () {
    function AbstractMessageBuilder(facebookMessage) {
        this.facebookMessage = facebookMessage;
    }
    AbstractMessageBuilder.prototype.build = function () {
        if (!this.isValid()) {
            throw new Error("Builder is not ready!");
        }
        return this.facebookMessage;
    };
    return AbstractMessageBuilder;
}());
exports.AbstractMessageBuilder = AbstractMessageBuilder;
var AbstractMessage = (function () {
    function AbstractMessage() {
    }
    return AbstractMessage;
}());
exports.AbstractMessage = AbstractMessage;
