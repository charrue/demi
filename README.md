# @charrue/demi

## 介绍
受vue-demi启发，用于兼容`@charrue/vump`和`vue`的响应式API的工具包。

`@charrue/vump`和`vue`的响应式功能都是基于`@vue/reactivity`开发，但是`watch` API则不同。

Vue中的`watch` API是与框架强耦合的，`@charrue/vump`中的`watch` API是来源于`@vue-reactivity/watch`。


总之同样功能的hook，由于依赖的包不同，无法做到直接引用。为了解决此问题便开发出了`@charrue/demi`。


## 基础使用
``` bash
npm install @charrue/demi
```

``` json
// package.json
{
  "scripts": {
    "postinstall": "charrue-demi-switch charrue"
  }
}
```

``` js
import { ref } from "@charrue/demi";

const useCounter = () => {
  const count = ref(0)
  const increase = () => {
    count.value += 1;
  }
  const decrease = () => {
    count.value -= 1;
  }

  return {
    count,
    decrease,
    increase
  }
}
```

