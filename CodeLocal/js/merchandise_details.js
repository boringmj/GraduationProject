//绑定地址与参数(第一个为默认)
var merchandise_value=[
    ["clothing",{
        "name":"鸿星尔克卫衣冬季男士运动休闲ins潮流套头加绒休闲圆领长袖上衣",
        "code":51221389053,
        "money":["69","99"],
        "color":["【8175】-正黑色"],
        "id":"clothing",
        "img_path":"./images/merchandise",
        "img":["clothing-01.jpg","clothing-02.jpg","clothing-03.jpg"],
        "size":"选择合适的尺码"
    }],
    ["other",{
        "name":"鸿星尔克帽子男棒球防风遮阳帽红星官方旗舰男款黑色运动帽",
        "code":"RC1032141007",
        "money":["69",""],
        "color":["黑色"],
        "id":"other",
        "img_path":"./images/merchandise",
        "img":["hat-01.jpg","hat-02.jpg","hat-03.jpg"],
        "size":"均码"
    }],
    ["shoe",{
        "name":"鸿星尔克女鞋高帮板鞋厚底休闲白底冬季节新款潮流复古运动鞋",
        "code":12122101413,
        "money":["369","399"],
        "color":["【8175】-正黑色"],
        "id":"shoe",
        "img_path":"./images/merchandise",
        "img":["shoe-01.jpg","shoe-02.jpg","shoe-03.jpg","shoe-04.jpg"],
        "size":"选择合适的尺码"
    }],
    ["children",{
        "name":"鸿星尔克童装女童卫衣儿童连帽开衫姐弟装运动风外套",
        "code":65221387085,
        "money":["189",""],
        "color":["【男童款】皇室蓝-602"],
        "id":"children",
        "img_path":"./images/merchandise",
        "img":["children-01.jpg","children-02.jpg","children-03.jpg"],
        "size":"选择合适的尺码"
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
var dir_path=data.img_path+"/"+data.id+"/";
$(".name").text(data.name);
$(".number").text("款号: "+data.code);
$(".color\-active").text(data.color);
$(".size\-active").text(data.size);
if(data.money[1]=="")
    $(".money_original").addClass("display-none");
$(".money").html("&#165;"+Number(data.money[0]).toFixed(2));
$(".money_original").html("&#165;<s>"+Number(data.money[1]).toFixed(2)+"</s>");
var i=0,j=data.img.length;
$(".show_images").each(function(){
    if(i<j)
    {
        $(this).attr("src",dir_path+data.img[i]);
    }
    else
    {
        $(this).addClass("display-none");
    }
    i++;
});

//监听结算按钮添加
$(".buy").click(function(){
    location.href="./pay.html";
});

//监听购物车按钮
$(".add_cart").click(function(){
    location.href="./cart.html";
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