class Automobile {
    marca =  ""
    modello = ""
    anno = 0
    

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;

    }

    mostraEta() {
        return this.#calcolaEta();
    }

    #calcolaEta() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }





    aggiungiChilometri(km) {
        if(km > 0) {
            this.chilometraggio += km;
            console.log(`Aggiunti ${km} chilometri. chilometraggio attuale: ${this.chilometraggio} km.`);
        }else {
            console.log("inserire un valore positivo di kilometri");
        }
    }
    
    descrizione() {
        return `marca: ${this.marca}, modello: ${this.modello}, anno: ${this.anno}, chilometraggio: ${this.chilometraggio} km, autonomia: ${this.autonomia} km`;
    }

    ricarica(km) {
        if(km > 0) {
            this.autonomia += km;
            console.log(`Aggiunti ${km} chilometri. autonomia attuale: ${this.autonomia} km.`);
        }else {
            console.log("inserire un valore positivo di kilometri");
        }
    }

    
}

class elettrica extends Automobile {
    autonomia = ""

    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `${super.descrizione()}, autonomia: ${this.autonomia}km`;
    }

    
}

let fiat = new Automobile("fiat", "bravo", 2008, 75.000, 200);
console.log(fiat.descrizione());

fiat.aggiungiChilometri(400);
console.log(fiat.descrizione());

const autoElettrica = new elettrica("fiat", "bravo", 2008, 75.000, 200);
console.log(autoElettrica.descrizione());

autoElettrica.ricarica(200);
console.log(autoElettrica.descrizione());

//eta della macchina

const auto2 =new Automobile("fiat", "bravo", 2008);
console.log(`l'età dell'auto è: ${auto2.mostraEta()}`);

//aggiungo il metodo saluta con la prototype chain

Automobile.prototype.saluta = function() {
    return `Ciao, sono una ${this.marca} ${this.modello}`;

};


const auto = new Automobile("fiat", "bravo");
console.log(auto.saluta());





