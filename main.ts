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
    info.changeScoreBy(0 + 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Asteroidi_grandi: Sprite = null
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
info.setLife(5)
info.setScore(0)
animation.runImageAnimation(
Navicella,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 . . . . 2 . . 
    . . . . 2 2 2 2 2 2 f 2 . . . 2 
    . . . . . . 2 . . . . . . . 2 . 
    . . . . . 2 2 2 . . . 2 . 2 . . 
    . . . . . 2 2 5 . . . . 2 . 2 . 
    . . . . . 2 2 2 . . . . . . . 2 
    . . . . . . 2 . . . . 2 . . 2 . 
    . . . . 2 2 2 2 2 2 f . . 2 . . 
    . . . . . 4 4 4 4 . . 2 . . . 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
50,
false
)
game.onUpdateInterval(randint(400, 700), function () {
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
    Asteroidi.setPosition(160, randint(0, 115))
    Asteroidi.setVelocity(randint(-50, -100), 0)
})
game.onUpdateInterval(randint(700, 1000), function () {
    Asteroidi_grandi = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    Asteroidi_grandi.setPosition(160, randint(0, 115))
    Asteroidi_grandi.setVelocity(randint(-50, -100), 0)
})
