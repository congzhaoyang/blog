function foo (){
  var a = 1
  function bar () {
    console.log(a)
  }
  bar()
}
foo()

function foo() {
  var a = 1
  function bar() {
    console.log(a)
  }
  return bar
}

var baz = foo
baz()

function foo() {
  var a = 2
  function baz() {
    console.log(a)
  }
  bar(baz)
}
function bar (fn) {
  fn()
}
foo()

var fn
function foo() {
  var a = 1
  function baz() {
    console.log(a)
  }
  fn = baz
}
function bar() {
  fn()
}
foo()
bar()

function wait(message) {
  setTimeout(function timer() {
    console.log(message)
  }, 1000)
}
wait('hello world')

function setupBot(name, selector) {
  $(selector).click(function activator() {
    console.log('activating:' + name)
  })
}

setupBot('closure bot 1', '#bot_1')
setupBot('closure bot 2', '#bot_2')

for(var i=1; i<=5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, 1000);
}

for(var i=1; i<=5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, 1000);
}

for(var i=1; i<=5; i++) {
  (function(i) {
    setTimeout(function timer() {
      console.log(i)
    }, 1000);
  })(i)
}

for(var i=0; i<=5; i++) {
  (function() {
    var j = i
    setTimeout(function timer() {
      console.log(j)
    }, 1000)
  })()
}

for(var i=0; i<=5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, 1000);
  })(i)
}

for(var i=0; i<=5; i++) {
  let j = i
  setTimeout(function timer() {
    console.log(j)
  }, 1000);
}

for(let i=0; i<=5; i++) {
  setTimeout(function() {
    console.log(i) 
  }, 1000);
}

function CoolModule() {
  var something = 'cool'
  var another = [1, 2, 3]

  function doSomeThing () {
    console.log(something)
  }
  function doAnotherThing() {
    console.log(another.join('!'))
  }

  return {
    doSomeThing: doSomeThing,
    doAnotherThing: doAnotherThing
  }
}

var foo = CoolModule()
foo.doSomeThing()
foo.doAnotherThing()

var foo = (function CoolModule() {
  var something = 'cool'
  var another = [1, 2, 3]

  function doSomeThing () {
    console.log(something)
  }
  function doAnotherThing() {
    console.log(another.join('!'))
  }

  return {
    doSomeThing: doSomeThing,
    doAnotherThing: doAnotherThing
  }
})()

foo.doSomeThing()
foo.doAnotherThing()

// 
function CoolModule(id) {
  function identify () {
    console.log(id)
  }

  return {
    identify: identify
  }
}

var foo1 = CoolModule('foo 1')
var foo2 = CoolModule('foo 2')
foo1.identify()
foo2.identify()

//
var foo = (function CoolModule(id) {
  function change () {
    publicAPI.identify = identify2
  }
  function identify1 () {
    console.log(id)
  }
  function identify2 () {
    console.log(id.toUpperCase())
  }

  var publicAPI = {
    change: change,
    identify: identify1
  }

  return publicAPI
})('foo module')

foo.identify()
foo.change()
foo.identify()

//
var myModules = (function Manager() {
  var modules = {}

  function define(name, deps, impl) {
    for(var i=0; i<deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }

  function get(name) {
    return modules[name]
  }

  return {
    define: define,
    get: get
  }
})()