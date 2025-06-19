let agenda = {
  contacts: [
    { nome: 'Nicola', telefono: '3331111111' },
    { nome: 'Lorenzo', telefono: '3332222222' },
    { nome: 'Paola', telefono: '3333333333' },
    { nome: 'Jenny', telefono: '3334444444' }
  ]
};

function mostraContatti(lista = agenda.contacts) {
  const tbody = document.querySelector('#tabella tbody');
  tbody.innerHTML = '';

  lista.forEach((contatto, index) => {
    let riga = document.createElement('tr');
    riga.innerHTML = `
      <td><input value="${contatto.nome}" onchange="modificaContatto(${index}, this.value, 'nome')"></td>
      <td><input value="${contatto.telefono}" onchange="modificaContatto(${index}, this.value, 'telefono')"></td>
      <td class="azioni">
        <button onclick="eliminaContatto(${index})">❌</button>
      </td>
    `;
    tbody.appendChild(riga);
  });
}

function aggiungiContatto() {
  let nome = document.getElementById('nome').value.trim();
  let telefono = document.getElementById('telefono').value.trim();
  if (nome && telefono) {
    agenda.contacts.push({ nome, telefono });
    mostraContatti();
    document.getElementById('nome').value = '';
    document.getElementById('telefono').value = '';
  } else {
    alert("Inserisci nome e telefono!");
  }
}

function eliminaContatto(index) {
  if (confirm("Sei sicuro di voler eliminare questo contatto?")) {
    agenda.contacts.splice(index, 1);
    mostraContatti();
  }
}

function modificaContatto(index, valore, campo) {
  agenda.contacts[index][campo] = valore;
}

function cercaContatto() {
  let query = document.getElementById('ricerca').value.toLowerCase();
  let filtrati = agenda.contacts.filter(c => c.nome.toLowerCase().includes(query));
  mostraContatti(filtrati);
}

// Mostra contatti iniziali all'avvio
mostraContatti();
