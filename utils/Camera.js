export function attachCamera(attachedObj, offsetX, fixedY) {
    onUpdate( () => {
        camPos(attachedObj.pos.x + offsetX, fixedY)
    })
}

/*
export class Camera {
    attachedObj = null

    attach(
        gameObj, 
        offsetX = 0,
        fixedY = 0
    )   {
        this.attachedObj = gameObj

           
        }
}
        */