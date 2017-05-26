/**
 * Created by amatsegor on 5/25/17.
 */
"use strict";
var Address = (function () {
    function Address(streetLineOne, city, postalCode, state, country) {
        this.street_1 = streetLineOne;
        this.city = city;
        this.postal_code = postalCode;
        this.state = state;
        this.country = country;
    }
    Address.prototype.withStreetLineTwo = function (streetLineTwo) {
        this.street_2 = streetLineTwo;
        return this;
    };
    return Address;
}());
exports.Address = Address;
