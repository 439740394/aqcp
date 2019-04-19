/* 搜索选择 */
$('.type-select span').on('click', function(){
    if ($(this).next().hasClass('active')) {
        $(this).next().removeClass('active');
    } else {
        $(this).next().addClass('active');
    }
});
$('.type-select li').on('click', function(){
    var _html = $(this).html();
    $('.type-select span').html(_html)
    $(this).parent().removeClass('active');
});

/* tab */
$('.tab-nav li').on('click', function(){
    var _index = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).parent().siblings('.tab-section').find('.tab-info').removeClass('active');
    $(this).parent().siblings('.tab-section').find('.tab-info').eq(_index).addClass('active');
});

/* show login modal */
$('.top .login').on('click', function(){
    $('.login-wrapper').addClass('active');
});

/* hide login modal */
$('.login-modal .back').on('click', function(){
    $('.login-wrapper').removeClass('active');
    $('.login-wrapper .login-input input').val('');
});

/* sidebar */
$('.sidebar-item').on('mouseover', function(){
    $(this).find('.back-face').addClass('active');
}).on('mouseout', function(){
    $(this).find('.back-face').removeClass('active');
}).on('click', function(){
    var _index = $(this).index();
    if (_index == 2) {
        $('html , body').animate({scrollTop: 0}, '1000', 'linear');
    }
});
