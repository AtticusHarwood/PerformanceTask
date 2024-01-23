let enemy_sprite: Sprite = null
let spawn_block: tiles.Location[] = []
tiles.setCurrentTilemap(tilemap`level`)
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
let player1 = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.placeOnTile(player1, tiles.getTileLocation(8, 8))
scene.cameraFollowSprite(player1)
controller.moveSprite(player1, 100, 100)
info.setLife(3)
forever(function () {
    pause(5000)
    spawn_block = tiles.getTilesByType(assets.tile`myTile10`)
    for (let index = 0; index < 4; index++) {
        enemy_sprite = sprites.create(enemy_images._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemy_sprite, spawn_block.removeAt(randint(0, spawn_block.length - 1)))
        enemy_sprite.follow(player1, 50)
    }
})
