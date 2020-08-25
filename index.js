
// 1) objects
// Scooter constructor
//   should create a new scooter with three properties:
// Scooter with year, color, and model properties
function  Scooter (year, color,  model) {
    this.year = year;
    this.color = color;
    this.model = model;
    this.scootermodel = function() {
        console.log(` ${this.name} ${this.color} ${this.model} 
`);
    };
}
 
let scootermodelB = new Scooter('2020', 'RED','newscoot');
scootermodel.scootermodelB ();

// 2) objects
// Driver constructor
//   should create a new driver with three properties:
// Driver with name, age, and experience properties
function Driver (name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience  = experience ;
    this.driveruser = function() {
        console.log(` ${this.year} ${this.age} ${this.experience } 
`);
    };
}
 
let driveruserB = new  Driver('Fadi', '20','newdriver');
driveruser.driveruserB ();


// 1) objects
//        PickupLocation constructor
//          should create a new PickupLocation with two properties:
// PickupLocation with address and city properties

function  PickupLocation (address, city ) {
    this.address = address;
    this.city = city;
    this.PickupLocationdata = function() {
        console.log(` ${this.adress} ${this.city}
        `);

    };

}

let PickupLocationdataB = new PickupLocation('888 moneyfengshui', 'cityName');
PickupLocationdata.PickupLocationdataB ();