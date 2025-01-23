# vue2-toast-lite

這是一個非常簡易的toast。

![範例](https://github.com/traveltime1221/vue2-toast-lite/raw/main/src/assets/image/example.gif)

## 安裝

### 環境
```
vue: ">=2.6.0 <2.7.16"
vue-template-compiler: ">=2.6.0 <2.7.16"
node: ">=12.0.0"
```

### 安裝方式
```
npm install vue2-toast-lite
```

### 解決安裝衝突
如果專案包含 ESLint，安裝本套件時可能會遇到依賴衝突。
可使用以下方法進行安裝處理：
```
npm install vue2-toast-lite --legacy-peer-deps
```


## 使用方式

### 全域
於 main.js 註冊設定
```
import Vue from "vue";
import App from "./App.vue";
import Toast from "vue2-toast-lite"; // 引用

Vue.config.productionTip = false;
Vue.component("Toast", Toast); // 註冊

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

前往 page.vue 引用
```
<template>
  <div id="app">
    <button class="btn-primary" @click="$refs.Toast.show('😀 我在右上小角落', 'topRight', 1500)">右上</button>
    <button class="btn-primary" @click="$refs.Toast.show('😆 我在右下小角落', 'bottomRight', 1500)">右下</button>
    <button class="btn-primary" @click="$refs.Toast.show('🤩 我在左上小角落', 'topLeft', 1500)">左上</button>
    <button class="btn-primary" @click="$refs.Toast.show('🤣 我在左下小角落', 'bottomLeft', 1500)">左下</button>
    <button class="btn-primary" @click="$refs.Toast.show('位於中上', 'centerTop', 1500)">中上</button>
    <button class="btn-primary" @click="$refs.Toast.show('位於置中', 'center', 1500)">置中</button>
    <button class="btn-primary" @click="$refs.Toast.show('位於中下', 'centerBottom', 1500)">中下</button>
    <hr/>
    <Toast ref="Toast"/>
  </div>
</template>

<script>
export default {
  components: {
    Toast
  }
}
</script>
```

### 局部
```
<template>
    <div class="container">
        <Toast ref="Toast"/>
    </div>
</template>

<script>
import Toast from "vue2-toast-lite"
export default {
    components: {
        Toast
    },
}

```

## 屬性
|  參數 | 類型 | 描述 | 
| -------- | -------- | -------- | 
| message    | String     |  要顯示的提示 | 
| position | String | toast 位置 (topRight, bottomRight, topLeft,bottomLeft,centerTop,center,centerBottom )|
| duration | Number | toast 顯示的時間(單位：毫秒)|


## 版本歷程
* 1.1.1 文件錯字修改
* 1.1.0 第一次發布

## License
MIT
