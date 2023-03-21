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
    autoplayTimeout:4000,
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

//////////////////
const myCarousel = $('#carouselExampleFade');
const carousel = new bootstrap.Carousel(myCarousel, {
     interval: 5000,
     TransitionEvent: .7,
     wrap: true,
     touch: true
});

/////   VALIDAÇÃO DE FORMULÁRIO INICIO    ////////////
function validate(elem){
    if(elem.val() == ''){
        let divHelp = $('div .help')
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
        const allInputs = $(":input") 
        validate(nome)
        validate(email)
    
        if(nome.hasClass('invalid') || email.hasClass('invalid') || allInputs.hasClass('invalid')){
            console.log('erro')
            return false
        } else{
            $('.content-form #formContato').submit()
        
        }
 } )



///////////////////////////////////////////////////////
   



    
       
      
        $('body').on('focus', '#date', function(){
            validate($(this))
            $('#date').mask('00/00/0000');
        })
        $('body').on('focus', '#hora', function(){
            validate($(this))
            $('#hora').mask('00:00h');
        })
        $('body').on('focus', '#cpf', function(){
            validate($(this))
            $('#cpf').mask('000.000.000-00');
        })
        $('body').on('focus', '#tel', function(){
            validate($(this))
            $('#tel').mask('(00) 0 0000-0000');
        })
        $('body').on('focus', '#cep', function(){
            $('#cep').mask('00000-000');
            validate($(this))
        })
        $('body').on('focus', '#endereco', function(){
            validate($(this))
        })
        $('body').on('focus', '#bairro', function(){
            validate($(this))
        })
        $('body').on('focus', '#numeroR', function(){
            validate($(this))
        })

