class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Максимальна кількість квартир досягнута. Неможливо додати ще одну квартиру.");
        }
    }
}

const person1 = new Person("Іван", "чоловіча");
const person2 = new Person("Марія", "жіноча");
const person3 = new Person("Петро", "чоловіча");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

const house = new House(2); 

house.addApartment(apartment1);
house.addApartment(apartment2);

const apartment3 = new Apartment();
house.addApartment(apartment3);

console.log(house);
