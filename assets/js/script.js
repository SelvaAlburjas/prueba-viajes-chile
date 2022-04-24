$(document).ready(function(){
    // Agregar smooth scrolling a todos los links
    $("a")("aside").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Evitar el comportamiento de clic de anclaje 
        event.preventDefault();
        // Almacenar
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  // tooltip redes sociales
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});

  