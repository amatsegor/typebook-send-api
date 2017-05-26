import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export class CallButton extends AbstractButton {
    title: string;
    payload: string;

    constructor(title: string, phoneNumber: string) {
        super("phone_number");
        this.title = title;

        //language=RegExp
        if (!phoneNumber.match("\\+\\d+")) throw new Error("Payload must be a phone number");
        this.payload = phoneNumber;
    }
}