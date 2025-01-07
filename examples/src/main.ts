import { BlochSphere, QubitDisplay } from '../../src/index.ts'
import { BlochVector } from '../../src/math/bloch-vector.ts'

const blochSphere = new BlochSphere()
blochSphere.attach(document.body)

// blochSphere.showGrid = false

const state = BlochVector.ZERO //.random()
const q = new QubitDisplay(state)
blochSphere.add(q)

// setInterval(() => {
//   const state = BlochVector.random()
//   q.set(state, 500)
// }, 1000)
