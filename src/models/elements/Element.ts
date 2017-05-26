import {AbstractButton} from "../../buttons/AbstractButton";
import {UrlButton} from "../../buttons/UrlButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export class Element {
    title: string;
    subtitle: string;
    item_url: string;
    image_url: string;
    default_action: UrlButton;
    buttons: AbstractButton[];

    constructor(title: string) {
        this.title = title;
    }

    withSubtitle(subtitle: string): Element {
        this.subtitle = subtitle;
        return this;
    }

    withItemUrl(itemUrl: string): Element {
        this.item_url = itemUrl;
        return this;
    }

    withImageUrl(imageUrl: string): Element {
        this.image_url = imageUrl;
        return this;
    }

    withDefaultAction(defaultAction: UrlButton): Element {
        this.default_action = defaultAction;
        return this;
    }
}