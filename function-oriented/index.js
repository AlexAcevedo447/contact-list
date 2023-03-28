const { contactList, create, showAll, showOne, deleteOne, update } = require('./crud');
const { Contact } = require('./entities');

console.log("-----------Mostrar todos los contactos-------------");
console.log(showAll());
console.log("------------Crear contacto------------");
console.log(create(new Contact(
    2,
    "Lucas",
    "Forero",
    987983457,
    "Colombia",
    "Medellín",
    "San Diego"
))
)
console.log(showAll());
console.log("-----------Mostrar un contacto-------------");
console.log(showOne(1));
console.log("------------Actualizar contacto------------");
console.log(update(
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
console.log(showAll());
console.log("------------Eliminar contacto------------");
console.log(deleteOne(0))
console.log(showAll())