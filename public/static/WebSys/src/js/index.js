function changeToTab(id)  //切换到对应ID的标签卡
{
    document.getElementById(id).click();
}
function setUserInfo(name, url, type)  //设置用户的头像和名字
{
    $("#LoginName").text(name);
    $("#LoginImage").attr('src', url);
    if (type == '100') {  //管理员
        $(".admin").removeClass("layui-hide");
        $(".CodeAdmin").removeClass("layui-hide");
    }
    else if (type == '2') {  //二维码管理员
        $(".CodeAdmin").removeClass("layui-hide");
    }
}


//获取链接参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function init() {
    layui.config({
        base: 'src/js/',
        version: '1.0.1'
    }).use(['app', 'message'], function () {
        var app = layui.app,
            $ = layui.jquery,
            layer = layui.layer;

        //主入口
        app.set({
            type: 'iframe'
        }).init();
        $('dl.skin > dd').on('click', function () {  //换皮肤
            var $that = $(this);
            var skin = $that.children('a').data('skin');
            switchSkin(skin);
        });
        var setSkin = function (value) {
            layui.data('kit_skin', {
                key: 'skin',
                value: value
            });
        },
            getSkinName = function () {
                return layui.data('kit_skin').skin;
            },
            switchSkin = function (value) {
                var _target = $('link[kit-skin]')[0];
                _target.href = _target.href.substring(0, _target.href.lastIndexOf('/') + 1) + value + _target.href.substring(_target.href.lastIndexOf('.'));
                setSkin(value);
            },
            initSkin = function () {
                var skin = getSkinName();
                switchSkin(skin === undefined ? 'red' : skin);
            }();
    });
}


$(document).ready(function () {
    init();
    var int = self.setInterval("refleshPage('-1')", 30000);  //刷新主页,主页ID为-1,在tab.js中修改
});

function refleshPage(id) {  //刷新页面，ID为本页设置的id,iframe通过window.parent.refleshPage("2102")刷新  
    var that = this;
    that._content = $('.kit-tab div.layui-tab-content');
    var item = that._content.children('div[lay-item-id=' + id + ']').children('iframe');
    item.attr('src', item.attr('src'));
}

function setMenu(type1) {
    if (type1 == "0") {
 
        $("#LeftMenuMain").slideDown();
        $("#LeftMenuSecond").hide();
    }
    else if (type1 == "1") {
 
        $("#LeftMenuSecond").slideDown();
        $("#LeftMenuMain").hide();
    }
}