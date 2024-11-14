class Automobile {
    marca =  ""
    modello = ""
    anno = 0

    constructor(marca, modello, anno) {
        this.marca = marca 
        this.modello = modello
        this.anno = anno 

    }
    
    descrizione() {
        return "quest'automobile è un utilitaria , comoda ed affidabile";
    }
}

let fiat = new Automobile("fiat", "bravo", 2008);
console.log(fiat.descrizione());