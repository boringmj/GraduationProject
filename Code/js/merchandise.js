//监听商品列表移入移出事件
$(".list\-img").hover(function(){
    $(this).attr("src","./images/merchandise/"+ $(this).attr("img_name")+"02.jpg");
},function(){
    $(this).attr("src","./images/merchandise/"+ $(this).attr("img_name")+"01.jpg");
});

//监听更多移入移出事件
$(".more").hover(function(){
    $("#"+$(this).attr("to_id")).attr("src","./images/merchandise/"+ $("#"+$(this).attr("to_id")).attr("img_name")+"02.jpg");
},function(){
    $("#"+$(this).attr("to_id")).attr("src","./images/merchandise/"+ $("#"+$(this).attr("to_id")).attr("img_name")+"01.jpg");
});