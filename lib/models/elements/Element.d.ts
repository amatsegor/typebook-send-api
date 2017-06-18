import {AbstractButton} from "../../buttons/AbstractButton";
import {UrlButton} from "../../buttons/UrlButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class Element {
    title: string;
    subtitle: string;
    item_url: string;
    image_url: string;
    default_action: UrlButton;
    buttons: AbstractButton[];

    constructor(title: string);

    withSubtitle(subtitle: string): Element;

    withItemUrl(itemUrl: string): Element;

    withImageUrl(imageUrl: string): Element;

    withDefaultAction(defaultAction: UrlButton): Element;
}