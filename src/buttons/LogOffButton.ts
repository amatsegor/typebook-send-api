import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export class LogOffButton extends AbstractButton {
    callback_url: string;

    constructor(callbackUrl: string) {
        super("account_unlink");
        this.callback_url = callbackUrl;
    }
}