import {AbstractMessageBuilder, AbstractMessage} from "./AbstractMessageBuilder";
import {FacebookMessage} from "../models/FacebookMessage";
/**
 * Created by amatsegor on 5/25/17.
 */

export declare class QuickReplyMessageBuilder extends AbstractMessageBuilder {
    private quickReplyMessage: QuickReplyMessage;

    withTitle(title: string): QuickReplyMessageBuilder;

    withQuickReplies(qr1?: QuickReply, qr2?: QuickReply, qr3?: QuickReply): QuickReplyMessageBuilder;

    constructor(facebookMessage: FacebookMessage);

    protected isValid(): boolean;

    public build(): FacebookMessage;
}

export declare class QuickReplyMessage extends AbstractMessage {
    text: string;
    quick_replies: QuickReply[];

    constructor(text: string);
}

export declare class QuickReply {
    content_type: string;
    title: string;
    payload: string;
    image_url: string;

    constructor(content_type: string, payload?: string);

    static textAndImage(text: string, imageUrl?: string, payload?: string): QuickReply;

    static location(payload?: string): QuickReply;
}