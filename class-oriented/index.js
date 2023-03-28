const { Contacts } = require('./crud');
const { Contact } = require('./entities');
const contacts = new Contacts();

console.log("-----------Mostrar todos los contactos-------------");
console.log(contacts.showAll());
console.log("------------Crear contacto------------");
console.log(contacts.create(new Contact(
    2,
    "Lucas",
    "Forero",
    987983457,
    "Colombia",
    "Medellín",
    "San Diego"
))
)
console.log(contacts.showAll());
console.log("-----------Mostrar un contacto-------------");
console.log(contacts.showOne(1));
console.log("------------Actualizar contacto------------");
console.log(contacts.update(
    2,
    new Contact(
        undefined,
        "Anderson",
        "Puentes",
        987983457,
        "Colombia",
        "Medellín",
        "San Diego"
    )
))
console.log(contacts.showAll());
console.log("------------Eliminar contacto------------");
console.log(contacts.deleteOne(0))
console.log(contacts.showAll())