import {AbstractMessageBuilder} from "./AbstractMessageBuilder";
import {AttachmentMessage} from "./AttachmentMessageBuilder";
/**
 * Created by amatsegor on 5/24/17.
 */

export class UrlMessageBuilder extends AbstractMessageBuilder {
    protected isValid(): boolean {
        if (!this.facebookMessage) return false;
        let attachment = (<AttachmentMessage>this.facebookMessage.message).attachment;
        if (!attachment.payload) return false;
        if (!attachment.type) return false;
        return true;
    }
}