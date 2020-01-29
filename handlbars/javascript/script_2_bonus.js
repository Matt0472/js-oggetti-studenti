// Esercizio 2
// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.
$(document).ready(function() {
  $('.invia').click(function() {
    var source = $("entry-template").html();
    var template = Handlebars.compile(source);

    var userName = $('#add-message').val();
    var context = {
      'name': username
    };
    var html = template(context);

    $('.name-list').append(html);
  });

});
