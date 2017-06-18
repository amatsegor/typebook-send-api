import {AbstractPayloadTemplate} from "./AbstractPayloadTemplate";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare abstract class SharablePayloadTemplate extends AbstractPayloadTemplate {
    sharable: boolean;
    template_type: string;

    constructor(templateType: string);

    isSharable(sharable: boolean);
}