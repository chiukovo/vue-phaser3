import { Scene } from 'phaser'
export default class Player extends Scene {
    constructor(scene) {
        super(scene)

        scene.anims.create({
            key: 'Idle1',
            frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        })
        scene.anims.create({
            key: 'run',
            frames: scene.anims.generateFrameNumbers('player', { start: 8, end: 13 }),
            frameRate: 6,
            repeat: -1
        })

        scene.anims.create({
            key: 'sit',
            frames: scene.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 6,
            repeat: -1
        })

        scene.anims.create({
            key: 'jump',
            frames: scene.anims.generateFrameNumbers('player', { start: 14, end: 23 }),
            frameRate: 6,
            repeat: -1
        })
    }
}