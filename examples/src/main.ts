import { BlochSphere, QubitDisplay, OperatorDisplay } from '../../src/index.ts'
import { BlochVector } from '../../src/math/bloch-vector.ts'
import * as gates from '../../src/math/gates.ts'

const blochSphere = new BlochSphere()
blochSphere.attach(document.body)

// blochSphere.showGrid = false

const state = BlochVector.random()
const q = new QubitDisplay(state)
blochSphere.add(q)

const op = new OperatorDisplay()
blochSphere.add(op)

const o = gates.hadamard()
op.set(o)
console.log(o.quaternion())

// setInterval(() => {
//   const state = BlochVector.random()
//   q.set(state, 500)
// }, 1000)
