
touchmove的最后坐标减去touchstart的起始坐标，X的结果如果正数，则说明手指是从左往右划动；
X的结果如果负数，则说明手指是从右往左划动；Y的结果如果正数，则说明手指是从上往下划动；
Y的结果如果负数，则说明手指是从下往上划动。

这在逻辑上没有任何问题。但在实际操作中，手指的上下滑动其实是很难直上直下的，只要稍微有点斜，就会被X轴的判断先行接管。


$("body").on("touchstart", function(e) {
    e.preventDefault();
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("body").on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
     
    if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
        alert("left 2 right");
    }
    else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
        alert("right 2 left");
    }
    else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
        alert("top 2 bottom");
    }
    else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
        alert("bottom 2 top");
    }
    else{
        alert("just touch");
    }
});
