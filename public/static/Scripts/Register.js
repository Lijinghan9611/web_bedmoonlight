
function checkCodeText(id) {
    isValidate = false;
    if (CodeTimes <= 1)
    {
        $("#btnGetCode").removeClass("layui-btn-disabled");
        $("#btnGetCode").removeAttr("disabled", "true");
    }
}

var validatePhone = "";
var isValidate = false;
function getcode() {
    if (isValidate == true && !confirm("是否重新获取验证码？"))
    {
        return;
    }
    if (isNumber($("#tb_fldphone").val()) == false) {
        $("#tb_fldphone").focus();
        $("#tb_fldphone").addClass("txtbg");
 
        layer.tips('请检查输入的手机号码是否正确!', '#tb_fldphone', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return;
    }
    $("#tb_fldphone").removeClass("txtbg");

    $.ajax({
        type: "GET",
        url: "../WebPage/RegAshx.ashx",
        dataType: "html",
        data: "flag=getcode&phone=" + $("#tb_fldphone").val() + "&username=" + $("#tb_fldphone").val() + "&random=" + Math.random(),
        beforeSend: function (XMLHttpRequest) {
            layer.load(); //上传loading
        },
        success: function (dataStr, status) {
            layer.closeAll('loading'); //关闭loading
            try {
                var data = JSON.parse(dataStr);

                if (data.status == '200') {
                    if (data.error == "0") {
                        $("#btnGetCode").addClass("layui-btn-disabled");
                        $("#btnGetCode").attr("disabled", "true");
                        $("#textCode").show();
                        $("#btnCheckCode").removeClass("layui-hide");
                        $("#phoneCodeDiv").html("<font color='#1E9FFF'>发送成功，60秒后重试.</font>");
                        CodeTimes = 60;
                        updateCodeDiv();
                    }
                    else {
                        $("#phoneCodeDiv").html("<font color='red'>" + data.msg + ".</font>");
                    }
                }
                else {
                    $("#phoneCodeDiv").html("<font color='red'>发送失败，请重试.</font>");
                }

            } catch (err) {
                $("#phoneCodeDiv").html("<font color='red'>发送失败，请重试.</font>");
            }
        },
        complete: function (XMLHttpRequest, textStatus) {
            layer.closeAll('loading'); //关闭loading
        },
        error: function () {
            layer.closeAll('loading'); //关闭loading
            //错误处理
            $("#phoneCodeDiv").html("<font color='red'>发送失败，请重试.</font>");
        }
    });
}

//倒计时60秒
var CodeTimes = 60;
var isEnterCode = false;
function updateCodeDiv() {
    $("#btnGetCode").val(CodeTimes + "s");
    if (!isEnterCode)  //输入过验证码后则不显示
    {
        $("#phoneCodeDiv").html("<font color='#1E9FFF'>发送成功</font>");    
    }
    CodeTimes--;
    if (CodeTimes >= 0)
        setTimeout("updateCodeDiv()", 1000);
    else
    {
        $("#btnGetCode").val("获取验证码");
        $("#phoneCodeDiv").html("");
        if (!isValidate)
        {
            $("#btnGetCode").removeClass("layui-btn-disabled");
            $("#btnGetCode").removeAttr("disabled", "true");
        }
    }

}
//检查验证码
function checkphonecode(){
    var text = getTextValue("textCode");
    if (text == "") {
        $("#textCode").focus();
        $("#textCode").addClass("txtbg");

        layer.tips('请输入验证码!', '#textCode', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return;
    }
    isEnterCode = true;
    $("#textCode").removeClass("txtbg");
    $.ajax({
        type: "GET",
        url: "../WebPage/RegAshx.ashx",
        dataType: "html",
        data: "flag=checkcode&phone=" + $("#tb_fldphone").val() + "&code=" + $("#textCode").val() + "&random=" + Math.random(),
        beforeSend: function (XMLHttpRequest) {
            layer.load(); //上传loading
        },
        success: function (dataStr, status) {
            var data = JSON.parse(dataStr);
            layer.closeAll('loading'); //关闭loading
            if (data.status == '200') {
                if (data.error == "0") {
                    isValidate = true;
                    $("#textCode").hide();
                    $("#btnGetCode").addClass("layui-btn-disabled");
                    $("#btnGetCode").attr("disabled", "true");
                    $("#btnCheckCode").addClass("layui-hide");
                    $("#phoneCodeDiv").html("<font color='#1E9FFF'>验证通过.</font>");
                    validatePhone = $("#tb_fldphone").val();
                }
                else {
                    $("#phoneCodeDiv").html("<font color='red'>" + data.msg + ".</font>");
                }
            }
            else {
                $("#phoneCodeDiv").html("<font color='red'>验证失败，请重试.</font>");
            }
        },
        complete: function (XMLHttpRequest, textStatus) {
            layer.closeAll('loading'); //关闭loading
        },
        error: function () {
            layer.closeAll('loading'); //关闭loading
            //错误处理
            $("#phoneCodeDiv").html("<font color='red'>验证失败，请重试.</font>");
        }
    });


}

function login() {
    var psd = document.getElementById("txt_password1").value;
    document.getElementById("txt_password1").value = hex_md5(psd);
    var psd = document.getElementById("txt_password2").value;
    document.getElementById("txt_password2").value = hex_md5(psd);
}

var form;
function initDLL() {
    layui.use('form', function () {
        form = layui.form;
        form.render();

        form.on('select(province)', function (data) {
            provinceChanged();
            document.getElementById('hfProvinceSelectedValue').value = data.value;
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

        form.on('select(DropDownList1)', function (data) {
            DDL_Change();
        });

        form.on('select(DropDownList2)', function (data) {
            DDL_Change2();
        });

        form.on('select(ddl_parent)', function (data) {         
            document.getElementById('hfddl_parent').value = data.value;
            var ddl_parent = $('#ddl_parent');
            var ddl_child = $('#ddl_child');
            var ddl_child1 = $('#DropDownList2');
            getProductTypeList(ddl_parent, ddl_child, 'ddl_child_cityDiv');
            ddl_child1.html("<option value=\"\" selected=\"selected\">--请选择--</option>");
            form.render('select', "ddl_child1_cityDiv");
        });

        form.on('select(ddl_child)', function (data) {
            document.getElementById('hfddl_child').value = data.value;
            console.log(document.getElementById('hfddl_child').value);
            var ddl_child = $('#ddl_child');
            var ddl_child1 = $('#DropDownList2');
            getProductTypeList(ddl_child, ddl_child1, 'ddl_child1_cityDiv');
        });


        form.on('radio(ReportType)', function (data) {
            showReportPdfOrPic(data.value)

        });
    });
}

//设置报告类型
function showReportPdfOrPic(flag) {
    if (flag == 0) {
        $('#hdReportType').val("0");
        $('.reportTypeTr1').show();
        $('.reportTypeTr2').hide();
    }
    else {
        $('#hdReportType').val("1");
        $('.reportTypeTr1').hide();
        $('.reportTypeTr2').show();
    }
}

$(document).ready(function () {
    initUpload();
    initDLL();
    initDateTime();
    var prm = Sys.WebForms.PageRequestManager.getInstance();
    prm.add_beginRequest(function () {

    });
    prm.add_endRequest(function (sender, args) {
        initDLL();
        initUpload();
        initDateTime();
    });
});

function initDateTime() {
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render({
            elem: '#txt_fldStartDate'
             , type: 'date'
        });
    });
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render({
            elem: '#txt_fldStartDate2'
             , type: 'date'
        });
    });
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render({
            elem: '#txt_fldEndDate2'
             , type: 'date'
        });
    });
}

//function initPhoto(id) {
//    //调用示例
//    layer.photos({
//        photos: id
//      , anim: 0 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
//    });
//}
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

function getProductTypeList(selParent, sel, type) {
    doAjax("../WebServices/ProductType.asmx/GetProductTypeList", "{ParentID:'" + selParent.val() + "'}", sel, "", type);
}

function getCity(selParent, sel, type) {
    doAjax("../WebServices/frmArea.asmx/GetCity", "{parentDistrictNo:'" + selParent.val() + "'}", sel, "", type);
}

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
//

function notFoundMsg() {
    $("#msgDiv").html("没有结果。");
}

var PaperImgOldIndex = "";
var reportOldIndex = "";
var FormOldIndex = "";

function initUpload() {
    //上传营业执照
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#uploadBusinessBtn' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=tradimg&random=' + Math.random() //上传接口
              , auto: true //选择文件后自动上传
            //, bindAction: '#uploadIDCard1Btn' //指向一个按钮触发上传
              , exts: "gif|jpeg|png|jpg|bmp|ico"
              , accept: "images"
              , acceptMime: 'image/*'
              , size: 3072  //不支持IE8,IE9
              , before: function (obj) { //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                  layer.load(); //上传loading
              }
              , done: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (res.status == '200') {
                      if (res.msg1 == "1")//上传成功
                      {
                          showTemMsg('上传成功');
                          $('#businessImgage').attr('src', res.msg2); //图片链接（base64)
                          $('#businessImgage').attr("layer-src", res.msg2);
                          $('#businessImgDiv').removeClass("layui-hide");
                          $('#deleteBusiness').attr("onclick", "DelTradeImage('" + res.msg2 + "')");
                          $("#businessimg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#popupProgressBarDiv").html("");
                          $("#Hidden_Business").val(res.msg2);
                          initPhoto("#businessImgDiv");  //设置图片点击预览大图
                      }
                      if (res.msg1 == "2")//扩展名不正确
                      {
                          showTemMsg('请上传gif,jpeg,png,jpg,bmp,ico格式');
                          $("#businessimg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (res.msg1 == "3")//超出3M
                      {
                          showTemMsg('图片不能大于3M');

                          $("#businessimg").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (res.msg1 == "4")//上传为空
                      {
                          showTemMsg('请选择要上传的图片');

                          $("#businessimg").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (res.msg1 == "0")//上传出错
                      {
                          showTemMsg('上传出错');
                          $("#businessimg").html("<font color='red'>上传出错</font>");
                      }
                  }
                  else
                      showTemMsg('上传出错，请重试！');
              }
              , error: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  showTemMsg('上传失败，请重试！')
              }
        });
    });

    //上传身份证正面
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#uploadIDCard1Btn' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=idcardimg&random=' + Math.random() //上传接口
              , auto: true //选择文件后自动上传
            //, bindAction: '#uploadIDCard1Btn' //指向一个按钮触发上传
              , exts: "gif|jpeg|png|jpg|bmp|ico"
              , accept: "images"
              , acceptMime: 'image/*'
              , size: 3072  //不支持IE8,IE9
              , before: function (obj) { //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                  layer.load(); //上传loading
              }
              , done: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (res.status == '200') {
                      if (res.msg1 == "1")//上传成功
                      {
                          showTemMsg('上传成功');
                          $('#ID1Imgage').attr('src', res.msg2); //图片链接（base64)
                          $('#ID1Imgage').attr("layer-src", res.msg2);
                          $('#delID1Business').attr("onclick", "DelIDCard1Img('" + res.msg2 + "')");
                          $("#IDSpan").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#ShowIDDiv").html("");
                          $("#Hide_ID1").val(res.msg2);  //保存路径
                          //显示控件
                          $('#ID1Imgage').removeClass("layui-hide");
                          $('#delID1Business').removeClass("layui-hide");
                          $('#ShowIDImageDiv1').removeClass("layui-hide");
                          initPhoto("#ShowIDImageDiv1");  //设置图片点击预览大图
                          IdCard1Uploaded = true;

                      }
                      if (res.msg1 == "2")//扩展名不正确
                      {
                          showTemMsg('请上传gif,jpeg,png,jpg,bmp,ico格式');
                          $("#IDSpan").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (res.msg1 == "3")//超出3M
                      {
                          showTemMsg('图片不能大于3M');

                          $("#IDSpan").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (res.msg1 == "4")//上传为空
                      {
                          showTemMsg('请选择要上传的图片');

                          $("#IDSpan").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (res.msg1 == "0")//上传出错
                      {
                          showTemMsg('上传出错');
                          $("#IDSpan").html("<font color='red'>上传出错</font>");
                      }
                  }
                  else {
                      $("#IDSpan").html("<font color='red'>上传出错，请重试！</font>");

                      showTemMsg('上传出错，请重试！');
                  }

              }
              , error: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  showTemMsg('上传失败，请重试！')
                  $("#IDSpan").html("<font color='red'>上传出错，请重试！</font>");
              }
        });
    });
    //结束上传身份证反面

    //上传身份证反面
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#uploadIDCard2Btn' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=idcardimg&random=' + Math.random() //上传接口
              , auto: true //选择文件后自动上传
            //, bindAction: '#uploadIDCard1Btn' //指向一个按钮触发上传
              , exts: "gif|jpeg|png|jpg|bmp|ico"
              , accept: "images"
              , acceptMime: 'image/*'
              , size: 3072  //不支持IE8,IE9
              , before: function (obj) { //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                  layer.load(); //上传loading
              }
              , done: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (res.status == '200') {
                      if (res.msg1 == "1")//上传成功
                      {
                          showTemMsg('上传成功');
                          $('#ID2Imgage').attr('src', res.msg2); //图片链接（base64)
                          $('#ID2Imgage').attr("layer-src", res.msg2);
                          $('#delID2Business').attr("onclick", "DelIDCard2Img('" + res.msg2 + "')");
                          $("#IDSpan").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#ShowIDDiv").html("");
                          $("#Hide_ID2").val(res.msg2);  //保存路径
                          //显示控件
                          $('#ID2Imgage').removeClass("layui-hide");
                          $('#delID2Business').removeClass("layui-hide");
                          $('#ShowIDImageDiv2').removeClass("layui-hide");
                          initPhoto("#ShowIDImageDiv2");  //设置图片点击预览大图
                          IdCard2Uploaded = true;

                      }
                      if (res.msg1 == "2")//扩展名不正确
                      {
                          showTemMsg('请上传gif,jpeg,png,jpg,bmp,ico格式');
                          $("#IDSpan").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (res.msg1 == "3")//超出3M
                      {
                          showTemMsg('图片不能大于3M');

                          $("#IDSpan").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (res.msg1 == "4")//上传为空
                      {
                          showTemMsg('请选择要上传的图片');

                          $("#IDSpan").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (res.msg1 == "0")//上传出错
                      {
                          showTemMsg('上传出错');
                          $("#IDSpan").html("<font color='red'>上传出错</font>");
                      }
                  }
                  else {
                      $("#IDSpan").html("<font color='red'>上传出错，请重试！</font>");

                      showTemMsg('上传出错，请重试！');
                  }

              }
              , error: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  showTemMsg('上传失败，请重试！')
                  $("#IDSpan").html("<font color='red'>上传出错，请重试！</font>");
              }
        });
    });
    //结束上传身份证反面

    //上传产品图片
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#uploadProductBtn' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=productimg&random=' + Math.random() //上传接口
              , auto: true //选择文件后自动上传
            //, bindAction: '#uploadIDCard1Btn' //指向一个按钮触发上传
              , exts: "gif|jpeg|png|jpg|bmp|ico"  //gif,jpeg,png,jpg,bmp,ico
              , accept: "images"
              , acceptMime: 'image/*'
              , size: 3072  //不支持IE8,IE9
              , before: function (obj) { //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                  layer.load(); //上传loading           
              }
              , done: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (res.status == '200') {
                      if (res.msg1 == "1")//上传成功
                      {
                          showTemMsg('上传成功');
                          $('#productImgage').attr('src', res.msg2); //图片链接（base64)
                          $('#productImgage').attr("layer-src", res.msg2);
                          $('#deleteProduct').attr("onclick", "DelProductImage('" + res.msg2 + "')");  //删除
                          $("#productmsg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#productProgressBarDiv").html("");
                          $("#Hidden_Product").val(res.msg2);  //保存路径
                          //显示控件
                          $('#productImgDiv').removeClass("layui-hide");
                          initPhoto("#productImgDiv");  //设置图片点击预览大图

                      }
                      if (res.msg1 == "2")//扩展名不正确
                      {
                          showTemMsg('请上传gif,jpeg,png,jpg,bmp,ico格式');
                          $("#productmsg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (res.msg1 == "3")//超出3M
                      {
                          showTemMsg('图片不能大于3M');

                          $("#productmsg").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (res.msg1 == "4")//上传为空
                      {
                          showTemMsg('请选择要上传的图片');

                          $("#productmsg").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (res.msg1 == "0")//上传出错
                      {
                          showTemMsg('上传出错');
                          $("#productmsg").html("<font color='red'>上传出错</font>");
                      }
                  }
                  else {
                      $("#productmsg").html("<font color='red'>上传出错，请重试！</font>");

                      showTemMsg('上传出错，请重试！');
                  }

              }
              , error: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  showTemMsg('上传失败，请重试！')
                  $("#productmsg").html("<font color='red'>上传出错，请重试！</font>");
              }
        });
    });
    //结束

    //上传报告1PDF文件
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#selectReportPdfBtn' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=reportpdf' //上传接口
              , auto: false //选择文件后自动上传         
              , bindAction: '#uploadReportPdfBtn' //指向一个按钮触发上传
              , exts: "pdf"  //gif,jpeg,png,jpg,bmp,ico
              , accept: "file"
              , acceptMime: 'file/pdf'
              , choose: function (obj) {
                  //将每次选择的文件追加到文件队列
                  var files = obj.pushFile();
                  //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                  obj.preview(function (index, file, result) {
                      $("#ReportPdfName").attr("value", file.name);
                      $("#ReportPdfMsg").html("");
                  });
                  isSelectReportPdfFile = true;
              }
              , before: function (obj) {
                var fldBeginDate = $("#txt_fldStartDate").val();;
                var fldEndDate = $("#txt_fldStartDate").val(); //$("#txt_fldEndDate").val();
                var fldZDProdectGUID = $("#HF_guid").val();
                var fldCertNo = "报告PDF";
                var userName = $("#txt_username").val();

                //赋值参数
                var data = {
                    'random': Math.random(),
                    'fldBeginDate': fldBeginDate,
                    'fldEndDate': fldEndDate,
                    'fldZDProdectGUID': fldZDProdectGUID,
                    'fldCertNo': fldCertNo,
                    'userName': userName
                };
                this.data = data;
                layer.load();
            }
              , done: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (res.status == '200') {
                      if (res.msg1 == "1")//上传成功
                      {
                          showTemMsg('上传成功');
                          $("#ReportPdfMsg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          //返回内容
                          $("#reportPDFDiv").html("<a href='" + res.msg2 + "' target=_blank>" + res.name + "</a>&nbsp;&nbsp;<img src='../Images/actn011.gif' alt='删除产品图片' onclick=\"DelReportPdf('" + res.msg2 + "','" + res.msg3 + "')\"; style='border:0px;cursor: pointer;' />");
                          $("#hfPDFPath").val(res.msg2);
                      }
                      if (res.msg1 == "2")//扩展名不正确
                      {
                          showTemMsg('请上传pdf格式');
                          $("#ReportPdfMsg").html("<font color='red'>请上传pdf格式</font>");
                      }

                      if (res.msg1 == "4")//上传为空
                      {
                          showTemMsg('请选择要上传的pdf文件');

                          $("#ReportPdfMsg").html("<font color='red'>请选择要上传的pdf文件</font>");
                      }
                      if (res.msg1 == "0")//上传出错
                      {
                          showTemMsg('上传出错');
                          $("#ReportPdfMsg").html("<font color='red'>上传出错</font>");
                      }
                  }
                  else {
                      $("#productmsg").html("<font color='red'>上传出错，请重试！</font>");

                      showTemMsg('上传出错，请重试！');
                  }

              }
              , error: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  showTemMsg('上传失败，请重试！')
                  $("#ReportPdfMsg").html("<font color='red'>上传出错，请重试！</font>");
              }
        });
    });
    //结束

    //上传报告2PDF文件
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#selectReportPdfBtn2' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=reportpdf' //上传接口
              , auto: false //选择文件后自动上传         
              , bindAction: '#uploadReportPdfBtn2' //指向一个按钮触发上传
              , exts: "pdf"  //gif,jpeg,png,jpg,bmp,ico
              , accept: "file"
              , acceptMime: 'file/pdf'
              , choose: function (obj) {
                  //将每次选择的文件追加到文件队列
                  var files = obj.pushFile();
                  //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                  obj.preview(function (index, file, result) {
                      $("#ReportPdfName").attr("value", file.name);
                      $("#ReportPdfMsg").html("");
                  });
                  isSelectReportPdfFile2 = true;
              }
              , before: function (obj) {
                var fldBeginDate = '2000-01-01'; //$("#txt_fldStartDate").val(); ;
                var fldEndDate = '2000-01-01'; //$("#txt_fldEndDate").val();
                var fldZDProdectGUID = $("#HF_guid").val();
                var fldCertNo = "报告PDF";
                var userName = $("#txt_username").val();

                //赋值参数
                var data = {
                    'random': Math.random(),
                    'fldBeginDate': fldBeginDate,
                    'fldEndDate': fldEndDate,
                    'fldZDProdectGUID': fldZDProdectGUID,
                    'fldCertNo': fldCertNo,
                    'userName': userName
                };
                this.data = data;
                layer.load();
            }
              , done: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (res.status == '200') {
                      if (res.msg1 == "1")//上传成功
                      {
                          showTemMsg('上传成功');
                          $("#ReportPdfMsg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          //返回内容
                          $("#reportPDFDiv").html("<a href='" + res.msg2 + "' target=_blank>" + res.name + "</a>&nbsp;&nbsp;<img src='../Images/actn011.gif' alt='删除产品图片' onclick=\"DelReportPdf('" + res.msg2 + "','" + res.msg3 + "')\"; style='border:0px;cursor: pointer;' />");
                          $("#hfPDFPath").val(res.msg2);
                      }
                      if (res.msg1 == "2")//扩展名不正确
                      {
                          showTemMsg('请上传pdf格式');
                          $("#ReportPdfMsg").html("<font color='red'>请上传pdf格式</font>");
                      }

                      if (res.msg1 == "4")//上传为空
                      {
                          showTemMsg('请选择要上传的pdf文件');

                          $("#ReportPdfMsg").html("<font color='red'>请选择要上传的pdf文件</font>");
                      }
                      if (res.msg1 == "0")//上传出错
                      {
                          showTemMsg('上传出错');
                          $("#ReportPdfMsg").html("<font color='red'>上传出错</font>");
                      }
                  }
                  else {
                      $("#productmsg").html("<font color='red'>上传出错，请重试！</font>");

                      showTemMsg('上传出错，请重试！');
                  }

              }
              , error: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  showTemMsg('上传失败，请重试！')
                  $("#ReportPdfMsg").html("<font color='red'>上传出错，请重试！</font>");
              }
        });
    });
    //结束

    //上传证书
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#selectPaperImgBtn' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=paperimg' //上传接口
              , auto: false //选择文件后自动上传         
              , bindAction: '#doUpPaperImgBtn' //指向一个按钮触发上传
              , exts: "gif|jpeg|png|jpg|bmp|ico"  //gif,jpeg,png,jpg,bmp,ico
              , accept: "image"
              , acceptMime: 'image/*'
              , multiple:false
              , size: 3 * 1024
              , choose: function (obj) {
                  //将每次选择的文件追加到文件队列
                  var files = obj.pushFile();
                  if (PaperImgOldIndex != "")
                    delete files[PaperImgOldIndex]; //删除旧的文件
                  //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                  obj.preview(function (index, file, result) {
                      PaperImgOldIndex = index;
                      $("#PaperImgfName").attr("value", file.name);
                  });
              }
            , before: function (obj) {
                var fldBeginDate = $("#txt_fldStartDate2").val();;
                var fldEndDate = $("#txt_fldEndDate2").val();
                var fldZDProdectGUID = $("#HF_guid").val();
                var fldCertNo = $("#txt_fldRZ3C").val();
                var userName = $("#txt_username").val();

                //赋值参数
                var data = {
                    'random': Math.random(),
                    'fldBeginDate': fldBeginDate,
                    'fldEndDate': fldEndDate,
                    'fldZDProdectGUID': fldZDProdectGUID,
                    'fldCertNo': fldCertNo,
                    'userName': userName
                };
                this.data = data;
                layer.load();
            }
              , done: function (res, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (res.status == '200') {
                      
                      if (res.msg1 == "1")//上传成功
                      {
                          showTemMsg("上传成功");
                          $("#mescert").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#PaperProgressBarMsg").html("");
                          $("#txt_username").attr("disabled", "true");
                          $("#txt_fldStartDate2").attr("disabled", "true");
                          $("#txt_fldEndDate2").attr("disabled", "true");
                          $("#txt_fldRZ3C").attr("disabled", "true");

                          //显示图片
                          $("#PaperProgressBarDiv").html($("#PaperProgressBarDiv").html() + '<div style="float:left;width:125px;padding-top:5px"><img src="' + res.msg2 + '" width="95" height="100" title="证书文件" alt="证书文件" onclick="openPic(\'' + res.msg2 + '\', \'证书文件\');" style="cursor: pointer;" align="absmiddle" />' + '<input type="button" value="" onclick="DelPaperImg(\'' + res.msg2 + '\',\'' + res.msg3 + '\');"  class="delImageBtn"  style="background: url(../images/actn011.gif) no-repeat; border: 0px; height: 20px; width: 20px" /></div>');
                      }
                      if (res.msg1 == "2")//扩展名不正确
                      {
                          $("#mescert").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (res.msg1 == "3")//超出3M
                      {
                          $("#mescert").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (res.msg1 == "4")//上传为空
                      {
                          $("#mescert").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (res.msg1 == "5")//上传时该用户已存在
                      {
                          $("#mescert").html("<font color='red'>该用户名已存在,不能传到该目录下面</font>");
                      }
                      if (res.msg1 == "0")//上传出错
                      {
                          $("#mescert").html("<font color='red'>上传出错</font>");
                      }

                      if (res.msg1 != "1") {
                          showTemMsg("上传失败");
                      }
                  }
                  else {
                      showTemMsg("上传失败");
                      $("#mescert").html("<font color='red'>未知错误,请重新上传</font>");
                  }


              }
              , error: function (res, index, upload) {
                  showTemMsg("上传失败");
                  layer.closeAll('loading'); //关闭loading
                  $("#mescert").html("<font color='red'>未知错误,请重新上传</font>");
              }
        });
    });
    //结束

    //上传报告Image1
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#selectReportImgBtn' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=reportimg' //上传接口
              , auto: false //选择文件后自动上传         
              , bindAction: '#uploadReportImgBtn' //指向一个按钮触发上传
              , exts: "gif|jpeg|png|jpg|bmp|ico"  //gif,jpeg,png,jpg,bmp,ico
              , accept: "image"
              , acceptMime: 'image/*'
              , multiple: false
              , size: 3 * 1024
              , choose: function (obj) {
                  isSelectReportImgFile = true;

                  //将每次选择的文件追加到文件队列
                  var files = obj.pushFile();
                  if (reportOldIndex != "")
                      delete files[reportOldIndex]; //删除旧的文件
                  //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                  obj.preview(function (index, file, result) {
                      reportOldIndex = index;
                      $("#ReportImgName").attr("value", file.name);
                  });
              }
            , before: function (obj) {
                //var fldZHProductID='0';
                var fldBeginDate = $("#txt_fldStartDate").val();;
                var fldEndDate = $("#txt_fldStartDate").val(); //$("#txt_fldEndDate").val();
                //var fldPath="";
                var fldZDProdectGUID = $("#HF_guid").val();
                //   var fldCertNo=escape($("#DDL_ReportName").val()); 原的只保存页码
                var fldCertNo = escape($("#DDL_ReportName").val() + "(" + $("#txt_fldRZ3CNo").val() + ")");

                var userName = $("#txt_username").val();

                //赋值参数
                var data = {
                    'random': Math.random(),
                    'fldBeginDate': fldBeginDate,
                    'fldEndDate': fldEndDate,
                    'fldZDProdectGUID': fldZDProdectGUID,
                    'fldCertNo': fldCertNo,
                    'userName': userName
                };
                this.data = data;
                layer.load();
            }
              , done: function (data, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (data.status == 'success') {
                      if (data.msg1 == "1")//上传成功
                      {
                          $("#upreportmsg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#txt_username").attr("disabled", "true");
                          $("#txt_fldStartDate").attr("disabled", "true");
                          $("#txt_fldEndDate").attr("disabled", "true");
                          $("#txt_fldRZ3CNo").attr("disabled", "true");
                          $("#reportProgressBarMsg").html("");
                          $("#DDL_ReportName").val("-1");
                          //显示图片
                          $("#reportProgressBarDiv").html($("#reportProgressBarDiv").html() + '<div style="float:left;width:125px;padding:5px"><img src="' + data.msg2 + '" width="95" height="100" title="' + data.name + '" alt="' + data.name + '" onclick="openPic(\'' + data.msg2 + '\', \'' + data.name + '\');" style="cursor: pointer;" align="absmiddle" />' + '<input type="button" value="" onclick="DelReportImg(\'' + data.msg2 + '\',\'' + data.msg3 + '\');" class="delImageBtn" /><br /><div style="width:100px;text-align:center">' + data.name.split("(")[0] + '</div></div>');
                      }
                      if (data.msg1 == "2")//扩展名不正确
                      {
                          $("#upreportmsg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (data.msg1 == "3")//超出3M
                      {
                          $("#upreportmsg").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (data.msg1 == "4")//上传为空
                      {
                          $("#upreportmsg").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (data.msg1 == "5")//上传时该用户已存在
                      {
                          $("#upreportmsg").html("<font color='red'>该用户名已存在,不能传到该目录下面</font>");
                      }
                      if (data.msg1 == "0")//上传出错
                      {
                          $("#upreportmsg").html("<font color='red'>上传出错</font>");
                      }
                      if (data.msg1 == "6")//报告名称已存在
                      {
                          $("#upreportmsg").html("<font color='red'>该页报告已上传,请选择其它报告页码</font>");
                          $("#DDL_ReportName").focus();
                      }
                  }
                  else {
                      $("#upreportmsg").html("<font color='red'>未知错误,请重新上传</font>");
                  }
              }
              , error: function (res, index, upload) {
                  showTemMsg("上传失败");
                  layer.closeAll('loading'); //关闭loading
                  $("#upreportmsg").html("<font color='red'>未知错误,请重新上传</font>");
              }
        });
    });
    //结束

    //上传报告Image2
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#selectReportImgBtn2' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=reportimg' //上传接口
              , auto: false //选择文件后自动上传         
              , bindAction: '#uploadReportImgBtn2' //指向一个按钮触发上传
              , exts: "gif|jpeg|png|jpg|bmp|ico"  //gif,jpeg,png,jpg,bmp,ico
              , accept: "image"
              , acceptMime: 'image/*'
              , multiple: false
              , size: 3 * 1024
              , choose: function (obj) {
                  isSelectReportImgFile2 = true;
                  //将每次选择的文件追加到文件队列
                  var files = obj.pushFile();
                  if (reportOldIndex != "")
                      delete files[reportOldIndex]; //删除旧的文件
                  //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                  obj.preview(function (index, file, result) {
                      reportOldIndex = index;
                      $("#ReportImgName").attr("value", file.name);
                  });
              }
            , before: function (obj) {
                //var fldZHProductID='0';
                var fldBeginDate = '2000-01-01'; //$("#txt_fldStartDate").val(); ;
                var fldEndDate = '2000-01-01'; //$("#txt_fldEndDate").val();
                //var fldPath="";
                var fldZDProdectGUID = $("#HF_guid").val();
                //   var fldCertNo=escape($("#DDL_ReportName").val()); 原的只保存页码
                var fldCertNo = escape($("#DDL_ReportName").val() + "(" + $("#txt_fldRZ3CNo").val() + ")");

                var userName = $("#txt_username").val();

                //赋值参数
                var data = {
                    'random': Math.random(),
                    'fldBeginDate': fldBeginDate,
                    'fldEndDate': fldEndDate,
                    'fldZDProdectGUID': fldZDProdectGUID,
                    'fldCertNo': fldCertNo,
                    'userName': userName
                };
                this.data = data;
                layer.load();
            }
              , done: function (data, index, upload) {
                  layer.closeAll('loading'); //关闭loading
                  if (data.status == 'success') {
                      if (data.msg1 == "1")//上传成功
                      {
                          $("#upreportmsg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#txt_username").attr("disabled", "true");
                          $("#txt_fldStartDate").attr("disabled", "true");
                          $("#txt_fldEndDate").attr("disabled", "true");
                          $("#txt_fldRZ3CNo").attr("disabled", "true");
                          $("#reportProgressBarMsg").html("");
                          $("#DDL_ReportName").val("-1");
                          //显示图片
                          $("#reportProgressBarDiv").html($("#reportProgressBarDiv").html() + '<div style="float:left;width:125px;padding:5px"><img src="' + data.msg2 + '" width="95" height="100" title="' + data.name + '" alt="' + data.name + '" onclick="openPic(\'' + data.msg2 + '\', \'' + data.name + '\');" style="cursor: pointer;" align="absmiddle" />' + '<input type="button" value="" onclick="DelReportImg(\'' + data.msg2 + '\',\'' + data.msg3 + '\');" class="delImageBtn" /><br /><div style="width:100px;text-align:center">' + data.name.split("(")[0] + '</div></div>');
                      }
                      if (data.msg1 == "2")//扩展名不正确
                      {
                          $("#upreportmsg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (data.msg1 == "3")//超出3M
                      {
                          $("#upreportmsg").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (data.msg1 == "4")//上传为空
                      {
                          $("#upreportmsg").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (data.msg1 == "5")//上传时该用户已存在
                      {
                          $("#upreportmsg").html("<font color='red'>该用户名已存在,不能传到该目录下面</font>");
                      }
                      if (data.msg1 == "0")//上传出错
                      {
                          $("#upreportmsg").html("<font color='red'>上传出错</font>");
                      }
                      if (data.msg1 == "6")//报告名称已存在
                      {
                          $("#upreportmsg").html("<font color='red'>该页报告已上传,请选择其它报告页码</font>");
                          $("#DDL_ReportName").focus();
                      }
                  }
                  else {
                      $("#upreportmsg").html("<font color='red'>未知错误,请重新上传</font>");
                  }
              }
              , error: function (res, index, upload) {
                  showTemMsg("上传失败");
                  layer.closeAll('loading'); //关闭loading
                  $("#upreportmsg").html("<font color='red'>未知错误,请重新上传</font>");
              }
        });
    });
    //结束

    //上传申请表
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({//上传完毕回调
            elem: '#btnUpApplicationForm' //绑定元素
              , url: '../WebPage/RegAshx.ashx?flag=applicationform' //上传接口
              , auto: true //选择文件后自动上传         
              , exts: "gif|jpeg|png|jpg|bmp|ico"  //gif,jpeg,png,jpg,bmp,ico
              , accept: "image"
              , acceptMime: 'image/*'
              , multiple: false
              , size: 3 * 1024
              , choose: function (obj) {
                   layer.load();
              }
               , done: function (res, index, upload) {
                   layer.closeAll('loading'); //关闭loading
                   if (res.status == '200') {
                       if (res.msg1 == "1")//上传成功
                       {
                           showTemMsg("上传成功");
                           $("#ApplicationFormMsg").html(GethowRight() + "<font color='green'>上传成功</font>");
                           $("#ApplicationFormMsgRe").html("");
                           //显示图片
                           $('#ApplicationFormImgage').attr('src', res.msg2); //图片链接（base64)
                           $('#ApplicationFormImgage').attr("layer-src", res.msg2);
                           $('#delApplicationForm').attr("onclick", "DelApplicationFormImg('" + res.msg2 + "')");
                           $("#HFApplicationForm_guid").val(res.msg2);  //保存路径
                           //显示控件
                           $('#ApplicationFormImgage').removeClass("layui-hide");
                           $('#delApplicationForm').removeClass("layui-hide");
                           $('#ApplicationFormReDiv').removeClass("layui-hide");
                           initPhoto("#ApplicationFormReDiv");  //设置图片点击预览大图
                       }
                       if (res.msg1 == "2")//扩展名不正确
                       {
                           $("#ApplicationFormMsg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                       }
                       if (res.msg1 == "3")//超出3M
                       {
                           $("#ApplicationFormMsg").html("<font color='red'>图片不能大于3M</font>");
                       }
                       if (res.msg1 == "4")//上传为空
                       {
                           $("#ApplicationFormMsg").html("<font color='red'>请选择要上传的图片</font>");
                       }
                       if (res.msg1 == "5")//上传时该用户已存在
                       {
                           $("#ApplicationFormMsg").html("<font color='red'>该用户名已存在,不能传到该目录下面</font>");
                       }
                       if (res.msg1 == "0")//上传出错
                       {
                           $("#ApplicationFormMsg").html("<font color='red'>上传出错</font>");
                       }

                       if (res.msg1 != "1") {
                           showTemMsg("上传失败");
                       }
                   }
                   else {
                       showTemMsg("上传失败");
                       $("#ApplicationFormMsg").html("<font color='red'>未知错误,请重新上传</font>");
                   }


               }
              , error: function (res, index, upload) {
                  showTemMsg("上传失败");
                  layer.closeAll('loading'); //关闭loading
                  $("#ApplicationFormMsg").html("<font color='red'>未知错误,请重新上传</font>");
              }
        });
    });
    //结束
}

//删除申请表图片
function DelApplicationFormImg(fldPath) {
    //询问框
    layer.confirm('确定删除该申请表吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();

        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=deltradimg&img=" + fldPath + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {

                layer.closeAll('loading'); //关闭loading
                showTemMsg("删除成功!");
                $("#HFApplicationForm_guid").val('');  //保存路径

                $("#ApplicationFormReDiv").addClass("layui-hide");
                $("#ApplicationFormMsgRe").html("<font color='red'>注:</font><span class='alertmsg'> 请上传3M以内的图片文件</span>");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $("#mescert").html("");
                layer.closeAll('loading'); //关闭loading

            },
            error: function () {
                layer.closeAll('loading'); //关闭loading
                showTemMsg("删除失败");
            }
        });
    }, function () {
    });
}

var isSelectReportImgFile2 = false;//是否已选择img文件
var isSelectReportImgFile = false;//是否已选择img文件
//检查上传报告的的输入框格式对不对
function checkUpReportImgNew2() {
    if ($("#txt_upreportmsg").val() == "1") {
        showTemMsg("报告图片太大,请上传小于3M的图片!");
        return;
    }

    else if (isNull($("#txt_username").val()) == true) {
        $("#txt_username").focus();
        layer.tips('请输入用户名!', '#txt_username', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    else if (isNull($("#txt_fldRZ3CNo").val()) == true) {
        $("#txt_fldRZ3CNo").focus();
        layer.tips('请输入报告编号!', '#txt_fldRZ3CNo', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    if ($("#DDL_ReportName").val() == "-1") {
        $("#DDL_ReportName").focus();
        $("#DDL_ReportName").focus();
        showTemMsg('请选择报告页码!')
        return false;
    }

    if (!isSelectReportImgFile2) {
        layer.tips('请先选择报告文件!', '#selectReportImgBtn2', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }

    $("#uploadReportImgBtn2").click();
}

//检查上传报告的的输入框格式对不对
function checkUpReportImgNew() {
    if ($("#txt_upreportmsg").val() == "1") {
        showTemMsg("报告图片太大,请上传小于3M的图片!");
        return false;
    }

    else if (isNull($("#txt_username").val()) == true) {
        $("#txt_username").focus();
        layer.tips('请输入用户名!', '#txt_username', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    else if (isNull($("#txt_fldRZ3CNo").val()) == true) {
        $("#txt_fldRZ3CNo").focus();
        layer.tips('请输入报告编号!', '#txt_fldRZ3CNo', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    else if (isdate($("#txt_fldStartDate").val()) == false) {
        $("#txt_fldStartDate").focus();
        layer.tips('报告签发日期格式不对!', '#txt_fldStartDate', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    if ($("#DDL_ReportName").val() == "-1") {
        $("#DDL_ReportName").focus();
        showTemMsg('请选择报告页码!')

        return false;
    }

    if (!isSelectReportImgFile) {
        layer.tips('请先选择报告文件!', '#selectReportImgBtn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }

    $("#uploadReportImgBtn").click();

}

//检查上传报告的的输入框格式对不对
function checkUpReportCertNew() {
    if (isNull($("#txt_username").val()) == true) {
        $("#txt_username").focus();
        layer.tips('请输入用户名!', '#txt_username', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_fldRZ3C").val()) == true) {
        $("#txt_fldRZ3C").focus();
        //window.alert('请输入证书编号!')
        layer.tips('请输入证书编号!', '#txt_fldRZ3C', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isdate($("#txt_fldStartDate2").val()) == false) {
        $("#txt_fldStartDate2").focus();
        layer.tips('证书开始时间格式不对!', '#txt_fldStartDate2', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isdate($("#txt_fldEndDate2").val()) == false) {
        $("#txt_fldEndDate2").focus();
        layer.tips('证书结束时间格式不对!', '#txt_fldEndDate2', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (!compareDate($("#txt_fldEndDate2").val(), $("#txt_fldStartDate2").val())) {
        $("#txt_fldEndDate2").focus();
        layer.tips('证书结束时间不能小于开始时间!', '#txt_fldEndDate2', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }

    $("#doUpPaperImgBtn").click();
}

var isSelectReportPdfFile = false;  //是否已选择PDF文件
var isSelectReportPdfFile2 = false;  //是否已选择PDF文件
//检查上传报告的的输入框格式对不对
function checkUpReportPDF1() {
    if (isNull($("#txt_username").val()) == true) {
        $("#txt_username").focus();
        layer.tips('请输入用户名!', '#txt_username', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    if (isNull($("#txt_fldRZ3CNo").val()) == true) {
        $("#txt_fldRZ3CNo").focus();
        layer.tips('请输入报告编号!', '#txt_fldRZ3CNo', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    if (isdate($("#txt_fldStartDate").val()) == false) {
        $("#txt_fldStartDate").focus();
        layer.tips('报告签发日期格式不对!', '#txt_fldStartDate', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    if (!isSelectReportPdfFile) {
        layer.tips('请先选择报告文件!', '#selectReportPdfBtn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }

    $("#uploadReportPdfBtn").click();
}

function checkUpReportPDF2() {
    if (isNull($("#txt_username").val()) == true) {
        $("#txt_username").focus();
        layer.tips('请输入用户名!', '#txt_username', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    else if (isNull($("#txt_fldRZ3CNo").val()) == true) {
        $("#txt_fldRZ3CNo").focus();
        layer.tips('请输入报告编号!', '#txt_fldRZ3CNo', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    if (!isSelectReportPdfFile2) {
        layer.tips('请先选择报告文件!', '#selectReportPdfBtn2', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }

    $("#uploadReportPdfBtn2").click();


}
//删除产品PDF
function DelReportPdf(imgpath, fldId) {
    //询问框
    layer.confirm('确定删除上传好的文件吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=delreportpdf&pdf=" + imgpath + "&fldID=" + fldId + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {
                layer.closeAll('loading'); //关闭loading
                isSelectReportPdfFile = false;
                showTemMsg("删除成功!");
                $("#reportPDFDiv").html("<font color='red'>注:</font><span class='alertmsg'>上传报告时用户名,报告编号,名称,有效期不能为空</span>");
                $("#hfPDFPath").val("");
            },
            complete: function (XMLHttpRequest, textStatus) {
                layer.closeAll('loading'); //关闭loading
            },
            error: function () {
                layer.closeAll('loading'); //关闭loading

                showTemMsg("删除失败!");
                //alert("删除失败");
            }
        });
    }, function () {

    });
}

//删除营业执照图片
function DelTradeImage(imgpath) {
    //询问框
    layer.confirm('确定删除上传好的文件吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=deltradimg&img=" + imgpath + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {
                layer.closeAll('loading'); //关闭loading
                $("#popupProgressBarDiv").html("<span class='alertmsg'><font color='red'>注：</font>请上传3M以内的复印件或扫描件(类型为:jpg,jpeg,gif,bmp,png格式的图片)</span>");
                $("#Hidden_Business").val("");
                $('#businessImgDiv').addClass("layui-hide");
            },
            complete: function (XMLHttpRequest, textStatus) {
                layer.closeAll('loading'); //关闭loading
                $("#businessimg").html("请上传营业执照副本<font color='red'>原件</font>彩色扫描件");
            },
            error: function () {
                layer.closeAll('loading'); //关闭loading

                showTemMsg("删除失败");
                //alert("删除失败");
            }
        });
    }, function () {

    });

    //if (!confirm("确定删除上传好的文件吗?")) {
    //    return;
    //}

}

//删除产品图片
function DelProductImage(imgpath) {
    //询问框
    layer.confirm('确定删除上传好的文件吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=deltradimg&img=" + imgpath + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {
                layer.closeAll('loading'); //关闭loading
                $("#productProgressBarDiv").html("<span class='alertmsg'><font color='red'>注：</font>请上传3M以内的图片文件(原件扫描彩色版)上传报告时用户名,报告编号,名称,有效期不能为空</span>");
                $("#Hidden_Product").val("");
                $('#productImgDiv').addClass("layui-hide");
            },
            complete: function (XMLHttpRequest, textStatus) {
                layer.closeAll('loading'); //关闭loading
                $("#productmsg").html("请上传3M以内图片文件(原件扫描彩色版)");
            },
            error: function () {
                layer.closeAll('loading'); //关闭loading

                showTemMsg("删除失败");
                //alert("删除失败");
            }
        });
    }, function () {

    });
}


var IdCard1Uploaded = false;
var IdCard2Uploaded = false;
//删除身份证正面
function DelIDCard1Img(imgpath) {
    //询问框
    layer.confirm('确定删除上传好的文件吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=deltradimg&img=" + imgpath + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {
                layer.closeAll('loading'); //关闭loading
                $("#Hide_ID1").val("");
                $('#ShowIDImageDiv1').addClass("layui-hide");
                IdCard1Uploaded = false;
                if (IdCard2Uploaded == false)  //没有上传身份证
                    $("#ShowIDDiv").html("<span class='alertmsg'><font color='red'>注：</font>请上传3M以内的复印件或扫描件(类型为:jpg,jpeg,gif,bmp,png格式的图片)</span>");
            },
            complete: function (XMLHttpRequest, textStatus) {
                layer.closeAll('loading'); //关闭loading
                $("#IDSpan").html("请上传请上传身份证正反面<font color='red'>原件</font>彩色扫描件");
            },
            error: function () {
                layer.closeAll('loading'); //关闭loading
                showTemMsg("删除失败");
                //alert("删除失败");
            }
        });
    }, function () {

    });
}

//删除身份证反面
function DelIDCard2Img(imgpath) {
    //询问框
    layer.confirm('确定删除上传好的文件吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=deltradimg&img=" + imgpath + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {
                layer.closeAll('loading'); //关闭loading
                $("#Hide_ID2").val("");
                $('#ShowIDImageDiv2').addClass("layui-hide");
                IdCard2Uploaded = false;
                if (IdCard1Uploaded == false)  //没有上传身份证
                    $("#ShowIDDiv").html("<span class='alertmsg'><font color='red'>注：</font>请上传3M以内的复印件或扫描件(类型为:jpg,jpeg,gif,bmp,png格式的图片)</span>");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $("#IDSpan").html("请上传身份证正反面<font color='red'>原件</font>彩色扫描件");
            },
            error: function () {
                layer.closeAll('loading'); //关闭loading
                showTemMsg("删除失败");
                //alert("删除失败");
            }
        });
    }, function () {

    });

}

function CheckReport() {
    //  alert(13);
    var Report = $("#txt_fldRZ3CNo").val();
    // var ReLen = Report.lenght;
    // alert(Report.length);
    if (Report.length == 0) {
        $("#rptmsg").html("");
        return true;
    }
    if (Report.length < 2) {

        $("#rptmsg").html("报告编号格式有误");
        //window.document.getElementById("btt_UpReport").disabled = true;
        $("#btt_UpReport").attr("disabled", true);

        return false;
    }
    else {
        var rep2 = Report.substring(0, 2).toLocaleLowerCase();
        if (rep2 == 'dz' || rep2 == 'zb' || rep2 == 'gn' || isnum(rep2) == false) {
            $("#rptmsg").html("");
            $("#btt_UpReport").removeAttr("disabled");
            $("#btt_UpReport").removeClass("layui-disabled");
            $("#btt_UpReport2").removeClass("layui-disabled");
            $("#btt_UpReport2").removeAttr("disabled");
            if ($("#DropDownList1").val() != "") {
                $("#txt_fldStartDate").removeAttr("disabled");
                $("#btnSelectReport").removeAttr("disabled");
                $("#btnUpCert").removeAttr("disabled");
                $("#btt_UpReport").removeAttr("disabled");
                $("#btt_UpReport2").removeAttr("disabled");
                $("#btt_UpReport2").removeClass("layui-disabled");
                $("#btt_UpReport").removeClass("layui-disabled");
                $("#btnUpCert").removeClass("layui-disabled");
            }
            else {
                $("#txt_fldStartDate").removeAttr("disabled");
                $("#btnUpCert").attr("disabled", true);
                $("#btt_UpReport2").attr("disabled", true);
                $("#btt_UpReport").attr("disabled", true);
                $("#btt_UpReport").addClass("layui-disabled");
                $("#btt_UpReport2").addClass("layui-disabled");
                $("#btnUpCert").addClass("layui-disabled");

            }
            return true;
        }
        else {
            $("#rptmsg").html("报告编号格式有误");
            $("#btt_UpReport").attr("disabled", true);
            $("#btt_UpReport2").attr("disabled", true);
            $("#btt_UpReport2").addClass("layui-disabled");
            $("#btt_UpReport").addClass("layui-disabled");

            return false;
        }
    }
}


