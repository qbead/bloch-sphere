import * as THREE from 'three'
// import { Text } from 'troika-three-text'
import {
  CSS2DRenderer,
  CSS2DObject,
} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { Qubit } from './qubit'

const GRID_DIVISIONS = 36

// 3D Bloch Sphere Widget
// Embeddable widget with configuration options for color, transparency,
// size, viewport size. And ability to plot: arrows describing state,
// surface areas, surface point-clouds, surface trajectories.
// API to allow for programatic access, including camera motion, camera control.

export class BlochSphere {
  renderer!: THREE.WebGLRenderer
  cssRenderer!: CSS2DRenderer
  scene!: THREE.Scene
  camera!: THREE.OrthographicCamera
  sphere!: THREE.Object3D
  grids!: THREE.Object3D
  arrow!: THREE.ArrowHelper
  controls!: OrbitControls
  el!: HTMLElement

  constructor() {
    this.initRenderer()
    this.initScene()
    this.initLabels()
  }

  private initRenderer() {
    this.el = document.createElement('div')
    this.el.innerHTML = `
      <style>
        .axis-label {
          line-height: 1;
          display: inline-block;
          color: var(--label-color, white);
          text-align: center;
          font-size: 24px;
          font-family: monospace;
        }
        .axis-label::before {
          content: '';
          border: solid var(--label-color, white);
          border-width: 0 0 0 3px;
          display: inline-block;
          padding: 0.4em;
          transform: scale(0.6, 1.55) translate(0.6em, 0.036em);
        }
        .axis-label::after {
          content: '';
          border: solid var(--label-color, white);
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 0.4em;
          transform: scaleX(0.6) translate(-0.4em, 0.1em) rotate(-45deg);
        }
      </style>
    `
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(200, 200)
    this.el.appendChild(this.renderer.domElement)

    this.cssRenderer = new CSS2DRenderer()
    this.cssRenderer.setSize(200, 200)
    this.cssRenderer.domElement.style.position = 'absolute'
    this.cssRenderer.domElement.style.top = '0'
    this.cssRenderer.domElement.style.pointerEvents = 'none'
    this.cssRenderer.domElement.style.zIndex = '1'
    this.el.appendChild(this.cssRenderer.domElement)
  }

  private initScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x111111)
    this.scene.fog = new THREE.Fog(0x111111, 14.5, 17)
    // this.scene.fog = new THREE.FogExp2(0x111111, 0.03)

    this.camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 50)
    this.camera.position.set(10, 10, 5)
    this.camera.up.set(0, 0, 1)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(1, 1, 1)
    this.scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040)
    this.scene.add(ambientLight)

    this.sphere = new THREE.Group()
    this.grids = new THREE.Group()
    this.sphere.add(this.grids)

    const edges = new THREE.EdgesGeometry(
      new THREE.SphereGeometry(1, GRID_DIVISIONS, GRID_DIVISIONS),
      0.5
    )
    const grid = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({
        // color: 0xdd9900,
        color: 0x000000,
        transparent: true,
        opacity: 0.35,
        linewidth: 1,
      })
    )
    grid.rotation.x = Math.PI / 2
    this.grids.add(grid)

    // inner sphere
    const innerSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.995, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x443322,
        transparent: true,
        opacity: 0.55,
        side: THREE.BackSide,
      })
    )
    innerSphere.rotation.x = Math.PI / 2

    const polarGrid = new THREE.PolarGridHelper(
      1,
      GRID_DIVISIONS,
      2,
      64,
      0x000000,
      0x000000
    )
    polarGrid.rotation.x = Math.PI / 2
    polarGrid.position.z = 0.001
    this.grids.add(polarGrid)

    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(1, 64),
      new THREE.MeshBasicMaterial({
        color: 0x443322,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55,
      })
    )
    this.sphere.add(disc)

    const axes = new THREE.AxesHelper(1.25)
    axes.position.set(0, 0, 0.001)
    // disable depth test so they are always rendered on top
    // @ts-ignore
    axes.material.depthFunc = THREE.AlwaysDepth
    this.sphere.add(axes)
    // add the inverse axes
    const inverseAxes = new THREE.AxesHelper(1.25)
    // colors become CMY
    inverseAxes.setColors(0x00ffff, 0xff00ff, 0xffff00)
    inverseAxes.position.set(0, 0, -0.001)
    inverseAxes.scale.set(-1, -1, -1)
    // disable depth test so they are always rendered on top
    // @ts-ignore
    inverseAxes.material.depthFunc = THREE.AlwaysDepth
    this.sphere.add(inverseAxes)

    // axes labels
    // const xLabel = new Text()
    // xLabel.text = 'X'
    // xLabel.fontSize = 0.2
    // xLabel.position.set(1.25, 0, 0)
    // xLabel.anchorX = 'center'
    // xLabel.anchorY = 'middle'
    // xLabel.textAlign = 'center'
    // xLabel.rotation.set(0, Math.PI / 2, 0)
    // xLabel.sync()
    // this.sphere.add(xLabel)

    this.arrow = new THREE.ArrowHelper(
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, 0),
      1,
      0xffffff,
      0.1,
      0.05
    )

    this.sphere.add(this.arrow)
    this.sphere.add(innerSphere)
    this.scene.add(this.sphere)
  }

  private initLabels() {
    const labels = [
      {
        text: '0',
        position: new THREE.Vector3(0, 0, 1),
        color: new THREE.Color(0x0000ff),
      },
      {
        text: '1',
        position: new THREE.Vector3(0, 0, -1),
        color: new THREE.Color(0xffff00),
      },
      {
        text: '+',
        position: new THREE.Vector3(1, 0, 0),
        color: new THREE.Color(0xff0000),
      },
      {
        text: '-',
        position: new THREE.Vector3(-1, 0, 0),
        color: new THREE.Color(0x00ffff),
      },
      {
        text: '+i',
        position: new THREE.Vector3(0, 1, 0),
        color: new THREE.Color(0x00ff00),
      },
      {
        text: '-i',
        position: new THREE.Vector3(0, -1, 0),
        color: new THREE.Color(0xff00ff),
      },
    ]

    labels.forEach((label) => {
      const el = document.createElement('label')
      el.className = 'axis-label'
      el.textContent = label.text
      const color = label.color
        .offsetHSL(0, -0.1, -0.3)
        .getStyle(THREE.LinearSRGBColorSpace)
      el.setAttribute('style', `--label-color: ${color}`)
      const obj = new CSS2DObject(el)
      obj.position.copy(label.position).multiplyScalar(1.35)
      this.sphere.add(obj)
    })
  }

  get showGrid() {
    return this.grids.visible
  }

  set showGrid(value: boolean) {
    this.grids.visible = value
  }

  setState(q: Qubit) {
    this.arrow.setDirection(q.vector3())
  }

  scale(size: number) {
    this.sphere.scale.set(size, size, size)
  }

  attach(parent?: HTMLElement) {
    parent = parent ?? document.body
    parent.appendChild(this.el)
    this.resize()
    this.start()
  }

  resize(width?: number, height?: number) {
    width = width ?? this.el.parentElement?.clientWidth ?? 200
    height = height ?? this.el.parentElement?.clientHeight ?? 200
    let aspect = height / width
    this.renderer.setSize(width, height)
    this.cssRenderer.setSize(width, height)
    this.camera.top = 2 * aspect
    this.camera.bottom = -2 * aspect
    this.camera.updateProjectionMatrix()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
    this.cssRenderer.render(this.scene, this.camera)
    this.controls.update()
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.render()
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null)
  }

  dispose() {
    this.stop()
    this.renderer.dispose()
    this.el.remove()
    this.scene.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()
        child.material.dispose()
      }
    })
  }
}
