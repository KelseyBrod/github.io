var box1 = document.querySelector('.home')
var yellow = document.querySelector('.ball')
box1.onmousemove = function yh(e) {
    // 算出小盒子在图片的中心点
    var x = e.pageX - box1.offsetLeft - yellow.offsetWidth / 2
    var y = e.pageY - box1.offsetTop - yellow.offsetHeight / 2
    yellow.style.left = x + 150 + 'px'
    yellow.style.top = y + 150 + 'px'
}
// setInterval(yh(), 1000); 单位是毫秒