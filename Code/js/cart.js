//定义全局对象
cart={"checked":{"true":"./images/cart-checked.png","false":"./images/cart-unchecked.png"},"concessions":20}

//取消按钮点击监听
$(".close").click(function(){
    var commodity_id=$(this).attr("commodity_id");
    $("#commodity_id_"+commodity_id).remove();
    show_commodity_info();
});

//选择组件监听
$(".checkbox").click(function(){
    var all_check=true,count=0;
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
        count++;
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
    if(count>0)
    {
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
    }
});

//定义一个显示商品价格的函数
function show_commodity_info()
{
    var count=0,i=0,j=0;
    $(".commodity_list .info .checkbox").each(function(){
        j++;
        checked=$(this).attr("commodity_checked");
        if(checked=="true")
        {
            count+=Number($(this).attr("money_value"));
            i++;
        }   
    });
    $("#commodity_count").text(j);
    $(".stats_commodity_money").html("&#165;"+count.toFixed(2));
    $(".stats-concessions").html("&#165;"+(cart.concessions*i).toFixed(2));
    $(".stats-count").html("&#165;"+(count-cart.concessions*i).toFixed(2));
    if(j==0){
        $(".list\-empty").removeClass("invisible");
        $(".list\-is\-empty").removeClass("invisible");
        $(".list").addClass("invisible");
        $(".list\-not\-empty").addClass("invisible");
    }
}