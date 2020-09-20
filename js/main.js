$(".icon-menu-item a").on("click", function(){
    let t = $(this).attr('href');
    $('.icon-menu-item').removeClass('active');
    $(this).parent(".icon-menu-item").addClass('active')
    $('.menu-body > ul').removeClass('active')
    $(t).addClass('active')
})

$('.menu-body > ul > li > a').on('click', function(){
    $('.menu-body > ul > li > a').removeClass('active')
    $(this).addClass('active')
})
 