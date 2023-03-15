// instancia jquery e evita conflitos

jQuery( function($){
    $(document).ready(function(){
        
        $('.owl-carousel').owlCarousel();
        
        
    })
    $('.input-group-addon').click(function (){
        $('.form-control').css({
            'display': 'flex'
        })
        
    })
})





let owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        500:{
            items:2,
            nav:true
        },
        670:{
            items:2,
            nav:false
        },
        870:{
            items:3,
            nav:true,
        },
        1200:{
            items:4,
            nav:true,
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})





///!!!!!!!!!!!!!!!!! AINDA EM ANÁLISE !!!!!!!!!!!!!!!!


const descricaoProdutos = $('.descricao-produtos')
const btnClose = $('#btnFechar')
const infoProduto = $('#info-produto')

infoProduto.on('click',  function(elem){
    descricaoProdutos.toggleClass('active')
    btnClose.addClass('active')  
})
// btnClose.click( function()
//     $(this).toggleClass('active')
// )




//callbaks


// $('.Produtos:nth(2)').hide(2000, function() {
//     console.log( $(this).find('.nome-produto').text() + 'esgotado' )
// })




// 100% FUNCIONAL
$('.nav-modal-open').on('click', function(e){
    e.preventDefault()
    let objeto = $(this).attr('rel')
    $('.modal-body').html($('#' + objeto).html())
    $('.modal-header h5.modal-title').html($(this).text())
    let myModal = new bootstrap.Modal($('#modalId'))
    myModal.show()
})



// //function para diminuir a tamanho da logo ao mover o scroll INICIO
   const target = $('.btnTop')
   function animeScroll() {
     const windowTop = window.pageYOffset;
    if((windowTop) > 270 ){
     target.addClass('animet');
    } else {
     target.removeClass('animet');
    }
   };
   target.click(function(){
        window.scroll({
            top: 0
        })
   }  )
   window.addEventListener('scroll', function() {
     animeScroll();
   });

/////   VALIDAÇÃO DE FORMULÁRIO INICIO    ////////////
function validate(elem){
    if(elem.val() == ''){
        console.log('o campo '+ elem.attr('type') +' é obrigatório')
        elem.addClass('invalid')
        return false
    } else{
        elem.removeClass('invalid')
    }
  
}

$('body').on('focusout', '#usuarioEmail', function(){
    validate($(this))
} )
$('body').on('focusout', '#usuarioNome', function(){
    validate($(this))
} )

    $('body').on('submit', '.modal .form ', function(e){
        e.preventDefault();
        const nome = $('#usuarioNome')
        const email = $('#usuarioEmail')
        validate(nome)
        validate(email)
    
        if(nome.hasClass('invalid') || email.hasClass('invalid') ){
            console.log('erro')
            return false
        } else{
            $('.content-form #formContato').submit()
        
        }
     } )



///////////////////////////////////////////////////////
   
const allInputs = $(":input")  
function percorrerCadaInput (){
       allInputs.each(function( i ) {
           if($('input').val() == ''){
                $('input').addClass('invalid')
                console.log('item '+ $('input').attr('id') +' vazio ')
                return false
        } else{
                $('input').removeClass('invalid')
                console.log('item '+ $('input').attr('id') +' okkk   ')
                $('.content-form #formContato').submit()
       
       }
     } )   
   }
   

$('body').on('submit', '.modal .form-agenda ', function(e){
    e.preventDefault();

    percorrerCadaInput()
 } )



 
//  $('body').on('focus', '#nome', function(){
//     validate($(this))
// })
// $('body').on('focus', '#date', function(){
//      validate($(this))
//     $('#date').mask('00/00/0000');
// })
// $('body').on('focus', '#hora', function(){
//      validate($(this))
//     $('#hora').mask('00:00h');
// })
// $('body').on('focus', '#cpf', function(){
//      validate($(this))
//     $('#cpf').mask('000.000.000-00');
// })
// $('body').on('focus', '#tel', function(){
//      validate($(this))
//     $('#tel').mask('(00) 0 0000-0000');
// })
// $('body').on('focus', '#cep', function(){
//      validate($(this))
//     $('#cep').mask('00000-000');
// })
// $('body').on('focus', '#endereco', function(){
//      validate($(this))
// })
// $('body').on('focus', '#bairro', function(){
//      validate($(this))
// })
// $('body').on('focus', '#numeroR', function(){
//      validate($(this))
// })

