export class User {

    id?: number;
    dni: string;
    name: string;
    lastName: string;
    email: string;
    city: string;
    country: string;

    constructor(dni: string, name: string, lastName: string, email: string, city: string, country: string, id?: number,) {
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.city = city;
        this.country = country;
        this.id = id;
    }


}
