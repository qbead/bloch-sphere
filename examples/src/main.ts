import { BlochSphere } from '../../src/index.ts'
import { Qubit } from '../../src/qubit.ts'

const blochSphere = new BlochSphere()
blochSphere.attach(document.body)

const state = Qubit.I
blochSphere.setState(state)
