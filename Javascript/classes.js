class Materializer {
    constructor(targetName) {
      this.target = targetName;
      this.activated = false;
    }  
    activate() {
      this.activated = true;
    }
    materialize() {
      const { activated, target } = this;
      if (activated) return target;
    }
  }
  const m = new Materializer('Kevin')
  console.log(m.activated)
  m.activate()
  console.log(m.activated)  
  console.log(m.materialize())