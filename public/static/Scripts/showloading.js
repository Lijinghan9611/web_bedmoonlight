
$(document).ready(function () {
    //这里是ScriptManager 异步显示layer的进度条
    var prm = Sys.WebForms.PageRequestManager.getInstance();
    prm.add_beginRequest(function () {
        layer.load(0, { shade: false });
    });
    prm.add_endRequest(function (sender, args) {
        //args.set_errorHandled(true);
        try {
            //此处写需要的执行的代码
            layer.closeAll('loading'); //关闭加载层

            var form = layui.form;
            form.render();

        } catch (err) {
            alert(err.message)

        }
    });
});