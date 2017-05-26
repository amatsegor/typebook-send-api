/**
 * Created by amatsegor on 5/24/17.
 */

import {AbstractMessageRouter} from "./AbstractMessageRouter";
import {UrlMessageBuilder} from "../message_builders/UrlMessageBuilder";
import {FacebookMessage} from "../models/FacebookMessage";
import {AttachmentMessageBuilder} from "../message_builders/AttachmentMessageBuilder";

export class UrlMessageRouter extends AbstractMessageRouter<UrlMessageBuilder> {
    private url: string;
    private type: string;

    constructor(type: string, url: string) {
        super();
        this.url = url;
        this.type = type;
    }

    to(recipientId: string): UrlMessageBuilder {
        let facebookMessage = new FacebookMessage({id: recipientId});
        facebookMessage.message = new AttachmentMessageBuilder(facebookMessage).url(this.type, this.url).getAttachmentMessage();
        return new UrlMessageBuilder(facebookMessage);
    }
}