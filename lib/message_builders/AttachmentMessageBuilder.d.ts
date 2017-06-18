import {AbstractMessageBuilder, AbstractMessage} from "./AbstractMessageBuilder";
import {AbstractPayloadTemplate} from "../payload_templates/AbstractPayloadTemplate";
import {Attachment} from "../models/Attachment";
import {ButtonPayloadTemplate} from "../payload_templates/ButtonPayloadTemplate";
import {UrlPayloadTemplate} from "../payload_templates/UrlPayloadTemplate";
import {GenericPayloadTemplate} from "../payload_templates/GenericPayloadTemplate";
import {ListPayloadTemplate} from "../payload_templates/ListPayloadTemplate";
import {OpenGraphPayloadTemplate} from "../payload_templates/OpenGraphPayloadTemplate";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class AttachmentMessageBuilder extends AbstractMessageBuilder {
    protected attachmentMessage: AttachmentMessage;

    withButtons(buttonPayload: ButtonPayloadTemplate): AttachmentMessageBuilder;

    generic(genericPayload: GenericPayloadTemplate): AttachmentMessageBuilder;

    list(listPayload: ListPayloadTemplate): AttachmentMessageBuilder;

    openGraph(openGraphPayload: OpenGraphPayloadTemplate): AttachmentMessageBuilder;

    url(type: string, url: string);

    private withType(type: string): AttachmentMessageBuilder;

    private withPayload(payload: AbstractPayloadTemplate): AttachmentMessageBuilder;

    protected isValid(): boolean;

    getAttachmentMessage(): AttachmentMessage;
}

export declare class AttachmentMessage extends AbstractMessage {
    attachment: Attachment;

    constructor(attachment: Attachment);
}