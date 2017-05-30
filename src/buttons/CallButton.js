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
var CallButton = (function (_super) {
    __extends(CallButton, _super);
    function CallButton(title, phoneNumber) {
        _super.call(this, "phone_number");
        this.title = title;
        //language=RegExp
        if (!phoneNumber.match("\\+\\d+"))
            throw new Error("Payload must be a phone number");
        this.payload = phoneNumber;
    }
    return CallButton;
}(AbstractButton_1.AbstractButton));
exports.CallButton = CallButton;
//# sourceMappingURL=CallButton.js.map