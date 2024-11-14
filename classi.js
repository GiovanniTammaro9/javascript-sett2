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

