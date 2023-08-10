

$(function(){
    
    $(window).on('load', function(e) {
        paras = 'invicode'
        var url = location.href; 
        var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
        var paraObj = {} 
        for (i=0; j=paraString[i]; i++){ 
            paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
        } 
        var returnValue = paraObj[paras.toLowerCase()]; 
        if(typeof(returnValue)=="undefined"){ 
            return ""; 
        }
        else{ 
            // console.log(returnValue);
            $("#invi_code1").html(returnValue);
            $(".invicode_noshow").removeClass('invicode_noshow')

        }
        
    })

})

$(function () {
    $(window).scroll(function () {
        var scroll_top = $(document).scrollTop();
        // console.log(scroll_top)
        if (scroll_top > 230) {               //当向下滚动230px时,出现返回顶部链接
            $(".gallery").show(300);
        } else {
            $(".gallery").hide(300);
        }
    });
    $(".gallery").click(function () {
        $("html,body").animate({scrollTop:0}, 500);
    });
    
})

$(function () {
    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
        $(document).ready(function(){
            $('.sl_header').html('subor-dinate level')
            $('.T_C').html('Tier Commi-ssions')
            $('.Com').html('Comm-ission')
        })
        // .sl_header,.N_o_p,.C_A_M,.M_E,.T_C,.Com
    }
    else{
        $('.card-item').on('mouseover', function(e) {

            $('.card-item').each(function (index, ele) {
                if($(ele).eq(0).hasClass('col-lg-4')){
                    $(ele).eq(0).removeClass('col-lg-4').addClass('col-lg-1')
                    $(ele).children().eq(0).addClass('text-center-pc')
                    $(ele).children().eq(1).removeClass('text-indent-no').addClass('text-indent')
                    $(ele).children().eq(0).children().eq(0).children().eq(1).removeClass('promotion-title').addClass('promotion-title-none')
                }
                $(ele).children().eq(0).children().eq(0).children().eq(0).children().each(function(ind,el){
                    if(ind==0){
                        if($(el).eq(0).hasClass('select_img')){
                            $(el).eq(0).removeClass('select_img').addClass('no_select_img')
                        }
                    }
                    if(ind==1){
                        if($(el).eq(0).hasClass('no_select_img')){
                            $(el).eq(0).addClass('select_img').removeClass('no_select_img')
                        }
                    }
                })
            })

            $(this).eq(0).addClass('col-lg-4').removeClass('col-lg-1')
            $(this).children().eq(0).removeClass('text-center-pc')
            $(this).children().eq(1).addClass('text-indent-no').removeClass('text-indent')
            $(this).children().eq(0).children().eq(0).children().eq(1).addClass('promotion-title').removeClass('promotion-title-none')
            $(this).children().eq(0).children().eq(0).children().eq(0).children().eq(0).addClass('select_img').removeClass('no_select_img')
            $(this).children().eq(0).children().eq(0).children().eq(0).children().eq(1).removeClass('select_img').addClass('no_select_img')
        })
    }    
})

