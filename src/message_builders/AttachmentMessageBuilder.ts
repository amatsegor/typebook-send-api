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

export class AttachmentMessageBuilder extends AbstractMessageBuilder {
    protected attachmentMessage: AttachmentMessage = new AttachmentMessage({type: "", payload: null});

    withButtons(buttonPayload: ButtonPayloadTemplate): AttachmentMessageBuilder {
        return this.withType("template").withPayload(buttonPayload)
    }

    generic(genericPayload: GenericPayloadTemplate): AttachmentMessageBuilder {
        return this.withType("template").withPayload(genericPayload)
    }

    list(listPayload: ListPayloadTemplate): AttachmentMessageBuilder {
        return this.withType("template").withPayload(listPayload);
    }

    openGraph(openGraphPayload: OpenGraphPayloadTemplate): AttachmentMessageBuilder {
        return this.withType("template").withPayload(openGraphPayload);
    }

    url(type: string, url: string) {
        return this.withType(type).withPayload(new UrlPayloadTemplate(url))
    }

    private withType(type: string): AttachmentMessageBuilder {
        this.attachmentMessage.attachment.type = type;
        this.facebookMessage.message = this.attachmentMessage;
        return this;
    }

    private withPayload(payload: AbstractPayloadTemplate): AttachmentMessageBuilder {
        this.attachmentMessage.attachment.payload = payload;
        this.facebookMessage.message = this.attachmentMessage;
        return this;
    }

    protected isValid(): boolean {
        if (!this.attachmentMessage.attachment.payload) return false;
        if (!this.attachmentMessage.attachment.type) return false;
        return true;
    }

    getAttachmentMessage(): AttachmentMessage {
        return this.attachmentMessage
    }
}

export class AttachmentMessage extends AbstractMessage {
    attachment: Attachment;

    constructor(attachment: Attachment) {
        super();
        this.attachment = attachment;
    }
}