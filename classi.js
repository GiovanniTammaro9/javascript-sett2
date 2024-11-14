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
        return `marca: ${this.marca}, modello: ${this.modello}, anno: ${this.anno}, chilometraggio: ${this.chilometraggio} km`;
    }
}

let fiat = new Automobile("fiat", "bravo", 2008, 75.000);
console.log(fiat.descrizione());

fiat.aggiungiChilometri(400);
console.log(fiat.descrizione());