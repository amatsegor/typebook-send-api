import {AbstractMessageBuilder, AbstractMessage} from "./AbstractMessageBuilder";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class TextMessageBuilder extends AbstractMessageBuilder {
    protected isValid(): boolean;
}

export declare class TextMessage extends AbstractMessage {
    text: string;
    metadata: string;

    constructor(text: string, metadata?: string);
}