popover.style.display = 'none' //先为display定义值，否则它的默认为空，就会自动跳到else里面

$(clickMe).on('click', function (sgs) {

    if (popover.style.display === 'none') { //判断是要开启还是关闭
        $(popover).show()
        setTimeout(function () { //设置计时器时间为0，在时间执行完成后才会执行计时器
            $(document).one('click', function () {
                $(popover).hide()
            })
        }, 0)
    } else {
        $(popover).hide()
    }
})

$(wrapper).on('click', function (sgs) { //事件阻隔
    sgs.stopPropagation()
})