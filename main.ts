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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Asteroidi: Sprite = null
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
game.onUpdateInterval(randint(200, 500), function () {
    Asteroidi = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Asteroidi.setPosition(160, randint(20, 100))
    Asteroidi.setVelocity(-100, 0)
})
