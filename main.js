let name;
let number;

let check  = Number(prompt(`Premi 1 per eliminare o aggiungere un contatto, \n Premi 2 se vuoi modificare un contatto`));



let rubrica = {
  lista_contatti: [
      {'name': 'Nicola', 'number': '3331111111'},
      {'name': 'Lorenzo', 'number': '3332222222'},
      {'name': 'Paola', 'number': '3333333333'},
      {'name': 'Jenny', 'number': '3334444444'},
  ],

  mostra_tutti_contatti: function (){
    this.lista_contatti.forEach(contatto => {
      console.log(`${contatto.name}: ${contatto.number}`);
      })
  },

  mostra_contatti: function (nome){
    let contatto = this.lista_contatti.find(contatto => contatto.name == nome)
    if(contatto){
      console.log(`Contatto trovato: ${contatto.name} - ${contatto.number}`);
    }else{
      console.log("Contatto non trovato.");
      
    }
  },

  rimuovi_aggiungi_contatto: function(nome, numero){
    let contatto = this.lista_contatti.find(contatto => contatto.name == nome)
    let index = this.lista_contatti.indexOf(contatto)
    if(contatto){
      this.lista_contatti.splice(index, 1)
      console.log("Contatto eliminato");
    }else{
      this.lista_contatti.push({name, nome, numero, number})
      console.log("Contatto aggiunto");
      
    }
  },

  edit_contact: function(nome, new_number){
    let contatto = this.lista_contatti.find(contatto => contatto.name == nome)
    if(contatto){
      console.log("Contatto modificato");
      contatto.number = new_number
    }else{
      console.log("Contatto non trovato");
      
    }
  }


}

// rubrica.mostra_tutti_contatti()
rubrica.mostra_contatti(name)
// rubrica.mostra_contatti("Andrea")
// rubrica.rimuovi_aggiungi_contatto(name, number)
// rubrica.edit_contact(`Sveva`, 123)
// rubrica.edit_contact(`Mario`, 123)
// rubrica.mostra_tutti_contatti()


switch (check) {
    case 1:
        name = prompt("Inserisci il nome del contatto");
        number = prompt("Inserisci il numero del contatto");
        rubrica.rimuovi_aggiungi_contatto(name, number);
        rubrica.mostra_contatti(name);  // solo 'name'
        break;
    case 2:
        name = prompt("Inserisci il nome del contatto");
        number = prompt("Inserisci il nuovo numero del contatto");
        rubrica.edit_contact(name, number);
        rubrica.mostra_contatti(name);  // solo 'name'
        break;
    default:
        alert("Scelta non valida!");
        break;
}


rubrica.mostra_tutti_contatti()