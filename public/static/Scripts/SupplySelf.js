//倒计时返回首页
var tobj=null;
function goBackIndex(){
   if ($("#lbTimer")) {  
      var time=eval($("#lbTimer").text());
      if(isNaN(time)){//时间不是数字，直接退出
         if(tobj){
            clearTimeout(tobj);
         }
         return;
      }
      if(time<=0){ //时间到，返回首页
         location.href="../Default.aspx";
      }else{//时间减一
         time--;
         $("#lbTimer").text(time);        
         if(tobj){
            clearTimeout(tobj);
         }
         tobj=setTimeout(goBackIndex,1000);//以秒为单位
      }
   }
}

 
 jQuery(document).ready(goBackIndex);