let hangerő = 0
input.onButtonPressed(Button.A, function () {
    hangerő += 1
})
input.onButtonPressed(Button.B, function () {
    hangerő += -1
})
basic.forever(function () {
    if (hangerő < 0) {
        hangerő = 0
    }
    if (hangerő > 5) {
        hangerő = 5
    }
    if (hangerő == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hangerő == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (hangerő == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
    }
    if (hangerő == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
    }
    if (hangerő == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
    }
    if (hangerő == 5) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    }
})
