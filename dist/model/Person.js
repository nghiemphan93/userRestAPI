"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        //region Getter Setter
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map