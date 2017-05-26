import {Recipient} from "../models/Recipient";
/**
 * Created by amatsegor on 5/25/17.
 */

export class SenderActionMessageBuilder {
    private message: SenderActionMessage;

    constructor(recipientId: string) {
        this.message = new SenderActionMessage({id: recipientId}, "");
    }

    markSeen(): SenderActionMessage{
        this.message.sender_action = "mark_seen";
        return this.build();
    }

    typingOn(): SenderActionMessage{
        this.message.sender_action = "typing_on";
        return this.build();
    }

    typingOff(): SenderActionMessage{
        this.message.sender_action = "typing_off";
        return this.build();
    }

    protected isValid(): boolean {
        return (["mark_seen", "typing_on", "typing_off"].indexOf(this.message.sender_action) != -1);
    }

    private build(): SenderActionMessage {
        if (!this.isValid()) {
            throw new Error("Builder is not ready!");
        }
        return this.message
    }
}

class SenderActionMessage {
    recipient: Recipient;
    sender_action: string;

    constructor(recipient: Recipient, senderAction: string) {
        this.recipient = recipient;
        this.sender_action = senderAction;
    }
}