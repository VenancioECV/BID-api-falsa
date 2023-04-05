/* import { faker } from '@faker-js/faker'; */
const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 8000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class Usuario {
    constructor() {
        this.id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numero = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
  }


class Empresa {
    constructor() {
        this.id = faker.datatype.uuid()
        this.nombre = faker.company.name()
        this.direccion = {
            calle: faker.address.streetAddress(),
            ciudad: faker.address.cityName(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}


app.get("/api/users/new", (req, res) => {
    res.json( new Usuario );
    
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Empresa );
});

app.get("/api/users/company", (req, res) => {
    const usuario = new Usuario()
    const empresa = new Empresa()

    res.json({
        usuario,
        empresa
    }
     );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );