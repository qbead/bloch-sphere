import {
  BlochSphere,
  QubitDisplay,
  OperatorDisplay,
  OperatorPathDisplay,
} from '../../src/index.ts'
import { BlochVector } from '../../src/math/bloch-vector.ts'
import * as gates from '../../src/math/gates.ts'

const blochSphere = new BlochSphere({
  fontSize: 1.25,
})
blochSphere.attach(document.body)

// blochSphere.showGrid = false

const state = BlochVector.random()
const q = new QubitDisplay(state)
blochSphere.add(q)

const op = new OperatorDisplay()
blochSphere.add(op)

const path = new OperatorPathDisplay()
blochSphere.add(path)

const o = gates.hadamard()
op.label.text = 'H'
op.label.fontSize = 2
op.set(o)
path.set(o, state)

const res = new QubitDisplay()
res.color = 0x00ff00
res.set(state.applyOperator(o))
blochSphere.add(res)

console.log(BlochVector.from(0, 0, 1).applyOperator(gates.x()))

// setInterval(() => {
//   const state = BlochVector.random()
//   q.set(state, 500)
// }, 1000)
