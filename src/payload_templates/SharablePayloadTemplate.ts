import {AbstractPayloadTemplate} from "./AbstractPayloadTemplate";
/**
 * Created by amatsegor on 5/24/17.
 */

export abstract class SharablePayloadTemplate extends AbstractPayloadTemplate {
    sharable: boolean;
    template_type: string;

    constructor(templateType: string) {
        super();
        this.template_type = templateType;
    }

    isSharable(sharable: boolean) {
        this.sharable = sharable;
    }
}