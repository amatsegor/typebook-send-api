import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export class PostbackButton extends AbstractButton {
    title: string;
    payload: string;

    constructor(title: string, payload: string) {
        super("postback");
        this.title = title;
        this.payload = payload;
    }
}