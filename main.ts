controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(assets.image`player`)
    orientation = "up"
})
// TRIGGERING EVENT, USER INPUT FOR ATTACK
// HAS SEQUENCING, SELECTION, AND ITERATION
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (orientation == "left") {
        animation.runImageAnimation(
        player1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . c f e e e e f . . . . . 
            . . c c . f 8 d e e f . . . . . 
            . c b b c f d d d e f . . . . . 
            . c b c . c f d d f . . . . . . 
            c b c 1 1 . f 6 6 f . . . . . . 
            . c 1 1 . c f 6 6 f . . . . . . 
            . c 1 . c f d 6 6 f . . . . . . 
            . . c . . f d 6 6 6 f . . . . . 
            . . . c . . f e e e f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . f e e e f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f 8 d e e f . . . . . 
            . . c . c f d d d e f . . . . . 
            . c c . 1 . f d d f . . . . . . 
            b c b 1 1 . f 6 6 f . . . . . . 
            c b c 1 . c f 6 6 f . . . . . . 
            c . 1 1 c f d 6 6 f . . . . . . 
            c c 1 . . f d 6 6 6 f . . . . . 
            . c . c c . f e e e f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . f e e e f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f 8 d e e f . . . . . 
            . . . . . f d d d e f . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . . f 6 6 f . . . . . . 
            . . . . . . f 6 6 f . . . . . . 
            . . . . . f d 6 6 f . . . . . . 
            . . . . . f d 6 6 6 f . . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . f e e e f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        100,
        false
        )
    } else if (orientation == "right") {
        animation.runImageAnimation(
        player1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f e e e e f c . . . . 
            . . . . . f e e d 8 f c c c . . 
            . . . . . f e d d d f . b b c . 
            . . . . . . f d d f . c . b c . 
            . . . . . . f 6 6 f c 1 1 . b c 
            . . . . . . f 6 6 f . c 1 1 c . 
            . . . . . . f 6 6 d f . c 1 c . 
            . . . . . f 6 6 6 d f . c . . . 
            . . . . . f e e e f . . . c . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f e e d 8 f c . . . . 
            . . . . . f e d d d f . c c . . 
            . . . . . . f d d f c 1 . c c . 
            . . . . . . f 6 6 f . 1 1 b c b 
            . . . . . . f 6 6 f c . 1 . b c 
            . . . . . . f 6 6 d f c 1 1 . c 
            . . . . . f 6 6 6 d f c . 1 c c 
            . . . . . f e e e f . . c . c . 
            . . . . . f 8 8 8 f . . . c . . 
            . . . . . . f 8 8 f . . . . c . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f e e d 8 f . . . . . 
            . . . . . f e d d d f . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . . f 6 6 f . . . . . . 
            . . . . . . f 6 6 f . . . . . . 
            . . . . . . f 6 6 d f . . . . . 
            . . . . . f 6 6 6 d f . . . . . 
            . . . . . f e e e f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        100,
        false
        )
    } else if (orientation == "up") {
        animation.runImageAnimation(
        player1,
        [img`
            . . . . . . . . f f f f . . . . 
            . c 1 1 . . . f e e e e f . . . 
            c c . . . . f e e e e e e f . . 
            c f f . . . f e e e e e e f . . 
            f b b f . . f d e e e e d f . . 
            f b c b f f . f d d d d f . . . 
            . f b c b c f 6 6 6 6 6 6 f . . 
            c . f b c c 6 6 6 6 6 6 6 6 f . 
            c c f c c b d 6 6 6 6 6 6 6 6 f 
            . c . f f d b f 6 6 6 6 f 6 6 f 
            . 1 . . . f f f e e e e f f f . 
            . . . . . . f 8 8 8 8 8 8 f . . 
            . . . . . . f 8 8 8 8 8 8 f . . 
            . . . . . . f 8 8 f f 8 8 f . . 
            . . . . . f e e e f f e e e f . 
            . . . . . . f f f . . f f f . . 
            `,img`
            . . c c c c . . f f f f . . . . 
            . c . . . c . f e e e e f . . . 
            c . 1 1 1 . f e e e e e e f . . 
            . 1 1 . . . f e e e e e e f . . 
            . 1 . . . f f d e e e e d f . . 
            . . . . f 6 6 f d d d d f . . . 
            . . . . f 6 6 6 6 6 6 6 6 f . . 
            . . . . f 6 6 6 6 6 6 6 6 6 f . 
            . . . . . f 6 6 6 6 6 6 6 6 6 f 
            . . . . . . f f 6 6 6 6 f 6 6 f 
            . . . . . . f f e e e e f f f . 
            . . . . . . f 8 8 8 8 8 8 f . . 
            . . . . . . f 8 8 8 8 8 8 f . . 
            . . . . . . f 8 8 f f 8 8 f . . 
            . . . . . f e e e f f e e e f . 
            . . . . . . f f f . . f f f . . 
            `,img`
            . . . . . . . . f f f f . . . . 
            . . . . . . . f e e e e f . . . 
            . . . . . . f e e e e e e f . . 
            f f f . . . f e e e e e e f . . 
            f b b f . . f d e e e e d f . . 
            f b c b f f . f d d d d f . . . 
            . f b c b c f 6 6 6 6 6 6 f . . 
            . . f b c c 6 6 6 6 6 6 6 6 f . 
            . . f c c b d 6 6 6 6 6 6 6 6 f 
            . . . f f d b f 6 6 6 6 f 6 6 f 
            . . . . . f f f e e e e f f f . 
            . . . . . . f 8 8 8 8 8 8 f . . 
            . . . . . . f 8 8 8 8 8 8 f . . 
            . . . . . . f 8 8 f f 8 8 f . . 
            . . . . . f e e e f f e e e f . 
            . . . . . . f f f . . f f f . . 
            `],
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        player1,
        [img`
            . . . . f f f f . . . . . . . . 
            . . . f e e e e f . . . . . . . 
            . . f e e e e e e f . 1 1 . c . 
            . . f e d d d d e f . . . f f c 
            . . f d 8 d d 8 d f . 1 f b b f 
            . . . f d d d d f . f 1 1 c b f 
            . . f 6 6 6 6 6 6 f c b 1 b c . 
            . f 6 6 6 6 6 6 6 6 c c b f c . 
            f 6 6 6 6 6 6 6 6 d b c c f c . 
            f 6 6 f 6 6 6 6 f b d f c . . . 
            . f f f e e e e f f f . c . . . 
            . . f 8 8 8 8 8 8 f . . . . . . 
            . . f 8 8 8 8 8 8 f . . . . . . 
            . . f 8 8 f f 8 8 f . . . . . . 
            . f e e e f f e e e f . . . . . 
            . . f f f . f f f f . . . . . . 
            `,img`
            . . . . f f f f . . . . . . . . 
            . . . f e e e e f . . . . . . . 
            . . f e e e e e e f . . . . . . 
            . . f e d d d d e f . . . . . . 
            . . f d 8 d d 8 d f . . . . . . 
            . . . f d d d d f . . . . . . . 
            . . f 6 6 6 6 6 6 f . . . . . . 
            . f 6 6 6 6 6 6 6 6 f . . . . . 
            f 6 6 6 6 6 6 6 6 d b . . . . . 
            f 6 6 1 6 6 6 b f b d . . . . . 
            . f f f 1 1 e e b f f 1 . . . . 
            . . f 8 8 c 8 8 1 1 1 . . . . . 
            . . f 8 8 8 c c 8 f . . . . . . 
            . . f 8 8 f f 8 8 f . . . . . . 
            . f e e e f f e e e f . . . . . 
            . . f f f . f f f f . . . . . . 
            `,img`
            . . . . f f f f . . . . . . . . 
            . . . f e e e e f . . . . . . . 
            . . f e e e e e e f . . . . . . 
            . . f e d d d d e f . . . f f f 
            . . f d 8 d d 8 d f . . f b b f 
            . . . f d d d d f . f f b c b f 
            . . f 6 6 6 6 6 6 f c b c b f . 
            . f 6 6 6 6 6 6 6 6 c c b f . . 
            f 6 6 6 6 6 6 6 6 d b c c f . . 
            f 6 6 f 6 6 6 6 f b d f f . . . 
            . f f f e e e e f f f . . . . . 
            . . f 8 8 8 8 8 8 f . . . . . . 
            . . f 8 8 8 8 8 8 f . . . . . . 
            . . f 8 8 f f 8 8 f . . . . . . 
            . f e e e f f e e e f . . . . . 
            . . f f f . f f f f . . . . . . 
            `],
        100,
        false
        )
    }
    for (let value of enemies) {
        if (value.overlapsWith(player1)) {
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
            enemies.removeAt(enemies.indexOf(value))
            player_name(your_name, value)
            sprites.destroy(value)
            enemy_spawned += -1
            kill_count += 1
        }
    }
})
// PROCEDURE
function player_name (name: string, mySprite: Sprite) {
    if (kill_count == 1) {
        game.showLongText("Achievement:" + name + " Just slayed a monster", DialogLayout.Bottom)
    }
    if (mySprite.image.equals(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 f 1 . . . . . 
        . . . . f 7 7 7 7 f 2 1 . . . . 
        . . . . f f 1 7 7 f 1 2 . . . . 
        . . . . f 7 7 7 1 f 2 . . . . . 
        . . . . . f 7 f 7 7 f . . . . . 
        . . . f f 8 a a a a 8 f f . . . 
        . . f 7 7 8 a a a a 8 7 7 f . . 
        . . f 7 7 8 a a a a 8 7 7 f . . 
        . . f f f f 8 8 8 8 f f f f . . 
        . . . . f 8 8 f f 8 8 f . . . . 
        . . . . f 8 8 f f 8 8 f . . . . 
        . . . . f 8 8 f f 8 8 f . . . . 
        . . . . f f f . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        game.showLongText("Achievement:" + name + " Just slayed a zombie", DialogLayout.Bottom)
    } else if (mySprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . f 7 7 7 f b b b b . . . . 
        . b b b f 7 f 7 7 7 7 b b b . . 
        . b 7 7 7 f 7 7 7 7 7 7 7 b b . 
        . b 7 f 7 7 7 f 7 7 7 7 7 7 b b 
        . b 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        . b 7 7 7 f f 7 7 b 7 7 7 b 7 b 
        . b b 7 7 f f 7 7 7 7 7 7 7 7 b 
        . . b 7 7 7 7 7 7 7 7 7 7 7 7 b 
        . . . b b b 7 7 7 7 7 b 7 7 b . 
        . . . . . b b b b b 7 7 7 b b . 
        . . . . . . . . . b b b b b . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        game.showLongText("Achievement:" + name + " Just slayed a slime", DialogLayout.Bottom)
    } else if (mySprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f b . . . 
        e d . . . . . . . . f b 3 b . . 
        . e d e . . . . . . . f b . . . 
        . . . . d b b b c b c b c b . . 
        . . . . b b b c b b b b b f b . 
        . . . . b c b b b b b b b b b f 
        . . . . . f b . c . f c . c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        game.showLongText("Achievement:" + name + " Just slayed a rat", DialogLayout.Bottom)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f 8 d e e f . . . . . 
        . . . . . f d d d e f . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f 6 6 f . . . . . . 
        . . . . . . f 6 6 f . . . . . . 
        . . . . . f d 6 6 f . . . . . . 
        . . . . . f d 6 6 6 f . . . . . 
        . . . . . . f e e e f . . . . . 
        . . . . . . f 8 8 8 f . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e e e f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    orientation = "left"
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e d 8 f . . . . . 
        . . . . . f e d d d f . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f 6 6 f . . . . . . 
        . . . . . . f 6 6 f . . . . . . 
        . . . . . . f 6 6 d f . . . . . 
        . . . . . f 6 6 6 d f . . . . . 
        . . . . . f e e e f . . . . . . 
        . . . . . f 8 8 8 f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . . f e e e f . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    orientation = "right"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . f f f f . . . . . . . . 
        . . . f e e e e f . . . . . . . 
        . . f e e e e e e f . . . . . . 
        . . f e d d d d e f . . . f f f 
        . . f d 8 d d 8 d f . . f b b f 
        . . . f d d d d f . f f b c b f 
        . . f 6 6 6 6 6 6 f c b c b f . 
        . f 6 6 6 6 6 6 6 6 c c b f . . 
        f 6 6 6 6 6 6 6 6 d b c c f . . 
        f 6 6 f 6 6 6 6 f b d f f . . . 
        . f f f e e e e f f f . . . . . 
        . . f 8 8 8 8 8 8 f . . . . . . 
        . . f 8 8 8 8 8 8 f . . . . . . 
        . . f 8 8 f f 8 8 f . . . . . . 
        . f e e e f f e e e f . . . . . 
        . . f f f . . f f f . . . . . . 
        `)
    orientation = "down"
})
let enemy_sprite: Sprite = null
let spawn_block: tiles.Location[] = []
let kill_count = 0
let enemies: Sprite[] = []
let orientation = ""
let player1: Sprite = null
let your_name = ""
your_name = game.askForString("WHAT IS YOUR NAME")
pause(2000)
tiles.setCurrentTilemap(tilemap`level`)
// LIST, COLLECTION OF ENEMY SPRITE IMAGES
let enemy_images = [img`
    . . . . . f f f f f . . . . . . 
    . . . . f 7 7 7 7 f 1 . . . . . 
    . . . . f 7 7 7 7 f 2 1 . . . . 
    . . . . f f 1 7 7 f 1 2 . . . . 
    . . . . f 7 7 7 1 f 2 . . . . . 
    . . . . . f 7 f 7 7 f . . . . . 
    . . . f f 8 a a a a 8 f f . . . 
    . . f 7 7 8 a a a a 8 7 7 f . . 
    . . f 7 7 8 a a a a 8 7 7 f . . 
    . . f f f f 8 8 8 8 f f f f . . 
    . . . . f 8 8 f f 8 8 f . . . . 
    . . . . f 8 8 f f 8 8 f . . . . 
    . . . . f 8 8 f f 8 8 f . . . . 
    . . . . f f f . . f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . f 7 7 7 f b b b b . . . . 
    . b b b f 7 f 7 7 7 7 b b b . . 
    . b 7 7 7 f 7 7 7 7 7 7 7 b b . 
    . b 7 f 7 7 7 f 7 7 7 7 7 7 b b 
    . b 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
    . b 7 7 7 f f 7 7 b 7 7 7 b 7 b 
    . b b 7 7 f f 7 7 7 7 7 7 7 7 b 
    . . b 7 7 7 7 7 7 7 7 7 7 7 7 b 
    . . . b b b 7 7 7 7 7 b 7 7 b . 
    . . . . . b b b b b 7 7 7 b b . 
    . . . . . . . . . b b b b b . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f b . . . 
    e d . . . . . . . . f b 3 b . . 
    . e d e . . . . . . . f b . . . 
    . . . . d b b b c b c b c b . . 
    . . . . b b b c b b b b b f b . 
    . . . . b c b b b b b b b b b f 
    . . . . . f b . c . f c . c . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
player1 = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.placeOnTile(player1, tiles.getTileLocation(8, 8))
scene.cameraFollowSprite(player1)
controller.moveSprite(player1, 100, 100)
info.setLife(5)
let enemy_spawned = 0
orientation = "up"
enemies = []
kill_count = 0
forever(function () {
    if (enemy_spawned < 5) {
        pause(3000)
        spawn_block = tiles.getTilesByType(assets.tile`myTile10`)
        enemy_sprite = sprites.create(enemy_images._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemy_sprite, spawn_block.removeAt(randint(0, spawn_block.length - 1)))
        enemy_sprite.follow(player1, 30)
        enemies.push(enemy_sprite)
        enemy_spawned += 1
    }
})
forever(function () {
    for (let value of enemies) {
        if (value.overlapsWith(player1)) {
            pause(2000)
            if (value.overlapsWith(player1)) {
                info.changeLifeBy(-1)
            }
        }
    }
})
