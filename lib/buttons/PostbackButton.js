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
var PostbackButton = (function (_super) {
    __extends(PostbackButton, _super);
    function PostbackButton(title, payload) {
        _super.call(this, "postback");
        this.title = title;
        this.payload = payload;
    }
    return PostbackButton;
}(AbstractButton_1.AbstractButton));
exports.PostbackButton = PostbackButton;
//# sourceMappingURL=PostbackButton.js.map