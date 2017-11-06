的两种数据类型
首先，JS包含两种不同的数据类型，“基本类型值”和“引用类型值”。

基本类型值指的是简单的数据段`Undefined,Null,Boolean，Number,String`等。这五种数据类型是按值访问的，可以操作保存在变量中实际的值。

引用类型的值是保存在内存中的对象，在操作对象时，我们实际上操作的是对象的引用。因此，引用类型的值是按引用访问的。
### JS变量的复制
基本类型值和引用类型值除了在保存方式上存在不同，在变量复制方面也存在不同。复制基本类型值时，会在变量对象上创建一个新值，然后把值复制到新变量的位置。
```javascript
var num1 = 5
var num2 = num1
num1 = 6
console.log(num2) //5
```
在执行`var num2 = num1`时，实际上，为num2开辟了新内存，从此，两个变量操作不再相互影响。

当复制引用类型值时，同样也会将存储在变量对象中的值复制一份到新分配的空间中，不同的是，这个复制出的值，实际上是一个指向存储在堆中对象的一个指针。
```javascript
var obj1 = new Object()
var obj2 = obj1
obj1.name = 'xiaoming'
console.log(obj2.name) //xiaoming
```
你看，并没有对obj2的name进行赋值，然而却同样打印出'xiaoming'，只因两个引用指向了同一块堆内存的同一个对象。因此只要有一个引用修改了对象的值，那么另一个引用去访问，得到的也是修改后的值。这便是浅克隆。
### JS对象的深克隆
现在要写一个原生JS实现深克隆的函数，那我们先贴出代码，进行分析
```javascript
function clone(Obj) {
    var buf
    if(Obj instanceof Array) {
        buf = []
        var i = Obj.length
        while(i--) {
            buf[i] = clone(Obj[i])
        }
        console.log(buf)
    } else if(Obj instanceof Object) {
        buf = {}
        for(key in Obj) {
            buf[key] = clone(Obj[key])
        }
        console.log(buf)
    } else {
        return Obj
    }
} 

var testArray = [1, 2, 3]
clone(testArray)
var testObject = {
    name: 'xiaoming',
    age: '18'
}
clone(testObject)
```
其中，身为一等公民函数，虽然也是对象，但通过值类型的复制即可实现深克隆。这样，一个实现深克隆的功能便出来了。
