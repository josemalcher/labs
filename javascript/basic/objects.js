'use strict';

// Literal Objects
// --------------------------------

var showDate = function(num) {
    return new Date(num, 0, 1);
};

// Object literal
var javascript = {
    influences: ['Self', 'Scheme', 'Java'],
    developer: 'Brendan Eich',
    created: showDate(1995)
};

var c = {
    influences: ['B', 'ALGOL'],
    developer: 'Dennis Ritchie',
    created: showDate(1972)
};

console.log(javascript);
console.log(c);


// ES5 - Objects
// --------------------------------

// Objects
var animal = {
    respirar: function() {
        return console.log('respirando!');
    },
    andar: function() {
        return console.log('andando!');
    },
    correr: function() {
        return console.log('correndo!');
    },
    dormir: function() {
        return console.log('dormindo!');
    },
    acordar: function() {
        return console.log('acordando!');
    }
};

var cachorro = Object.create(animal, {
    latir: {
        value: function() {
            return console.log('au au!!!');
        }
    }
});

var gato = Object.create(animal, {
    miar: {
        value: function() {
            return console.log('meow!!!');
        }
    }
});

// Properties
Object.defineProperty(cachorro, 'morder', {
    value: function() {
        return console.log('mordendo!!!');
    },
    writable: false,
    enumerable: false,
    configurable: false

});

Object.defineProperty(gato, 'arranhar', {
    value: function() {
        return console.log('arranhando!!!');
    }
});

Object.defineProperty(Object.getPrototypeOf(cachorro), 'comer', {
    value: function() {
        return console.log('comendo!!!');
    }
});

cachorro.respirar();
cachorro.latir();
cachorro.morder();

gato.acordar();
gato.miar();
gato.arranhar();


// Others
var carro = carro || {};

carro.modelo = 'Ethios';
carro.marca = 'Toyota';
carro.hasOwnProperty('modelo');

console.log(carro);
