export default class Currency {
    constructor(code, name) {
        if (typeof(code) !== 'string') {
            throw new TypeError('Code Must be string');
        }
        else {
            this._code = code;
        }
        if (typeof(name) !== 'string') {
            throw new TypeError('Name Must be string');
        }
        else {
            this._name = name;
        }
    }

    get name() {
        return this._name;
    }

    set name(v) {
        this._name = v;
    }

    get code() {
        return this._code;
    }

    set code(v) {
        this._code = v;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
