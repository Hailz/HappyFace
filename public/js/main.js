$(document).ready(function(){
  console.log('Ello there.');

  $('.deleteProduct').click(function(e){
    e.preventDefault();
    var product = $(this);
    $.ajax({
      method:'DELETE',

    }).done(function(data){
      element.remove(;)
    })
  })

})