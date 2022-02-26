input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.gameOver()
})
input.onButtonPressed(Button.A, function () {
    飞.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    炮 = game.createSprite(飞.get(LedSpriteProperty.X), 飞.get(LedSpriteProperty.Y))
    炮.turn(Direction.Left, 90)
    for (let index = 0; index < 4; index++) {
        炮.move(1)
        if (炮.isTouching(敌)) {
            敌.delete()
            game.addScore(1)
        }
        basic.pause(100)
    }
    炮.delete()
})
input.onButtonPressed(Button.B, function () {
    飞.move(1)
})
let 敌: game.LedSprite = null
let 炮: game.LedSprite = null
let 飞: game.LedSprite = null
飞 = game.createSprite(2, 4)
basic.forever(function () {
    敌 = game.createSprite(randint(0, 4), 0)
    basic.pause(3000)
    敌.delete()
})
