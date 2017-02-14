# HTML 表单的用法

HTML表单用于收集用户输入

首先，加上表单容器<form> </form>

div class切页面

`<input>`元素

text：文本输入

radio：单选按钮输入

submit：提交按钮输入

action:执行链接

mothod：属性 post还是get

name属性，一定要定义

    ` <!DOCTYPE html>
      <html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>Title</title>
		</head>
		<body>
		<script src="practise.js"></script>
		</body>
		
		
		<form action="/abc" method="post">
		    <input type="text" name="sex">
		    <div class="login">
		        <div class="username">
		            <label for="username">姓名</label>
		            <input id="username" type="text" name="username">
		        </div>
		        <div class="password">
		            <label for="password">密码</label>
		            <input id="password" type="password" name="password" placeholder="输入密码">
		        </div>
		    </div>
		    <div class="submit">
		        <button>提交</button>
		    </div>
		    <div class="hobby">
		        <label >爱好</label>
		        <input type="checkbox" name="hobby" value="read"> read
		        <input type="checkbox" name="hobby" value="music"> listen to music
		        <input type="checkbox" name="hobby" value="study"> study
		    </div>
		    <div class="性别">
		        <label>性别</label>
		        <input type="radio" name="ginder" value="男"> 男
		        <input type="radio" name="ginder" value="女"> 女
		    </div>
		    <div class="file">
		        <input type="file" name="" accept="image/png">
		    </div>
		    <div class="select">
		        <select name="city">
		            <option value="beijing">北京</option>
		            <option value="shanghai" selected>上海</option>
		        </select>
		    </div>
		    <div class="textarea">
		        <textarea name="article">
		            ddd
		        </textarea>
		        <input type="hidden" name="abcd" value="123456abcdef校验数据">
		    </div>
		    <input type="button" value="button" />
		    <input type="submit" value="submit" />
		    <input type="reset" />
		</form>
		</html> `