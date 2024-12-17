import { BlochSphere } from '../../src/index.ts'
import { Qubit } from '../../src/qubit.ts'

const blochSphere = new BlochSphere()
blochSphere.attach(document.body)

// blochSphere.showGrid = false

const state = Qubit.random()
blochSphere.setState(state)
