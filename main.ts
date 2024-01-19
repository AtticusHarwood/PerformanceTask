tiles.setCurrentTilemap(tilemap`level`)
let heart = sprites.create(assets.image`heart`, SpriteKind.Player)
heart.setPosition(8, 9)
heart = sprites.create(assets.image`heart`, SpriteKind.Player)
heart.setPosition(16, 9)
heart = sprites.create(assets.image`heart`, SpriteKind.Player)
heart.setPosition(24, 9)
let player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(player1, tiles.getTileLocation(8, 8))
scene.cameraFollowSprite(player1)
controller.moveSprite(player1, 100, 100)
