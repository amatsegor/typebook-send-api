import {Attachment} from "../models/Attachment";
import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class ShareButton extends AbstractButton {
    share_contents: any;

    constructor(attachment: Attachment);
}