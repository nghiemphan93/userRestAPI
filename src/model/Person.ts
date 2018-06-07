export class Person{
    private _firstName: string;
    private _lastName: string
    private _age: number;


    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    //region Getter Setter
    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
    //endregion
}