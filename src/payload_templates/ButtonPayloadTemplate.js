"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SharablePayloadTemplate_1 = require("./SharablePayloadTemplate");
/**
 * Created by amatsegor on 5/24/17.
 */
var ButtonPayloadTemplate = (function (_super) {
    __extends(ButtonPayloadTemplate, _super);
    function ButtonPayloadTemplate(text, button1, button2, button3) {
        _super.call(this, "button");
        this.text = text;
        this.buttons = [button1, button2, button3];
    }
    return ButtonPayloadTemplate;
}(SharablePayloadTemplate_1.SharablePayloadTemplate));
exports.ButtonPayloadTemplate = ButtonPayloadTemplate;
