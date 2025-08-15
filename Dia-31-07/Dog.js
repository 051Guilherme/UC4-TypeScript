"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    // o constructor é um metodo chamado automaticamente quando crimamos um objeto a partir dessa classe. Nele, normalmente, vamos passar valores para os atributos.
    function Dog(dogName, dogWeight, dogBreed) {
        this.name = dogName;
        this.weight = dogWeight;
        this.breed = dogBreed;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking!"));
    };
    Dog.prototype.eat = function () {
        console.log("".concat(this.breed, " is eating!"));
    };
    return Dog;
}());
exports.Dog = Dog;
