import {AbstractMessageRouter} from "./AbstractMessageRouter";
import {SenderActionMessageBuilder} from "../message_builders/SenderActionMessageBuilder";
/**
 * Created by amatsegor on 5/25/17.
 */

export class SenderActionMessageRouter extends AbstractMessageRouter<SenderActionMessageBuilder> {

    to(recipientId: string): SenderActionMessageBuilder {
        return new SenderActionMessageBuilder(recipientId);
    }
}