首先，什么是AJAX呢？AJAX即Asynchronous JavaScript And XML，异步JavaScript和XML。是一种不重载页面的情况下，与服务器交换数据并更新部分网页内容的技术。

### 创建XMLHttpRequest对象
```javascript
var xmlhttp
if(window.XMLHttpRequest) {
	//除IE5,IE6浏览器
	xmlhttp = new XMLHttpRequest()	
} else {
	//IE5,IE6浏览器
	xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
}
```
### 向服务器发送请求
```javascript
//语法
open(method, url, async)
send(string)
```
```javascript
//实例
xmlhttp.open("GET", "ajax_demo.txt", true)
xmlhttp.send()
```
### 服务器相应
相应数据有两种，`responseText`和`responseXML`。
```javascript
document.getElementById('mydiv').innerHTML = xmlhttp.responseText
```
### AJAX readyState and status
比较重要的是`readyState === 4`，表示请求已完成，响应已就绪。`status === 200`表示HTTP状态已经OK，`status === 404`表示访问资源不存在。
```javascript
xmlhttp.onreadystatechange = function() {
	if(xmlhttp.readyState == 4 && xmlhttp.status = 200) {
		document.getElementById('mydiv').innerHTML = xmlhttp.responseText
	}
}
```
### 原生JS实现AJAX
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>
function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
	xmlhttp.send();
}
</script>
</head>
<body>

<div id="myDiv"><h2>使用 AJAX 修改该文本内容</h2></div>
<button type="button" onclick="loadXMLDoc()">修改内容</button>

</body>
</html>
```
### jQuery AJAX
```javascript
$.ajax({
    url:'/comm/test1.php',
    type:'POST', //GET
    async:true,    //或false,是否异步
    data:{
        name:'yang',age:25
    },
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    beforeSend:function(xhr){
        console.log(xhr)
        console.log('发送前')
    },
    success:function(data,textStatus,jqXHR){
        console.log(data)
        console.log(textStatus)
        console.log(jqXHR)
    },
    error:function(xhr,textStatus){
        console.log('错误')
        console.log(xhr)
        console.log(textStatus)
    },
    complete:function(){
        console.log('结束')
    }
})
```