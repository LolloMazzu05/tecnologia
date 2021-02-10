controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    proiettile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
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
        `, Navicella, 50, 0)
    proiettile.setVelocity(100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.setLife(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Pipistrello.destroy()
})
let Pipistrello: Sprite = null
let proiettile: Sprite = null
let Navicella: Sprite = null
Navicella = sprites.create(img`
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . 4 4 4 4 4 4 4 4 . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . 9 9 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 1 5 . . . . . 
    . . . . . . 2 2 2 1 5 . . . . . 
    . . . . 9 9 2 2 2 2 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 4 . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Navicella.setStayInScreen(true)
controller.moveSprite(Navicella)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    Pipistrello = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Player)
    Pipistrello.setPosition(160, 60)
    Pipistrello.setVelocity(-100, 0)
})
