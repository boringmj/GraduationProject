//定义全局对象
cart={"checked":{"true":"./images/cart-checked.png","false":"./images/cart-unchecked.png"},"concessions":20}

//选择组件监听
$(".checkbox").click(function(){
    var all_check=true;
    var obj=this;
    checked=$(this).attr("commodity_checked");
    //改变被被点击按钮的属性
    if(checked=="true")
    {
        $(this).attr("src",cart.checked.false);
        $(this).attr("commodity_checked","false");
    }
    else
    {
        $(this).attr("src",cart.checked.true);
        $(this).attr("commodity_checked","true");
    }
    $(".commodity_list .info .checkbox").each(function(){
        if($(obj).hasClass("checkbox-all"))
        {
            if(checked=="true")
            {
                $(this).attr("src",cart.checked.false);
                $(this).attr("commodity_checked","false");
            }
            else
            {
                $(this).attr("src",cart.checked.true);
                $(this).attr("commodity_checked","true");
            }
        }
        if($(this).attr("commodity_checked")=="false") all_check=false;
    });
    if(all_check)
    {
        $(".checkbox-all").attr("src",cart.checked.true);
        $(".checkbox-all").attr("commodity_checked","true");
    }
    else
    {
        $(".checkbox-all").attr("src",cart.checked.false);
        $(".checkbox-all").attr("commodity_checked","false");
    }
    show_commodity_info();
});

//定义一个显示商品价格的函数
function show_commodity_info()
{
    var count=0,i=0;
    $(".commodity_list .info .checkbox").each(function(){
        checked=$(this).attr("commodity_checked");
        if(checked=="true")
        {
            count+=Number($(this).attr("money_value"));
            i++;
        }
    });
    $(".stats_commodity_money").html("&#165;"+count);
    $(".stats-concessions").html("&#165;"+(cart.concessions*i));
    $(".stats-count").html("&#165;"+(count-cart.concessions*i));
}