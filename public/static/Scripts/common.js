
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
//全选
function selall() {
    var a = document.getElementsByTagName("input");
    var str;
    var len;
    var state;
    for (var i = 0; i < a.length; i++) {
        if (a[i].type == "checkbox") {
            str = a[i].id;
            len = str.lastIndexOf("ckSelAll");
            if ((len * 1) >= 0) {
                state = a[i].checked;
                break;
            }
        }
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i].type == "checkbox") {
            str = a[i].id;
            len = str.lastIndexOf("ckSelItem");
            if ((len * 1) >= 0)
                a[i].checked = state;
        }
    }
}
//判断长时间,形如 (2008-07-22 13:04:06) 或 (2008-07-22)
function isdate(str) {
    if (strDateTime(str)) {
        return true;
    }

    var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    var r = str.match(reg);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
}
/**
 * 用途：检查输入字符串是否只由英文字母和数字和下划线组成
 * 输入：s, 字符串
 * 返回：如果通过验证返回true,否则返回false
 */
function isNumberOr_Letter(s) {
    var regu = "^[0-9a-zA-Z\_]+$";
    var re = new RegExp(regu);
    if (re.test(s))
        return true;
    else
        return false;
}

function isEmail(s) {
    var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|com|gov|mil|org|edu|int)$"
    var re = new RegExp(regu);
    if (s.search(re) != -1) {
        return true;
    }
    else {
        return false;
    }
}
//判断短日期，形如 (2008-07-22)
function strDateTime(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
}

function GetStrLen(str) {
    var sTmpStr;
    var sTmpChar;
    var nOriginLen = 0;
    var nStrLength = 0;
    sTmpStr = new String(str);
    nOriginLen = sTmpStr.length;
    for (var i = 0; i < nOriginLen; i++) {
        sTmpChar = sTmpStr.charAt(i);
        if (escape(sTmpChar).length > 4) {
            nStrLength += 2;
        }
        else if (sTmpChar != '\r') {
            nStrLength++;
        }
    }
    return nStrLength;

}


//比较两个日期大小 
function compareDate(date1, date2) {
    date1 = new Date(date1.replace("-", ",")).getTime();
    date2 = new Date(date2.replace("-", ",")).getTime();
    if (date1 > date2) {
        return true;
    }
    return false;
}
function isnum(theNum) {
    for (var i = 0; i < theNum.length; i++) {
        oneNum = theNum.substring(i, i + 1);
        if (oneNum < "0" || oneNum > "9")
            return true;
    }
    return false;

}
// JScript 文件
function isNumber(String) {
    if (String.length == 0) {
        return false;
    }
    var Letters = "1234567890-"; //可以自己增加可输入值
    var i;
    var c;
    if (String.charAt(String.length - 1) == '-')
        return false;

    for (i = 0; i < String.length; i++) {
        c = String.charAt(i);
        if (Letters.indexOf(c) < 0)
            return false;
    }

    return true;

}
/**
 * 用途：检查输入字符串是否为空或者全部都是空格
 * 输入：str
 * 返回：
 * 如果全是空返回true,否则返回false
 */
function isNull(str) {
    if (str == "") return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
}

//添加多文件上传控件
function add_file() {
    var str = '<span style="width:100%;"><INPUT type="file" NAME="File" run="server" style ="width :397px">  <input type="image" name="1" value="删除" src="../images/delete.gif" alt="删除" style= "margin-bottom:-4px;" onclick="this.parentNode.removeNode(true);return false;"></span>';
    document.getElementById('filecontrol').insertAdjacentHTML("beforeEnd", str);
}

//初始化日期
function initDate(id) {
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render({
            elem: id //'#id'
             , type: 'date'
        });
    });
}

//初始化日期时间
function initDateTime(id) {
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render({
            elem: id //'#id'
             , type: 'datetime'
        });
    });
}

function layerAlert(msg) {
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            title: '提示',
            content: msg
        });
    });
}

function layerAlertAndGoUrl(msg, url) {

    var reMsg = "<div style='text-align:center;width:100%'>" + msg + "</div>";
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.open({
            title: false,
            shadeClose:true,
            closeBtn :0,
            content: reMsg,
            btn: ['确定', '返回'],
            btnAlign: 'c', //按钮居中
            yes: function () {
                self.location.href = url;
            },
        });
    });
}

function layerAlertAndGoUrl1(msg, url) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.open({
            title: '提示',
            content: msg,
            btn: ['确定'],
            // btnAlign: 'c' //按钮居中
            yes: function () {
                self.location.href = url;
            },
        });
    });
}


//不可关闭的加载框
function layerLoadingInfo(msg, closetime) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.msg(msg, {
            icon: 16
          , shadeClose: false
          , time: closetime
          , shade: 0.3
        });
    });
}


function layerOpen(tle, width, height, url) {
    layui.use('layer', function () {
        var layer = layui.layer;

        var index = layer.open({
            type: 2,
            title: tle,
            shadeClose: true,
            shade: 0.5,  //背景透明底
            area: [width, height],
            maxmin: true, //开启最大化最小化按钮
            content: url,// 'mobile/' //iframe的url          
        });
    });

}


function layerOpenNotShade(tle, width, height, url) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.open({
            type: 2,
            title: tle,
            shadeClose: true,
            shade: 0.001,
            area: [width, height],
            moveOut: true,
            title: false,
            closeBtn: 0,
            content: url// 'mobile/' //iframe的url
        });
    });
}

function layerOpenNotShadeLoading(tle, width, height, url) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.open({
            type: 2,
            title: tle,
            shadeClose: false,
            shade: 0.3,
            area: [width, height],
            moveOut: true,
            title: false,
            closeBtn: 0,
            content: url// 'mobile/' //iframe的url
        });
    });
}

//width和height需为px,当弹框宽度/高度大于当前能显示的范围时，设置宽度/高度为100%
function layerOpenAuto(tle, width, height, url) {

    //计算中间可用区域
    var divw = $("#container", top.document).width() - 50;
    var divh = $("#container", top.document).height() - 50;
    if (divw < 0 || divh < 0)
    {
        divw = document.documentElement.clientWidth - 50;
        divh = document.documentElement.clientHeight - 50;
    }
   
    var tempWidth = parseInt(width);
    var tempheight = parseInt(height);


    if (divw < tempWidth)
        width = '100%';
    if (divh < tempheight)
        height = '100%';
    layui.use('layer', function () {
        var layer = layui.layer;

        var index = layer.open({
            type: 2,
            title: tle,
            shadeClose: true,
            shade: 0.5,  //背景透明底
            area: [width, height],
            maxmin: true, //开启最大化最小化按钮
            content: url,// 'mobile/' //iframe的url          
        });
    });
}


function layerFull() {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.full(layer.index);
    });
}

function layerSetTitle(tle) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.title(tle, layer.index)
    });
}



function closeLayer() {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.close(layer.index);
    });
}

function getSelect(txtID, valID, txtValue, valValue) {
    $("#" + txtID).val(txtValue);
    $("#" + valID).val(valValue);
}

function showTemMsg(title) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.msg(title);
    });
}

function showWrongTemMsg(title) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.msg(title, { icon: 2 });
    });
}
function showSuccessTemMsg(title) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.msg(title, { icon: 1 });
    });
}
function showWanningTemMsg(title) {
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.msg(title, { icon: 0 });
    });
}
function showTemMsgWrong(title) {  //抖动
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.msg(title, { anim: 6 });
    });
}

function layerAlert1(title) {  //抖动
    layui.use('layer', function () {
        var layer = layui.layer;

        layer.alert(title, { anim: 6 });
    });
}









//刷新本页面
function refreshPage(Messages) {
    window.location.href = location.href;
}


function getViewSize() {//获取浏览器视口的宽高
    return {
        "w": window['innerWidth'] || document.documentElement.clientWidth,
        "h": window['innerHeight'] || document.documentElement.clientHeight
    }
}
function openPic(picUrl, title) {
    var realWidth = '100%';
    var realHeight = '100%';
    var _sv_w = getViewSize()["w"];
    var _sv_h = getViewSize()["h"];
    var imgtemp = new Image();//创建一个image对象
    imgtemp.src = picUrl;
    imgtemp.onload = function () {//图片加载完成后执行
        realWidth = this.width;
        realHeight = this.height;

        //把弹窗限制在浏览器可视范围内
        if (realWidth > _sv_w)
            realWidth = "90%";
        if (realHeight > _sv_h)
            realHeight = "90%";
        layui.use('layer', function () {
            var layer = layui.layer;

            var index = layer.open({
                type: 1
               , title: false //不显示标题栏
               , shade: 0.3
               , shadeClose: true
               , scrollbar: false
               , resize:false
               , area: [realWidth, realHeight]
               , id: 'LAY_layuipro' //设定一个id，防止重复弹出                
               , moveType: 0 //拖拽模式，0或者1
               , content: '<div style="background-color: #393D49;width:100%;height:100%"><img src="' + picUrl + '" style="width:auto;height:auto;max-width:100%;max-height:100%;" /></div>'
               , success: function (layero) {
                   
               }
            });

        });
    }
}

function initPhoto(id) {
    layui.use('layer', function () {
        var layer = layui.layer;

        //调用示例
        layer.photos({
            photos: id
          , shade: 0.5
          , anim: 0 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
        });
    });
}

//自定义模板
function initPhotoMod(id, anim) {
    //config的设置是全局的
    layui.config({
        base: '../../Scripts/layerPhotos/' //假设这是你存放拓展模块的根目录
    });

    //使用拓展模块
    layui.use(['layerPhotosMod'], function () {
        var layerPhotosMod = layui.layerPhotosMod;
        layerPhotosMod.layerPhotos({
            photos: id
            , shade: 0.5
            , anim: anim//0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
        });
    });
}

function initPhotoByViewer(id) {
    var galley = document.getElementById(id);
    var viewer = new Viewer(galley, {
        url: 'data-original',  //默认src
    });
}

function initPhotoNew(id, anim) {
    layui.use('layer', function () {
        //调用示例
        var layer = layui.layer;

        layer.photos({
            photos: id
          , shade: 0.5
          , anim: anim//0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
        });
    });
}

//新建一个tab
function openNewTab(url, title) {
    var id = Math.random().toString(); //随机生成一个tabID
    id = id.replace(".", "");
    var tab = window.top.tab;
    var data = { url: url, icon: '', title: title, id: id }
    tab.tabAdd(data);
}

//关闭弹窗并刷新
function closeAndReflesh() {
    layer.close(layer.index);
    window.location.href = location.href;
}


function setButtonDisabled(id) {
    $(id).attr("disabled", true);
    $(id).addClass("layui-btn-disabled");
}

//绑定下拉事件
function initDLLFun() {
    layui.use('form', function () {
        var form = layui.form;
        form.render();

        form.on('select', function (data) {  //触发下拉事件
            $(data.elem).trigger('change', data.eleme);
        })
    });
}



//tips 带#
function layerTips(text,id) {
    layui.use('layer', function () {
        var layer = layui.layer;
       
        layer.tips(text, id, {
            tips: [1, '#EE7942'],
            time: 3000
        });
    });
}



//重置弹出框的标题
function resetTitle(title) {
    var index = window.parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
    window.parent.layer.title(title, index)
}