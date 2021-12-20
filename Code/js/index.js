//定于全局初始变量
var commodity={"page":2,"limit":4,"active":1,"type":"shoe","data_rul":"./data/commodity.json","img_dir":"./images/commodity","commodity_data":{}};

//预处理事件(部分数据是不需要实时更新的,只需要处理一次就可以了)
$.getJSON(commodity.data_rul,"",function(data){
    commodity.commodity_data=data;
});

//监听购物按钮
$("#go_merchandise").click(function(){
    location.href="./merchandise.html";
});

//监听物品列表
$(".list-item").click(function(){
    var id=commodity.type=="children_clothing"?"children":commodity.type;
    location.href="./merchandise_details.html?id="+id;
});

//监听商品换页按钮移入移出事件
$("#commodity_show\\-go_left").hover(function(){
    $(this).attr("src","./images/go_left_active.png");
},function(){
    $(this).attr("src","./images/go_left.png");
});
$("#commodity_show\\-go_right").hover(function(){
    $(this).attr("src","./images/go_right_active.png");
},function(){
    $(this).attr("src","./images/go_right.png");
});

//监听商品换页按钮点击事件
$("#commodity_show\\-go_left").click(function(){
    if(commodity.active<=1) return 0;
    commodity.active--;
    show_commodity_list();
});
$("#commodity_show\\-go_right").click(function(){
    if(commodity.active>=commodity.page) return 0;
    commodity.active++;
    show_commodity_list();
});

//监听切换商品列表按钮
$(".commodity-type").click(function(){
    commodity.type=$(this).attr('commodity-type');
    commodity.active=1;
    $(".commodity-type").each(function(){
        $(this).removeClass("active");
    });
    $(this).addClass("active");
    show_commodity_list();
});

//监听关于更多按钮点击事件
$(".about_more").click(function(){
    location.href="./about_more.html";
});


//定义一个用于刷新当前商品列表的函数
function show_commodity_list(){
    var commodity_page=$("#commodity_page");
    var commodity_data={};
    if(commodity.type=="shoe") commodity_data=commodity.commodity_data.shoe;
    else if(commodity.type=="clothing") commodity_data=commodity.commodity_data.clothing;
    else if(commodity.type=="children_clothing") commodity_data=commodity.commodity_data.children_clothing;
    else commodity_data=commodity.commodity_data.other;
    commodity.page=commodity_data.page;
    commodity_data_active=commodity_data.data[commodity.active-1];
    var i=0;
    $("#commodity_list img").each(function(){
        $(this).attr("src",commodity.img_dir+"/"+commodity_data_active[i][3]);
        i++;
    });
    i=0;
    $("#commodity_list .font-commodity-name").each(function(){
        $(this).html(commodity_data_active[i][0]);
        i++;
    });
    i=0;
    $("#commodity_list .font-commodity-info").each(function(){
        $(this).html(commodity_data_active[i][1]);
        i++;
    });
    i=0;
    $("#commodity_list .font-commodity-price").each(function(){
       $(this).html("&#165;"+commodity_data_active[i][2]);
        i++;
    });
    commodity_page.empty();
    for(i=0;i<commodity.page;i++)
    {
        if(i==commodity.active-1) commodity_page.append("<a href=\"javascript:void(0);\"><span class=\"active\"></span></a>");
        else commodity_page.append("<a href=\"javascript:void(0);\"><span></span></a>");
    }
}