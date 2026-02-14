import kaboom from "./libs/kaboom.mjs"
import { Player } from "./entities/Player.js"
import { attachCamera } from "./utils/camera.js"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { level1Config } from "./content/level1/config.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"


kaboom({
    width: 1280,
    height: 720,
    letterbox: true, 
})

load.fonts()
load.sounds()
load.assets()

const scenes = {
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: () => {
        uiManager.displayControlsMenu()
    },
    1: () => {
        setGravity(1400)

        const level1 = new Level()
        level1.drawBackground("forest-background")
        level1.drawMapLayout(level1Layout, level1Mappings)

        const player = new Player(
            level1Config.PlayerStartPosX,
            level1Config.PlayerStartPosY,
            level1Config.PlayerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )

        player.enablePassthrough()
        player.enableCoinPickUp()
        player.update()

        attachCamera(player.gameObj, 0, 200)

        level1.drawWaves("water", "wave")

        
        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)

    },
    2: () => {

    },
    3: () => {

    },
    gameover: () => {

    },
    end: () => {

    }
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go("menu")