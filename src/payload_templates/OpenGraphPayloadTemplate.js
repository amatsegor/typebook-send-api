"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractPayloadTemplate_1 = require("./AbstractPayloadTemplate");
/**
 * Created by amatsegor on 5/25/17.
 */
var OpenGraphPayloadTemplate = (function (_super) {
    __extends(OpenGraphPayloadTemplate, _super);
    function OpenGraphPayloadTemplate(element) {
        _super.call(this);
        this.template_type = "open_graph";
        this.elements = [element];
    }
    return OpenGraphPayloadTemplate;
}(AbstractPayloadTemplate_1.AbstractPayloadTemplate));
exports.OpenGraphPayloadTemplate = OpenGraphPayloadTemplate;
