"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractMessageRouter_1 = require("./AbstractMessageRouter");
var SenderActionMessageBuilder_1 = require("../message_builders/SenderActionMessageBuilder");
/**
 * Created by amatsegor on 5/25/17.
 */
var SenderActionMessageRouter = (function (_super) {
    __extends(SenderActionMessageRouter, _super);
    function SenderActionMessageRouter() {
        _super.apply(this, arguments);
    }
    SenderActionMessageRouter.prototype.to = function (recipientId) {
        return new SenderActionMessageBuilder_1.SenderActionMessageBuilder(recipientId);
    };
    return SenderActionMessageRouter;
}(AbstractMessageRouter_1.AbstractMessageRouter));
exports.SenderActionMessageRouter = SenderActionMessageRouter;
