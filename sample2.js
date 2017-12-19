// -------------------------------------------------- //
var Car = /** @class */ (function () {
    // Constructor: Optional
    function Car(name, qty) {
        if (name === void 0) { name = ""; }
        this.Type = "Vehicle";
        // Static Function (OOPS) -> Function is Object's Prototype (JS) [Shared Function]
        this.GetDetails = function (type) {
            console.log(this.Name + " | " + this.Qty);
            return "";
        };
        this.Name = name;
        this.Qty = qty;
        // Instance Function (OOPS) -> Function within the Object [Each Object of this type has its own defination of this method]
        this.GetDetailsInstance = function () {
        };
    }
    return Car;
}());
var carFord = new Car("Ford", 50);
console.dir(carFord);
var carVW = new Car("VW", 100);
console.dir(carVW);
carVW.GetDetails("");
/*var carVW = new Car();
console.dir(carVW);*/
