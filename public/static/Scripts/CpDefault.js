layui.use('carousel', function () {  //图片新闻
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#scrollNews'
      , width: '100%' //设置容器宽度
      , arrow: 'hover' //始终显示箭头
        //,anim: 'updown' //切换动画方式
    });

    //建造实例
    carousel.render({
        elem: '#topBox'
      , width: '100%' //设置容器宽度
      , arrow: 'none' //始终显示箭头 
      , interval: 5000
        , indicator: 'none'
        , anim: 'fade'
    });

    //建造实例
    carousel.render({
        elem: '#CompanyBox'
      , width: '100%' //设置容器宽度
      , arrow: 'none' //始终显示箭头 
      , interval: 3000
        , indicator: 'none'
        , anim: 'fade'
    });
});

$(document).ready(function () {
    $('.layui-fixbar-top').click(function () { $('html,body').animate({ scrollTop: '0px' }, 800); });  //滚动到顶部        
});

//监听滚动条
window.onscroll = function () {
    //变量t是滚动条滚动时，距离顶部的距离
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollup = document.getElementById('scrollToTop');
    //当滚动到距离顶部200px时，返回顶部的锚点显示
    if (t >= 200) {
        scrollup.style.display = "block";
    } else {          //恢复正常
        scrollup.style.display = "none";
    }
}

function searchInfo(type) {
    if (type == "1") {
        var textGoods = getTextValue("textGoods");
        if (textGoods == "") {
            showTemMsg("请输入供货编号!");
            return;
        }
        var link = "../WebPage/SupplySelf.aspx?fldNo=" + encodeURI(textGoods);
        window.open(link);
    }
    else if (type == "2") {
        var textKey = getTextValue("textKey");
        if (textKey == "") {
            showTemMsg("请输入关键字!");
            return;
        }
        var link = "../WebPage/MessageSearch.aspx?KeyWord=" + encodeURI(textKey);
        window.open(link);
    }
    else if (type == "3") {
        var textProduct = getTextValue("textProduct");
        if (textProduct == "") {
            showTemMsg("请输入产品类别!");
            return;
        }
        var link = '../WebPage/ProductSearch.aspx?KeyWord=' + encodeURI(textProduct);
        window.open(link);
    }
}


function checkFormCheckCode() {
    var ZKZH = getTextValue("ZKZH");
    var SFZH = getTextValue("SFZH");
    var KSXM = getTextValue("KSXM");
    var count = 0;
    if (ZKZH != "")
        count++
    if (SFZH != "")
        count++
    if (KSXM != "")
        count++

    if (count < 2) {
        showTemMsg("请输入最少两项准确信息!");
        return;
    }
    var link = "http://pxxx.gzchsoft.com/frmCheckCode.aspx?ZKZH=" + ZKZH + "&SFZH=" + SFZH + "&KSXM=" + KSXM;
    window.open(link);
}