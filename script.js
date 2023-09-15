//lugares turisticos
const menu_lugares = [
    {
      id: 0,
      titulo: "Playa San José",
      categoria: "Playas",
      foto: "https://visitaparaguay.com.py/uploads/2345-1.webp",
      desc: "nuevo lugar",
    },
    {
      id: 1,
      titulo: "Playa mboi kae",
      categoria: "Playas",
      foto: "https://media-cdn.tripadvisor.com/media/photo-s/0c/74/19/57/geheimtipp-playa-playa.jpg",
      desc: "lugar 11111111111111111111111111",
    },
    {
      id: 2,
      titulo: "Playa San Isidro",
      categoria: "Playas",
      foto: "https://masencarnacion.s3.us-west-2.amazonaws.com/uploads/public/611/e6e/470/611e6e4702240976763849.jpg",
      desc: "lugar 11111111111111111111111111",
    },
    {
      id: 3,
      titulo: "Santuario de la Virgen de Itacua",
      categoria: "Iglesias",
      foto: "https://visitaparaguay.com.py/uploads/3213-2.webp",
      desc: "lugar 11111111111111111111111111",
    },
    {
      id: 4,
      titulo: "Iglesia Ortodoxa San Jorge",
      categoria: "Iglesias",
      foto: "https://encarnacion.com.py/custom/domain_1/image_files/sitemgr_photo_4409.jpg",
      desc: "lugar 11111111111111111111111111",
    },
    {
      id: 5,
      titulo: "Plaza de Armas",
      categoria: "Plazas",
      foto: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/83/d6/b6/plaza-de-armas.jpg?w=1200&h=-1&s=1",
      desc: "lugar 11111111111111111111111111",
    },
    {
      id: 6,
      titulo: "La escalinata San Pedro ",
      categoria: "Plazas",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZk2Bhf6hUnVU2CK4kVHqWoNoZ5MpsfaqrvShd3RJqiv50_SezqsvePUUJyzkyu3q-zbM&usqp=CAU",
      desc: "lugar 11111111111111111111111111",
    },
    {
      id: 7,
      titulo: "Mini zoo del Juan XXIII",
      categoria: "Animales",
      foto: "https://arthurhotel.com.py/home/wp-content/uploads/2016/12/juan-xxiii-5.jpg",
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
            <p class=${item.desc}>${item.desc}</p>
          </div>
        </article>`;
    });
    //console.log(mostrar_lugares);
    mostrar_lugares = mostrar_lugares.join("");
    section_center.innerHTML = mostrar_lugares;
  }