import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';
import * as THREE from 'three';

@Component({
  selector: 'app-interactive-globe-half',
  templateUrl: './interactive-globe-half.component.html',
  styleUrls: ['./interactive-globe-half.component.css']
})
export class InteractiveGlobeHalfComponent implements OnInit {

  private host;
  private spec: Spec;
  private windowSize; // { w, h }

  @Input() globeResources;
  private play = false;
  private scene;  
  private camera;

  private particleScene;
  private particleCamera;
  private particleCenter;
  private particles = [];
  
  private frames = 0;
  private renderer;
  private globe;

  constructor(private element: ElementRef) {
    this.windowSize = {
      w: window.innerWidth,
      h: window.innerHeight
    };
  }

  ngOnInit() {
    this.play = true;
    this.host = d3.select(this.element.nativeElement);

    this.setupVariable();
    this.setupThreeMainObjects();
    this.setupParticleObjects();
    this.setupThreeObjects();
  }

  setupVariable() {
    let self = this;

    self.spec = {
      r: 1400,
      segments: 64
    };
  }
  setupThreeMainObjects() {
    let self = this;

    // Setup scene
    self.scene = new THREE.Scene();

    // Setup camera
    self.camera = new THREE.OrthographicCamera( 
      window.innerWidth/-2, window.innerWidth/2, 
      window.innerHeight/2, window.innerHeight/-2, 
      1, 1000
    );
    self.updateCameraPosition();
    self.scene.add(self.camera);

    // Setup renderer
    self.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    self.renderer.setSize(window.innerWidth, window.innerHeight, true);
    self.renderer.autoClear = false;
    self.renderer.clear();
    self.renderer.clearDepth();
    self.renderer.shadowMapEnabled	= true;
    // self.renderer.setClearColor('black', 1);

    self.element.nativeElement.querySelector('#world-container')
      .appendChild(self.renderer.domElement);
  }
  setupParticleObjects() {
    let self = this;

    // Particle scene
    self.particleScene = new THREE.Scene();
    self.particleScene.fog = new THREE.FogExp2('#141414', 0.003);

    // Particle camera
    self.particleCamera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    self.updateParticleCameraPosition();
    self.particleScene.add(self.particleCamera);

    // Setup particle center
    self.particleCenter = new THREE.Object3D;
    self.particleScene.add(self.particleCenter);

    var material = new THREE.MeshBasicMaterial({
      color: '#b3e1ff',
      transparent: true
    });
    var pi = Math.PI;

    // Far particles static 
    for ( var i = 0; i < 600; i ++ ) {
      var k = 2*Math.random()+0.5,
          geometry = new THREE.BoxGeometry(k, k, k);
      var tempMaterial = material.clone();
      tempMaterial.opacity = 0.6*Math.random()+0.4;
      var mesh = new THREE.Mesh(geometry, tempMaterial);
      var rf = 160 + 300*Math.random(), // 160 - 460
          a1 = 2*Math.random() - 1, 
          a2 = 2*Math.random() - 1;
      mesh.position.x = rf * Math.sin(a1*pi) * Math.cos(a2*pi);
      mesh.position.y = rf * Math.sin(a1*pi) * Math.sin(a2*pi);
      mesh.position.z = rf * Math.cos(a1*pi);
      mesh.matrixAutoUpdate  = false;
      mesh.updateMatrix();
      self.particleCenter.add(mesh);
      
      if (i%10==0) self.particles.push(mesh);
    }
  }
  setupThreeObjects() {
    let self = this;

    var globeGeometry = new THREE.SphereGeometry(
      self.spec.r, self.spec.segments, self.spec.segments
    );
    var globeMaterial = new THREE.MeshBasicMaterial({});

    // Instantiate a loader for adding material detail
    var loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    // Add texture
    loader.load(self.globeResources.texture2, texture=>{
      globeMaterial.map = texture;
      self.setupGlobe(globeGeometry, globeMaterial);
    });
  }
  setupGlobe(globeGeometry, globeMaterial) {
    let self = this;

    var innerGlobe = new THREE.Mesh(globeGeometry, globeMaterial);
    innerGlobe.rotation.y = Math.PI;
    self.globe = new THREE.Object3D();
    self.globe.add(innerGlobe);
    self.scene.add(self.globe);
    // self.globe.rotation.y = Math.PI*1.25;
    // self.globe.rotation.x += Math.PI/5;

    self.setupAtmosphere();
    self.animate();
    d3.timeout(()=>{
      self.host.select('#world-halo').style('opacity', 0.6)
    }, 1200);
  }

  setupAtmosphere() {
    let self = this;

  }
  createAtmosphereMaterial() {
    var vertexShader  = [
      'varying vec3 vNormal;',
      'void main(){',
      '   // compute intensity',
      '   vNormal     = normalize( normalMatrix * normal );',
      '   // set gl_Position',
      '   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
      '}',
    ].join('\n');
    var fragmentShader  = [
      'uniform float coeficient;',
      'uniform float power;',
      'uniform vec3  glowColor;',
      'varying vec3  vNormal;',
      'void main(){',
      '   float intensity = pow( coeficient - dot(vNormal, vec3(0.0, 0.0, 1.0)), power );',
      '   gl_FragColor    = vec4( glowColor * intensity, 1.0 );',
      '}',
    ].join('\n');

    // create custom material from the shader code above
    var material = new THREE.ShaderMaterial({
      uniforms: {
        coeficient: {
          type: 'f',
          value: 0.45
        },
        power: {
          type: 'f',
          value: 0
        },
        glowColor: {
          type: 'c',
          value: new THREE.Color(0x38a4e2)
        },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });

    return material;
  }

  // Animation update
  animate() {
    let self = this;
    if (self.play) {
      requestAnimationFrame(()=>self.animate());

      if (self.windowSize.w!=window.innerWidth || self.windowSize.h!=window.innerHeight) {
        self.windowSize.w = window.innerWidth;
        self.windowSize.h = window.innerHeight;
        self.updateOnResizing();
      }

      // Rotation update
      self.globe.rotation.x += 0.004;
      self.particleCenter.rotation.x += 0.005;

      // self.frames += 1;
      // if (self.frames%5 == 0) {
      //   self.frames = 0;
      //   self.animateParticles();
      // }
               
      self.renderer.autoClear = false;
      self.renderer.clear();
      self.renderer.render(self.scene, self.camera);
      self.renderer.render(self.particleScene, self.particleCamera);
    }
  }
  animateParticles() {
    let self = this;
    
    for (var i=0; i<self.particles.length; i++) {
      var obj = self.particles[i];
      obj.rotation._y += 5;
      obj.rotation._x += 5;
    }
  }

  // Cameras
  updateOnResizing() {
    let self = this;
    
    self.updateCameraPosition();
    self.camera.updateProjectionMatrix();
    self.updateParticleCameraPosition();
    self.particleCamera.updateProjectionMatrix();
    
    self.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  updateCameraPosition() {
    let self = this;
    self.camera.aspect = window.innerWidth/window.innerHeight;
    self.camera.left = window.innerWidth/-2;
    self.camera.right = window.innerWidth/2;
    self.camera.top = window.innerHeight/2;
    self.camera.bottom = window.innerHeight/-2; 
    self.camera.position.z = 1450;
    self.camera.position.y = 1500;
  }
  updateParticleCameraPosition() {
    let self = this;
    self.particleCamera.aspect = window.innerWidth/window.innerHeight;
    self.particleCamera.position.z = 100;
    self.particleCamera.position.y = 120;
  }

  // Destroy
  ngOnDestroy() {
    let self = this;
    self.play = false;
    self.scene = null;  
    self.camera = null;

    self.particleScene = null;
    self.particleCamera = null;
    self.particleCenter = null;
    self.particles = [];
    
    self.frames = 0;
    self.renderer = null;
    self.globe = null;
  }

}

interface Spec {
  r,
  segments
}
