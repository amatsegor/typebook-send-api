"use strict";
/**
 * Created by amatsegor on 5/24/17.
 */
var Element = (function () {
    function Element(title) {
        this.title = title;
    }
    Element.prototype.withSubtitle = function (subtitle) {
        this.subtitle = subtitle;
        return this;
    };
    Element.prototype.withItemUrl = function (itemUrl) {
        this.item_url = itemUrl;
        return this;
    };
    Element.prototype.withImageUrl = function (imageUrl) {
        this.image_url = imageUrl;
        return this;
    };
    Element.prototype.withDefaultAction = function (defaultAction) {
        this.default_action = defaultAction;
        return this;
    };
    return Element;
}());
exports.Element = Element;
