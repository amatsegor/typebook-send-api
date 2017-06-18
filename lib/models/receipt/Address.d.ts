/**
 * Created by amatsegor on 5/25/17.
 */

export declare class Address {
    street_1: string;
    street_2: string;
    city: string;
    postal_code: string;
    state: string;
    country: string;

    constructor(streetLineOne: string, city: string, postalCode: string, state: string, country: string);

    withStreetLineTwo(streetLineTwo: string): Address;
}