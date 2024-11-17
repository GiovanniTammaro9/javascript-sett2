class Automobile {
    marca =  ""
    modello = ""
    anno = 0

    //proprietà privata
    #contatoreChiamata = 0;
    

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;

    }

    static confrontaChilometraggio(auto3, auto4) {
        if (auto3.chilometraggio > auto4.chilometraggio) {
            return `${auto3.marca} ${auto3.modello} ha un chilometraggio maggiore di ${auto4.marca} ${auto4.modello}`;
        }else if (auto3.chilometraggio < auto4.chilometraggio) {
            return `${auto4.marca} ${auto4.modello} ha un chilometraggio maggiore di ${auto3.marca} ${auto3.modello}`;
        }else {
            `le due auto hanno chilometraggio uguale`;
        }
    }

    controllaChilometri() {
        return this._controllaChilometri();
    }

    _controllaChilometri() {
        const soglia = 1000000;
        if (this.chilometraggio > soglia) {
            return `Attenzione: il chilometraggio ha superato la soglia di ${soglia} km`;
        }else {
            return `il chilometraggio è sotto la soglia di ${soglia}`;
        }
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

    mostraChilometraggio() {
        console.log(this._controllaChilometri());
    }

    descrizione() {
        return `${super.descrizione()}, autonomia: ${this.autonomia}km`;
    }

    

   

    
    
}

//creo due oggetti automobile per vedere chi ha il chilometraggio piu alto

const auto3 = new Automobile("fiat", "bravo", 2008, 90000);
const auto4 = new Automobile("renault", "clio", 2005, 60000);
console.log(Automobile.confrontaChilometraggio(auto3,auto4));

//chilometraggio elettrica
const autoElettrica2 = new elettrica("fiat", "bravo", 2008, 100000);
autoElettrica2.mostraChilometraggio();
console.log(autoElettrica2.mostraChilometraggio());

let fiat = new Automobile("fiat", "bravo", 2008, 75.000, 200);
console.log(fiat.descrizione());

fiat.aggiungiChilometri(400);
console.log(fiat.descrizione());

const autoElettrica = new elettrica("fiat", "bravo", 2008, 75.000, 200);
console.log(autoElettrica.descrizione());

autoElettrica.ricarica(200);
console.log(autoElettrica.descrizione());

//eta della macchina

const auto2 =new Automobile("fiat", "bravo", 2008, 120000);
console.log(`l'età dell'auto è: ${auto2.mostraEta()}`);
    //controllo chilometraggio
console.log(auto2.controllaChilometri());

//aggiungo il metodo saluta con la prototype chain

Automobile.prototype.saluta = function() {
    return `Ciao, sono una ${this.marca} ${this.modello}`;

};

const mercedes = new elettrica("Mercedes", "classeA");
const auto = new Automobile("fiat", "bravo");
console.log(auto.saluta());
console.log(mercedes.saluta());





