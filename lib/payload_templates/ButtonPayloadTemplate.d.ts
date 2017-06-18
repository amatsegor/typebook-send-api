import {AbstractButton} from "../buttons/AbstractButton";
import {SharablePayloadTemplate} from "./SharablePayloadTemplate";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class ButtonPayloadTemplate extends SharablePayloadTemplate {
    text: string;
    buttons: AbstractButton[];

    constructor(text: string, button1?: AbstractButton, button2?: AbstractButton, button3?: AbstractButton);
}