class UIManager {

    displayBlinkingUIMessage(content, position) {
        const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }), 
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])
        ])
        message.onStateEnter("flash-up", async () => {
            await tween(
                message.opacity,
                0,
                0.5,
                (opacity) => 
                    message.opacity = opacity
            )
        })
    }

    displayMainMenu() {
        add([sprite("forest-background"),
            scale(4)
         ])
         add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200),
            scale(8)
         ])
    }

    
}

export const uiManager = new UIManager()