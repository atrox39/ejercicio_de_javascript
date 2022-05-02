const datos = document.querySelector("#datos");

const inombre = document.querySelector("#nombre");
const iapellido = document.querySelector("#apellido");
const ifecha_nacimiento = document.querySelector("#fecha_nacimiento");
const icorreo = document.querySelector("#correo");

const t_body = document.querySelector("#t_body");

let datosFormulario = {
  nombre: '',
  apellido: '',
  fecha_nacimiento: '',
  correo: '',
};

let lista = [];

function guardarDatos(event){
  datosFormulario = { ...datosFormulario, [event.target.name]: event.target.value };
}

function actualizarTabla(){
  t_body.innerHTML = "";
  lista.map(({ nombre, apellido, fecha_nacimiento, correo }) => {
    let row = document.createElement('tr');
    let col1 = document.createElement('td');
    let col2 = document.createElement('td');
    let col3 = document.createElement('td');
    let col4 = document.createElement('td');
    col1.innerText = nombre;
    col2.innerText = apellido;
    col3.innerText = fecha_nacimiento;
    col4.innerText = correo;
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    t_body.prepend(row);
  });
}

inombre.addEventListener('change', guardarDatos);
iapellido.addEventListener('change', guardarDatos);
ifecha_nacimiento.addEventListener('change', guardarDatos);
icorreo.addEventListener('change', guardarDatos);

datos.addEventListener('submit', function (event) {
  event.preventDefault();
  lista.push({...datosFormulario});
  actualizarTabla();
});

actualizarTabla();