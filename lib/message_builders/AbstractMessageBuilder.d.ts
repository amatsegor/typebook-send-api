import {FacebookMessage} from "../models/FacebookMessage";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare abstract class AbstractMessageBuilder {
    protected facebookMessage: FacebookMessage;

    constructor(facebookMessage: FacebookMessage);

    protected abstract isValid(): boolean;

    public build(): FacebookMessage;
}
export declare abstract class AbstractMessage {}