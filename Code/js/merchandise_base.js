//预定义全局变量
var merchandise_data={"url":"","id":""};
//绑定地址与参数(第一个为默认)
var merchandise_value=[
    ["clothing","./data/merchandise_list_clothing.json"],
    ["other","./data/merchandise_list_other.json"],
    ["shoe","./data/merchandise_list_shoe.json"],
    ["children","./data/merchandise_list_children.json"]
];

var get_value=getQueryVariable("id");
var is_value=false;
var merchandise_path;
if(get_value)
    for(i in merchandise_value)
        if(merchandise_value[i][0]==get_value)
        {
            merchandise_path=merchandise_value[i][1];
            is_value=true;
        }
if(!is_value)
    merchandise_path=merchandise_value[0][1];
$.getJSON(merchandise_path,"",function(data){
    merchandise_data.url=data.to;
    merchandise_data.id=data.id;
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
});

//了解更多点击事件
$(".banner\-more").click(function(){
    location.href=merchandise_data.url;
});

//商品点击事件(所有商品将根据类型同意链接到一个地址)
$(".list .list-item .list-images").click(function(){
    window.open("merchandise_details.html?id="+merchandise_data.id,"_blank");
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