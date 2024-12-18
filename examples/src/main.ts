import { BlochSphere } from '../../src/index.ts'
import { Qubit } from '../../src/qubit.ts'

const blochSphere = new BlochSphere()
blochSphere.attach(document.body)

// blochSphere.showGrid = false

const state = Qubit.random()
blochSphere.plotState(state)

setInterval(() => {
  blochSphere.clear()
  const state = Qubit.random()
  blochSphere.plotState(state)
}, 1000)
