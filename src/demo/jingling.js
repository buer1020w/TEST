import *as THREE from 'three';


const vertices = new Float32Array( [
	-10.0, 10.0,  10.0,
	 10.0, -10.0,  10.0,
	 10.0,  10.0,  10.0,
     -10.0,  10.0,  10.0,

] );
const sphere=new THREE.SphereGeometry(50)
const cube=new THREE.BoxGeometry(100,100,100,10,10,10)
console.log('sphere-->',sphere)
console.log('cube-->',cube)

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position',cube.getAttribute('position'));

const material = new THREE.PointsMaterial( { 
    color: 0xff0000 ,
    size:1,
    transparent:true
} );
// 创建Points粒子系统
const points = new THREE.Points(geometry, material);

export default points

