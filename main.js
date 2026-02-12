import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { Level } from "./utils/Level.js"

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
        const level1 = new Level()
        level1.drawBackground("forest-background")
        level1.drawMapLayout(level1Layout, level1Mappings)

        level1.drawWaves("water", "wave")
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