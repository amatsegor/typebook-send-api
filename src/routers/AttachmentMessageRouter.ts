import {FacebookMessage} from "../models/FacebookMessage";
import {AttachmentMessageBuilder} from "../message_builders/AttachmentMessageBuilder";
import {AbstractMessageRouter} from "./AbstractMessageRouter";
/**
 * Created by amatsegor on 5/24/17.
 */

export class AttachmentMessageRouter extends AbstractMessageRouter<AttachmentMessageBuilder> {
    to(recipientId: string): AttachmentMessageBuilder {
        return new AttachmentMessageBuilder(new FacebookMessage({id: recipientId}));
    }
}