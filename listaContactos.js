let contactos = [
  { id: 1, nombre: "alejandra", soltero: false },
  { id: 2, nombre: "sara", soltero: true },
];

function agregarContacto(nuevoContacto) {
  contactos.push(nuevoContacto);
}

function borrarContacto(contactoId) {
  let nuevosContactos = contactos.filter(
    (contacto) => contacto.id !== contactoId
  );
  contactos = nuevosContactos;
}

function buscarContacto(contactoId) {
  let contacto = contactos.filter((item) => item.id === contactoId);
  return contacto[0];
}

function imprimirContactos() {
  return contactos;

}

module.exports = {
    agregarContacto,
    borrarContacto,
    buscarContacto,
    imprimirContactos}
