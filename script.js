$(document).ready(function(){
    $('.dot-wrapper').on('click','input',function(event){
       let target = event.target.value.toLowerCase();
       $('.additional-content-text span').each(function(){
        $(this).hide();
       })
       $('span.' + target).show();
    })
    $('input[value="Stanovi"]').click();
    $('.cta-button').on('click',function(){
        $('#formModal').show();
        $('#formModal .close').on('click',function(){
            $('#formModal').hide();
        })
    })
})