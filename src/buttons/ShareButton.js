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
var ShareButton = (function (_super) {
    __extends(ShareButton, _super);
    function ShareButton(attachment) {
        _super.call(this, "element_share");
        this.share_contents = {
            attachment: attachment
        };
    }
    return ShareButton;
}(AbstractButton_1.AbstractButton));
exports.ShareButton = ShareButton;
//# sourceMappingURL=ShareButton.js.map