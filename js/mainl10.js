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
    $('.audio audio1').removeClass('audio audio1');
    $('.audio audio1').addClass('audio audio1');
    $('.audios .audio2').removeClass('audio audio2');
    $('.audios .audio2').addClass('audio audio2');
    $('.boxs .box').removeClass('active');
    $('.boxs .box'+num).addClass('active');
    $('.boxs .box'+num).removeClass('active');
    switch(num){
        case 1:
            $('.elepa').hide();
            $('.ele').show();
            $('.ele3').hide();
            $('.bird').show();
            $('.ele2').hide();
            $('.lion').hide();
            $('.snake').hide();
            $('.tiger').hide();
            $('.elef').hide();
            $('.elef2').hide();
            break;
        case 2:
            $('.elef2').hide();
            $('.elepa').hide();
            $('.ele2').show();
            $('.ele').hide();
            $('.ele3').hide();
            $('.bird').hide();
            $('.ele').hide();
            $('.elef').hide();
         
            $('.lion').hide();
            $('.lion').hide();
            $('.snake').hide();
            $('.elef').hide();
            $('.tiger').hide();
            break;
        case 3:
            $('.elef2').hide();
            $('.elepa').hide();
            $('.bird').hide();
            $('.ele3').show();
            $('.ele').hide();
            $('.ele2').hide();
            $('.lion').hide();
            $('.lion').hide();
            $('.snake').hide();
            $('.tiger').hide();
            $('.elef').hide();
            break;
        case 4:
            $('.elef2').hide();
            $('.elepa').hide();
                $('.snake').show();
                $('.ele3').hide();
                $('.ele2').hide();
                $('.ele').hide();
                $('.bird').hide();
                $('.lion').hide();
                $('.elef').hide();
                $('.tiger').hide();
                break;
        case 5:
            $('.elef2').hide();
            $('.lion').show();
            $('.elepa').hide();
            $('.ele3').hide();
           
                $('.ele2').hide();
                $('.ele').hide();
                $('.bird').hide();
                $('.lion').hide();
                $('.tiger').show();
                $('.elef').hide();
            $('.snake').hide();
            break;
        case 6:
            $('.lion').show();
            $('.tiger').hide();
            
            // $('.star1').show();
            // $('.star2').show();
            $('.elef').hide();
			setTimeout(function(){
			$('.ball').show();
			}, 500);
            break;
        case 7:
            $('.snake').hide();
                $('.tiger').hide();
                $('.ele3').hide();
                $('.ele2').hide();
                $('.ele').hide();
                $('.bird').hide();
                $('.lion').hide();
                $('.elepa').show();
                $('.elef').hide();
                break;
        case 8:
            $('.elef').show();
            $('.elepa').hide();
            
            $('.snake').hide();
            $('.tiger').hide();
            $('.ele3').hide();
            $('.ele2').hide();
            $('.ele').hide();
            $('.bird').hide();
            $('.lion').hide();
            break;
        case 9:
                $('.elef2').show();
                $('.elepa').hide();
            $('.bird').hide();
            $('.ele3').hide();
            $('.ele').hide();
            $('.ele2').hide();
            $('.lion').hide();
            $('.lion').hide();
            $('.snake').hide();
            $('.tiger').hide();
            $('.elef').hide();
                break;
        default:
            $('.tiger').hide();
            $('.lion').hide();
            $('.elef').hide();
            $('.elef2').hide();
            $('.ele').hide();
            $('.bird').hide();
            $('.heart').hide();
            $('.ele2').hide();
            $('.ele3').hide();
            $('.snake').hide();
            $('.tiger').hide();
            $('.elepa').hide();
         
            break;
    }
    clearTimeout(st);
    st=setTimeout(function(){
        $('.bgs .bg').removeClass('active');
        $('.bgs .bg'+num).addClass('active');
     
    },500);


});