
import { Scene } from 'phaser'

export default class Player extends Scene {
    constructor() {
        this.anims.create({
            key: 'Idle1',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        })
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 13 }),
            frameRate: 6,
            repeat: -1
        })

        this.anims.create({
            key: 'sit',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 6,
            repeat: -1
        })
    }
}