loops.everyInterval(1000, function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # . # . .
            # . # . #
            # . # # #
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
    } else {
        basic.pause(2000)
    }
})
