controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let row = 0
    let column = 0
    if (color >= mySprite.image.getPixel(column, row)) {
        decryption_number = 15 - Math.abs(color - mySprite.image.getPixel(column, row))
    } else {
        decryption_number = 15 + Math.abs(color - mySprite.image.getPixel(column, row))
    }
    decryption_number_for_the_prompt = convertToText(decryption_number)
    decryption_prompt = "The correct number to decrypt the image is " + decryption_number_for_the_prompt
    game.showLongText(decryption_prompt, DialogLayout.Bottom)
    encryption_number = game.askForNumber("Give the decryption key number:", 2)
    for (let row = 0; row <= mySprite.height - 1; row++) {
        for (let column = 0; column <= mySprite.width - 1; column++) {
            if (decryption_number) {
                if (mySprite.image.getPixel(column, row) + decryption_number <= 15) {
                    mySprite.image.setPixel(column, row, mySprite.image.getPixel(column, row) + decryption_number)
                } else {
                    mySprite.image.setPixel(column, row, (mySprite.image.getPixel(column, row) + decryption_number) % 15)
                }
            }
            pause(10)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (encrypted_or_not_encrypted == 0) {
        encryption_number = game.askForNumber("Give the encryption key number:", 2)
        mySprite = sprites.create(assets.image`Burger`, SpriteKind.Player)
        for (let row = 0; row <= mySprite.height - 1; row++) {
            for (let column = 0; column <= mySprite.width - 1; column++) {
                if (encryption_number) {
                    if (mySprite.image.getPixel(column, row) + encryption_number <= 15) {
                        mySprite.image.setPixel(column, row, mySprite.image.getPixel(column, row) + encryption_number)
                        color = mySprite.image.getPixel(column, row) + encryption_number
                    } else {
                        mySprite.image.setPixel(column, row, (mySprite.image.getPixel(column, row) + encryption_number) % 15)
                        color = (mySprite.image.getPixel(column, row) + encryption_number) % 15
                    }
                }
                pause(10)
            }
        }
        game.showLongText("Press A to get rid of this prompt then B to go to choose the decryption number", DialogLayout.Bottom)
        encrypted_or_not_encrypted = 1
    }
})
let encryption_number = 0
let decryption_prompt = ""
let decryption_number_for_the_prompt = ""
let decryption_number = 0
let mySprite: Sprite = null
let color = 0
let encrypted_or_not_encrypted = 0
game.showLongText("Press A to get rid of this prompt then press A again to go choose the encryption number", DialogLayout.Bottom)
encrypted_or_not_encrypted = 0
