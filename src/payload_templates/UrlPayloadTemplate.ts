import {AbstractPayloadTemplate} from "./AbstractPayloadTemplate";
/**
 * Created by amatsegor on 5/24/17.
 */

export class UrlPayloadTemplate extends AbstractPayloadTemplate {
    url: string;

    constructor(url: string) {
        super();
        this.url = url;
    }
}