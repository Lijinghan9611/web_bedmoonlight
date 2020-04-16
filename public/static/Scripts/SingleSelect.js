//checkbox单选


function GetSelectValue(parentId) {
    var p=document.getElementById(parentId);
    var objs = p.getElementsByTagName("input");
    for(var i=0;i<objs.length;i++)
    {
        if(objs[i].type=='checkbox')
        {
            var obj=objs[i];
             if(obj.checked)
            {
            //debugger;
                return obj.parentNode.title;
            }
        }
    }
    return null;
}
 
  
function TreeSingleSelect(treeID,checkNode)
{
    //alert('ok');
    if(!treeID)
    return;
    var objs = document.getElementsByTagName("input");
    for(var i=0;i<objs.length;i++)
    {
        if(objs[i].type=='checkbox')
        {
            var obj=objs[i];
            if(obj.id.indexOf(treeID)!=-1)
            {
                if(obj!=checkNode)
                {
                    obj.checked=false;
                                       
                }
                else
                { 
                  //当前选中的
                }
            }
        }
       
    } 
    
}

  //用于给TreeView的 chebox添加 单击事件(如果要将某一TreeView变为单选择 只需调用下面方法)
function SetTreeNodeClickHander(treeID)
{
    var objs = document.getElementsByTagName("input");
    for(var i=0;i<objs.length;i++)
    {
        if(objs[i].type=='checkbox')
        {
            var obj=objs[i];
            if(obj.id.indexOf(treeID)!=-1)
            {
                objs[i].onclick=function(){
                TreeSingleSelect(treeID,this);
                };
                
              
            }
        }
        
    }
    
  } 
  
  
  
  
  	function handler(tp){
  	
	}