/**
 * Created by amatsegor on 5/25/17.
 */

export class Address {
    street_1: string;
    street_2: string;
    city: string;
    postal_code: string;
    state: string;
    country: string;

    constructor(streetLineOne: string, city: string, postalCode: string, state: string, country: string) {
        this.street_1 = streetLineOne;
        this.city = city;
        this.postal_code = postalCode;
        this.state = state;
        this.country = country;
    }

    withStreetLineTwo(streetLineTwo: string): Address {
        this.street_2 = streetLineTwo;
        return this;
    }
}