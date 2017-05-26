import {AbstractButton} from "../../buttons/AbstractButton";
/**
 * Created by amatsegor on 5/25/17.
 */

export class OpenGraphElement {
    url: string;
    buttons: AbstractButton[];

    constructor(url: string, button?: AbstractButton) {
        this.url = url;
        this.buttons[0] = button;
    }
}