import {AttachmentMessageBuilder} from "../message_builders/AttachmentMessageBuilder";
import {AbstractMessageRouter} from "./AbstractMessageRouter";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class AttachmentMessageRouter extends AbstractMessageRouter<AttachmentMessageBuilder> {
    to(recipientId: string): AttachmentMessageBuilder;
}