数组去重的方法，这里写出了三种，用心体会其中思想，还是可以理解的。
```javascript
Array.prototype.unique1 = function () {
    var n = []
    for(var i=0; i<this.length; i++) {
        if(n.indexOf(this[i]) == -1) {
            n.push(this[i])
        }
    }
    console.log(n)
}

Array.prototype.unique2 = function() {
    var n = {}
    var r = []
    for(var i=0; i<this.length; i++) {
        if(!n[this[i]]) {
            n[this[i]] = true
            r.push(this[i])
        }
    }
    console.log(r)
}

Array.prototype.unique3 = function () {
    var n = []
    for(var i=0; i<this.length; i++) {
        if(this.indexOf(this[i]) == i) {
            n.push(this[i])
        }
    }
    console.log(n)
}

var arr = [1, 1, 2, 2, 3, 3]
arr.unique1()
arr.unique2()
arr.unique3()
```
控制台打印出
```javascript
Array(3) [1, 2, 3]
Array(3) [1, 2, 3]
Array(3) [1, 2, 3]
```
