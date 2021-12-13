//绑定地址与参数(第一个为默认)
var merchandise_value=[
    ["clothing","./data/merchandise_details_clothing.json"],
    ["other","./data/merchandise_details_other.json"],
    ["shoe","./data/merchandise_details_shoe.json"],
    ["children","./data/merchandise_details_children.json"]
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