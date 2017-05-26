/**
 * Created by amatsegor on 5/24/17.
 */

export abstract class AbstractButton {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }
}