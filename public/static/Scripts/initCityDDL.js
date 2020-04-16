//初始化城市联动下拉
$(document).ready(function () {
    initDLL();

    //updatepanel回调处理
    var prm = Sys.WebForms.PageRequestManager.getInstance();
    prm.add_beginRequest(function () {
        layer.load(0, { shade: false });
    });
    prm.add_endRequest(function (sender, args) {
        layer.closeAll('loading'); //关闭加载层
        initDLL();
    });
});

var form;
function initDLL() {
    layui.use('form', function () {
        form = layui.form;
        form.render();

        //监听下拉列表改变
        form.on('select(province)', function (data) {
            provinceChanged();
            document.getElementById('hfProvinceSelectedValue').value = data.value;
            document.getElementById('hfCitySelectedValue').value = "";
            document.getElementById('hfAreaSelectedValue').value = "";
        });

        form.on('select(city)', function (data) {
            cityChanged();
            document.getElementById('hfCitySelectedValue').value = data.value;
            document.getElementById('hfAreaSelectedValue').value = "";
        });
        form.on('select(AreaDll)', function (data) {
            document.getElementById('hfAreaSelectedValue').value = data.value;

        });

        form.on('select(ddl_parent)', function (data) {
            document.getElementById('hfddl_parent').value = data.value;
            var ddl_parent = $('#ddl_parent');
            var ddl_child = $('#ddl_child');
            var ddl_child1 = $('#ddl_thirdchild');
            getProductTypeList(ddl_parent, ddl_child, 'ddl_child_cityDiv');
            ddl_child1.html("<option value=\"\" selected=\"selected\">--请选择--</option>");
            form.render('select', "ddl_child1_cityDiv");
        });

        form.on('select(ddl_child)', function (data) {
            document.getElementById('hfddl_child').value = data.value;
            var ddl_child = $('#ddl_child');
            var ddl_child1 = $('#ddl_thirdchild');
            getProductTypeList(ddl_child, ddl_child1, 'ddl_child1_cityDiv');
        });

        form.on('select(ddl_thirdchild)', function (data) {
            document.getElementById('hfddl_thirdchild').value = data.value;
        });

    });
}

var typeAjaxUrl = "../WebServices/ProductType.asmx/GetProductTypeList";
function getProductTypeList(selParent, sel, type) {
    doAjax(typeAjaxUrl, "{ParentID:'" + selParent.val() + "'}", sel, "", type);
}


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

var cityAjaxUrl = "../WebServices/frmArea.asmx/GetCity";
function getCity(selParent, sel, type) {
    doAjax(cityAjaxUrl, "{parentDistrictNo:'" + selParent.val() + "'}", sel, "", type);
}


//省份改变
function provinceChanged() {
    var ddlProvince = $('#Province');
    var ddlCity = $('#City');
    var ddlArea = $('#Area');
    if (ddlProvince.val() == "000000") {
        ddlCity.attr("disabled", "disabled");
        ddlArea.attr("disabled", "disabled");
    }
    else {
        ddlCity.removeAttr("disabled");
        ddlArea.removeAttr("disabled");
        getCity(ddlProvince, ddlCity, 'cityDiv');
    }
    ddlArea.html("<option value=\"\" selected=\"selected\">--请选择--</option>");
    form.render('select', "Area");
}

function cityChanged() {
    var ddlCity = $('#City');
    var ddlArea = $('#Area');
    getCity(ddlCity, ddlArea, 'Area');
}