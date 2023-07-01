class TargetingSolution {
    constructor(coords) {
      const { x, y, z } = coords
      this.x = x
      this.y = y
      this.z = z
    }
    target() {
      const { x, y, z } = this
      return `(${x}, ${y}, ${z})`
    }
  }