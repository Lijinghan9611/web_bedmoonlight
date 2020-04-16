var form;
function init() {
    layui.use('form', function () {
        form = layui.form;
        form.render();

        form.on('select(province)', function (data) {
            provinceChanged();         
            document.getElementById('hfCitySelectedValue').value = "";
            document.getElementById('hfAreaSelectedValue').value = "";
        });

        form.on('select(city)', function (data) {
            cityChanged();
            document.getElementById('hfCitySelectedValue').value = data.value;           
        });
        form.on('select(AreaDll)', function (data) {           
            document.getElementById('hfAreaSelectedValue').value = data.value;

        });
    });
}

$(document).ready(function () {
    init();
    var prm = Sys.WebForms.PageRequestManager.getInstance();
    prm.add_beginRequest(function () {

    });
    prm.add_endRequest(function (sender, args) {
        init();
    });
});

//doAjax 执异步方式，从 WebServices获取数据
//method:WebServices中的方法名称,如 "WebServices/Index.asmx/GetMessage"
//para:参数json,如 "{type:'44',count:8}",//type，消息类型，count前多少条，暂定为8条
//divObject:显示的地方
//bMsg:获取前提示信息,如 "正在获取最新动态，请稍后..."
function doAjax(method, para, divObject, bMsg, FilterType) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: method,
        data: para,//type，消息类型，count前多少条，暂定为8条
        dataType: 'json',

        beforeSend: function (XMLHttpRequest) {
            divObject.html(bMsg);//显示提示信息 
        },
        success: function (result) {
            divObject.html(result.d);//显示结果  
            form.render('select', FilterType);
        },
        error: function (res) {//错误提示
            divObject.html("很抱歉，出错了！");
            // $("#divLastMessage").html("错误提示"+res.responseText);  
        },
        complete: function (XMLHttpRequest, textStatus) {
            //HideLoading();//隐藏进度条
        }
    });
}

function getCity(selParent, sel, type) {
    doAjax("../WebServices/frmArea.asmx/GetCity", "{parentDistrictNo:'" + selParent.val() + "'}", sel, "",type);
}

function provinceChanged() {
    var ddlProvince = $('#ddlProvince');
    var ddlCity = $('#ddlCity');
    var ddlArea = $('#ddlArea');
    if (ddlProvince.val() == "000000") {
        ddlCity.attr("disabled", "disabled");
        ddlArea.attr("disabled", "disabled");
    }
    else {
        ddlCity.removeAttr("disabled");
        ddlArea.removeAttr("disabled");
        getCity($('#ddlProvince'), $('#ddlCity'), 'cityDiv');
    }   
}

function cityChanged() {
    var ddlCity = $('#ddlCity');
    var ddlArea = $('#ddlArea');
    getCity(ddlCity, ddlArea, 'Area');
}


function notFoundMsg(){
    $("#msgDiv").html("没有结果。");
}

