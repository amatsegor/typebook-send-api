import {AbstractMessageBuilder, AbstractMessage} from "./AbstractMessageBuilder";
import {FacebookMessage} from "../models/FacebookMessage";
/**
 * Created by amatsegor on 5/25/17.
 */

export class QuickReplyMessageBuilder extends AbstractMessageBuilder {
    private quickReplyMessage: QuickReplyMessage;

    withTitle(title: string): QuickReplyMessageBuilder {
        this.quickReplyMessage.text = title;
        return this;
    }

    withQuickReplies(qr1?: QuickReply, qr2?: QuickReply, qr3?: QuickReply): QuickReplyMessageBuilder {
        this.quickReplyMessage.quick_replies = [qr1, qr2, qr3];
        return this;
    }

    constructor(facebookMessage: FacebookMessage){
        super(facebookMessage);
        this.quickReplyMessage = new QuickReplyMessage("");
    }

    protected isValid(): boolean {
        return this.quickReplyMessage.text.length > 0;
    }

    public build(): FacebookMessage {
        if (!this.isValid()) {
            throw new Error("Builder is not ready!");
        }
        this.facebookMessage.message = this.quickReplyMessage;
        return this.facebookMessage
    }
}

export class QuickReplyMessage extends AbstractMessage {
    text: string;
    quick_replies: QuickReply[];

    constructor(text: string) {
        super();
        this.text = text;
    }
}

export class QuickReply {
    content_type: string;
    title: string;
    payload: string;
    image_url: string;

    constructor(content_type: string, payload?: string) {
        this.content_type = content_type;
        this.payload = payload;
    }

    static textAndImage(text: string, imageUrl?: string, payload?: string): QuickReply {
        let reply = new QuickReply("text", payload);
        reply.title = text;
        reply.image_url = imageUrl;
        return reply;
    }

    static location(payload?: string): QuickReply {
        return new QuickReply("location", payload);
    }
}