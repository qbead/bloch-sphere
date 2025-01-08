import {
  BlochSphere,
  QubitDisplay,
  OperatorDisplay,
  OperatorPathDisplay,
} from '../../src/index.ts'
import { BlochVector } from '../../src/math/bloch-vector.ts'
import * as gates from '../../src/math/gates.ts'
import { Operator } from '../../src/math/operator.ts'

const blochSphere = new BlochSphere()
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
op.set(o)
path.set(o, state)

const res = new QubitDisplay()
res.set(state.applyOperator(o))
blochSphere.add(res)

console.log(BlochVector.from(0, 0, 1).applyOperator(gates.x()))

// setInterval(() => {
//   const state = BlochVector.random()
//   q.set(state, 500)
// }, 1000)
