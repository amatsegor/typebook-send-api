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
var GenericPayloadTemplate = (function (_super) {
    __extends(GenericPayloadTemplate, _super);
    function GenericPayloadTemplate(elements, imageAspectRatio) {
        _super.call(this, "generic");
        this.image_aspect_ratio = imageAspectRatio;
        this.elements = elements.length > 10 ? elements.slice(0, 9) : elements;
    }
    return GenericPayloadTemplate;
}(SharablePayloadTemplate_1.SharablePayloadTemplate));
exports.GenericPayloadTemplate = GenericPayloadTemplate;
(function (ImageAspectRatio) {
    ImageAspectRatio[ImageAspectRatio["Horizontal"] = 0] = "Horizontal";
    ImageAspectRatio[ImageAspectRatio["Square"] = 1] = "Square";
})(exports.ImageAspectRatio || (exports.ImageAspectRatio = {}));
var ImageAspectRatio = exports.ImageAspectRatio;
