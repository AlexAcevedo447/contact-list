const { Contact } = require("./entities");

class Contacts {
    contactList;
    constructor() {
        this.contactList = [new Contact(
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
    }

    create(contact) {
        this.contactList.push(contact);
        return contact;
    }

    showAll() {
        return this.contactList;
    }

    showOne(id) {
        return this.contactList.find((contact) => contact.id === id);
    }

    update(id, contact = new Contact()) {
        const cont = this.showOne(id);
        cont.name = contact.name;
        cont.last_name = contact.last_name;
        cont.phone = contact.phone;
        cont.city = contact.city;
        cont.country = contact.country;
        cont.district = contact.district;

        return cont;
    }

    deleteOne(index) {
        const contact = this.contactList.splice(index, 1)[0];
        return contact;
    }
}

module.exports = {
    Contacts
}