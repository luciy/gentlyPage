# 平滑切换组件

gentlyPage 移动端（基于Zepto）的平滑切换组件组件：http://luciy.github.io/gentlyPage/

Demo: http://demo.uis.cc/gentlyPage/

------------------

#### 用法
只需要引入依赖的资源，遵循下面例子中的模式。

| 路径      | 描述 |
| :-------- | :--------|
| `js/gentlyPage.js` | js引用路径。 |
| `css/base.css`|  css引用路径。  |


------------------------------

#### js实例化:
```
var mySwipe = new GentlyPage({
    zIndex: 999,                // 默认层级
    activeClassName: 'active',  // 切换到当前显示层添加的ClassName
    animationDuration: 800,     // 切换动画时间
    timingFunction: 'ease',     // 动画曲线
    callback: function() {}     // 切换后的回调
});
 
// 调用方法
mySwipe.moveUpOut($page01,$page02);
```

------------------------------


#### 参数详解：
| 参数      | 描述 |
| :-------- | :--------|
| `zIndex`	| 整数 (默认：999) 默认层级。| 
| `activeClassName`	| ClassName (默认：active) 动画当前页面外层添加的class名称用于CSS3动画。| 
| `animationDuration`	| 整数 (默认：500) 动画时间。| 
| `timingFunction`	| String (默认：ease) 动画曲线| 
| `callback`	| function类型 切换后的回调| 


------------------------------




#### API：
gentlyPage 对外暴漏了一些方法，这些方法对于控制是有用的。

| 参数      | 描述 |
| :-------- | :--------|
| moveUpOut()	| 当前屏向上划出屏幕, 接收2个参数分别为当前页对象和目标切换页对象。| 
| moveUpIn()	| 下一屏向上划入屏幕| 
| moveDownOut()	| 当前屏向下划出屏幕| 
| moveDownIn()| 	下一屏向下划入屏幕| 
| moveLeftOut()	| 当前屏向左划出屏幕| 
| moveLeftIn()| 	下一屏向左划入屏幕| 
| moveRightOut()|	 当前屏向右划入屏幕| 
| moveRightIn()| 	下一屏向右划入屏幕| 


------------------------------

#### 最新版本
0.1(150528)		新增API调用方法。

------------------------------
#### 支持设备的浏览器

- iOS7 Safari (and above)
- Android 4.0.3 (and above default browser)
