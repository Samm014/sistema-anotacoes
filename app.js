$(function(){
    $('.btn-add').click(function(){
        var el = '<div class="anotacao-single hidden"><textarea name="" id="" placeholder="Deixe aqui sua anotação..."></textarea><span></span></div><!--anotacao-single-->'

        $('.container-anotacoes').append(el);
        $('.hidden').css('display','none')
        $('.anotacao-single').addClass('show')
        $('.hidden').fadeIn();
        $('.anotacao-single').removeClass('hidden')
    

    var Last_textArea = $('.anotacao-single').last().find('span');

    let date = new Date();

    let time = date.toLocaleTimeString("pt-BR", {
        timeStyle: "short",       //Serão retornado apenas horas e minutos.  
        hour12: false,            //Formato de 24h, suprimindo sufixos AM e PM.
        numberingSystem: "latn"   //Resulado em algarismos indo-arábicos.
    });

    //console.log(time);
    Last_textArea.html(time);

    var num = $('.anotacao-single').length;
    if(num < 0){
        $('.msg-div').fadeIn();
    }else if(num >= 1){
        $('.msg-div').fadeOut();
    }
});
})

