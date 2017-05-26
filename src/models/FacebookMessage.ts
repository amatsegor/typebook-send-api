import {Recipient} from "./Recipient";
import {AbstractMessage} from "../message_builders/AbstractMessageBuilder";
/**
 * Created by amatsegor on 5/24/17.
 */

export class FacebookMessage {
    recipient: Recipient;
    message: AbstractMessage;

    constructor(recipient: Recipient) {
        this.recipient = recipient;
    }
}