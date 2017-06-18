import {Recipient} from "../models/Recipient";
/**
 * Created by amatsegor on 5/25/17.
 */

export declare class SenderActionMessageBuilder {
    private message: SenderActionMessage;

    constructor(recipientId: string);

    markSeen(): SenderActionMessage;

    typingOn(): SenderActionMessage;

    typingOff(): SenderActionMessage;

    protected isValid(): boolean;

    private build(): SenderActionMessage;
}

declare class SenderActionMessage {
    recipient: Recipient;
    sender_action: string;

    constructor(recipient: Recipient, senderAction: string);
}