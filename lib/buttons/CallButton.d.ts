import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class CallButton extends AbstractButton {
    title: string;
    payload: string;

    constructor(title: string, phoneNumber: string);
}