export class CreateContactResponse {
    name: string;
    last_name: string;
    document_type: string;
    document_number: number;
    age: number;
    email: string;

    constructor({ name, last_name, document_type, document_number, age, email }) {
        this.name = name;
        this.last_name = last_name;
        this.document_type = document_type;
        this.document_number = document_number;
        this.age = age;
        this.email = email;
    }
}
