//绑定地址与参数(第一个为默认)
var merchandise_value=[
    ["clothing",{
        "title_en":"ENERGY<br>TECHNOLOGY",
        "title_zh":"燚能技术",
        "title":"好动，不怕冻",
        "img_path":"./images/merchandise",
        "id":"clothing",
        "banner_img":"clothing-technical.png",
        "data":[
            ["锁热设计","f-01.jpg","领口防风设计<br>有效锁住热量"],
            ["急速升温","f-02.jpg","内胆搭载石墨烯材料<br>迅速导热"],
            ["高弹面料","f-03.jpg","高弹平纹面料，弹性十足<br>让运动更加自足"]
        ]
    }],
    ["shoe",{
        "title_en":"FUTURE<br>LABORATORY",
        "title_zh":"来自极克未来实验室",
        "title":"这就是弜",
        "img_path":"./images/merchandise",
        "id":"shoe",
        "banner_img":"shoe-technical.jpg",
        "data":[
            ["高效回弹","s-01.jpg","全新弜弹科技<br>中底高效存储和释放能量<br>为双脚提供充足能量反馈"],
            ["稳定支撑","s-02.jpg","稳定支撑侧翼流线型TPU支撑架<br>提供高强度支撑<br>有效防止侧翻"],
            ["防滑耐磨","s-03.jpg","独特星轨纹路打底<br>增强抓地能力"]
        ]
    }],
    ["children",{
        "title_en":"ENERGY<br>TECHNOLOGY",
        "title_zh":"来自极克未来实验室",
        "title":"小尔克玩真的",
        "img_path":"./images/merchandise",
        "id":"children",
        "banner_img":"children-technical.jpg",
        "data":[
            ["锁热设计","c-1.png","领口防风设计<br>有效锁住热量"],
            ["急速升温","c-2.png","内胆搭载石墨烯材料<br>迅速导热"],
            ["高弹面料","c-3.png","高弹平纹面料，弹性十足<br>让运动更加自足"]
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
var dir_path=data.img_path+"/"+data.id+"/";
$(".title\-en").html(data.title_en);
$(".title\-zh").html(data.title_zh);
$(".merchandise_banner").attr("src",dir_path+data.banner_img);
var i=0;
$(".info-content").each(function(){
    $($(this).find(".info\-content\-01")).text(data.data[i][0]);
    $($(this).find(".info_images")).attr("src",dir_path+data.data[i][1]);
    $($(this).find(".info\-content\-02")).html(data.data[i][2]);
    i++;
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