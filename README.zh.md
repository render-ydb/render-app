# render-app

<p>
<a href="https://www.npmjs.com/package/@x.render/render-app" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-app" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-app" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-app" alt="NPM Downloads" /></a>

</p>

[英文文档](./README.md)

## Introduce

为 React 提供常用的钩子和实用函数。

## Usage

```sh
npm i @x.render/render-app -S
```

## Hooks

render-app 中提供了很多常用的 hooks

### usePageShow

usePageShow 用于在页面可见和不可见时执行相关回调函数。

```javascript
import { usePageShow } from "@x.render/render-app";

const Demo = () => {
  const pageShow = () => {
    console.log("Page not visible");
  };

  const pageHidden = () => {
    console.log("Page  visible");
  };
  usePageShow(pageShow, pageHidden);
  return <div>demo</div>;
};
export default Demo;
```

usePageShow 执行的参数不是必需的。
