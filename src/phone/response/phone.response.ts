export class CreatePhoneResponse {
    type: string;
    number: number;

    constructor({ type, number }) {
        this.type = type;
        this.number = number;
    }
}
