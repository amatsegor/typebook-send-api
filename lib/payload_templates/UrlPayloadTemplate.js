"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractPayloadTemplate_1 = require("./AbstractPayloadTemplate");
/**
 * Created by amatsegor on 5/24/17.
 */
var UrlPayloadTemplate = (function (_super) {
    __extends(UrlPayloadTemplate, _super);
    function UrlPayloadTemplate(url) {
        _super.call(this);
        this.url = url;
    }
    return UrlPayloadTemplate;
}(AbstractPayloadTemplate_1.AbstractPayloadTemplate));
exports.UrlPayloadTemplate = UrlPayloadTemplate;
//# sourceMappingURL=UrlPayloadTemplate.js.map