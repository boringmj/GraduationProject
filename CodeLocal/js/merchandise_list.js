//预定义全局变量
var data={"url":"","id":""};
//绑定地址与参数(第一个为默认)
var merchandise_value=[
    ["clothing",{
        "name":"服装",
        "hint":"CLOTHING",
        "to":"merchandise_more.html?id=clothing",
        "img_path":"./images/merchandise",
        "id":"clothing",
        "big_img":"big picture.jpg",
        "banner_img":"banner.png",
        "class":"",
        "data":[
            ["秋季男士运动休闲ins潮流套头加绒休闲圆领上衣","119","","clothing01.jpg"],
            ["羽绒服冬季男士连帽运动户外轻便短款","339","439","clothing02.jpg"],
            ["秋冬男士运动休闲ins潮流套头加绒休闲圆领长袖上衣","379","439","clothing03.jpg"],
            ["羽绒服2021年冬季新款男士运动户外轻薄短款外套","269","329","clothing04.jpg"],
            ["羽绒服2021冬季新款男士短款凭借羽绒外套","429","","clothing05.jpg"],
            ["卫衣2021秋季新款男士休闲连帽服","179","319","clothing06.jpg"],
            ["开衫卫衣秋冬男女羊羔绒连帽休闲潮流","299","319","clothing07.jpg"],
            ["风衣2022春季新款男士学院风运动休闲","219","239","clothing08.jpg"],
            ["卫衣2021春秋男士运动ins潮流情侣宽松美式套头连帽上衣","119","149","clothing09.jpg"],
            ["羽绒服2021冬季新款男士潮流拼接炸街运动工装外套","539","","clothing10.jpg"],
            ["开衫卫衣2021秋冬新款男女情侣印花羊羔绒时尚潮运动外套","281","309","clothing11.jpg"],
            ["棉服2021冬季新款男士运动潮流工装炸街痞帅外套","219","239","clothing12.jpg"]
        ]
    }],
    ["other",{
        "name":"其他",
        "hint":"OTHER",
        "to":"merchandise_more.html?id=other",
        "img_path":"./images/merchandise",
        "id":"other",
        "big_img":"big picture.jpg",
        "banner_img":"banner-other.jpg",
        "class":"color-black",
        "data":[
            [" 2021新款男女帽子情侣帽旅游遮阳太阳帽鸭舌帽","59","69","hat01.jpg"],
            ["女鞋高帮鞋板鞋2021秋季新款厚底鞋子","170","189","hat02.jpg"],
            ["帽子新款男女奇弹潮流鸭舌帽遮阳帽运动休闲棒球帽","68","100","hat03.jpg"],
            ["运动帽新款男女情侣中国帽子防晒遮阳帽国潮鸭舌帽棒球帽","89","100","hat04.jpg"],
            ["【一人之下】鸿星尔克遮阳帽联名运动帽子国潮双面渔夫帽圆领","139","","hat05.jpg"],
            ["运动帽2021秋冬新款男女情侣帽子防晒遮阳帽棒球帽鸭舌帽","79","","hat06.jpg"],
            ["鸭舌帽男女情侣休闲户外运动旅游遮阳时尚帽子","119","","hat07.jpg"]
        ]
    }],
    ["shoe",{
        "name":"鞋子",
        "hint":"SHOE",
        "to":"merchandise_more.html?id=shoe",
        "img_path":"./images/merchandise",
        "id":"shoe",
        "big_img":"big picture.jpg",
        "banner_img":"shoe-banner.jpg",
        "class":"color-black",
        "data":[
            ["男鞋板鞋小白鞋2021秋冬新款厚底潮流","119","299","shoe01.jpg"],
            ["女鞋高帮鞋板鞋2021秋季新款厚底鞋子","209","229","shoe02.jpg"],
            ["电池熊猫鸿星尔克女鞋高帮板鞋新款潮流","209","319","shoe03.jpg"],
            ["鸿星尔克板鞋女鞋2021秋季新款滑板鞋休闲鞋底厚小白鞋","179","299","shoe04.jpg"],
            ["鸿星尔克男鞋板鞋2021冬季新款鞋子厚底休闲百搭","239","","shoe05.jpg"],
            ["男鞋高帮鞋板鞋2021秋季新款厚底鞋子白色休闲潮运动鞋","239","","shoe06.jpg"],
            ["运动鞋男2020冬季新款鞋黑色百搭休闲鞋","219","","shoe07.jpg"],
            ["休闲男鞋秋冬2021新款百搭潮流运动老爹鞋","239","259","shoe08.jpg"],
            ["运动休闲鞋男2020年春季新款百搭潮流黑色时尚运动鞋","229","339","shoe09.jpg"],
            ["鸿星尔克休闲鞋男2021秋冬新款潮流运动鞋","239","","shoe10.jpg"],
            ["休闲鞋男2021秋冬新款时尚百搭软底透气运动鞋男鞋","209","309","shoe11.jpg"],
            ["跑步鞋2022年春季新品轻便耐磨跑步鞋底时尚运动鞋男","179","199","shoe12.jpg"]
        ]
    }],
    ["children",{
        "name":"儿童",
        "hint":"CHILDREN",
        "to":"merchandise_more.html?id=children",
        "img_path":"./images/merchandise",
        "id":"children",
        "big_img":"big picture.jpg",
        "banner_img":"children-banner.jpg",
        "class":"",
        "data":[
            ["童装女童男童卫衣儿童连帽开衫姐弟运动风时尚多色潮流","189","","children01.jpg"],
            ["2021秋季新款儿童休闲防风服大童外套男童运动风衣","179","209","children02.jpg"],
            ["童装版上衣潮流2019春季新款中大童儿 童洋气运动卫衣","219","229","children03.jpg"],
            ["童装男童加厚外套2021年秋款男孩拉链大童保暖防风上衣","199","229","children04.jpg"],
            ["儿童卫衣秋装长袖新款男童套头衫潮洋气宽松运动上衣","99","","children05.jpg"],
            ["男童卫衣2921年秋款新款儿童休闲带帽卫衣大童运动上衣","119","219","children06.jpg"],
            ["男童马甲2021秋冬男大童假面保暖马甲百搭防风马甲","199","229","children07.jpg"],
            ["童装2021秋季儿童套头男童女童时尚上衣拼接上衣","119","179","children08.jpg"],
            ["童装男童连帽卫衣2021年春款新款中大儿童时尚连帽上衣","119","149","children09.jpg"],
            ["男童卫衣2021秋季新款儿童休闲套头外套大童潮流","189","","children10.jpg"],
            ["开衫卫衣2021秋冬新款男女情侣印花羊羔绒时尚潮运动外套","89","119","children11.jpg"],
            ["童装2021秋季儿童套头男童女童时尚上衣拼接上衣","219","239","children12.jpg"]
        ]
    }]
];

var get_value=getQueryVariable("id");
var is_value=false;
var data;
if(get_value)
    for(i in merchandise_value)
        if(merchandise_value[i][0]==get_value)
        {
            data=merchandise_value[i][1];
            is_value=true;
        }
if(!is_value)
    data=merchandise_value[0][1];
data.url=data.to;
data.id=data.id;
var dir_path=data.img_path+"/"+data.id+"/";
$(".merchandise_name").text(data.name);
$(".merchandise_hint").text(data.hint);
$(".merchandise_banner").attr("src",dir_path+data.banner_img);
if(data.class!="")
    $(".banner-hint").addClass(data.class);
$(".big_photo").attr("src",dir_path+data.big_img);
var i=0,j=data.data.length;
$(".list .list-item").each(function(){
    if(i<j)
    {
        $($(this).find(".name")).text(data.data[i][0]);
        $($(this).find(".list-images")).attr("src",dir_path+data.data[i][3]);
        if(data.data[i][2]=="")
        {
            $($(this).find(".price")).addClass("price_only");
            $($(this).find(".original_price")).addClass("display-none");
        }
        $($(this).find(".price")).html("&#165;"+Number(data.data[i][1]).toFixed(2));
        $($(this).find(".original_price")).html("&#165;<s>"+Number(data.data[i][2]).toFixed(2)+"</s>");
    }
    else
    {
        $(this).addClass("display-none");
    }
    i++;
});

//了解更多点击事件
$(".banner\-more").click(function(){
    location.href=data.url;
});

//商品点击事件(所有商品将根据类型同意链接到一个地址)
$(".list .list-item .list-images").click(function(){
    window.open("merchandise_details.html?id="+data.id,"_blank");
});

//定义一个用于获取get参数的函数
function getQueryVariable(variable)
{
    var query=window.location.search.substring(1);
    var vars=query.split("&");
    for(var i=0;i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        if(pair[0] == variable)
        {
            return pair[1];
        }
    }
    return(false);
}