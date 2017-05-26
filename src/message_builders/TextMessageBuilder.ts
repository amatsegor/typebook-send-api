import {AbstractMessageBuilder, AbstractMessage} from "./AbstractMessageBuilder";
/**
 * Created by amatsegor on 5/24/17.
 */

export class TextMessageBuilder extends AbstractMessageBuilder {
    protected isValid(): boolean {
        if (!this.facebookMessage) return false;
        let textMessage = (<TextMessage>this.facebookMessage.message);
        if (!textMessage.text) return false;
        return true;
    }
}

export class TextMessage extends AbstractMessage {
    text: string;
    metadata: string;

    constructor(text: string, metadata?: string) {
        super();
        this.text = text;
        this.metadata = metadata;
    }
}