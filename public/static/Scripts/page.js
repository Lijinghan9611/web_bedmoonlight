document.title = "广东消防产品流向服务平台";
//定义字符串去除空格


String.prototype.trim = function () {
    return this.replace(/\s/gi, "");
}

function checkdata() {
    $("input").removeClass("txtbg");
    if (isNumberOr_Letter($("#txt_username").val()) == false || GetStrLen($("#txt_username").val()) < 4) {
        $("#txt_username").focus();
        $("#txt_username").addClass("txtbg");
        layer.tips('用户名只能由字母，数字组成且长度不能小于4!', '#txt_username', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (GetStrLen($("#txt_password1").val()) < 6) {
        $("#txt_password1").focus();
        $("#txt_password1").addClass("txtbg");
        layer.tips('密码长度不能小于6!', '#txt_password1', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#txt_password1").val() != $("#txt_password2").val()) {
        $("#txt_password2").focus();
        $("#txt_password2").addClass("txtbg");
        layer.tips('两次密码不一致!', '#txt_password2', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }

    else if (isNull($("#enterprisecode").val()) == true) {
        $("#enterprisecode").focus();
        $("#enterprisecode").addClass("txtbg");
        layer.tips('统一社会信用代码不能为空!', '#enterprisecode', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_frdb").val()) == true) {
        $("#txt_frdb").focus();
        $("#txt_frdb").addClass("txtbg");
        layer.tips('请输入企业法人代表姓名!', '#txt_frdb', {
            tips: [1, '#EE7942'],
            time: 3000
        });
       
        return false
    }
    else if (isNull($("#txt_IDNumber").val()) == true) {
        $("#txt_IDNumber").focus();
        $("#txt_IDNumber").addClass("txtbg");
        layer.tips('请输入企业法人身份证!', '#txt_IDNumber', {
            tips: [1, '#EE7942'],
            time: 3000
        });

        return false
    }
    else if (isIDCardNumber($("#txt_IDNumber").val()) == false) {
        $("#txt_IDNumber").focus();
        $("#txt_IDNumber").addClass("txtbg");
        layer.tips('身份证格式有误!', '#txt_IDNumber', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_linkman").val()) == true) {
        $("#txt_linkman").focus();
        $("#txt_linkman").addClass("txtbg");
 
        layer.tips('请输入联系人姓名!', '#txt_linkman', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_telephone").val()) == true) {
        $("#txt_telephone").focus();
        $("#txt_telephone").addClass("txtbg");
 
        layer.tips('请输入联系人电话!', '#txt_telephone', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false 
    }
    else if (isNull($("#unitname").val()) == true) {
        $("#unitname").focus();
        $("#unitname").addClass("txtbg");
 
        layer.tips('请输入公司名称!', '#unitname', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNumber($("#tb_fldphone").val()) == false) {
        $("#tb_fldphone").focus();
        $("#tb_fldphone").addClass("txtbg");
 
        layer.tips('请检查输入的手机号码是否正确!', '#tb_fldphone', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#Province").val() != '000000' && $("#City").val() == "0") {
        $("#City").focus();
        showTemMsg('请选择企业所在区域!');
        return false
    }
    else if (isNull($("#txt_fldaddress").val()) == true) {
        $("#txt_fldaddress").focus();
        $("#txt_fldaddress").addClass("txtbg");
        layer.tips('请输入企业联系地址!', '#txt_fldaddress', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#Hidden_Business").val() == "") {
        //window.alert('请上传营业执照图片!')
        $("#uploadBusinessBtn").focus();
        layer.tips('请上传营业执照图片!', '#uploadBusinessBtn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }

    else if ($("#Hide_ID1").val() == "") {
        $("#uploadIDCard1Btn").focus();
        layer.tips('请上传法人身份证正面!', '#uploadIDCard1Btn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#Hide_ID2").val() == "") {
        $("#uploadIDCard2Btn").focus();
        layer.tips('请上传法人身份证反面!', '#uploadIDCard2Btn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#HFApplicationForm_guid").val() == "") {
        $("#btnUpApplicationForm").focus();
        layer.tips('请上传申请表!', '#btnUpApplicationForm', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    if (isNull($("#txt_value").val())) {
 
        layer.tips('请选择供应商!', '#selectGYS', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }

    else if (isNull($("#txt_summary").val()) == true) {
        $("#txt_summary").focus();
        $("#txt_summary").addClass("txtbg");
 
        layer.tips('企业信息简介不能为空!', '#txt_summary', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#chb_yes")[0].checked == false) {
        $("#chb_yes").focus();
 
        layer.tips('注册企业用户请确认已阅读消防企业信息服务条款,并同意该服务条款!', '#chb_yes', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    login();


    return true;
}
function checkdataQH() {
    $("input").removeClass("txtbg");
    if (isNumberOr_Letter($("#txt_username").val()) == false || GetStrLen($("#txt_username").val()) < 4) {
        $("#txt_username").focus();
        $("#txt_username").addClass("txtbg");
        window.alert('用户名只能由字母，数字组成且长度不能小于4!')
        return false
    }
    else if (GetStrLen($("#txt_password1").val()) < 6) {
        $("#txt_password1").focus();
        $("#txt_password1").addClass("txtbg");
        window.alert('密码长度不能小于6!')
        return false
    }
    else if ($("#txt_password1").val() != $("#txt_password2").val()) {
        $("#txt_password2").focus();
        $("#txt_password2").addClass("txtbg");
        window.alert('确认密码不正确!')
        return false
    }

    else if (isNull($("#txt_frdb").val()) == true) {
        $("#txt_frdb").focus();
        $("#txt_frdb").addClass("txtbg");
        window.alert('请输入企业法人代表姓名!')
        return false
    }
    else if (isNull($("#txt_linkman").val()) == true) {
        $("#txt_linkman").focus();
        $("#txt_linkman").addClass("txtbg");
        window.alert('请输入联系人姓名!')
        return false
    }
    else if (isNull($("#txt_telephone").val()) == true) {
        $("#txt_telephone").focus();
        $("#txt_telephone").addClass("txtbg");
        window.alert('请输入联系人电话!')
        return false
    }
        //	else if (isMail($("#txt_email").val()) == false) {
        //		$("#txt_email").focus();
        //		$("#txt_email").addClass("txtbg");
        //		window.alert('请确认邮件格式是否正确!')
        //		return false
        //	}
    else if (isNull($("#unitname").val()) == true) {
        $("#unitname").focus();
        $("#unitname").addClass("txtbg");
        window.alert('请输入企业名称!')
        return false
    }
    else if (isNumber($("#tb_fldphone").val()) == false) {
        $("#tb_fldphone").focus();
        $("#tb_fldphone").addClass("txtbg");
        window.alert('你确认输入的手机号码是否正确!')
        return false
    }
    else if ($("#Province").val() != '000000' && $("#City").val() == "0") {
        $("#City").focus();
        window.alert('请选择企业所在区域!')
        return false
    }
    else if (isNull($("#enterprisecode").val()) == true) {
        $("#enterprisecode").focus();
        $("#enterprisecode").addClass("txtbg");
        window.alert('营业执照编号不能为空!')
        return false
    }
    else if (isNull($("#txt_fldaddress").val()) == true) {
        $("#txt_fldaddress").focus();
        $("#txt_fldaddress").addClass("txtbg");
        window.alert('请输入企业联系地址!')
        return false
    }
    else if (isNull($("#Hidden_Business").val()) == true) {
        window.alert('请上传营业执照图片!')
        return false
    }

    if ($("#CheckBoxList1_0")[0].checked == true) {
        if (isNull($("#txt_value").val())) {
            window.alert('请选择供应商!')
            return false;
        }
    }
    else if (isNull($("#txt_summary").val()) == true) {
        $("#txt_summary").focus();
        $("#txt_summary").addClass("txtbg");
        window.alert('企业信息简介不能为空!')
        return false
    }
    else if ($("#chb_yes")[0].checked == false) {
        $("#chb_yes").focus();
        window.alert('注册企业用户请确认已阅读消防企业信息服务条款,并同意该服务条款')
        return false
    }



    return true;
}
function DDL_Change2() {
    if ($("#ddl_parent").val() == "47") {
        if ($("#ddl_child").val() == "144" || $("#ddl_child").val() == "145" || $("#ddl_child").val() == "146" || $("#ddl_child").val() == "147" || $("#ddl_child").val() == "149" || $("#ddl_child").val() == "256") {
            $("#tr1").hide();
            $("#tr2").show();
            var child = $("#ddl_child").val();
            if (child == "144") {
                $("#DDL_Type").val("GFM");
            }
            else if (child == "145") {
                $("#DDL_Type").val("MFM");
            }
            else if (child == "146") {
                $("#DDL_Type").val("GMFM");
            }
            else if (child == "147") {
                $("#DDL_Type").val("QTFM");
            }
            else if (child == "149") {
                $("#DDL_Type").val("LFM");
            }

            else if (child == "256") {
                $("#DDL_Type").val("BLFM");
            }
        }
        else {
            $("#tr1").show();
            $("#tr2").hide();
        }
    }
    else {
        $("#tr1").show();
        $("#tr2").hide();
    }
}
function DDL_Change() {
    //
    if ($("#DropDownList1").val() == "2") {//形式检验
        
        $("#tr_cert1,#tr_cert2,#tr_cert3,#tr_cert4,#btt_UpReport2,#checkReportPdfBtn2,#selectReportPdfBtn2,#selectReportImgBtn2").hide();
        $("#trReport,#btt_UpReport,#checkReportPdfBtn,#selectReportPdfBtn,#selectReportImgBtn").show();
    }
    else {
        $("#tr_cert1,#tr_cert2,#tr_cert3,#tr_cert4,#btt_UpReport2,#checkReportPdfBtn2,#selectReportPdfBtn2,#selectReportImgBtn2").show();
        $("#trReport,#btt_UpReport,#checkReportPdfBtn,#selectReportPdfBtn,#selectReportImgBtn").hide();
    }
    if ($("#DropDownList1").val() != "") {       
        $("#ReportImgName").attr("value","");
        $("#btt_UpReport").removeClass("layui-disabled");
        $("#btt_UpReport2").removeClass("layui-disabled");
        $("#btnUpCert").removeClass("layui-disabled");
        $("#btnSelectReport").removeClass("layui-disabled");
        $("#txt_fldStartDate").removeClass("layui-disabled");
        
        $("#checkReportPdfBtn").removeClass("layui-disabled");
        window.document.getElementById("checkReportPdfBtn").disabled = false;

        $("#checkReportPdfBtn2").removeClass("layui-disabled");
        $("#checkReportPdfBtn").removeClass("layui-disabled");
        $("#selectReportPdfBtn2").removeClass("layui-disabled");
        $("#selectReportPdfBtn").removeClass("layui-disabled");
        window.document.getElementById("selectReportPdfBtn2").disabled = false;
        window.document.getElementById("selectReportPdfBtn").disabled = false;
        window.document.getElementById("checkReportPdfBtn2").disabled = false;
        window.document.getElementById("checkReportPdfBtn").disabled = false;

        $("#selectReportImgBtn2").removeClass("layui-disabled");
        $("#selectReportImgBtn").removeClass("layui-disabled");
        window.document.getElementById("selectReportImgBtn").disabled = false;
        window.document.getElementById("selectReportImgBtn2").disabled = false;

        window.document.getElementById("btt_UpReport").disabled = false;
        window.document.getElementById("btt_UpReport2").disabled = false;
        window.document.getElementById("btnUpCert").disabled = false;
        window.document.getElementById("btnSelectReport").disabled = false;
        window.document.getElementById("txt_fldStartDate").disabled = false;
    }
    else {
        $("#checkReportPdfBtn2").addClass("layui-disabled");
        $("#checkReportPdfBtn").addClass("layui-disabled");
        $("#selectReportPdfBtn2").addClass("layui-disabled");
        $("#selectReportPdfBtn").addClass("layui-disabled");

        $("#btt_UpReport").addClass("layui-disabled");
        $("#btt_UpReport2").addClass("layui-disabled");
        $("#btnUpCert").addClass("layui-disabled");
        $("#btnSelectReport").addClass("layui-disabled");
        $("#txt_fldStartDate").addClass("layui-disabled");

        $("#checkReportPdfBtn").addClass("layui-disabled");
        window.document.getElementById("checkReportPdfBtn").disabled = true;

        $("#selectReportImgBtn2").addClass("layui-disabled");
        $("#selectReportImgBtn").addClass("layui-disabled");
        window.document.getElementById("selectReportImgBtn").disabled = true;
        window.document.getElementById("selectReportImgBtn2").disabled = true;

        window.document.getElementById("selectReportPdfBtn2").disabled = true;
        window.document.getElementById("selectReportPdfBtn").disabled = true;
        window.document.getElementById("checkReportPdfBtn2").disabled = true;
        window.document.getElementById("checkReportPdfBtn").disabled = true;

        window.document.getElementById("btt_UpReport").disabled = true;
        window.document.getElementById("btt_UpReport2").disabled = true;
        window.document.getElementById("btnUpCert").disabled = true;
        window.document.getElementById("btnSelectReport").disabled = true;
        window.document.getElementById("txt_fldStartDate").disabled = false;
    }
    cert_Change();
    CheckReport(1, 0);

}
///强制性认证检测证书长度
function cert_Change() {
    if ($("#DropDownList1").val() == "1") {
        Report = $("#txt_fldRZ3C").val();
        Report = Report.replace(/^\s+|\s+$/g, "");
        if (Report != '') {
            if (Report.length != 16) {
                $("#L_zsmsg").html("<font color='red'>证书编号填写有误</font>");
                window.document.getElementById("btnUpCert").disabled = true;
                $("#btnUpCert").addClass("layui-disabled");
            }
            else {
                $("#L_zsmsg").html("");
                $("#btnUpCert").removeClass("layui-disabled");
                window.document.getElementById("btnUpCert").disabled = false;
            }
        }
    }
    else {
        $("#L_zsmsg").html("");
        window.document.getElementById("btnUpCert").disabled = false;
        $("#btnUpCert").removeClass("layui-disabled");
    }
    if ($("#DropDownList1").val() == "") {
        $("#L_zsmsg").html("");
        $("#btnUpCert").addClass("layui-disabled");
        window.document.getElementById("btnUpCert").disabled = true;
    }
}

function limitNum(obj) {
    if (obj.value.replace(/[\d+]/ig, "").length > 0) {
        alert('只能输入数字');
        obj.focus();
        obj.style.background = "#BCBDBB";
        return;
    }
    else {
        obj.style.background = "#ffffff";
    }
}
function txtLimit(obj) {
    limitNum(obj);
    var stxt1 = $("#txt1").val().substring(0, 2);
    var svalue = "宽度";
    if (obj == $("#txtH")) {
        stxt1 = $("#txt1").val().substring(2, 4);
        svalue = "高度";
    }
    //alert(stxt1);
    if (parseInt(obj.value) > parseInt(stxt1)) {
        alert(svalue + "填写有误!");
        obj.focus();
        //  obj.style.background="#BCBDBB";
        return false;
    }
}

function getLoginInfo() {
    window.document.getElementById('btn_getinfo').click();
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

//检验身份证
function isIDCardNumber(str) {
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!regIdNo.test(str)) {
        return false;
    }
    return true;
}

function checkreg() {
    $("input").removeClass("txtbg");
    if (isNumberOr_Letter($("#txt_username").val()) == false || GetStrLen($("#txt_username").val()) < 4) {
        $("#txt_username").focus();
        $("#txt_username").addClass("txtbg");
        layer.tips('用户名只能由字母，数字组成且长度不能小于4!', '#txt_username', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        showTemMsg("用户名只能由字母，数字组成且长度不能小于4!");
        //window.alert('用户名只能由字母，数字组成且长度不能小于4!')
        return false
    }
    else if (GetStrLen($("#txt_password1").val()) < 6) {
        $("#txt_password1").focus();
        $("#txt_password1").addClass("txtbg");
        //window.alert('密码长度不能小于6!')
        layer.tips('密码长度不能小于6!', '#txt_password1', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#txt_password1").val() != $("#txt_password2").val()) {
        $("#txt_password2").focus();
        $("#txt_password2").addClass("txtbg");
        //window.alert('确认密码不正确!')
        layer.tips('两次密码不一致!', '#txt_password2', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#enterprisecode").val()) == true) {
        $("#enterprisecode").focus();
        $("#enterprisecode").addClass("txtbg");
        //window.alert('企业营业执照注册号不能为空!')
        layer.tips('统一社会信用代码不能为空!', '#enterprisecode', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }

    else if (!CheckSocialCreditCode($("#enterprisecode").val())) {
        $("#enterprisecode").focus();
        $("#enterprisecode").addClass("txtbg");
        layer.tips('统一社会信用代码格式错误!', '#enterprisecode', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }

    else if (isNull($("#txt_frdb").val()) == true) {
        $("#txt_frdb").focus();
        $("#txt_frdb").addClass("txtbg");
        layer.tips('请输入企业法人代表姓名!', '#txt_frdb', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        //window.alert('请输入企业法人代表姓名!')
        return false
    }
    else if (isNull($("#txt_IDNumber").val()) == true) {
        $("#txt_IDNumber").focus();
        $("#txt_IDNumber").addClass("txtbg");
        layer.tips('请输入企业法人身份证!', '#txt_IDNumber', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isIDCardNumber($("#txt_IDNumber").val()) == false) {
        $("#txt_IDNumber").focus();
        $("#txt_IDNumber").addClass("txtbg");
        layer.tips('身份证格式有误!', '#txt_IDNumber', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    
    else if (isNull($("#txt_linkman").val()) == true) {
        $("#txt_linkman").focus();
        $("#txt_linkman").addClass("txtbg");
        //window.alert('请输入联系人姓名!')
        layer.tips('请输入联系人姓名!', '#txt_linkman', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_telephone").val()) == true) {
        $("#txt_telephone").focus();
        $("#txt_telephone").addClass("txtbg");
        //window.alert('请输入联系人电话!')
        layer.tips('请输入联系人电话!', '#txt_telephone', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNumber($("#tb_fldphone").val()) == false) {
        $("#tb_fldphone").focus();
        $("#tb_fldphone").addClass("txtbg");
        //window.alert('你确认输入的手机号码是否正确!')
        layer.tips('请检查输入的手机号码是否正确!', '#tb_fldphone', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (validatePhone != $("#tb_fldphone").val() || validatePhone == "") {
        $("#tb_fldphone").focus();
        $("#tb_fldphone").addClass("txtbg");
        layer.tips('请先验证手机!', '#tb_fldphone', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }

    else if (isNull($("#unitname").val()) == true) {
        $("#unitname").focus();
        $("#unitname").addClass("txtbg");
        //window.alert('请输入企业名称!')
        layer.tips('请输入企业名称!', '#unitname', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_fldaddress").val()) == true) {
        $("#txt_fldaddress").focus();
        $("#txt_fldaddress").addClass("txtbg");
        //window.alert('请输入企业联系地址!')
        layer.tips('请输入企业联系地址!', '#txt_fldaddress', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#Province").val() != '000000' && $("#City").val() == "0") {
        $("#City").focus();
        showTemMsg('请选择企业所在区域!');
        //window.alert('请选择企业所在区域!')
        return false
    }
    else if (isNull($("#txt_summary").val()) == true) {
        $("#txt_summary").focus();
        $("#txt_summary").addClass("txtbg");
        //window.alert('企业信息简介不能为空!')
        layer.tips('企业信息简介不能为空!', '#txt_summary', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#Hidden_Business").val() == "") {
        //window.alert('请上传营业执照图片!')
        $("#uploadBusinessBtn").focus();
        layer.tips('请上传营业执照图片!', '#uploadBusinessBtn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }

    else if ($("#Hide_ID1").val() == "") {
        $("#uploadIDCard1Btn").focus();
        layer.tips('请上传法人身份证正面!', '#uploadIDCard1Btn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#Hide_ID2").val() == "") {
        $("#uploadIDCard2Btn").focus();
        layer.tips('请上传法人身份证反面!', '#uploadIDCard2Btn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if($("#HFApplicationForm_guid").val() == ""){
        $("#btnUpApplicationForm").focus();
        layer.tips('请上传申请表!', '#btnUpApplicationForm', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#ddl_child").val()) == true) {
        $("#ddl_childDiv").focus();
        showTemMsg('请选择产品类型!');
        layer.tips('请选择产品类型!', '#ddl_childDiv', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_name").val()) == true) {
        $("#txt_name").focus();
        $("#txt_name").addClass("txtbg");
        //window.alert('产品名称不能为空!')
        layer.tips('产品名称不能为空!', '#txt_name', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#DropDownList1").val()) == true) {
        $("#DropDownList1").focus();
        //window.alert('请选择准产品类别!')
        showTemMsg('请选择准产品类别!');
        return false
    }

    else if ($("#tr2").is(":hidden") && isNull($("#txt_fldModelType").val()) == true) {
        //如果不是防火门
        $("#txt_fldModelType").focus();
        $("#txt_fldModelType").addClass("txtbg");
        //window.alert('产品规格型号不能为空!')
        layer.tips('产品规格型号不能为空!', '#txt_fldModelType', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#tr1").is(":hidden") && (isNull($("#txtW").val()) == true || isNull($("#txtW").val()) == true)) {
        //如果是防火门
        $("#txt3").focus();
        //window.alert('产品规格型号高度和宽度不能为空!')
        layer.tips('产品规格型号高度和宽度不能为空!', '#txt3', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    else if (isNull($("#Hidden_Product").val()) == true) {
        //window.alert('请上传产品图片!!')
        //showTemMsg("!");
        $("#uploadProductBtn").focus();
        layer.tips('请上传产品图片!', '#uploadProductBtn', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (isNull($("#txt_fldRZ3CNo").val()) == true) {
        $("#txt_fldRZ3CNo").focus();
        $("#txt_fldRZ3CNo").addClass("txtbg");
        //window.alert('报告编号不能为空!')
        layer.tips('报告编号不能为空!', '#txt_fldRZ3CNo', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if ($("#reportProgressBarDiv").text() == "") {
        //如果没有上传报告
        // window.alert('请上传检验报告!!')
        showTemMsg("请上传检验报告!");

        return false;

    }
    else if ($("#DropDownList1").val() != "2" && isNull($("#txt_fldRZ3C").val()) == true) {
        $("#txt_fldRZ3C").focus();
        $("#txt_fldRZ3C").addClass("txtbg");
        //window.alert('证书编号不能为空!')
        layer.tips('证书编号不能为空!', '#txt_fldRZ3C', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false
    }
    else if (($("#DropDownList1").val() == "1" || $("#DropDownList1").val() == "0" || $("#DropDownList1").val() == "3") && $("#PaperProgressBarDiv").text() == "") {
        // window.alert('当准入类别为强制性认证,型式认可,技术鉴定时必须上传检验报告和证书!')
        $("#DropDownList1").focus();
        layer.tips('当准入类别为强制性认证,型式认可,技术鉴定时必须上传检验报告和证书!', '#DropDownList1', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    else if ($("#reportProgressBarDiv img").size() < 4 && $('#hdReportType').val() =="0") {  //0为图片文件
        //报告上传数量在大于3
        showTemMsg("检验报告每页都必须上传!");
        return false;
    }
    else if ($("#hfPDFPath").val() == "" && $('#hdReportType').val() == "1") {  //1为PDF文件
        $("#ReportPdfName").focus();
        layer.tips('请上传报告PDF文件!', '#ReportPdfName', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        return false;
    }
    else if ($("#chb_yes")[0].checked == false) {
        $("#chb_yes").focus();
        layer.tips('注册企业用户请确认已阅读消防企业信息服务条款,并同意该服务条款!', '#chb_yes', {
            tips: [1, '#EE7942'],
            time: 3000
        });
        //window.alert('注册企业用户请确认已阅读消防企业信息服务条款,并同意该服务条款')
        return false
    }
    login();
    return true;
}

function checkpassword() {

    if ($("#txt_password1").val() != "") {
        if ($("#txt_password1").val() != $("#txt_password2").val()) {
            $("#pwd1").html("<font color=red>确认密码不正确!</font>");
        }
        else {
            $("#pwd1").html("");
        }
    }
    $("#pwd01").val($("#txt_password1").val());
}



function selectcompany(toptitle) {
    ymPrompt.win({ message: 'selectCompany.aspx?rid=' + Math.random(), width: 710, height: 495, title: toptitle, handler: null, maxBtn: true, minBtn: true, iframe: true });
    // ymPrompt.win({message:'http://www.baidu.com',width:500,height:300,title:'腾讯QQ官方网站',handler:null,iframe:true})
}

function CheckExistCompany() {
    if (isNull($("#unitname").val()) == false) {
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=checkcompany&name=" + encodeURIComponent(escape($("#unitname").val())) + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                //$("#showResult").text("正在查询");
                //Pause(this,100000);
                $("#msgcompany").html(GethowLoad());
            },
            success: function (msg) {
                //$("#userAlert").html(msg);
                //$("#showResult").css("color","red");

                if (msg == '1')//企业存在
                {
                    $("#unitname").addClass("txtbg");
                    $("#msgcompany").html("<font color='red'>该企业名称已经存在</font>");
                }
                else if (msg == '0')//可以注册
                {
                    $("#msgcompany").html(GethowRight() + "<font color='green'>可以注册</font>");
                    $("#unitname").removeClass("txtbg");
                }
                else if (msg == "2")//用户名格式不正确
                {
                    $("#unitname").addClass("txtbg");
                    $("#msgcompany").html("<font color='red'>格式错误</font>");
                    $("#unitname").select();
                }
            },
            complete: function (XMLHttpRequest, textStatus) {
                //隐藏正在查询图片
                //$("#userAlert").html("");
            },
            error: function () {
                //错误处理
            }
        });
    }

}
//上传证书时查企该用户名是否已存在防止别人上传报告到其它企业的报告里面
function checkUserForUpFile() {
    $.ajax({
        type: "GET",
        url: "../WebPage/RegAshx.ashx",
        dataType: "html",
        data: "flag=checkuser&userName=" + $("#txt_username").val() + "&random=" + Math.random(),
        success: function (msg) {

            if (msg == '0')//用户存在了
            {
                return false;
            }
            else if (msg == '1')//可以注册
            {
                return true;
                // $("#userAlert").html(GethowRight()+"<font color='green'>可以注册</font>");
            }
            else if (msg == "2")//用户名格式不正确
            {
                return false;
            }
        }
    });

}


/////////////////////////////////
/////////以下小赖修改
/////////////////////////////////

//检查用户名是否存在
function CheckExistUser() {
    $.ajax({
        type: "GET",
        url: "../WebPage/RegAshx.ashx",
        dataType: "html",
        data: "flag=checkuser&userName=" + $("#txt_username").val() + "&random=" + Math.random(),
        beforeSend: function (XMLHttpRequest) {
            $("#userAlert").html(GethowLoad());
        },
        success: function (msg) {
            if (msg == '1')//用户存在了
            {
                $("#userAlert").html("<font color='red'>用户名已经存在</font>");
            }
            else if (msg == '0')//可以注册
            {
                $("#userAlert").html(GethowRight() + "<font color='green'>可以注册</font>");
            }
            else if (msg == "2")//用户名格式不正确
            {
                $("#userAlert").html("<font color='red'>错误：4-15数字,英文</font>");
                $("#txt_username").select();
            }
        },
        complete: function (XMLHttpRequest, textStatus) {
        },
        error: function () {
            //错误处理
            $("#userAlert").html("<font color='red'>连接出错，请重试.</font>");
        }
    });
}

//判断上传文件大小 

function CheckFileLength(upid) {
    var filepath = $("input[id='" + upid + "']").val();
    if (filepath == "") {
        return "请选择上传图片";
    }
    var extStart = filepath.lastIndexOf(".");
    var ext = filepath.substring(extStart, filepath.length).toUpperCase();
    if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG" && ext != ".ICO") {
        return "请上传gif,jpeg,png,jpg,bmp,ico格式";
    }
    //var img = new Image();
    //img.src = filepath;
    //    while(true) 
    //    { 
    //        if(img.fileSize>0)
    //        { 
    //            if(img.fileSize>3000*1024)
    //            { 
    //                return "图片不能大于3M"; 
    //                
    //            } 
    //         break; 
    //        } 
    //   } 
    return "";

}


//上传营业执照
function UploadBusinessImg() {

    //判断大小和格式
    $("#businessimg").html(GetImgLoad());
    var checkmsg = CheckFileLength("AttachFile_Trade");
    if (checkmsg != "") {
        $("#businessimg").html("<font color='red'>" + checkmsg + "</font>");
        return;
    }
    if ($("#txt_business").val() == "1") {
        showTemMsg("营业执照图片太大,请上传小于3M的图片!");
        $("#businessimg").addClass("alertmsg");
        $("#businessimg").text("请上传营业执照正本彩色扫描件");
        return;
    }
    //异步执行
    $.ajaxFileUpload(
          {
              url: '../WebPage/RegAshx.ashx?flag=tradimg&random=' + Math.random(),
              secureuri: false,
              fileElementId: 'AttachFile_Trade',
              dataType: 'json',
              success: function (data, status) {
                  if (data.status == '200') {
                      if (data.msg1 == "1")//上传成功
                      {
                          $('#businessImgage').attr('src', data.msg2); //图片链接（base64)
                          $('#businessImgage').attr("layer-src", data.msg2);
                          $('#businessImgDiv').removeClass("layui-hide");
                          initPhoto("#businessImgDiv");  //设置图片点击预览大图
                          $('#deleteBusiness').attr("onclick", "DelTradeImg('" + data.msg2 + "')");

                          $("#businessimg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#popupProgressBarDiv").html("");
                          //$("#popupBusiBarDiv").html("<a href='" + data.msg2 + "' target=_blank>" + data.msg2 + "</a>&nbsp;&nbsp;<img src='../Images/actn011.gif' alt='删除营业执照图片' onclick=\"DelTradeImg('" + data.msg2 + "')\"; style='border:0px;cursor: pointer;' />");
                          $("#Hidden_Business").val(data.msg2);
                      }
                      if (data.msg1 == "2")//扩展名不正确
                      {
                          $("#businessimg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (data.msg1 == "3")//超出3M
                      {
                          $("#businessimg").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (data.msg1 == "4")//上传为空
                      {
                          $("#businessimg").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (data.msg1 == "0")//上传出错
                      {
                          $("#businessimg").html("<font color='red'>上传出错</font>");
                      }

                      //alert(data.msg);
                      // alert(data.msg2);
                  }
                  else {
                      //alert(data.msg);
                  }


              },
              error: function (data, status, e) {

                  $("#businessimg").html("<font color='red'>未知错误,请重新上传</font>");
              }
          });
}


//删除营业执照图片
function DelTradeImg(imgpath) {
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
                $("#businessimg").html(GetImgLoad());
            },
            success: function (msg) {
                $("#popupProgressBarDiv").html("<span class='alertmsg'><font color='red'>注：</font>请上传3M以内的复印件或扫描件(类型为:jpg,jpeg,gif,bmp,png格式的图片)</span>");
                $("#Hidden_Business").val("");
                $('#businessImgDiv').addClass("layui-hide");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $("#businessimg").html("请上传营业执照副本<font color='red'>原件</font>彩色扫描件");
            },
            error: function () {
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


//上传产品图片
function UpProductImg() {
    //判断大小和格式
    $("#productmsg").html(GetImgLoad());
    var checkmsg = CheckFileLength("FileUpload_Product");
    if (checkmsg != "") {
        $("#productmsg").html("<font color='red'>" + checkmsg + "</font>");
        return;
    }
    if ($("#txt_product").val() == "1") {
        showTemMsg("产品图片太大,请上传小于3M的图片!");
        $("#productmsg").addClass("alertmsg");
        $("#productmsg").text("请上传3M以内图片文件(原件扫描彩色版)");
        return;
    }
    //异步执行
    $.ajaxFileUpload(
          {
              url: '../WebPage/RegAshx.ashx?flag=productimg&random=' + Math.random(),
              secureuri: false,
              fileElementId: 'FileUpload_Product',
              dataType: 'json',
              success: function (data, status) {
                  if (data.status == 'success') {
                      if (data.msg1 == "1")//上传成功
                      {
                          $("#productmsg").html(GethowRight() + "<font color='green'>上传成功</font>");

                          $("#productProgressBarDiv").html(""); //设置提示为空

                          //返回内容
                          $("#productUpmsg").html("<a href='" + data.msg2 + "' target=_blank>" + data.msg2 + "</a>&nbsp;&nbsp;<img src='../Images/actn011.gif' alt='删除产品图片' onclick=\"DelProductImg('" + data.msg2 + "')\"; style='border:0px;cursor: pointer;' />");

                          $("#Hidden_Product").val(data.msg2);

                      }
                      if (data.msg1 == "2")//扩展名不正确
                      {
                          $("#productmsg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (data.msg1 == "3")//超出3M
                      {
                          $("#productmsg").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (data.msg1 == "4")//上传为空
                      {
                          $("#productmsg").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (data.msg1 == "0")//上传出错
                      {
                          $("#productmsg").html("<font color='red'>上传出错</font>");
                      }

                      //alert(data.msg);
                      // alert(data.msg2);


                  }
                  else {
                      //alert(data.msg);
                  }


              },
              error: function (data, status, e) {

                  $("#productmsg").html("<font color='red'>未知错误,请重新上传</font>");
              }
          });


}

//检查上传报告的的输入框格式对不对
function checkUpReportImg() {
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
    return true;
}
//检查上传报告的的输入框格式对不对
function checkUpReportImg2() {
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
    //	else if (isdate($("#txt_fldStartDate").val()) == false) {
    //		$("#txt_fldStartDate").focus();
    //		window.alert('报告开始时间格式不对!');
    //		return false;
    //	}
    //	else if (isdate($("#txt_fldEndDate").val()) == false) {
    //		$("#txt_fldEndDate").focus();
    //		window.alert('报告结束时间格式不对!');
    //		return false;
    //	}
    //	else if (!compareDate($("#txt_fldEndDate").val(), $("#txt_fldStartDate").val())) {
    //		$("#txt_fldEndDate").focus();
    //		window.alert('报告结束时间不能小于开始时间!');
    //		return false;
    //	}
    if ($("#DDL_ReportName").val() == "-1") {
        $("#DDL_ReportName").focus();
        $("#DDL_ReportName").focus();
        showTemMsg('请选择报告页码!')
        return false;
    }

    return true;


}
///2012-06-28 检查报告是否存在
function ExistsReport() {

    var reportNo = $("#txt_fldRZ3CNo").val();

    if (reportNo != "") {
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=ExistsReport&reportNo=" + reportNo + "&random=" + Math.random(),
            success: function (msg) {
                if (msg != "0") {
                    var arrmp = msg.split(",msg3:");
                    var name = arrmp[0];
                    var surl = arrmp[1];
                    //  if($("#reportProgressBarDiv").html($("#reportProgressBarDiv").html()
                    window.document.getElementById("btt_UpReport").disabled = true;
                    $("#ExistsDiv").html("<font color='red'>服务器已经存在报告，无需上传报告</font>");
                    $("#reportProgressBarDiv").html("· " + "&nbsp;<a href='" + surl + "' target=_blank>" + name + "</a>&nbsp;&nbsp;<br/>");
                    return "1";
                }
                else {
                    // alert("0");
                    window.document.getElementById("btt_UpReport").disabled = false;
                    $("#ExistsDiv").html("");
                    $("#reportProgressBarDiv").html("");
                }
            }

        });
    }
    else {
        return "0";
    }
}
function ExistsReport2() {
}
function ExistsReport3() {

    var reportNo = $("#txt_fldRZ3CNo").val();

    if (reportNo != "") {
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=ExistsReport&reportNo=" + reportNo + "&random=" + Math.random(),
            success: function (msg) {
                if (msg != "0") {
                    var arrmp = msg.split(",msg3:");
                    var name = arrmp[0];
                    var surl = arrmp[1];
                    //  if($("#reportProgressBarDiv").html($("#reportProgressBarDiv").html()
                    window.document.getElementById("btt_UpReport").disabled = true;
                    $("#ExistsDiv").html("<font color='red'>服务器已经存在报告，无需上传报告</font>");
                    $("#reportProgressBarDiv").html($("#reportProgressBarDiv").html() + "· " + "&nbsp;<a href='" + surl + "' target=_blank>" + name + "</a>&nbsp;&nbsp;<br/>");
                    // return "1";
                }

            }

        });
    }
    else {
        return "0";
    }
}
//上传报告图片
function UpReportImg() {//
    if (checkUpReportImg()) {

        //如果输入条件正确
        //判断大小和格式
       // $("#upreportmsg").html(GetImgLoad());
        var checkmsg = CheckFileLength("FileUpload_Report");
        if (checkmsg != "") {
            $("#upreportmsg").html("<font color='red'>" + checkmsg + "</font>");
            return;
        }

        //var fldZHProductID='0';
        var fldBeginDate = $("#txt_fldStartDate").val();;
        var fldEndDate = $("#txt_fldStartDate").val(); //$("#txt_fldEndDate").val();
        //var fldPath="";
        var fldZDProdectGUID = $("#HF_guid").val();
        //   var fldCertNo=escape($("#DDL_ReportName").val()); 原的只保存页码
        var fldCertNo = escape($("#DDL_ReportName").val() + "(" + $("#txt_fldRZ3CNo").val() + ")");

        var userName = $("#txt_username").val();
        layer.load(); //上传loading
        //异步执行
        $.ajaxFileUpload(
          {
              url: '../WebPage/RegAshx.ashx?flag=reportimg&fldBeginDate=' + fldBeginDate + '&fldEndDate=' + fldEndDate + '&fldZDProdectGUID=' + fldZDProdectGUID + '&fldCertNo=' + fldCertNo + '&userName=' + userName + '&random=' + Math.random(),
              secureuri: false,
              fileElementId: 'FileUpload_Report',
              global: true,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              dataType: 'json',              
              success: function (data, status) {
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


              },
              error: function (data, status, e) {
                  layer.closeAll('loading'); //关闭loading
                  $("#upreportmsg").html("<font color='red'>未知错误,请重新上传</font>");
              }
          });
    }
}

function UpReportImg2() {//
    if (checkUpReportImg2()) {

        //如果输入条件正确
        //判断大小和格式
       // $("#upreportmsg").html(GetImgLoad());
        var checkmsg = CheckFileLength("FileUpload_Report");
        if (checkmsg != "") {
            $("#upreportmsg").html("<font color='red'>" + checkmsg + "</font>");
            return;
        }

        //var fldZHProductID='0';
        var fldBeginDate = '2000-01-01'; //$("#txt_fldStartDate").val(); ;
        var fldEndDate = '2000-01-01'; //$("#txt_fldEndDate").val();
        //var fldPath="";
        var fldZDProdectGUID = $("#HF_guid").val();
        //   var fldCertNo=escape($("#DDL_ReportName").val()); 原的只保存页码
        var fldCertNo = escape($("#DDL_ReportName").val() + "(" + $("#txt_fldRZ3CNo").val() + ")");
        //var fldType="BG";

        var userName = $("#txt_username").val();
        layer.load(); //上传loading
        //异步执行
        $.ajaxFileUpload(
          {
              url: '../WebPage/RegAshx.ashx?flag=reportimg&fldBeginDate=' + fldBeginDate + '&fldEndDate=' + fldEndDate + '&fldZDProdectGUID=' + fldZDProdectGUID + '&fldCertNo=' + fldCertNo + '&userName=' + userName + '&random=' + Math.random(),
              secureuri: false,
              fileElementId: 'FileUpload_Report',
              global: true,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              dataType: 'json',
              success: function (data, status) {
                  layer.closeAll('loading'); //关闭loading
                  if (data.status == 'success') {
                      if (data.msg1 == "1")//上传成功
                      {
                          showTemMsg("上传成功");
                          $("#upreportmsg").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#txt_username").attr("disabled", "true");
                          $("#txt_fldStartDate").attr("disabled", "true");
                          $("#txt_fldEndDate").attr("disabled", "true");
                          $("#txt_fldRZ3CNo").attr("disabled", "true");
                          $("#reportProgressBarMsg").html("");
                          $("#DDL_ReportName").val("-1");
                          //$("#reportProgressBarDiv").html($("#reportProgressBarDiv").html() + "· " + data.name + "&nbsp;<a href='" + data.msg2 + "' target=_blank>" + data.msg2 + "</a>&nbsp;&nbsp;<img src='../Images/actn011.gif' alt='删除报告' onclick=\"DelReportImg('" + data.msg2 + "','" + data.msg3 + "')\" style='border:0px;cursor: pointer;' /><br/>");

                          //显示图片
                          $("#reportProgressBarDiv").html($("#reportProgressBarDiv").html() + '<div style="float:left;width:125px;padding-top:5px"><img src="' + data.msg2 + '" width="95" height="100" title="' + data.name + '" alt="' + data.name + '" onclick="openPic(\'' + data.msg2 + '\', \'' + data.name + '\');" align="absmiddle" style="cursor: pointer;" />' + '<input type="button" value="" onclick="DelReportImg(\'' + data.msg2 + '\',\'' + data.msg3 + '\');" class="delImageBtn" /><br /><div style="width:100px;text-align:center">' + data.name.split("(")[0] + '</div></div>');
                      }
                      if (data.msg1 == "2")//扩展名不正确
                      {
                          showTemMsg("上传失败");
                          $("#upreportmsg").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (data.msg1 == "3")//超出3M
                      {
                          showTemMsg("上传失败");
                          $("#upreportmsg").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (data.msg1 == "4")//上传为空
                      {
                          showTemMsg("上传失败");
                          $("#upreportmsg").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (data.msg1 == "5")//上传时该用户已存在
                      {
                          showTemMsg("上传失败");
                          $("#upreportmsg").html("<font color='red'>该用户名已存在,不能传到该目录下面</font>");
                      }
                      if (data.msg1 == "0")//上传出错
                      {
                          showTemMsg("上传失败");
                          $("#upreportmsg").html("<font color='red'>上传出错</font>");
                      }
                      if (data.msg1 == "6")//报告名称已存在
                      {
                          showTemMsg("上传失败");
                          $("#upreportmsg").html("<font color='red'>该页报告已上传,请选择其它报告页码</font>");
                          $("#DDL_ReportName").focus();
                      }

                  }
                  else {
                      showTemMsg("未知错误,请重新上传");
                      $("#upreportmsg").html("<font color='red'>未知错误,请重新上传</font>");
                  }


              },
              error: function (data, status, e) {
                  layer.closeAll('loading'); //关闭loading
                  showTemMsg("未知错误,请重新上传");
                  $("#upreportmsg").html("<font color='red'>未知错误,请重新上传</font>");
              }
          });
    }


}
//删除报告图片
function DelReportImg(fldPath, fldId) {
    //询问框
    layer.confirm('确定删除该页吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();
        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=delreportimg&img=" + fldPath + "&fldID=" + fldId + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {
                showTemMsg("删除成功!");
                layer.closeAll('loading'); //关闭loading
                $("#reportProgressBarDiv").html(msg);
                if (msg == "") {
                    $("#reportProgressBarMsg").html("<font color='red'>注:</font><span class='alertmsg'> 请上传3M以内的图片文件(原件扫描彩色版)上传报告时用户名,报告编号,名称,有效期不能为空</span>");
                } 
            },
            complete: function (XMLHttpRequest, textStatus) {
                $("#upreportmsg").html("");
                layer.closeAll('loading'); //关闭loading
            },
            error: function () {
                showTemMsg("删除失败");
                layer.closeAll('loading'); //关闭loading
            }
        });
    }, function () {
    });
}

//检查上传报告的的输入框格式对不对
function checkUpReportCert() {

    if ($("#txt_mescert").val() == "1") {      
        $("#txt_mescert").focus();
        showTemMsg('证书图片太大,请上传小于3M的图片!');
        return;
    }
    else if (isNull($("#txt_username").val()) == true) {
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

    return true;
}



//上传证书图片
function UpPaperImg() {

    if (checkUpReportCert()) {

        //判断大小和格式
        //$("#mescert").html(GetImgLoad());
        var checkmsg = CheckFileLength("FileUpload_Paper");
        if (checkmsg != "") {
            $("#mescert").html("<font color='red'>" + checkmsg + "</font>");
            return;
        }

        //var fldZHProductID='0';
        var fldBeginDate = $("#txt_fldStartDate2").val();;
        var fldEndDate = $("#txt_fldEndDate2").val();
        //var fldPath="";
        var fldZDProdectGUID = $("#HF_guid").val();
        var fldCertNo = $("#txt_fldRZ3C").val();
        //var fldType="BG";
        var userName = $("#txt_username").val();

        layer.load(); //上传loading
        //异步执行
        $.ajaxFileUpload(
          {
              url: '../WebPage/RegAshx.ashx?flag=paperimg&fldBeginDate=' + fldBeginDate + '&fldEndDate=' + fldEndDate + '&fldZDProdectGUID=' + fldZDProdectGUID + '&fldCertNo=' + fldCertNo + '&userName=' + userName + '&random=' + Math.random(),
              secureuri: false,
              fileElementId: 'FileUpload_Paper',
              global: true,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              dataType: 'json',
              success: function (data, status) {
                  layer.closeAll('loading'); //关闭loading
                  if (data.status == 'success') {
                      if (data.msg1 == "1")//上传成功
                      {
                          showTemMsg("上传成功");
                          $("#mescert").html(GethowRight() + "<font color='green'>上传成功</font>");
                          $("#PaperProgressBarMsg").html("");
                          $("#txt_username").attr("disabled", "true");
                          $("#txt_fldStartDate2").attr("disabled", "true");
                          $("#txt_fldEndDate2").attr("disabled", "true");
                          $("#txt_fldRZ3C").attr("disabled", "true");

                          //$("#PaperProgressBarDiv").html($("#PaperProgressBarDiv").html() + "· <a href='" + data.msg2 + "' target=_blank>" + data.msg2 + "</a>&nbsp;&nbsp;<img src='../Images/actn011.gif' alt='删除证书' onclick=\"DelPaperImg('" + data.msg2 + "','" + data.msg3 + "')\"; style='border:0px;cursor: pointer;' /><br/>");

                          //显示图片
                          $("#PaperProgressBarDiv").html($("#PaperProgressBarDiv").html() + '<div style="float:left;width:125px;padding-top:5px"><img src="' + data.msg2 + '" width="95" height="100" title="' + data.name + '" alt="' + data.name + '" onclick="openPic(\'' + data.msg2 + '\', \'' + data.name + '\');" style="cursor: pointer;" align="absmiddle" />' + '<input type="button" value="" onclick="DelPaperImg(\'' + data.msg2 + '\',\'' + data.msg3 + '\');"  class="delImageBtn"  style="background: url(../images/actn011.gif) no-repeat; border: 0px; height: 20px; width: 20px" /></div>');


                      }
                      if (data.msg1 == "2")//扩展名不正确
                      {
                          $("#mescert").html("<font color='red'>请上传gif,jpeg,png,jpg,bmp,ico格式</font>");
                      }
                      if (data.msg1 == "3")//超出3M
                      {
                          $("#mescert").html("<font color='red'>图片不能大于3M</font>");
                      }
                      if (data.msg1 == "4")//上传为空
                      {
                          $("#mescert").html("<font color='red'>请选择要上传的图片</font>");
                      }
                      if (data.msg1 == "5")//上传时该用户已存在
                      {
                          $("#mescert").html("<font color='red'>该用户名已存在,不能传到该目录下面</font>");
                      }
                      if (data.msg1 == "0")//上传出错
                      {
                          $("#mescert").html("<font color='red'>上传出错</font>");
                      }

                      if (data.msg1 != "1")
                      {
                          showTemMsg("上传失败");
                      }
                  }
                  else {
                      showTemMsg("上传失败");
                      $("#mescert").html("<font color='red'>未知错误,请重新上传</font>");
                  }

              },
              error: function (data, status, e) {
                  showTemMsg("上传失败");
                  layer.closeAll('loading'); //关闭loading
                  $("#mescert").html("<font color='red'>未知错误,请重新上传</font>");
              }
          });
    }
}


//删除证书图片
function DelPaperImg(fldPath, fldId) {
    //询问框
    layer.confirm('确定删除该页吗?', {
        btn: ['删除', '返回'] //按钮
    }, function () {
        layer.closeAll();

        $.ajax({
            type: "GET",
            url: "../WebPage/RegAshx.ashx",
            dataType: "html",
            data: "flag=delpaperimg&img=" + fldPath + "&fldID=" + fldId + "&random=" + Math.random(),
            beforeSend: function (XMLHttpRequest) {
                layer.load(); //上传loading
            },
            success: function (msg) {
                layer.closeAll('loading'); //关闭loading
                showTemMsg("删除成功!");
                $("#PaperProgressBarDiv").html(msg);
                if (msg == "") {
                    $("#PaperProgressBarMsg").html("<font color='red'>注:</font><span class='alertmsg'> 请上传3M以内的图片文件(原件扫描彩色版)上传证书时用户名,证书编号,名称,有效期不能为空</span>");
                }
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



//删除产品图片
function DelProductImg(imgpath) {
    if (!confirm("确定吗?")) {
        return;
    }
    $.ajax({
        type: "GET",
        url: "../WebPage/RegAshx.ashx",
        dataType: "html",
        data: "flag=deltradimg&img=" + imgpath + "&random=" + Math.random(),
        beforeSend: function (XMLHttpRequest) {
            $("#productmsg").html(GetImgLoad());
        },
        success: function (msg) {
            $("#productProgressBarDiv").html("<span class='alertmsg'><font color='red'>注：</font>请上传3M以内的图片文件(原件扫描彩色版)上传报告时用户名,报告编号,名称,有效期不能为空</span>");
            $("#productUpmsg").html("");

            $("#Hidden_Product").val("");
        },
        complete: function (XMLHttpRequest, textStatus) {
            $("#productmsg").html("");
        },
        error: function () {
            alert("删除失败");
        }
    });
}

//返回进度图片
function GethowLoad() {
    return "<img src='../Images/51.gif' style='border:0px;' />";
}
//返回进度图片
function GetImgLoad() {
    return "<img src='../Images/websedit-ag-bar2.gif' style='border:0px;' />";
}

//返回正确图片
function GethowRight() {
    return "<img src='../Images/vwicn082.gif' style='border:0px;' />";
}
//维修注册
function checkdataWX() {
    $("input").removeClass("txtbg");
    if (isNumberOr_Letter($("#txt_username").val()) == false || GetStrLen($("#txt_username").val()) < 4) {
        $("#txt_username").focus();
        $("#txt_username").addClass("txtbg");
        window.alert('用户名只能由字母，数字组成且长度不能小于4!')
        return false
    }
    else if (GetStrLen($("#txt_password1").val()) < 6) {
        $("#txt_password1").focus();
        $("#txt_password1").addClass("txtbg");
        window.alert('密码长度不能小于6!')
        return false
    }
    else if ($("#txt_password1").val() != $("#txt_password2").val()) {
        $("#txt_password2").focus();
        $("#txt_password2").addClass("txtbg");
        window.alert('确认密码不正确!')
        return false
    }

    else if (isNull($("#txt_frdb").val()) == true) {
        $("#txt_frdb").focus();
        $("#txt_frdb").addClass("txtbg");
        window.alert('请输入企业法人代表姓名!')
        return false
    }
    else if (isNull($("#txt_linkman").val()) == true) {
        $("#txt_linkman").focus();
        $("#txt_linkman").addClass("txtbg");
        window.alert('请输入联系人姓名!')
        return false
    }
    else if (isNull($("#txt_telephone").val()) == true) {
        $("#txt_telephone").focus();
        $("#txt_telephone").addClass("txtbg");
        window.alert('请输入联系人电话!')
        return false
    }
    else if (isMail($("#txt_email").val()) == false) {
        $("#txt_email").focus();
        $("#txt_email").addClass("txtbg");
        window.alert('请确认邮件格式是否正确!')
        return false
    }
    else if (isNull($("#unitname").val()) == true) {
        $("#unitname").focus();
        $("#unitname").addClass("txtbg");
        window.alert('请输入企业名称!')
        return false
    }
    else if (isNumber($("#tb_fldphone").val()) == false) {
        $("#tb_fldphone").focus();
        $("#tb_fldphone").addClass("txtbg");
        window.alert('你确认输入的手机号码是否正确!')
        return false
    }
    else if ($("#Province").val() != '000000' && $("#Area").val() == "0") {
        $("#Area").focus();
        window.alert('请选择企业所在区域!')
        return false
    }
    else if (isNull($("#enterprisecode").val()) == true) {
        $("#enterprisecode").focus();
        $("#enterprisecode").addClass("txtbg");
        window.alert('营业执照编号不能为空!')
        return false
    }
    else if (isNull($("#txt_fldaddress").val()) == true) {
        $("#txt_fldaddress").focus();
        $("#txt_fldaddress").addClass("txtbg");
        window.alert('请输入企业联系地址!')
        return false
    }
    else if (isNull($("#Hidden_Business").val()) == true) {
        window.alert('请上传营业执照图片!')
        return false
    }
        //        if(isNull($("#txt_value").val()))
        //        {
        //          window.alert('请选择供应商！!')
        //          return false;
        //        }

    else if (isNull($("#txt_summary").val()) == true) {
        $("#txt_summary").focus();
        $("#txt_summary").addClass("txtbg");
        window.alert('企业信息简介不能为空!')
        return false
    }
    else if ($("#chb_yes")[0].checked == false) {
        $("#chb_yes").focus();
        window.alert('注册企业用户请确认已阅读消防企业信息服务条款,并同意该服务条款')
        return false
    }



    return true;
}



//function close(evt) //author: hamby
//{
//	debugger;
//	var isIE = document.all ? true : false;
//	evt = evt ? evt : (window.event ? window.event : null);
//	if (isIE) {//IE浏览器  
//		var n = evt.screenX - window.screenLeft;
//		var b = n > document.documentElement.scrollWidth - 20;
//		if (b && evt.clientY < 0 || evt.altKey) {
//			//alert("是关闭而非刷新");
//			//window.location.href = "../include/logout.php";
//			$("#btt_DelSLWJ").onclick();
//		}
//		else {
//			//alert("是刷新而非关闭");  
//			return false;
//		}
//	}
//	else {//火狐浏览器  
//		if (document.documentElement.scrollWidth != 0) {
//			//alert("是刷新而非关闭");  
//			//window.location.href="report_list.php?ss=1";  
//			return false;

//		}
//		else {
//			$("#btt_DelSLWJ").onclick();
//		//	alert("是关闭而非刷新");
//			//window.location.href="repost_list.php?ss=0";  
//			//alert("bbbbbbb");  
//		}
//	}
//}  