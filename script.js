//lugares turisticos
const menu_lugares = [
  {
    id: 0,
    titulo: "Playa San José",
    categoria: "Playas",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
  {
    id: 1,
    titulo: "Playa mboi kae",
    categoria: "Playas",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
  {
    id: 2,
    titulo: "Playa San Isidro",
    categoria: "Playas",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
  {
    id: 3,
    titulo: "Santuario de la Virgen de Itacua",
    categoria: "Iglesias",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
  {
    id: 4,
    titulo: "Iglesia Ortodoxa San Jorge",
    categoria: "Iglesias",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
  {
    id: 5,
    titulo: "Plaza de Armas",
    categoria: "Plazas",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
  {
    id: 6,
    titulo: "La escalinata San Pedro ",
    categoria: "Iglesias",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
  {
    id: 7,
    titulo: "Mini zoo del Juan XXIII",
    categoria: "Animales",
    foto: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
    desc: "lugar 11111111111111111111111111",
  },
];
const section_center = document.querySelector(".section_center");
const container_boton = document.querySelector(".container_boton");
//cargar objetos
window.addEventListener("DOMContentLoaded", function () {
  display_items(menu_lugares);
  display_botones();
});

function display_botones() {
  //para obtener categorías, sin repeticiones del array y poder usarlo para crear los botones usando js
  const categorias = menu_lugares.reduce(
    function (valor, item) {
      if (!valor.includes(item.categoria)) {
        valor.push(item.categoria);
      }
      return valor;
    },
    ["Todos"]
  );

  //insertar los botones en html
  let categoria_botones = categorias.map(function (categoria) {
    return `<button class="filtro_boton" type="button" data-id=${categoria}>${categoria}</button>`;
  });
  categoria_botones = categoria_botones.join("");
  container_boton.innerHTML = categoria_botones;
  const filtros = document.querySelectorAll(".filtro_boton");

  //boton filtro
  filtros.forEach(function (btn) {
    btn.addEventListener("click", function (evento) {
      const categoria = evento.currentTarget.dataset.id;
      const lugares_categoria = menu_lugares.filter(function (item_lugar) {
        //console.log(item_lugar.categoria)
        if (item_lugar.categoria === categoria) {
          return item_lugar;
        }
      });
      if (categoria === "Todos") {
        display_items(menu_lugares);
      } else {
        display_items(lugares_categoria);
      }
    });
  });
}

//mostrar objetos
function display_items(items) {
  let mostrar_lugares = items.map(function (item) {
    //console.log(item);
    return `<article class="lugar_item">
        <img src=${item.foto} class="foto" alt="foto item" />
        <div class="lugar_info">
          <header>
            <h4>${item.titulo}</h4>
          </header>
          <p class=${item.desc}>descripcion del lugar</p>
        </div>
      </article>`;
  });
  //console.log(mostrar_lugares);
  mostrar_lugares = mostrar_lugares.join("");
  section_center.innerHTML = mostrar_lugares;
}
