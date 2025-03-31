import * as THREE from 'three'
import { Label } from './components/label'
import { defaultColors } from './colors'

export const BlockSphereSceneOptions = {
  backgroundColor: defaultColors.background,
  gridColor: defaultColors.grid,
  gridDivisions: 36 / 3,
  sphereSkinColor: defaultColors.blochSphereSkin,
  sphereSkinOpacity: 0.55,
}

/**
 * A scene for the Bloch sphere which extends the THREE.Scene class
 */
export class BlochSphereScene extends THREE.Scene {
  sphere: THREE.Group
  grids: THREE.Group
  axes: THREE.Group
  labels: Record<string, Label> = {}
  plotStage: THREE.Group = new THREE.Group()

  constructor(options?: Partial<typeof BlockSphereSceneOptions>) {
    options = Object.assign(
      {},
      BlockSphereSceneOptions,
      options
    ) as typeof BlockSphereSceneOptions
    super()
    this.background = new THREE.Color(options.backgroundColor!)
    this.fog = new THREE.Fog(options.backgroundColor!, 14.5, 17)
    // this.fog = new THREE.FogExp2(0x111111, 0.03)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(1, 1, 1)
    this.add(light)

    // const ambientLight = new THREE.AmbientLight(0x404040)
    // this.add(ambientLight)

    this.sphere = new THREE.Group()
    this.grids = new THREE.Group()
    this.sphere.add(this.grids)

    const edges = new THREE.EdgesGeometry(
      new THREE.SphereGeometry(1, options.gridDivisions, options.gridDivisions),
      0.5
    )
    const grid = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({
        // color: 0xdd9900,
        color: options.gridColor,
        transparent: true,
        opacity: 0.35,
        linewidth: 1,
      })
    )
    grid.rotation.x = Math.PI / 2
    grid.name = 'grid'
    this.grids.add(grid)

    const polarGrid = new THREE.PolarGridHelper(
      0.98,
      options.gridDivisions,
      2,
      64,
      options.gridColor,
      options.gridColor
    )
    polarGrid.rotation.x = Math.PI / 2
    polarGrid.position.z = 0.001
    polarGrid.name = 'polar-grid'
    this.grids.add(polarGrid)

    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.98, 64),
      new THREE.MeshBasicMaterial({
        color: options.sphereSkinColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: options.sphereSkinOpacity,
      })
    )
    this.sphere.add(disc)

    const sphereSkin = new THREE.Mesh(
      new THREE.SphereGeometry(0.995, 32, 32),
      new THREE.MeshBasicMaterial({
        color: options.sphereSkinColor,
        transparent: true,
        opacity: options.sphereSkinOpacity,
        side: THREE.BackSide,
      })
    )
    // sphereSkin.material.depthWrite = false
    sphereSkin.rotation.x = Math.PI / 2
    this.sphere.add(sphereSkin)

    this.axes = new THREE.Group()
    this.sphere.add(this.axes)
    const axes = new THREE.AxesHelper(1.25)
    axes.position.set(0, 0, 0.001)
    axes.setColors(
      defaultColors.axisXPlus,
      defaultColors.axisYPlus,
      defaultColors.axisZPlus
    )
    // disable depth test so they are always rendered on top
    // @ts-ignore
    axes.material.depthFunc = THREE.AlwaysDepth
    this.axes.add(axes)
    // add the inverse axes
    const inverseAxes = new THREE.AxesHelper(1.25)
    // colors become CMY
    inverseAxes.setColors(
      defaultColors.axisXMinus,
      defaultColors.axisYMinus,
      defaultColors.axisZMinus
    )
    // inverseAxes.setColors(0x00ffff, 0xff00ff, 0xffff00)
    inverseAxes.position.set(0, 0, -0.001)
    inverseAxes.scale.set(-1, -1, -1)
    // disable depth test so they are always rendered on top
    // @ts-ignore
    inverseAxes.material.depthFunc = THREE.AlwaysDepth
    this.axes.add(inverseAxes)

    this.sphere.add(this.plotStage)
    this.add(this.sphere)

    this.initLabels()
    this.backgroundColor = options.backgroundColor!
  }

  get backgroundColor(): THREE.Color {
    return this.background! as THREE.Color
  }

  set backgroundColor(color: THREE.ColorRepresentation) {
    this.background = new THREE.Color(color)
    this.fog!.color = new THREE.Color(color)
  }

  private initLabels() {
    const labels = [
      {
        id: 'zero',
        text: '0',
        position: new THREE.Vector3(0, 0, 1),
        // color: new THREE.Color(0x0000ff),
        color: new THREE.Color(defaultColors.axisZPlus),
        type: 'axis-label',
      },
      {
        id: 'one',
        text: '1',
        position: new THREE.Vector3(0, 0, -1),
        // color: new THREE.Color(0xffff00),
        color: new THREE.Color(defaultColors.axisZMinus),
        type: 'axis-label',
      },
      {
        id: 'plus',
        text: '+',
        position: new THREE.Vector3(1, 0, 0),
        // color: new THREE.Color(0xff0000),
        color: new THREE.Color(defaultColors.axisXPlus),
        type: 'axis-label',
      },
      {
        id: 'minus',
        text: '-',
        position: new THREE.Vector3(-1, 0, 0),
        // color: new THREE.Color(0x00ffff),
        color: new THREE.Color(defaultColors.axisXMinus),
        type: 'axis-label',
      },
      {
        id: 'i',
        text: '+i',
        position: new THREE.Vector3(0, 1, 0),
        // color: new THREE.Color(0x00ff00),
        color: new THREE.Color(defaultColors.axisYPlus),
        type: 'axis-label',
      },
      {
        id: 'minus-i',
        text: '-i',
        position: new THREE.Vector3(0, -1, 0),
        // color: new THREE.Color(0xff00ff),
        color: new THREE.Color(defaultColors.axisYMinus),
        type: 'axis-label',
      },
    ]

    labels.forEach((label) => {
      const l = new Label(label.text, label.type)
      const color = label.color //.offsetHSL(0, -0.1, -0.3)
      l.position.copy(label.position).multiplyScalar(1.35)
      l.color = color
      this.labels[label.id] = l
      this.axes.add(l)
    })
  }

  clearPlot() {
    this.plotStage.traverse((child) => {
      if (child instanceof Label) {
        child.destroy()
      }
    })
    this.plotStage.clear()
  }
}
