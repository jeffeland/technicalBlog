$.get( "./blogpostexample1.md", function( data ) {
  $( "#content" ).html(marked(data));
});
