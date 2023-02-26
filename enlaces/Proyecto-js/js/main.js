"use strict";

//Slider
$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
  });

  //Post
  let posts = [
    {
      title: "Prueba de titulo 1",
      date:
        "Publicado el dia " +
        moment().format("dddd ") +
        "de " +
        moment().format("MMMM ") +
        moment().format("YYYY"),
      content:
        "Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial. Las ventas de videojuegos hasta el 1 de diciembre de 2006 habían alcanzado una cantidad de 340 millones de ejemplares (incluyendo la venta de la versión Pikachu de la consola Nintendo 64), logrando ocupar el segundo lugar de las sagas de videojuegos más vendidos de Nintendo. La franquicia celebró su décimo aniversario el 27 de febrero de 2006.",
    },
    {
      title: "Prueba de titulo 2",
      date:
        "Publicado el dia " +
        moment().format("dddd ") +
        "de " +
        moment().format("MMMM ") +
        moment().format("YYYY"),
      content:
        "The witcher 3:Whild Hunt Es un juego de perspectiva en tercera persona, el jugador controla al protagonista Geralt de Rivia, un cazador de monstruos conocido como Lobo Blanco, es un brujo, el cual emprende un largo viaje a través de Los reinos del norte. El jugador lucha contra el peligroso mundo mediante magia y espadas, mientras interactúa con los NPC y completa tanto misiones secundarias como la misión principal de la historia, La cual es encontrar a la hija adoptiva de Geralt, Ciri, y detener la profecía del invierno blanco. ",
    },
    {
      title: "Prueba de titulo 3",
      date:
        "Publicado el dia " +
        moment().format("dddd ") +
        "de " +
        moment().format("MMMM ") +
        moment().format("YYYY"),
      content:
        "Fire Emblem:Fire Emblem es una serie de juegos de estrategia por turnos en los que el jugador maneja sus unidades/personajes por un mapa con el objetivo de derrotar a los enemigos para cumplir con la misión del capítulo: tomar un castillo, sobrevivir determinados turnos el ataque enemigo, acabar con todos los enemigos del mapa o derrotar a un jefe. La saga también contiene aspectos de RPG tradicionales; así por ejemplo, el jugador puede usar su dinero para comprar armas y objetos especiales de las tiendas, visitar pueblos, tener conversaciones con PNJ o personajes antagonistas, así como intercambiar objetos entre personajes y adquirir puntos de experiencia en cada lucha para aumentar el nivel y las características de cada unidad. ",
    },
    {
      title: "Prueba de titulo 4",
      date:
        "Publicado el dia " +
        moment().format("dddd ") +
        "de " +
        moment().format("MMMM ") +
        moment().format("YYYY"),
      content:
        "A Plague Tale: Innocence sigue la historia de dos hermanos, Amicia y Hugo, que han de luchar juntos para sobrevivir a la brutalidad de un mundo desconocido para ellos y devastado por la guerra. Ambos hermanos deben huir de los soldados de la Inquisición y de la peste. El videojuego está enmarcado en la Francia medieval del siglo XIV, ambientado en la Guerra de los Cien años. ",
    },
    {
      title: "Prueba de titulo 5",
      date:
        "Publicado el dia " +
        moment().format("dddd ") +
        "de " +
        moment().format("MMMM ") +
        moment().format("YYYY"),
      content:
        "Bloodborne:El videojuego cuenta con una vista en tercera persona y su jugabilidad se enfoca en el combate basado en armas y la exploración. Los jugadores luchan contra enemigos bestiales, entre ellos jefes, usando elementos tales como armas blancas y de fuego, viajando a través de la historia, explorando las diferentes áreas del videojuego, interaccionando con los PnJs, además de descubrir y desentrañar los numerosos misterios de ese mundo. ",
    },
  ];
  posts.forEach((item, index) => {
    let post = `
    <article class='post'>
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>
    ${item.content}
    </p>
    <a href='#' class="button-more">Leer mas</a>
    </article>
    `;
    $("#posts").append(post);
  });
  //Selector de tema
  let theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });
  //Scroll arriba de la web
  $(".subir").click(function (e) {
    e.prevemtDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // Login falso

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon

  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  // Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function () {
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  // Validación
  if (window.location.href.indexOf("contact") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });

    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true,
    });
  }
});
