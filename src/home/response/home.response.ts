export class CreateHomeResponse {
    locality: string;
    street: string;
    description: string;
    street_number: number;

    constructor({ locality, street, description, street_number }) {
        this.locality = locality;
        this.street = street;
        this.description = description;
        this.street_number = street_number;
    }
}
