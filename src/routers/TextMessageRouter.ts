import {FacebookMessage} from "../models/FacebookMessage";
import {TextMessageBuilder, TextMessage} from "../message_builders/TextMessageBuilder";
import {AbstractMessageRouter} from "./AbstractMessageRouter";
/**
 * Created by amatsegor on 5/24/17.
 */

export class TextMessageRouter extends AbstractMessageRouter<TextMessageBuilder> {
    private facebookMessage: FacebookMessage;
    private message: string;
    private metadata: string;

    constructor(message: string, metadata?: string) {
        super();
        this.message = message;
        this.metadata = metadata;
    }

    to(recipientId: string): TextMessageBuilder {
        this.facebookMessage = new FacebookMessage({id: recipientId});
        this.facebookMessage.message = new TextMessage(this.message, this.metadata);
        return new TextMessageBuilder(this.facebookMessage);
    }
}