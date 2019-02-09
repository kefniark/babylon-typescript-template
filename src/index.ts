// use modern es6 import for tree shaking
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';

// create canvas
const canvas = document.createElement('canvas');
canvas.id = 'renderCanvas';
canvas.width = 1280;
canvas.height = 720;
canvas.style.position = 'absolute';
canvas.style.border = '1px solid';

// append body
const body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);

// create scene
const engine: Engine = new Engine(canvas, true);

// upscale 16:9 based on width and center verticaly
canvas.style.width = '100vw';
canvas.style.height = '56.25vw';
canvas.style.top = '50vh';
canvas.style.marginTop = '-28.125vw';
canvas.style.userSelect = 'none';
canvas.style.outline = 'none';
document.body.style.margin = '0px';
document.body.style.backgroundColor = 'black';

// babylon scene
function createScene (): Scene {
	const scene = new Scene(engine);

	const camera = new ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
	camera.attachControl(canvas, true);

	const light = new HemisphericLight('light1', new Vector3(1, 1, 0), scene);

	const sphere: Mesh = MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene);
	sphere.material = new StandardMaterial('mat', scene);

	return scene;
}

// start render loop
const defaultScene = createScene();

engine.runRenderLoop(() => {
	defaultScene.render();
});
