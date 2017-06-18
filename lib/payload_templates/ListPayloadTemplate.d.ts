import {SharablePayloadTemplate} from "./SharablePayloadTemplate";
import {AbstractButton} from "../buttons/AbstractButton";
import {Element} from "../models/elements/Element"
/**
 * Created by amatsegor on 5/25/17.
 */

export declare class ListPayloadTemplate extends SharablePayloadTemplate {
    top_element_style: string;
    elements: Element[];
    buttons: AbstractButton[];

    constructor(button?: AbstractButton, topElementStyle?: TopElementStyle, ...elements: Element[]);
}

export declare enum TopElementStyle {
    Large, Compact
}