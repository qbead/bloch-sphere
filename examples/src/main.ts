import { BlochSphere } from '../../src/index.ts'
import { Qubit } from '../../src/qubit.ts'

const blochSphere = new BlochSphere()
blochSphere.attach(document.body)

// blochSphere.showGrid = false

const state = Qubit.fromPolar(Math.PI / 4, Math.PI / 4)
blochSphere.setState(state)
