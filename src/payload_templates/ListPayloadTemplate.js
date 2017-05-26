"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SharablePayloadTemplate_1 = require("./SharablePayloadTemplate");
/**
 * Created by amatsegor on 5/25/17.
 */
var ListPayloadTemplate = (function (_super) {
    __extends(ListPayloadTemplate, _super);
    function ListPayloadTemplate(button, topElementStyle) {
        var elements = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            elements[_i - 2] = arguments[_i];
        }
        _super.call(this, "list");
        this.elements = elements;
        if (button)
            this.buttons = [button];
        switch (topElementStyle.valueOf()) {
            case TopElementStyle.Compact.valueOf():
                this.top_element_style = "compact";
                break;
            case TopElementStyle.Large.valueOf():
                this.top_element_style = "large";
                break;
        }
    }
    return ListPayloadTemplate;
}(SharablePayloadTemplate_1.SharablePayloadTemplate));
exports.ListPayloadTemplate = ListPayloadTemplate;
(function (TopElementStyle) {
    TopElementStyle[TopElementStyle["Large"] = 0] = "Large";
    TopElementStyle[TopElementStyle["Compact"] = 1] = "Compact";
})(exports.TopElementStyle || (exports.TopElementStyle = {}));
var TopElementStyle = exports.TopElementStyle;
