import {FacebookMessage} from "../models/FacebookMessage";
/**
 * Created by amatsegor on 5/24/17.
 */

export abstract class AbstractMessageBuilder {
    protected facebookMessage: FacebookMessage;

    constructor(facebookMessage: FacebookMessage) {
        this.facebookMessage = facebookMessage;
    }

    protected abstract isValid(): boolean;

    public build(): FacebookMessage {
        if (!this.isValid()) {
            throw new Error("Builder is not ready!");
        }
        return this.facebookMessage
    }
}
export abstract class AbstractMessage {}