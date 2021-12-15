//定义全局变量
user={"time":0,"class":"button_disable","code":"pjyy","text":"获取验证码"}

//获取验证码按钮点击事件
$(".get_code").click(function(){
    if($(".m_code").val().toLowerCase()!=user.code)
    {
        $(".m_code").show().focus();
        return false;
    }
    $(this).addClass(user.class);
    user.time=60;
    get_code();
    return false;
});

$(".checkbox").click(function(){
    if($(this).is(':checked'))
        $("#"+$(this).attr("is_checked")).removeClass(user.class)
    else
        $("#"+$(this).attr("is_checked")).addClass(user.class)
});

$(".submit").click(function(){
    if($(this).hasClass("submit_register"))
    {
        if($("#"+$(this).attr("code_id")).val().toLowerCase()!=user.code)
        {
            $("#"+$(this).attr("code_id")).show().focus();
            return false;
        }
    }
    location.href="./user.html";
});

//定义一个用于控制获取验证码状态的函数
function get_code(){
    if(user.time>0)
    {
        user.time--;
        $(".get_code").text(user.time+"s");
        setTimeout("get_code()",1000);
    }
    else
    {
        $(".get_code").removeClass(user.class);
        $(".get_code").text(user.text);
    }
}