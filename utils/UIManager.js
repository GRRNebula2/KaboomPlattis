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
                (nextOpacityValue) => 
                    message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (nextOpacityValue) => 
                    message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-up")
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
         this.displayBlinkingUIMessage(
         "Press [Enter] to Start Game",
         vec2(center().x, center().y + 100)
         )

         onKeyPress("enter", () => {
            play("confirm-ui", { speed: 1.5 })
            go("controls")
         })
    }

}
export const uiManager = new UIManager()