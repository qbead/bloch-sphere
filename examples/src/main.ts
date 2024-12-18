import { BlochSphere, QubitDisplay } from '../../src/index.ts'
import { Qubit } from '../../src/qubit.ts'

const blochSphere = new BlochSphere()
blochSphere.attach(document.body)

// blochSphere.showGrid = false

const state = Qubit.random()
const q = new QubitDisplay(state)
blochSphere.add(q)

setInterval(() => {
  const state = Qubit.random()
  q.set(state, 500)
}, 1000)
