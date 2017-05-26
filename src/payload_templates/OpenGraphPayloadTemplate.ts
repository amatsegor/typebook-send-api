import {AbstractPayloadTemplate} from "./AbstractPayloadTemplate";
import {OpenGraphElement} from "../models/elements/OpenGraphElement";
/**
 * Created by amatsegor on 5/25/17.
 */

export class OpenGraphPayloadTemplate extends AbstractPayloadTemplate {
    elements: OpenGraphElement[];
    template_type = "open_graph";

    constructor(element: OpenGraphElement){
        super();
        this.elements = [element];
    }
}