import {SharablePayloadTemplate} from "./SharablePayloadTemplate";
import {Element} from "../models/elements/Element";
/**
 * Created by amatsegor on 5/24/17.
 */

export class GenericPayloadTemplate extends SharablePayloadTemplate {
    elements: Element[];
    image_aspect_ratio: ImageAspectRatio;

    constructor(elements: Element[], imageAspectRatio?: ImageAspectRatio) {
        super("generic");
        this.image_aspect_ratio = imageAspectRatio;
        this.elements = elements.length > 10 ? elements.slice(0, 9) : elements
    }
}

export enum ImageAspectRatio {
    Horizontal, Square
}