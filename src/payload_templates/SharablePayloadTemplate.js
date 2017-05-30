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
var SharablePayloadTemplate = (function (_super) {
    __extends(SharablePayloadTemplate, _super);
    function SharablePayloadTemplate(templateType) {
        _super.call(this);
        this.template_type = templateType;
    }
    SharablePayloadTemplate.prototype.isSharable = function (sharable) {
        this.sharable = sharable;
    };
    return SharablePayloadTemplate;
}(AbstractPayloadTemplate_1.AbstractPayloadTemplate));
exports.SharablePayloadTemplate = SharablePayloadTemplate;
//# sourceMappingURL=SharablePayloadTemplate.js.map