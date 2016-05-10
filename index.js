$.get( "./README.md", function( data ) {
  $( "#content" ).html(marked(data));
});
