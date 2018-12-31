
$("#input-div").hide()
$("#update-div").hide()
$("#finded-data").hide()
$("#add-data").click(function()
{
    $("#input-div").show()

});

function download()
{
    $.ajax(
        {

            url:"http://127.0.0.1:8080/try",
            type:"GET",
            data: {"name":getname},
            dataType:"text",
            success:function(data){
                window.location.href="http://"+data;

            },
            error:function(data)
            {
                alert("服务器异常");
            }
        });



}






function addData()//显示增加数据菜单
{
    $("#input-div").show()
    $("#update-div").hide()
    // alert("666")
}
function updateData()//显示更新数据菜单
{
    $("#update-div").show()
    $("#input-div").hide()
    // $("#input-div").show()
    // alert("666")
}

function finding()//查找搜索框数据
{
    $("#in1").attr("disabled","disabled")
    $("#in2").attr("disabled","disabled")
    $.ajax(
        {

            url:"http://127.0.0.1:8080/select",
            type:"GET",
            data: {"name":$("#form-control").val()},
            dataType:"json",
            success:function(data){
                $("#finded-data").show()
                if(data.name==="0")
                {
                    alert("查无此数据");
                    $("#finded-data").hide()
                }
                else
                {
                    $("#in1").val(data.name);
                    $("#in2").val(data.address);
                    getname=data.name
                    getid=data.id;
                }

            },
            error:function(data)
            {
                alert("服务器异常");
            }
        }
    );
}
function alter()//////////////修改数据
{
    if($("#in1").attr("disabled")==="disabled"||$("#in2").attr("disabled")==="disabled")
        {
            $("#in1").removeAttr("disabled")
            $("#in2").removeAttr("disabled")
        }
    else
        {
            $.ajax(
                {
        
                    url:"http://127.0.0.1:8080/update",
                    type:"POST",
                    data: {"name":$("#in1").val(),"address":$("#in2").val(),"id":getid},
                    dataType:"text",
                    success:function(data){
                        alert("修改成功");
        
                    },
                    error:function(data)
                    {
                        alert("服务器异常");
                    }
                }
            );
        }

}



function del()
{
    $.ajax(
        {

            url:"http://127.0.0.1:8080/delete",
            type:"POST",
            data: {"id":getid},
            dataType:"text",
            success:function(data){
                alert("删除成功");

            },
            error:function(data)
            {
                alert("服务器异常");
            }
        }
    );
}






function inputChange()//////////////////////////////文本框更改
{   
    $.ajax(
        {
            url:"http://127.0.0.1:8080/select",
            type:"GET",
            data: {"name":$("#input-name").val()},
            dataType:"json",
            success:function(data){
                var h=data
                if(data.name==="0")
                    $("#input-tips").text("")
                else
                    $("#input-tips").text("*存在一名叫"+data.name+"籍贯为"+data.address+"的条目")
                   
                // if(data==="0")
                // 
                // else
                

            },
            error:function(data)
            {
                alert("服务器异常");
            }
        }
    );
    
}
function sub() {
    $.ajax(
        {
            url:"http://127.0.0.1:8080/add",
            type:"POST",
            data: {"address":$("#input-address").val(),"name":$("#input-name").val()},
            success:function(data){
                if(data==="error")
                    alert("未添加，信息不完整！");
                else
                    alert("添加数据成功！");
            },
            error:function(data)
            {
                alert("服务器异常");
            }
        }
    );
    
}
 