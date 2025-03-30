import * as THREE from 'three'
import { BlochVector } from '../math/bloch-vector'

const MAX_POINTS = 100

function sortRegionPoints(regionPoints: THREE.Vector3[]) {
  // Compute average normal
  let avgNormal = new THREE.Vector3()
  regionPoints.forEach((p) => avgNormal.add(p))
  avgNormal.normalize()

  // Choose a reference axis (x-axis in the tangent plane)
  let ref = new THREE.Vector3(1, 0, 0)
  if (Math.abs(avgNormal.dot(ref)) > 0.9) ref.set(0, 1, 0) // Avoid parallel case
  let tangentX = new THREE.Vector3().crossVectors(avgNormal, ref).normalize()
  let tangentY = new THREE.Vector3()
    .crossVectors(avgNormal, tangentX)
    .normalize()

  // Compute polar angles and sort
  regionPoints.sort((a: THREE.Vector3, b: THREE.Vector3) => {
    let angleA = Math.atan2(a.dot(tangentY), a.dot(tangentX))
    let angleB = Math.atan2(b.dot(tangentY), b.dot(tangentX))
    return angleA - angleB
  })

  return regionPoints
}

function getRegionPoints(region: BlochVector[]) {
  const points = []
  for (const v of region) {
    points.push(v)
  }
  // sort the points
  const sortedPoints = sortRegionPoints(points)
  // fill with rest of the points
  for (let i = region.length; i < MAX_POINTS; i++) {
    sortedPoints.push(new THREE.Vector3(0, 0, 0))
  }
  return sortedPoints
}

export class SphericalPolygonMaterial extends THREE.ShaderMaterial {
  region: BlochVector[]

  constructor(region: BlochVector[] = []) {
    super({
      uniforms: {
        regionPoints: { value: getRegionPoints(region) },
        numPoints: { value: region.length },
        highlightColor: {
          value: new THREE.Color(0xff0000).convertLinearToSRGB(),
        },
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vPosition = normalize(worldPosition.xyz); // Ensure it's on the sphere
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 regionPoints[${MAX_POINTS}];
        uniform int numPoints;
        uniform vec3 highlightColor;
        varying vec3 vPosition;

        // Checks if point p is inside the spherical polygon defined by regionPoints
        bool insideRegion(vec3 p) {
            int winding = 0;
            vec3 averageNormal = vec3(0.0);

            for (int i = 0; i < numPoints; i++) {
                vec3 a = normalize(regionPoints[i]);
                vec3 b = normalize(regionPoints[(i + 1) % numPoints]);

                // Compute cross product and accumulate for average normal
                vec3 edgeNormal = cross(a, b);
                averageNormal += edgeNormal;

                if (dot(edgeNormal, p) > 0.0) {
                    winding += 1;
                } else {
                    winding -= 1;
                }
            }

            // Normalize to get the true average normal
            averageNormal = normalize(averageNormal);

            // Ensure point p is in the same hemisphere as averageNormal
            bool isCorrectHemisphere = dot(averageNormal, p) > 0.0;

            return abs(winding) == numPoints && isCorrectHemisphere;
        }

        void main() {
          if (insideRegion(vPosition)) {
            gl_FragColor = vec4(highlightColor, 1.0);
          } else {
            discard;
          }
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    })

    this.region = region
  }

  get highlightColor() {
    return this.uniforms.highlightColor.value
  }

  set highlightColor(color: THREE.ColorRepresentation) {
    this.uniforms.highlightColor.value = new THREE.Color(
      color
    ).convertLinearToSRGB()
  }

  setRegion(region: BlochVector[]) {
    this.region = region
    this.uniforms.regionPoints.value = getRegionPoints(region)
    this.uniforms.numPoints.value = region.length
  }
}
