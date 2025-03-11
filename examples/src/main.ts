import {
  BlochSphere,
  QubitDisplay,
  OperatorDisplay,
  OperatorPathDisplay,
  PathDisplay,
  PointsDisplay,
} from '../../src/index.ts'
import * as THREE from 'three'
import { BlochVector } from '../../src/math/bloch-vector.ts'
import * as gates from '../../src/math/gates.ts'
import GUI from 'lil-gui'

// initialize the BlochSphere
const blochSphere = new BlochSphere({
  fontSize: 1.25,
})
// attach the BlochSphere to the DOM
blochSphere.attach(document.body)

// blochSphere.showGrid = false
const path = new PathDisplay([
  BlochVector.fromAngles(0, 0),
  BlochVector.fromAngles(1, 0.1),
  BlochVector.fromAngles(1, 1),
])
path.color = 0xff0000
blochSphere.add(path)

// generate 100 randomly
const points = new PointsDisplay(
  Array.from({ length: 100 }, () => BlochVector.random())
)
points.color = 0x00ff00
points.pointSize = 20
blochSphere.add(points)

// set up an initial state
let state = BlochVector.random()
const qubitArrow = new QubitDisplay(state)
blochSphere.add(qubitArrow)

const operatorDisplay = new OperatorDisplay()
blochSphere.add(operatorDisplay)

const pathDisplay = new OperatorPathDisplay()
blochSphere.add(pathDisplay)

let gate = gates.hadamard()
operatorDisplay.label.text = 'H'
operatorDisplay.label.fontSize = 2
operatorDisplay.set(gate)
pathDisplay.set(gate, state)

const resultQubit = new QubitDisplay()
resultQubit.color = 0x00ff00
resultQubit.set(state.applyOperator(gate))
blochSphere.add(resultQubit)

blochSphere.highlightRegion([
  BlochVector.fromAngles(0, 0),
  BlochVector.fromAngles(1, 0),
  BlochVector.fromAngles(1.5, -1.5),
])

// setInterval(() => {
//   const state = BlochVector.random()
//   q.set(state, 500)
// }, 1000)

// helper to wait for a duration
const delay = (ms?: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Set up a GUI to control the state of the qubit
const gui = new GUI()

const config = {
  'Randomize State': () => {
    state = BlochVector.random()
    update(true)
  },
  'Gate Type': 'H',
  'Show Axes': true,
  'Show Angle Indicators': true,
  'Show Operator Indicator': true,
  'Show Operator Path': true,
  'Result Arrow Color': '#00ff00',
}

async function update(animate?: boolean) {
  blochSphere.scene.axes.visible = config['Show Axes']
  pathDisplay.visible = config['Show Operator Path']
  operatorDisplay.visible = config['Show Operator Indicator']
  qubitArrow.angleIndicators.visible = config['Show Angle Indicators']
  resultQubit.angleIndicators.visible = config['Show Angle Indicators']
  resultQubit.color = new THREE.Color(config['Result Arrow Color'])

  if (!animate) {
    qubitArrow.set(state)
    resultQubit.set(state.applyOperator(gate))
    pathDisplay.set(gate, state)
    operatorDisplay.set(gate)
    return
  }
  // first hide elements
  resultQubit.visible = false
  pathDisplay.visible = false

  qubitArrow.set(state, 300)
  await delay(300)
  // then show other elements
  resultQubit.set(state.applyOperator(gate))
  pathDisplay.set(gate, state)
  operatorDisplay.set(gate)
  resultQubit.visible = true
  pathDisplay.visible = true
}

gui.add(config, 'Randomize State')
gui.add(config, 'Gate Type', ['H', 'X', 'Y', 'Z']).onChange((value: string) => {
  switch (value) {
    case 'H':
      gate = gates.hadamard()
      break
    case 'X':
      gate = gates.x()
      break
    case 'Y':
      gate = gates.y()
      break
    case 'Z':
      gate = gates.z()
      break
  }
  operatorDisplay.label.text = value
  update()
})

const displayOptions = gui.addFolder('Display Options')
displayOptions.add(config, 'Show Axes').onChange(() => update())
displayOptions.add(config, 'Show Angle Indicators').onChange(() => update())
displayOptions.add(config, 'Show Operator Indicator').onChange(() => update())
displayOptions.add(config, 'Show Operator Path').onChange(() => update())

const resultOptions = gui.addFolder('Result Arrow')
resultOptions.addColor(config, 'Result Arrow Color').onChange(() => update())
