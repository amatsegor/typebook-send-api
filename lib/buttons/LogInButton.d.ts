import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export class LogInButton extends AbstractButton {
    url: string;

    constructor(callbackUrl: string) {
        super("account_link");
        this.url = callbackUrl;
    }
}