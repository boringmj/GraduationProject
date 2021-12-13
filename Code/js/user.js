//定义与id参数对应的控件id
var user={
    "id":[
        ["#v-tnav-tabs-info-tab","#v-tnav-tabs-info","info"],
        ["#v-tnav-tabs-collect-tab","#v-tnav-tabs-collect","collect"],
        ["#v-tnav-tabs-address-tab","#v-tnav-tabs-address","address"],
        ["#v-tnav-tabs-coupon-tab","#v-tnav-tabs-coupon","coupon"],
        ["#v-tnav-tabs-order-tab","#v-tnav-tabs-order","order"],
        ["#v-tnav-tabs-after_sale-tab","#v-tnav-tabs-after_sale","after_sale"]
    ],
    "default":0
};

//监听购物按钮
$("#go_merchandise").click(function(){
    location.href="./merchandise.html"
});

//监听添加地址按钮移入移出事件
$(".tab-content #v-tnav-tabs-address .add").hover(function(){
    $(this).find("img").attr("src","./images/address-add-on.png");
},function(){
    $(this).find("img").attr("src","./images/address-add.png");
});

var id=getQueryVariable("id");
if(id)
{
    var count=user.id.length;
    for(var i=0;i<count;i++)
    {
        if(id==user.id[i][2])
        {
            $(user.id[user.default][0]).removeClass("active");
            $(user.id[user.default][1]).removeClass("active");
            $(user.id[user.default][1]).removeClass("show");
            $(user.id[user.default][0]).attr("aria-selected","false");
            $(user.id[i][0]).addClass("active");
            $(user.id[i][1]).addClass("active");
            $(user.id[i][1]).addClass("show");
            $(user.id[i][0]).attr("aria-selected","true");
        }
    }
}

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