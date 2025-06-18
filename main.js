const rubrica = {
  contacts: [
    { nome: 'Nicola', telefono: '3331111111' },
    { nome: 'Lorenzo', telefono: '3332222222' },
    { nome: 'Paola', telefono: '3333333333' },
    { nome: 'Jenny', telefono: '3334444444' }
  ],

  mostraTutti() {
    let risultato = "📒 Contatti:\n";
    this.contacts.forEach((c, i) => {
      risultato += `${i + 1}. ${c.nome} - ${c.telefono}\n`;
    });
    document.getElementById("output").textContent = risultato;
  },

  mostraContatto(nome) {
    const contatto = this.contacts.find(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (contatto) {
      document.getElementById("output").textContent = `🔍 Contatto trovato:\n${contatto.nome} - ${contatto.telefono}`;
    } else {
      document.getElementById("output").textContent = `❌ Contatto \"${nome}\" non trovato.`;
    }
  },

  aggiungiContatto(nome, telefono) {
    this.contacts.push({ nome, telefono });
    document.getElementById("output").textContent = `✅ Contatto aggiunto:\n${nome} - ${telefono}`;
  },

  eliminaContatto(nome) {
    const indice = this.contacts.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (indice !== -1) {
      const rimosso = this.contacts.splice(indice, 1)[0];
      document.getElementById("output").textContent = `🗑️ Contatto eliminato:\n${rimosso.nome}`;
    } else {
      document.getElementById("output").textContent = `❌ Contatto \"${nome}\" non trovato.`;
    }
  },

  modificaContatto(nomeVecchio, nomeNuovo, telefonoNuovo) {
    const contatto = this.contacts.find(c => c.nome.toLowerCase() === nomeVecchio.toLowerCase());
    if (contatto) {
      contatto.nome = nomeNuovo || contatto.nome;
      contatto.telefono = telefonoNuovo || contatto.telefono;
      document.getElementById("output").textContent = `✏️ Contatto modificato:\n${contatto.nome} - ${contatto.telefono}`;
    } else {
      document.getElementById("output").textContent = `❌ Contatto \"${nomeVecchio}\" non trovato.`;
    }
  },

  mostraContattoPrompt() {
    const nome = prompt("Inserisci il nome del contatto da visualizzare:");
    if (nome) this.mostraContatto(nome);
  },

  aggiungiContattoPrompt() {
    const nome = prompt("Inserisci il nome del nuovo contatto:");
    const telefono = prompt("Inserisci il numero di telefono:");
    if (nome && telefono) this.aggiungiContatto(nome, telefono);
  },

  eliminaContattoPrompt() {
    const nome = prompt("Inserisci il nome del contatto da eliminare:");
    if (nome) this.eliminaContatto(nome);
  },

  modificaContattoPrompt() {
    const vecchioNome = prompt("Inserisci il nome del contatto da modificare:");
    if (!vecchioNome) return;
    const nuovoNome = prompt("Inserisci il nuovo nome (lascia vuoto per non modificare):");
    const nuovoTelefono = prompt("Inserisci il nuovo numero (lascia vuoto per non modificare):");
    this.modificaContatto(vecchioNome, nuovoNome, nuovoTelefono);
  }
};
