import {SharablePayloadTemplate} from "./SharablePayloadTemplate";
import {Element} from "../models/elements/Element";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class GenericPayloadTemplate extends SharablePayloadTemplate {
    elements: Element[];
    image_aspect_ratio: ImageAspectRatio;

    constructor(elements: Element[], imageAspectRatio?: ImageAspectRatio);
}

export declare enum ImageAspectRatio {
    Horizontal, Square
}