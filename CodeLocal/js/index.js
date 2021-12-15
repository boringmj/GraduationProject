//定于全局初始变量
var commodity={"page":2,"limit":4,"active":1,"type":"shoe","data_rul":"./data/commodity.json","img_dir":"./images/commodity","commodity_data":{
    "shoe":{
        "page":2,
        "data":[
            [
                ["契约鸿星尔克高帮板鞋","皮革拼接","209.0","shoe01.png"],
                ["浔系列天吴-2021年新品弜弹科技","皮革拼接","269.0","shoe02.png"],
                ["板鞋厚底小白鞋2021秋冬新款潮流复古休闲鞋子运动鞋","皮革拼接","179.0","shoe03.png"],
                ["冬季新款板鞋时尚撞色轻便滑板鞋","皮革拼接","219.0","shoe04.png"]
            ],
            [
                ["潮流复古百搭运动鞋黑色男鞋","车缝线","299.0","shoe11.png"],
                ["男子运动鞋潮流老爹鞋厚底缓震防滑跑步鞋","车缝线","299.0","shoe12.png"],
                ["2021秋冬新款时尚耐磨运动男鞋","车缝线","319.0","shoe13.png"],
                ["奇弹银魂联名女高帮板鞋秋新款潮流休闲鞋子男鞋运动鞋","车缝线","379.0","shoe14.png"]
            ]
        ]
    },
    "clothing":{
        "page":2,
        "data":[
            [
                ["2019新款加厚装外套保暖中大童装","羽绒","259.0","clothing01.png"],
                ["冬季女士气质简约淑女短款轻薄棉衣连帽外套上衣女装","丝绵","329.0","clothing02.png"],
                ["男童服饰套头装卫衣舒适百搭休闲套头卫衣","棉+聚酯纤维","319.0","clothing03.png"],
                ["男生针织百搭休闲运动套头衫连帽美式卫衣上衣男","棉","129.0","clothing04.png"]
            ],
            [
                ["女士薄款防晒服运动防风衣休闲连帽外套夹克","100%棉纶","359.0","clothing11.png"],
                ["男子羽绒夹克2019秋款加厚装外套保暖时尚","聚酯纤维","299.0","clothing12.png"],
                ["男子羽绒夹克2019秋款加厚装外套保暖时尚","100%棉纶","359.0","clothing13.png"],
                ["秋冬男子轻便中长款运动连帽棉衣外套夹克上衣大衣男","棉","319.0","clothing14.png"]
            ]
        ]
    },
    "children_clothing":{
        "page":2,
        "data":[
            [
                ["童装男童风衣2021年春秋新款防风加厚中大童","聚酯纤维","209.0","children_clothing01.png"],
                ["女童羽绒服2021冬季新款儿童中大童保暖防风轻薄外套","聚酯纤维","249.0","children_clothing02.png"],
                ["女童羽绒服森碟同款2021冬季新款中大童外套加厚保暖","聚酯纤维","569.0","children_clothing03.png"],
                ["加厚棉服2019冬季新款儿童中大通保暖时尚外套潮","棉71%-80%","249.0","children_clothing04.png"]
            ],
            [
                ["男童连帽卫衣2021年春款拉链衫速干中大童风衣外套","聚酯纤维","179.0","children_clothing11.png"],
                ["女童2019冬季新款儿童中大童羽绒服保暖轻薄羽绒夹克","羽绒","229.0","children_clothing12.png"],
                ["男童风衣2021年春秋新款儿童防风上衣男大童运动外套潮","聚酯纤维100%","219.0","children_clothing13.png"],
                ["男童连帽卫衣2021年春款新款拉链衫速干中大童风衣外套","聚酯纤维100%","219.0","children_clothing14.png"]
            ]
        ]
    },
    "other":{
        "page":1,
        "data":[
            [
                ["运动帽2021年球季新款男女情侣帽子防晒遮阳帽棒球鸭舌帽","聚酯纤维100%","79.0","other01.png"],
                ["帽子时尚棒球帽男女运动户外遮阳休闲鸭舌帽","聚酯纤维100%","79.0","other02.png"],
                ["女童羽绒服森碟同款2021冬季新款中大童外套加厚保暖","棉","89.0","other03.png"],
                ["运动帽2021年球季新款男女情侣帽子防晒遮阳帽棒球鸭舌帽","棉","69.0","other04.png"]
            ]
        ]
    }
}};

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