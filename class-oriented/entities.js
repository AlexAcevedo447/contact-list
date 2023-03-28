class Contact {
    constructor(id, name, last_name, phone, country, city, district) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.district = district;
    }
}

module.exports = {
    Contact
}