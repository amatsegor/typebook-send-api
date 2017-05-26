import {SharablePayloadTemplate} from "./SharablePayloadTemplate";
import {AbstractButton} from "../buttons/AbstractButton";
import {Element} from "../models/elements/Element"
/**
 * Created by amatsegor on 5/25/17.
 */

export class ListPayloadTemplate extends SharablePayloadTemplate {
    top_element_style: string;
    elements: Element[];
    buttons: AbstractButton[];

    constructor(button?: AbstractButton, topElementStyle?: TopElementStyle, ...elements: Element[]) {
        super("list");
        this.elements = elements;

        if (button) this.buttons = [button];

        switch (topElementStyle.valueOf()) {
            case TopElementStyle.Compact.valueOf():
                this.top_element_style = "compact";
                break;
            case TopElementStyle.Large.valueOf():
                this.top_element_style = "large";
                break;
        }
    }
}

export enum TopElementStyle {
    Large, Compact
}