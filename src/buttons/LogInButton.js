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
var LogInButton = (function (_super) {
    __extends(LogInButton, _super);
    function LogInButton(callbackUrl) {
        _super.call(this, "account_link");
        this.url = callbackUrl;
    }
    return LogInButton;
}(AbstractButton_1.AbstractButton));
exports.LogInButton = LogInButton;
//# sourceMappingURL=LogInButton.js.map