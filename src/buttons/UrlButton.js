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
var UrlButton = (function (_super) {
    __extends(UrlButton, _super);
    function UrlButton(title, url, ratio, messengerExtensions, fallbackUrl) {
        _super.call(this, "web_url");
        this.title = title;
        this.url = url;
        this.messenger_extensions = messengerExtensions;
        this.fallback_url = fallbackUrl;
        this.webview_height_ratio = ratio;
    }
    UrlButton.prototype.withWebviewShareButtonEnabled = function (enabled) {
        this.webview_share_button = enabled ? "SHOW" : "HIDE";
    };
    return UrlButton;
}(AbstractButton_1.AbstractButton));
exports.UrlButton = UrlButton;
(function (WebviewHeightRatio) {
    WebviewHeightRatio[WebviewHeightRatio["compact"] = 0] = "compact";
    WebviewHeightRatio[WebviewHeightRatio["tall"] = 1] = "tall";
    WebviewHeightRatio[WebviewHeightRatio["full"] = 2] = "full";
})(exports.WebviewHeightRatio || (exports.WebviewHeightRatio = {}));
var WebviewHeightRatio = exports.WebviewHeightRatio;
//# sourceMappingURL=UrlButton.js.map