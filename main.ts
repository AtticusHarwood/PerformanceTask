controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
    mySprite.sayText(":)", 500, false)
})
let heart = sprites.create(assets.image`heart`, SpriteKind.Player)
heart.setPosition(8, 9)
