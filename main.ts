let tenperatura = 0
basic.forever(function () {
    tenperatura = input.temperature()
    basic.showNumber(tenperatura - 6)
})
