import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import * as THREE from 'three';
// declare var THREE: any;


@Component({
  selector: 'app-interactive-globe-abs',
  templateUrl: './interactive-globe-abs.component.html',
  styleUrls: ['./interactive-globe-abs.component.css']
})
export class InteractiveGlobeAbsComponent implements OnInit {

  private host;
  private spec: Spec;
  private windowSize; // { w, h }
  private animRotateTo = {
    bool: false,
    counter: 0,
    newRotate: null,
    lastRotate: null
  };

  @Input() globeResources;
  private jsonWorld;
  private countries;
  private geoObject;
  private capitalObj;  

  private play = true;
  private scene;  
  private camera;

  private particleScene;
  private particleCamera;
  private particleCenter;
  private particles = [];

  private staticScene;
  private staticCamera;
  
  private renderer;
  private countryTexture;
  private globe;
  private frames = 0;

  constructor(
    private element: ElementRef
  ) {
    this.host = this.element.nativeElement;
    this.windowSize = {
      w: window.innerWidth,
      h: window.innerHeight
    };
  }

  ngOnInit() {
    this.play = true;
    this.setupVariable();
    this.setupThreeMainObjects();
    this.setupParticleObjects();
    this.setupStaticObjects();
    this.setupThreeObjects();
  }

  // Setup
  setupVariable() {
    let self = this;

    self.spec = {
      r: 50, 
      mapR: 50.1,
      segments: 128,
      mapProjection: d3.geoEquirectangular().translate([512, 256]).scale(163),
      rayR: 104*Math.tan(Math.PI/6)
    };
  }
  setupThreeMainObjects() {
    let self = this;

    // Setup scene
    self.scene = new THREE.Scene();
    // self.scene.background = new THREE.Color('#141414');

    // Setup camera
    self.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    self.updateCameraPosition();
    self.scene.add(self.camera);

    var light1 = new THREE.HemisphereLight('#ffffff', '#666666', 0.5);
    light1.position.set(40, 40, 100);
    self.camera.add(light1);
    var light2 = new THREE.DirectionalLight('#fffff0', 1);
    light2.position.set(200, 200, 100);
    self.camera.add(light2);

    // Setup renderer
    self.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    self.renderer.setSize(window.innerWidth, window.innerHeight, true);
    self.renderer.autoClear = false;
    self.renderer.clear();
    self.renderer.clearDepth();
    self.renderer.shadowMapEnabled	= true;
    // self.renderer.setClearColor('black', 1);
    self.host.appendChild(self.renderer.domElement);
  }
  setupParticleObjects() {
    let self = this;

    // Particle scene
    self.particleScene = new THREE.Scene();
    self.particleScene.fog = new THREE.FogExp2('#141414', 0.003);

    // Particle camera
    self.particleCamera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    self.updateParticleCameraPosition();
    var light1 = new THREE.HemisphereLight('#ffffff', '#666666', 0.5);
    light1.position.set(40, 40, 1000);
    self.particleCamera.add(light1);
    var light2 = new THREE.DirectionalLight('#fffff0', 1);
    light2.position.set(200, 200, 1000);
    self.particleCamera.add(light2);
    self.particleScene.add(self.particleCamera);

    // Setup particle center
    self.particleCenter = new THREE.Object3D;
    self.particleScene.add(self.particleCenter);

    var material = new THREE.MeshBasicMaterial({
      color: '#67caed',
      transparent: true
    });
    var pi = Math.PI;
     
    // Near particles need animation update
    for ( var i = 0; i < 250; i ++ ) {
      var k = 0.25*Math.random()+0.01,
          geometry = new THREE.BoxGeometry(k, k, k);
      var tempMaterial = material.clone();
      tempMaterial.opacity = 0.8;
      var mesh = new THREE.Mesh(geometry, tempMaterial);
      var r = self.spec.r + 30*Math.random(), 
          a1 = 2*Math.random() - 1, 
          a2 = 2*Math.random() - 1;
      mesh.position.x = r * Math.sin(a1*pi) * Math.cos(a2*pi);
      mesh.position.y = r * Math.sin(a1*pi) * Math.sin(a2*pi);
      mesh.position.z = r * Math.cos(a1*pi);
      mesh.matrixAutoUpdate  = true;
      mesh.updateMatrix();
      self.particleCenter.add(mesh);
      // self.particleScene.add(mesh);
      if (Math.random()>0.2) self.particles.push(mesh);
    }

    // Far particles static 
    for ( var i = 0; i < 600; i ++ ) {
      var k = 1.8*Math.random()+0.8,
          geometry = new THREE.BoxGeometry(k, k, k);
      var tempMaterial = material.clone();
      tempMaterial.opacity = 0.6*Math.random()+0.4;
      var mesh = new THREE.Mesh(geometry, tempMaterial);
      var rf = 300 + 200*Math.random(), 
          a1 = 2*Math.random() - 1, 
          a2 = 2*Math.random() - 1;
      mesh.position.x = rf * Math.sin(a1*pi) * Math.cos(a2*pi);
      mesh.position.y = rf * Math.sin(a1*pi) * Math.sin(a2*pi);
      mesh.position.z = rf * Math.cos(a1*pi);
      mesh.matrixAutoUpdate  = false;
      mesh.updateMatrix();
      self.particleCenter.add(mesh);
      // self.particleScene.add(mesh);
    }
  }
  setupStaticObjects() {
    let self = this;

    var loader = new THREE.TextureLoader();
    loader.load(self.globeResources.bg, bgTexture=>{
      var bgMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2, 0),
          new THREE.MeshBasicMaterial({
          map: bgTexture
        })
      );
      bgMesh.material.depthTest = false;
      bgMesh.material.depthWrite = false;
     
      self.staticScene = new THREE.Scene();
      self.staticCamera = new THREE.Camera();
      // self.staticCamera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
      // var light = new THREE.DirectionalLight('#ffffff', 0.5);
      // light.position.set(0, 0, 900);
      // self.staticCamera.add(light);

      self.staticScene.add(self.staticCamera);
      self.staticScene.add(bgMesh);
    });
  }

  setupThreeObjects() {
    let self = this;

    var globeGeometry = new THREE.SphereGeometry(
      self.spec.r, self.spec.segments, self.spec.segments
    );
    var globeMaterial = new THREE.MeshPhongMaterial({
      shininess: 8,
      side: THREE.DoubleSide,
      opacity: 1,
      transparent: true
    });
    // globeMaterial.side = THREE.FrontSide;

    // Instantiate a loader for adding material detail
    var loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    // Add texture
    loader.load(self.globeResources.texture, texture=>{
      loader.load(self.globeResources.bump, bump=>{
        loader.load(self.globeResources.light, lightmap=>{
          
          globeMaterial.map = texture;
          globeMaterial.bumpMap = bump;
          globeMaterial.bumpScale = 4;
          globeMaterial.lightMap = lightmap;
          // globeMaterial.wireframe = true;

          // loader.load(self.globeResources.specular, specular=>{
          //   globeMaterial.specularMap = specular;
          //   globeMaterial.specular = new THREE.Color('grey');
          // });

          self.setupGlobe(globeGeometry, globeMaterial);
    
        });
      });
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
    // self.setupPopulationBarchart();
    self.setupGlobeSelectedCountry('United States');

    self.animate();
  }

  setupGlobeSelectedCountry(country=null) {
    let self = this;

    // Add map information
    d3.json(self.globeResources.world, data=>{
      var temp = topojson.feature(data, data.objects.countries);
      self.geoObject = self.geoDecoder(temp.features);
      self.countries = temp.features.map(d=>{return d.id.trim()}).sort();

      // Globe with map data
      var mapGlobeGeometry = new THREE.SphereGeometry(
        self.spec.mapR, self.spec.segments, self.spec.segments
      );
      var mapGlobeMaterial;
      if (country === null) {
        mapGlobeMaterial = new THREE.MeshPhongMaterial({
          map: self.allCountriesMap(), 
          transparent: true,
          side: THREE.DoubleSide,
          opacity: 0.85
        });
      } else {
        mapGlobeMaterial = new THREE.MeshPhongMaterial({
          map: self.selectedCountryTexture(country, 'steelBlue'), 
          transparent: true,
          side: THREE.DoubleSide,
          opacity: 0.85
        });
      }
      
      self.countryTexture = new THREE.Mesh(mapGlobeGeometry, mapGlobeMaterial);
      self.countryTexture.rotation.y = Math.PI**0.996;
      self.countryTexture.rotation.x = -Math.PI*0.005;
      self.globe.add(self.countryTexture);
    });
  }
  setupAtmosphere() {
    let self = this;

    var loader = new THREE.TextureLoader();
    loader.crossOrigin = '';
    loader.load(self.globeResources.cloud, cloudTexture=>{
      var atGeometry = new THREE.SphereGeometry(
        self.spec.r*1.3, self.spec.segments, self.spec.segments
      );
      var atMaterial = new THREE.MeshPhongMaterial({
        map: cloudTexture, 
        transparent: true,
        opacity: 0.04,
        side: THREE.DoubleSide
      });
      var atmosphere = new THREE.Mesh(atGeometry, atMaterial);
      // self.particleScene.add(atmosphere);
      // self.particleCenter.add(atmosphere);

      // Add glowing effect
      var glowMaterial = new THREE.ShaderMaterial({
        uniforms: { 
            'c': { type: 'f', value: 0.45 },
            'p': { type: 'f', value: 4 },
            glowColor: { type: 'c', value: new THREE.Color(0x38a4e2) },
            viewVector: { type: 'v3', value: self.camera.position }
          },
          vertexShader: `uniform vec3 viewVector;
          uniform float c;
          uniform float p;
          varying float intensity;
          void main() 
          {
              vec3 vNormal = normalize( normalMatrix * normal );
              vec3 vNormel = normalize( normalMatrix * viewVector );
              intensity = pow( c - dot(vNormal, vNormel), p );
              
              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }`,
          fragmentShader: `uniform vec3 glowColor;
          varying float intensity;
          void main() 
          {
              vec3 glow = glowColor * intensity;
              gl_FragColor = vec4( glow, 1.0 );
          }`,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          transparent: true
      });
      var glowGeometry = new THREE.SphereGeometry(
        self.spec.r*1.4, self.spec.segments, self.spec.segments
      );
      var glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      self.scene.add(glowMesh);
    });
  }

  setupPopulationBarchart() {
    let self = this;

    self.capitalObj = [];
    d3.json(self.globeResources.worldCapitals, capitals=>{
      var capitalArray = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'China',
        'Denmark', 'France', 'Germany', 'Greece', 'Iceland', 'Ireland', 'Italy', 'Japan', 
        'South Korea', 'Mexico', 'Norway', 'Portugal', 'Russia', 'Singapore', 'Spain', 
        'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Arab Emirates', 
        'United Kingdom', 'United States'];
      var focusCapitals = capitals.filter(d=>{
        return capitalArray.indexOf(d.CountryName) > -1;
      });

      for (var i=0; i<focusCapitals.length; i++) { 
        self.addOneCapital(focusCapitals[i]); 
      }
    });
  }
  addOneCapital(d) {
    let self = this;

    var rScaleTemp = 1,
        position = self.latLongToVector3(Number(d.CapitalLatitude),
        Number(d.CapitalLongitude), rScaleTemp*self.spec.r);

    var material = new THREE.MeshPhongMaterial({color: 0x00ff00}),
        geometry = new THREE.BoxGeometry(1, 1, 5); 

    var capital = new THREE.Mesh(geometry, material);
    capital.position.set(position.x, position.y, position.z);
    capital.lookAt(new THREE.Vector3(0,0,0));

    // Add attributes
    capital.name = d.CountryName;

    self.globe.add(capital);
    self.capitalObj.push(capital);
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
      if (!self.animRotateTo.bool) {
        self.globe.rotation.y += 0.002;
        self.particleCenter.rotation.y += 0.003;
      } else {
        self.animMoveTo();
      }

      // self.frames += 1;
      // if (self.frames%5 == 0) {
      //   self.frames = 0;
        self.animateParticles();
      // }
               
      self.renderer.autoClear = false;
      self.renderer.clear();
      self.renderer.render(self.staticScene, self.staticCamera);
      self.renderer.render(self.scene, self.camera);
      self.renderer.render(self.particleScene, self.particleCamera);
    }
  }
  animateParticles() {
    let self = this;

    for (var i=0; i<self.particles.length; i++) {
      var k = 1.25*Math.random()+0.25,
          obj = self.particles[i];
      obj.scale.x = k;
      obj.scale.y = k;
      obj.scale.z = k;
    }
  }
  animMoveTo() {
    let self = this;
    var maxSmooth = 60;
    self.animRotateTo.counter++;

    var xChange = self.animRotateTo.newRotate.x - self.animRotateTo.lastRotate.x,
        yChange = self.animRotateTo.newRotate.y - self.animRotateTo.lastRotate.y,
        zChange = self.animRotateTo.newRotate.z - self.animRotateTo.lastRotate.z;
    // var factor = (self.animRotateTo.counter/maxSmooth)**2;
    var factor = Math.sin(Math.PI/2*self.animRotateTo.counter/maxSmooth);

    if (self.animRotateTo.counter <= maxSmooth) {
      // self.globe.rotation.x += xChange/maxSmooth;
      // self.globe.rotation.y += yChange/maxSmooth;
      // self.globe.rotation.z += zChange/maxSmooth;
      // self.particleCenter.rotation.x += xChange/maxSmooth*1.2;
      // self.particleCenter.rotation.y += yChange/maxSmooth*1.2;
      // self.particleCenter.rotation.z += zChange/maxSmooth*1.2;
      self.globe.rotation.x = self.animRotateTo.lastRotate.x + xChange*factor;
      self.globe.rotation.y = self.animRotateTo.lastRotate.y + yChange*factor;
      self.globe.rotation.z = self.animRotateTo.lastRotate.z + zChange*factor;
      self.particleCenter.rotation.x = self.animRotateTo.lastRotate.x + xChange*1.2*factor;
      self.particleCenter.rotation.y = self.animRotateTo.lastRotate.y + yChange*1.2*factor;
      self.particleCenter.rotation.z = self.animRotateTo.lastRotate.z + zChange*1.2*factor;
    } else if (self.animRotateTo.counter > 1.75*maxSmooth) {
      self.animRotateTo = {
        bool: false,
        counter: 0,
        newRotate: null,
        lastRotate: null
      };
    }
  }
  beginMoveTo() {
    let self = this;
    self.animRotateTo = {
      bool: true,
      counter: 0,
      newRotate: new THREE.Euler(0.75, 3.324, 0, 'XYZ'),
      lastRotate: self.globe.rotation.clone()
    };
  }
  beginMoveTo2(latlon) {
    let self = this;

    var phi = latlon[0]*Math.PI/180;
    var theta = latlon[1]*Math.PI/180 + Math.PI*3/2;

    var xF = self.spec.mapR * Math.cos(phi) * Math.sin(theta);
    var yF = self.spec.mapR * Math.sin(phi);
    var zF = self.spec.mapR * Math.cos(phi) * Math.cos(theta);
    var vF = new THREE.Vector3(xF, yF, zF);
    vF.normalize();

    self.animRotateTo = {
      bool: true,
      counter: 0,
      newRotate: self.centerRotation(vF),
      lastRotate: self.globe.rotation.clone()
    };
  }

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
    if (window.innerWidth < 900) {
      self.camera.position.z = 104 + (900-window.innerWidth)/4;
    } else {
      self.camera.position.z = 104;
    }    
  }
  updateParticleCameraPosition() {
    let self = this;

    self.particleCamera.aspect = window.innerWidth/window.innerHeight;
    if (window.innerWidth < 900) {
      self.particleCamera.position.z = 104 + (900-window.innerWidth)/4;
    } else {
      self.particleCamera.position.z = 104;
    }
  }

  // Functions
  geoDecoder(features) {
    var store = {};
    for (var i = 0; i < features.length; i++) {
      store[features[i].id] = features[i];
    }
  
    return {
      find: function (id) { return store[id]; },
      search: function (lat, lng) {
        var match = false,
            country, coords;
  
        for (let i = 0; i < features.length; i++) {
          country = features[i];
          if (country.geometry.type === 'Polygon') {
            match = this.pointInPolygon(country.geometry.coordinates[0], [lng, lat]);
            if (match) {
              return {
                code: features[i].id,
                name: features[i].properties.name
              };
            }
          } else if (country.geometry.type === 'MultiPolygon') {
            coords = country.geometry.coordinates;
            for (let j = 0; j < coords.length; j++) {
              match = this.pointInPolygon(coords[j][0], [lng, lat]);
              if (match) {
                return {
                  code: features[i].id,
                  name: features[i].properties.name
                };
              }
            }
          }
        }
  
        return null;
      }
    };
  }
  pointInPolygon(poly, point) {
    let x = point[0];
    let y = point[1];
  
    let inside = false, xi, xj, yi, yj, xk;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      xi = poly[i][0];
      yi = poly[i][1];
      xj = poly[j][0];
      yj = poly[j][1];
  
      xk = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (xk) { inside = !inside; }
    }
  
    return inside;
  }

  selectedCountryTexture(countryId, color) {
    let self = this;
    var countryPath = self.geoObject.find(countryId);
    return self.selectedCountryMap(countryPath, color);
  }
  selectedCountryMap(countryPath, color) {
    let self = this;

    var canvasTemp = d3.select(self.host).append('canvas')
                          .style('display', 'none')
                          .attr('width', 1024)
                          .attr('height', 512);
    var contextTemp = canvasTemp.node().getContext('2d');
    var path = d3.geoPath()
        .projection(self.spec.mapProjection)
        .context(contextTemp);
  
    contextTemp.strokeStyle = 'steelBlue';
    contextTemp.lineWidth = 1;
    contextTemp.fillStyle = color || 'steelBlue';
  
    contextTemp.beginPath();
    path(countryPath);
    contextTemp.fill();
    contextTemp.stroke();
  
    var globeDataTexture = new THREE.Texture(canvasTemp.node());
    globeDataTexture.needsUpdate = true;
    canvasTemp.remove();
  
    return globeDataTexture;
  }
  allCountriesMap() {
    let self = this;
    
    var canvasTemp = d3.select(self.host).append('canvas')
                          .style('display', 'none')
                          .attr('width', 1024)
                          .attr('height', 512);
    var contextTemp = canvasTemp.node().getContext('2d');
    var path = d3.geoPath()
        .projection(self.spec.mapProjection)
        .context(contextTemp);
  
    contextTemp.strokeStyle = 'steelBlue';
    contextTemp.lineWidth = 1;
    contextTemp.fillStyle = 'rgba(0, 0, 200, 0)';
  
    contextTemp.beginPath();
    for (var i=0; i<self.countries.length; i++) {
      path(self.geoObject.find(self.countries[i]));
    }
    contextTemp.fill();
    contextTemp.stroke();
  
    var globeDataTexture = new THREE.Texture(canvasTemp.node());
    globeDataTexture.needsUpdate = true;
    canvasTemp.remove();
  
    return globeDataTexture;
  }

  // Country select rotate to the capital
  chooseCountry(country) {
    let self = this;
    if (country != 'None') {
      var latlon;
      if (country == 'Thailand') latlon = [13.75, 100.516667];
      else if (country == 'United States') latlon = [38.883333, -77];
      else if (country == 'China') latlon = [39.916666666666664, 116.383333];

      self.updateSelectedCountry(country);
      self.beginMoveTo2(latlon);
    }
  }
  updateSelectedCountry(country) {
    let self = this;
    self.countryTexture.material = new THREE.MeshPhongMaterial({
      map: self.selectedCountryTexture(country, 'steelBlue'), 
      transparent: true,
      side: THREE.DoubleSide
    });
  }
  centerRotation(vector) {
    let self = this;
    var z = new THREE.Vector3(0, 0, 1);
    var q = new THREE.Quaternion();
    q.setFromUnitVectors(vector, z);
    
    var tempObj = new THREE.Object3D();
    tempObj.copy(self.globe, false);
    tempObj.setRotationFromQuaternion(q);
    
    return tempObj.rotation;
  }

  latLongToVector3(lat, lon, radius) {
    var phi = lat*Math.PI / 180;
    var theta = lon*Math.PI/180 + Math.PI*3/2;

    var x = radius * Math.cos(phi) * Math.cos(theta);
    var y = radius * Math.sin(phi);
    var z = radius * Math.cos(phi) * Math.sin(theta);

    return new THREE.Vector3(x,y,z);
  }

  // Destroy
  ngOnDestroy() {
    let self = this;
    self.play = false;

    self.animRotateTo = null;
    self.capitalObj = [];

    self.scene = null;  
    self.camera = null;

    self.particleScene = null;
    self.particleCamera = null;
    self.particleCenter = null;
    self.particles = [];

    self.staticScene = null;
    self.staticCamera = null;

    self.renderer = null;
    self.countryTexture = null;
    self.globe = null;
    self.frames = 0;
  }

}

interface Spec {
  r, mapR,
  segments,
  mapProjection,
  rayR
}
