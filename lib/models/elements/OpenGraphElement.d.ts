import {AbstractButton} from "../../buttons/AbstractButton";
/**
 * Created by amatsegor on 5/25/17.
 */

export declare class OpenGraphElement {
    url: string;
    buttons: AbstractButton[];

    constructor(url: string, button?: AbstractButton);
}