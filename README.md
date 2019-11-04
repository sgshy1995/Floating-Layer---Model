# Floating-Layer---Model
## 简单的浮层模型

#### 实现的功能
点击按钮弹出浮层<br>
点击别处关闭浮层<br>
点击浮层时，浮层不得关闭<br>
再次点击按钮，浮层消失

#### 旧版本的JS
很复杂<br>
首先要为`popover.style.display`赋值为`'none'`，因为`.style`是DOM的style属性，无法读取到CSS中的属性。<br>
这里可以用`getComputedStyle()`方法。<br>
同时使用了一个计时器，设置时间为0，来让代码在事件执行完毕后再执行。

#### 新版本的JS
很简单<br>
使用jQuery的`.toggle()`方法，可以直接控制元素的隐藏和显示。

#### 都用到了
DOM事件中的的`.stopPropagation()`方法，阻止捕获和冒泡阶段中当前事件的进一步传播。
