//监听下一页按钮移入移出事件
$(".about-more img").hover(function(){
    $(this).attr("src","./images/about-turn_page-on.png");
},function(){
    $(this).attr("src","./images/about-turn_page.png");
});