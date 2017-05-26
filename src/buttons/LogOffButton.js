"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractButton_1 = require("./AbstractButton");
/**
 * Created by amatsegor on 5/24/17.
 */
var LogOffButton = (function (_super) {
    __extends(LogOffButton, _super);
    function LogOffButton(callbackUrl) {
        _super.call(this, "account_unlink");
        this.callback_url = callbackUrl;
    }
    return LogOffButton;
}(AbstractButton_1.AbstractButton));
exports.LogOffButton = LogOffButton;
