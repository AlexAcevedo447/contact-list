const { Contact } = require("./entities");

const contactList = [new Contact(
    0,
    "Andrés",
    "Carrera",
    2347363328,
    "United States",
    "Ohio",
    "GreenHold"
),
new Contact(
    1,
    "Caroline",
    "Wormwood",
    78637245728139,
    "Germany",
    "Berlin",
    "UtshezLernen"
)];
//expression form
const create = function (contact) {
    contactList.push(contact);
    return contact;
}
//Declaration form
function showAll() {
    return contactList;
}

const showOne = function (id) {
    return contactList.find((contact) => contact.id === id);
}

const update = function (id, contact = new Contact()) {
    const cont = showOne(id);
    cont.name = contact.name;
    cont.name = contact.last_name;
    cont.phone = contact.phone;
    cont.city = contact.city;
    cont.country = contact.country;
    cont.district = contact.district;

    return cont;
}
//Arrow/CallBack form
const deleteOne = (index) => {
    const contact = contactList.splice(index, 1)[0];
    return contact;
}

module.exports = {
    contactList,
    create,
    deleteOne,
    update,
    showAll,
    showOne
}