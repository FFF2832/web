let st;
$(window).on('activate.bs.scrollspy',function(e){
    console.log(e.relatedTarget);
    //取回artticle後面的數字 用parseInt轉成int
    let num = parseInt(e.relatedTarget.slice(8));
    console.log(num);
    $('.article-title').removeClass('article-title-active');
    $(e.relatedTarget+' .article-title').addClass('article-title-active');
    $('.heart').removeClass('heart');
    $('.heart').addClass('heart');
    $('.audios .audio1').removeClass('audio audio1');
    $('.audios .audio1').addClass('audio audio1');
    $('.boxs .box').removeClass('active');
    $('.boxs .box'+num).addClass('active');
    $('.boxs .box'+num).removeClass('active');
    switch(num){
        case 1:
            $('.ele').show();
            $('.ele3').hide();
            $('.bird').show();
            $('.ele2').hide();
            $('.lion').hide();
            $('.snake').hide();
            break;
        case 2:
            $('.ele2').show();
            $('.ele').hide();
            $('.ele3').hide();
            $('.bird').hide();
            break;
        case 3:
            $('.ele3').show();
            $('.ele2').hide();
            $('.lion').hide();
           
            break;
        case 4:
                $('.snake').show();
                $('.ele3').hide();
                $('.ele2').hide();
                $('.ele').hide();
                $('.bird').hide();
                $('.lion').hide();
                break;
        case 5:
            $('.ele3').hide();
            
                $('.ele2').hide();
                $('.ele').hide();
                $('.bird').hide();
                $('.lion').show();
            $('.snake').hide();
            break;
        case 6:
            $('.lion').hide();
            $('.star1').show();
            $('.star2').show();
			setTimeout(function(){
			$('.ball').show();
			}, 500);
            break;
        case 8:
            $('.heart').show();
        default:
            $('.lion').hide();
           
            $('.ele').hide();
            $('.bird').hide();
            $('.heart').hide();
            $('.ele2').hide();
            $('.ele3').hide();
            $('.snake').hide();
            break;
    }
    clearTimeout(st);
    st=setTimeout(function(){
        $('.bgs .bg').removeClass('active');
        $('.bgs .bg'+num).addClass('active');
     
    },500);


});