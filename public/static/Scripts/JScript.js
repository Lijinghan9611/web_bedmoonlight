// JScript 文件


//刷新本页面
function refreshCurrentPage(Messages) {
    window.location.href = location.href;
}





//判断是为0或正整数
function isInt(str) {
    var result = true;;
    var reg = /^[0-9]+$/;
    var r = str.match(reg);
    if (r == null) {
        result = false;;
    }
    return result;
}

//判断为正，负整数，0
function isIntSign(str) {
    var result = true;;
    var reg = /^[+-]?[0-9]+$/;
    var r = str.match(reg);
    if (r == null) {
        result = false;;
    }
    return result;
}

//判断是为0或正Decimal值
function isDecimal(str) {
    var result = true;;
    var reg = /^[0-9]+[.]?[0-9]+$/;
    var r = str.match(reg);
    if (r == null) {
        result = false;;
    }
    return result;
}

//判断为正，负Decimal值，0
function isDecimalSign(str) {
    var result = true;;
    var reg = /^[+-]?[0-9]+[.]?[0-9]+$/;
    var r = str.match(reg);
    if (r == null) {
        result = false;;
    }
    return result;
}

//短时间，形如 (13:04:06)
function isTime(str) {
    var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
    if (a == null) { return false }
    if (a[1] > 24 || a[3] > 60 || a[4] > 60) {
        return false;
    }
    return true;
}
//短日期，形如 (2003-12-05)
function isDate(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
}
//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str) {
    var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    var r = str.match(reg);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
}

//判断为String值
function isString(str) {
    var result = true;;
    var reg = /^[a-zA-Z0-9_]+$/;
    var r = str.match(reg);
    if (r == null) {
        result = false;;
    }
    return result;
}

//判断输入的字符是否为中文  
function isChinese(str) {
    var result = true;;
    var reg = /^[\u0391-\uFFE5]+$/;
    var r = str.match(reg);
    if (r == null) {
        result = false;;
    }
    return result;
}

//纯英文验证输入，判断是否为英文,正确返回ture,否则返回false
function isEnglish(name) {
    if (name.length == 0)
        return false;
    for (i = 0; i < name.length; i++) {
        if (name.charCodeAt(i) > 128)
            return false;
    }
    return true;
}

//非法字符判断,str中有charset则返回ture
function contain(str, charset) {
    var i;
    for (i = 0; i < charset.length; i++) {
        if (str.indexOf(charset.charAt(i)) >= 0) {
            return true;
        }
        return false;
    }
}

//判断URL,正确的URL返回true,否则返回false  
//function isURL(URL){
//    var urlPat=/^http://[A-Za-z0-9]+.[A-Za-z0-9]+[/=?%-&_~`@[]':+!]*([^<>""])*$/;
//    var matchArray=URL.match(urlPat);
//    if(matchArray!=null){
//        return true;
//    } else {
//        return false;
//    }    
//}

//判断输入的EMAIL格式是否正确    
function IsEmail(str) {
    var result = true;
    reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var r = str.match(reg);
    if (r == null) {
        result = false;;
    }
    return result;

}

//过滤空格
function trim(str) {
    return str.replace(/^\s+|\s+$/gm, '');
}

//获取TextBox文本框的值
function getTextValue(controlID) {
    var temp = document.getElementById(controlID).value;
    return trim(temp);
}


//获取DropDownList选中的值
function getSelectDropDownValue(controlID) {
    var ddl = document.getElementById(controlID)
    var index = ddl.selectedIndex;
    var Value = ddl.options[index].value;
    return trim(Value);

}

//获取DropDownList选中的Text
function getSelectDropDownText(controlID) {
    var ddl = document.getElementById(controlID)
    var index = ddl.selectedIndex;
    var Text = ddl.options[index].text;
    return trim(Text);
}

function FormSelectAll(formID, EleName, e) //formID：目标复选框组所在的form表单的ID属性；Elename：目标复选框组共同的Name属性；e：用于标识是否全选的复选框自身，用户判断是“全选”还是“全不选”    
{
    var Elements = document.getElementById(formID).elements; //获取目标复选框组所在的Form表单    
    for (var i = 0; i < Elements.length; i++) {
        if (Elements[i].type == "checkbox" && Elements[i].name.indexOf(EleName) >= 0) //根据对象类型和对象的name属性判断是否为目标复选框    
        {
            Elements[i].checked = e.checked; //根据用于控制的复选框的选中情况判断是否选中目标复选框    
        }
    }
}

function checkDelete(formID, EleName) {
    var selectCount = 0;
    var Elements = document.getElementById(formID).elements; //获取目标复选框组所在的Form表单    
    for (var i = 0; i < Elements.length; i++) {
        if (Elements[i].type == "checkbox" && Elements[i].name.indexOf(EleName) >= 0) //根据对象类型和对象的name属性判断是否为目标复选框    
        {
            if (Elements[i].checked) {
                selectCount = selectCount + 1;
            }
        }
    }

    if (selectCount == 0) {
        layer.open({
            title: '提示',
            content: "请选择要删除的数据!"
        });
        return false;
    }
    else {
        // return true;
        layer.confirm('你确定要删除所选数据？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            return true;
        }, function () {
            return false;
        })

    }
}


//判断是否为合法的统一社会信用代码
function CheckSocialCreditCode(Code) {
    var patrn = /^[0-9A-Z]+$/;
    //18位校验及大写校验
    if ((Code.length != 18) || (patrn.test(Code) == false)) {
        console.info("不是有效的统一社会信用编码！");
        return false;
    }
    else {
        var Ancode;//统一社会信用代码的每一个值
        var Ancodevalue;//统一社会信用代码每一个值的权重 
        var total = 0;
        var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子 
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        //不用I、O、S、V、Z 
        for (var i = 0; i < Code.length - 1; i++) {
            Ancode = Code.substring(i, i + 1);
            Ancodevalue = str.indexOf(Ancode);
            total = total + Ancodevalue * weightedfactors[i];
            //权重与加权因子相乘之和 
        }
        var logiccheckcode = 31 - total % 31;
        if (logiccheckcode == 31) {
            logiccheckcode = 0;
        }
        var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
        var Array_Str = Str.split(',');
        logiccheckcode = Array_Str[logiccheckcode];


        var checkcode = Code.substring(17, 18);
        if (logiccheckcode != checkcode) {
            console.info("不是有效的统一社会信用编码！");
            return false;
        } else {
            console.info("yes");
        }
        return true;
    }
}


















