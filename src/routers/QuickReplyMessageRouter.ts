import {AbstractMessageRouter} from "./AbstractMessageRouter";
import {QuickReplyMessageBuilder} from "../message_builders/QuickReplyMessageBuilder";
import {FacebookMessage} from "../models/FacebookMessage";
/**
 * Created by amatsegor on 5/25/17.
 */

export class QuickReplyRouter extends AbstractMessageRouter<QuickReplyMessageBuilder> {

    to(recipientId: string): QuickReplyMessageBuilder {
        return new QuickReplyMessageBuilder(new FacebookMessage({id: recipientId}));
    }
}