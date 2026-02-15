export class Spiders {
    constructor(positions, amplitudes, velocities, type) {
        this.amplitudes = amplitudes
        this.velocities = velocities
        this.spiders = []
        for (const position of positions) {
            this.spiders.push(
                add([
                    sprite(`spider-${type}`, {anim: "crawl"}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(0, 4.5), 20, 6),
                        collisionIgnore: ["spiders"]
                    }),
                    anchor("center"),
                    body(),
                    scale(4),
                    state("idle", ["idle", "crawl-left", "crawl-right"]),
                    offscreen(),
                    "spiders"

                ])
            )
        }

        this.positions = positions
    }

}