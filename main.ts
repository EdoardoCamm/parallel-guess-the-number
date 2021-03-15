let Number2 = 0
input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.AB, function () {
    let Rando = 0
    if (Number2 == Rando) {
        basic.showString("Right number")
    } else if (Number2 < Rando) {
        basic.showString("Too low")
    } else if (Number2 > Rando) {
        basic.showString("Too high")
    }
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
