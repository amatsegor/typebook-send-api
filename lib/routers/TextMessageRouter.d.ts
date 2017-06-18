import {FacebookMessage} from "../models/FacebookMessage";
import {TextMessageBuilder, TextMessage} from "../message_builders/TextMessageBuilder";
import {AbstractMessageRouter} from "./AbstractMessageRouter";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class TextMessageRouter extends AbstractMessageRouter<TextMessageBuilder> {
    private facebookMessage: FacebookMessage;
    private message: string;
    private metadata: string;

    constructor(message: string, metadata?: string);

    to(recipientId: string): TextMessageBuilder;
}