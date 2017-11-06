## 函数声明与函数表达式的不同之处
```javascript
// 函数声明
console.log(sum(1, 2)) // 3
function sum (num1, num2) {
  return num1 + num2
}

// 函数表达式
console.log(sum(1, 2)) // sum is not a function
var sum = function (num1, num2) {
  return num1 + num2
}
```
从解析执行时间来看，函数声明会有function declaration hosting,在声明之前即可使用，引擎会在解析过程中将声明提升到源代码树顶部；函数表达式则没有这样的优先级，只有在函数执行到当前行的时候才会被解析执行。
## 立即执行函数
立即执行函数即immediately-invoked function expression，一个简单的demo如下：
```javascript
// 一个简单的立即执行函数
var a = 1
(function() {
    var a = 2
    console.log(a) // 2
}()
```
JS中，()跟在函数名之后表示调用该函数，如`print()`即表示调用print函数。
```javascript
// IIFE的两种形式
(function() {}())
(function() {})()
```
## IIEF的优势
1.不必为函数命名，避免污染全局变量 
avoid polluting global variables because of anonymous function and private variables and accessors

2.内部形成单独作用域,封装私有变量 establishing private variables and accessors

3.Evaluation context，preserving the inner function's execution context.

## IIFE的进阶使用
### 1. 将IIFE当做函数调用并传参进去
```javascript
//传入window
var a = 2

(function IIFE (global) {
  var a = 3
  console.log(a) // 3
  console.log(global.a) // window.a = 2
})(window)
```
将jQuery当做参数传入IIFE
```javascript
// 传入jQuery
(function($) {
  // code
})(jQuery)
```
### 2.解决undefined标识符默认值被覆盖导致的异常
将一个参数命名为undefined，但是参数位置不传参，这样保证代码块中undefined的值真的是undefined，多磨神奇的想法
```javascript
undefined = true
(function IIFE() {
  var a
  if(a === undefined) {
    console.log('undefined is safe here')
  }
})()
```
### 3.倒置代码执行顺序
先看个demo
```javascript
var a = 2
(function IIFE(def) {
  def(window)
})(function def(global) {
  var a = 3
  console.log(a) // 3
  console.log(global.a) // window.a = 2
})
```
将运行的函数放在后面，当做参数传入IIFE中，在IIFE执行时，调用要运行的函数即def，传入参数window，当做global的值
## 参考文档
* [Immediately-invoked function expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
* [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife)
* [深入理解JavaScript系列（4）：立即调用的函数表达式](http://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html)
* [立即调用的函数表达式（IIFE）](http://javascript.ruanyifeng.com/grammar/function.html#toc23)
* [JavaScript中的立即执行函数](https://juejin.im/post/59fc0a8c6fb9a04500026707)
* [javascript立即执行某个函数：插件中function(){}()再思考](http://www.tangshuang.net/2020.html)
* [you don‘t know JS](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/scope%20%26%20closures/ch3.md)
* JavaScript高级程序设计