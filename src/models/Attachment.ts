import {AbstractPayloadTemplate} from "../payload_templates/AbstractPayloadTemplate";
/**
 * Created by amatsegor on 5/24/17.
 */

export class Attachment {
    type: string;
    payload: AbstractPayloadTemplate;

    constructor(type: string, payload: AbstractPayloadTemplate) {
        this.type = type;
        this.payload = payload;
    }
}