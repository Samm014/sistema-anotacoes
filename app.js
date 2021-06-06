$(function(){
    $('.btn-add').click(function(){
        var el = '<div class="anotacao-single hidden"><textarea name="" id="" placeholder="Deixe aqui sua anotação..."></textarea><span></span></div><!--anotacao-single-->'

        $('.container-anotacoes').append(el);
        $('.hidden').css('display','none')
        $('.anotacao-single').addClass('show')
        $('.hidden').fadeIn();
        $('.anotacao-single').removeClass('hidden')
    

    var Last_textArea = $('.anotacao-single').last().find('span');

    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();

    var finaltime = hr + ':' + min;
    
    Last_textArea.html(finaltime);

    
    
    var num = $('.anotacao-single').length;
    if(num < 0){
        $('.msg-div').fadeIn();
    }else if(num >= 1){
        $('.msg-div').fadeOut();
    }
});
})

