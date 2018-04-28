// canvas.js
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas');

    // 设置要绘制的图形边框颜色
    context.setStrokeStyle("#00ff00");
    // 设置绘制图形的线条宽度
    context.setLineWidth(5);
    // 绘制一个宽高为200px的矩形
    context.rect(0, 0, 200, 200);
    // 勾勒画出边框
    context.stroke();
    // 再重新设置即将要绘制的图形边框颜色
    context.setStrokeStyle("#ff0000");
    // 同样，重新设置绘制图形的线条宽度
    context.setLineWidth(2);
    // 将路径移动到画布中的指定点(160, 100)
    context.moveTo(160, 100);
    // 在坐标为点(100, 100)处，顺时针画一个半径为60px的圆
    context.arc(100, 100, 60, 0, 2 * Math.PI, true);
    // 将路径移动到画布中的指定点(140, 100)
    context.moveTo(140, 100);
    // 在坐标为点(100, 100)处，顺时针画一个半径为40px的半圆
    context.arc(100, 100, 40, 0, Math.PI, false);
    // 将路径移动到画布中的指定点(85, 80)
    context.moveTo(85, 80);
    // 在坐标为点(80, 80)处，顺时针画一个半径为5px的圆
    context.arc(80, 80, 5, 0, 2 * Math.PI, true);
    // 将路径移动到画布中的指定点(125, 80)
    context.moveTo(125, 80);
    // 在坐标为点(120, 80)处，顺时针画一个半径为5px的圆
    context.arc(120, 80, 5, 0, 2 * Math.PI, true);
    // 勾勒出之前的图形路径
    context.stroke();
    // 将前面所有绘制的动作描述画到canvas画布上
    context.draw();
  }
})