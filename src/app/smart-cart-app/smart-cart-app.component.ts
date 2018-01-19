import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-smart-cart-app',
  templateUrl: './smart-cart-app.component.html',
  styleUrls: ['./smart-cart-app.component.css']
})
export class SmartCartAppComponent implements OnInit {

  @Input() appPage = 'Welcome';
  @Output() appPageChange: EventEmitter<any> = new EventEmitter();

  @Input() preferences = [{desc:'Calories', value:5}, {desc:'Fat', value:5}, 
    {desc:'Cholesterol', value:5}, {desc:'Sodium', value:5}, {desc:'Fiber', value:5},
    {desc:'Sugar', value:5}, {desc:'Protein', value:5}];
  @Input() defaultPrefValues = [2.5, 5, 5, 1, 5, 5, 9];
  @Input() initPref = false;
  private preferenceArray;

  private products = [{brand:'Applegate Farms', size:'1 Frank', g:56, num:8, unit:'g',
      cal:110, fat:8, chol:30, sod:330, fiber:0, sugar:0, pro:7,
      cfat:80, sfat:3, tfat:0, carb:0, per:[12,15,'-',10,14,0,0,'-','-']},
    {brand:'Ball Park Franks', size:'1 Frank', g:57, unit:'g', num:8,
      cal:170, fat:15, chol:30, sod:540, fiber:0, sugar:0, pro:6,
      cfat:130, sfat:5, tfat:1, carb:3, per:[23,26,'-',11,23,1,0,'-','-']},
    {brand:'Hebrew National', size:'1 Frank', g:49, unit:'g', num:7,
      cal:150, fat:14, chol:25, sod:450, fiber:0, sugar:0, pro:6,
      cfat:130, sfat:6, tfat:0.5, carb:1, per:[22,30,'-',8,19,2,0,'-',10]},
    {brand:'Tomboy', size:'1 Link', g:75, unit:'g', num:6,
      cal:210, fat:18, chol:35, sod:760, fiber:0, sugar:3, pro:9,
      cfat:160, sfat:7, tfat:0, carb:3, per:[28,35,'-',12,32,1,0,'-','-']},
    {brand:'Nathan', size:'1 Link', g:57, unit:'g', num:8,
      cal:170, fat:33, chol:35, sod:470, fiber:0, sugar:0, pro:7,
      cfat:140, sfat:6, tfat:0, carb:1, per:[23,31,'-',11,20,0,0,'-','-']},
    {brand:'CP Hotdog', size:'1 Link', g:38, unit:'g', num:4,
      cal:90, fat:6, chol:25, sod:450, fiber:0, sugar:1, pro:5,
      cfat:54, sfat:1, tfat:0, carb:2, per:['-','-','-','-','-','-','-','-','-']}];
  private productArray;

  private selectedProduct = '';
  @Input() defaultProduct = 'Hebrew National';
  private checkoutProduct = '';
  @Input() defaultCheckout = 'Applegate Farms';

  @ViewChildren('prefSlider') prefSliders: QueryList<any>;

  private host;
  private workSpace;
  private nutrSpace;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    let self = this;
    self.host = d3.select(self.element.nativeElement).select('#smart-cart-app');
    
    self.preferenceArray = self.preferences.map(d=>{return d.desc});
    self.productArray = self.products.map(d=>{return d.brand});
    
    if (self.appPage=='Welcome') self.welcomeProcess();
    else if (self.appPage=='Shopping') self.setupShoppingPage();
    else if (self.appPage=='Suggestion') self.setupSuggestionPage();
    else if (self.appPage=='Summary') self.setupSummaryPage();
  }

  // Welcome page
  welcomeProcess() {
    let self = this;

    d3.timeout(()=>{
      if (this.appPage=='Welcome') {
        self.host.select('#welcome-line1').style('opacity', 1);
      }
    }, 800);
    d3.timeout(()=>{
      if (this.appPage=='Welcome') {
        self.host.select('#welcome-line2').style('opacity', 1);
      }
    }, 1600);
    d3.timeout(()=>{
      if (this.appPage=='Welcome') {
        self.host.select('#welcome-line1').style('opacity', 0);
        self.host.select('#welcome-line2').style('opacity', 0);
        self.host.select('#welcome-logo').style('opacity', 0);
      }
    }, 2600);
    d3.timeout(()=>{
      if (this.appPage=='Welcome') {
        self.appPage = 'Preference';
        self.appPageChange.emit(self.appPage);
      }
    }, 3800);
  }

  // Preference page
  changePreference(change) {
    let self = this;
    var index = self.preferenceArray.indexOf(change.desc);
    self.preferences[index].value = change.value;
  }
  confirmPreferences() {
    this.appPage = 'Shopping';
    this.setupShoppingPage();
    this.appPageChange.emit(this.appPage);
  }

  // Shopping page
  setupShoppingPage() {
    let self = this;
    self.selectedProduct = '';

    d3.timeout(()=>{
      var width = 1000, height = 470;
      var shoppingSpace = self.host.select('#shopping-page').select('svg')
            .attr('width', '100%').attr('opacity', 1)
            .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
            .attr('viewBox', '0 0 '+width+' '+height);
      self.workSpace = shoppingSpace.append('g').attr('id', 'work-space')
        .attr('font-family', 'Prompt').style('fill', '#0e0e0e');
      
      self.workSpace.append('text')
        .attr('text-anchor', 'middle').attr('font-size', 26)
        .attr('x', width/2).attr('y', 26)
        .html('Shop in this virtual shopping cart by picking a product. We will '+
          '<tspan style="fill:orange; font-weight:bold;">assist you</tspan>')
      self.workSpace.append('text')
        .attr('text-anchor', 'middle').attr('font-size', 26)
        .attr('x', width/2).attr('y', 58)
        .html('to get the best out of your shopping.');

      // Adding products for shopping
      var productSpace = self.workSpace.append('g').attr('id', 'product-space')
        .attr('transform', 'translate(2,'+(0.2*height)+')');
      var spaceW = 0.68*width/3, spaceH = (0.80*height-2)/2;
      var pSlots = productSpace.selectAll('g').data(self.products).enter().append('g')
        .attr('id', d=>{return self.brandToId(d.brand)})
        .attr('transform', (d,i)=>{
          var xPos = (i%3)*spaceW, yPos = Math.floor(i/3)*spaceH;
          return 'translate('+xPos+','+yPos+')';
        });
      pSlots.append('rect').attr('class', 'product-border')
        .style('fill', '#fffff0').style('stroke', '#0e0e0e').attr('stroke-width', 4)
        .attr('width', spaceW).attr('height', spaceH).attr('opacity', 0.8)
        .attr('cursor', 'pointer')
        .on('click', (d,i)=>{
          if (self.selectedProduct==d.brand) {
            self.selectedProduct = '';
            productSpace.selectAll('g').select('rect.product-border')
              .transition().duration(200).style('fill', '#fffff0');
            self.nutrSpace.transition().duration(200).attr('opacity', 0);
          } else {
            self.selectedProduct = d.brand;
            productSpace.selectAll('g').select('rect.product-border')
              .transition().duration(200)
                .style('fill', data=>{
                  if (data.brand==d.brand) return 'orange';
                  else return '#fffff0';
                });
            self.nutrSpace.transition().duration(200).attr('opacity', 1);
            self.makeNutritionFact();
          }
        });
      pSlots.append('text')
        .attr('text-anchor', 'middle').attr('font-size', 20)
        .attr('x', 0.5*spaceW).attr('y', 0.93*spaceH)
        .attr('pointer-events', 'none').attr('font-weight', 'bold')
        .text(d=>{return d.brand});
      pSlots.append('image')
        .attr('x', 0.12*spaceW).attr('y', 0.07*spaceH)
        .attr('width', 0.76*spaceW).attr('height', 0.76*spaceW*22/30)
        .attr('pointer-events', 'none')
        .attr('href', d=>{return 'assets/img/products/beef_hotdog/'+d.brand+'.jpg'});

      // Nutrition fact area
      self.workSpace.insert('rect', ':first-child')
        .attr('x', 0.68*width+2).attr('y', 0.2*height)
        .attr('width', 0.32*width-4).attr('height', 0.80*height-2)
        .attr('stroke-width', 4).style('stroke', '#0e0e0e')
        .style('fill', 'orange').attr('opacity', 0.8);
      self.workSpace.append('image')
        .attr('x', 0.75*width).attr('y', 0.41*height).attr('opacity', 0.8)
        .attr('width', 0.20*width).attr('height', 404/476*0.20*width)
        .attr('href', 'assets/img/icon/shopping_cart.png');

      // Nutrition fact space
      self.nutrSpace = self.workSpace.append('g').attr('id', 'nutrition-space')
        .attr('opacity', 0)
        .attr('transform', 'translate('+(0.70*width)+','+(0.2*height+0.02*width)+')');
      self.nutrSpace.append('rect')
        .attr('width', width*0.28).attr('height', height*0.8-0.04*width)
        .style('fill', '#fffff0').style('stroke', '#0e0e0e')
        .attr('stroke-width', 3);
    }, 100);
  }
  makeNutritionFact() {
    let self = this;
    var w = 1000*0.28, 
        h = 470*0.780-0.04*1000;

    if (self.selectedProduct != '') {
      var d = self.products[self.productArray.indexOf(self.selectedProduct)];
      var facts = [d.size+' ('+d.g+d.unit+')', d.num, d.cal, d.cfat, d.fat, d.sfat, 
        d.tfat, d.chol, d.sod, d.carb, d.fiber, d.sugar, d.pro];
      var per = d.per;

      // Generate text data
      var x1 = 0.05*w, x2 = 0.12*w, size1 = 12;
      var textData = [{x:w/2, y:0.09*h, weight:'bold', size:26, anchor:'middle', text:'Nutrition Facts'},
            {x:x1, y:0.17*h, weight:'', size:size1, anchor:'start', text:'Serving Size&emsp;'+facts[0]},
            {x:x1, y:0.22*h, weight:'', size:size1, anchor:'start', text:'Serving Per Container&emsp;'+facts[1]},
            {x:x1, y:0.30*h, weight:'bold', size:size1, anchor:'start', text:'Amount Per Serving'},
            {x:x1, y:0.35*h, weight:'', size:size1, anchor:'start', text:'Calories '+facts[2]},
            {x:w-x1, y:0.35*h, weight:'', size:size1, anchor:'end', text:'Calories From Fat '+facts[3]},
            {x:w-x1, y:0.41*h, weight:'bold', size:size1-1, anchor:'end', text:'% Daily Value'},
        {x:x1, y:0.48*h, weight:'bold', size:size1, anchor:'start', text:'Total Fat &nbsp;&nbsp;'+facts[4]+'g'},
        {x:w-x1, y:0.48*h, weight:'bold', size:size1, anchor:'end', text:per[0]+'%'},
        {x:x2, y:0.54*h, weight:'', size:size1, anchor:'start', text:'Saturated Fat &nbsp;&nbsp;'+facts[5]+'g'},
        {x:w-x1, y:0.54*h, weight:'', size:size1, anchor:'end', text:per[1]+'%'},
        {x:x2, y:0.60*h, weight:'', size:size1, anchor:'start', text:'Trans Fat &nbsp;&nbsp;'+facts[6]+'g'},
        // {x:w-x1, y:0.60*h, weight:'', size:size1, anchor:'end', text:per[2]+'%'},
            {x:x1, y:0.66*h, weight:'bold', size:size1, anchor:'start', text:'Cholesterol &nbsp;&nbsp;'+facts[7]+'mg'},
            {x:w-x1, y:0.66*h, weight:'bold', size:size1, anchor:'end', text:per[3]+'%'},
            {x:x1, y:0.72*h, weight:'bold', size:size1, anchor:'start', text:'Sodium &nbsp;&nbsp;'+facts[8]+'mg'},
            {x:w-x1, y:0.72*h, weight:'bold', size:size1, anchor:'end', text:per[4]+'%'},
        {x:x1, y:0.78*h, weight:'bold', size:size1, anchor:'start', text:'Total Carbohydrate &nbsp;&nbsp;'+facts[9]+'g'},
        {x:w-x1, y:0.78*h, weight:'bold', size:size1, anchor:'end', text:per[5]+'%'},
        {x:x2, y:0.84*h, weight:'', size:size1, anchor:'start', text:'Dietary Fiber &nbsp;&nbsp;'+facts[10]+'g'},
        {x:w-x1, y:0.84*h, weight:'', size:size1, anchor:'end', text:per[6]+'%'},
        {x:x2, y:0.90*h, weight:'', size:size1, anchor:'start', text:'Sugars &nbsp;&nbsp;'+facts[11]+'g'},
        // {x:w-x1, y:0.90*h, weight:'', size:size1, anchor:'end', text:per[7]+'%'},
            {x:x1, y:0.96*h, weight:'bold', size:size1, anchor:'start', text:'Protein &nbsp;&nbsp;'+facts[12]+'g'}];
            // {x:w-x1, y:0.96*h, weight:'bold', size:size1, anchor:'end', text:per[8]+'%'}];
      
      // Add texts
      var texts = self.nutrSpace.selectAll('text').data(textData);
      texts.attr('text-anchor', d=>{return d.anchor})
        .attr('font-size', d=>{return d.size})
        .attr('font-weight', d=>{return d.weight})
        .attr('x', d=>{return d.x}).attr('y', d=>{return d.y})
        .html(d=>{return d.text});
      texts.enter().append('text')
        .attr('text-anchor', d=>{return d.anchor})
        .attr('font-size', d=>{return d.size})
        .attr('font-weight', d=>{return d.weight})
        .attr('x', d=>{return d.x}).attr('y', d=>{return d.y})
        .html(d=>{return d.text});

      // Add lines
      var lineData = [{x1:x1, y:0.245*h, sw:5},
        {x1:x1, y:0.370*h, sw:2.5},
        {x1:x1, y:0.430*h, sw:1},
        {x1:x1, y:0.495*h, sw:1}, {x1:x1, y:0.555*h, sw:1}, {x1:x1, y:0.615*h, sw:1},
        {x1:x1, y:0.675*h, sw:1}, {x1:x1, y:0.735*h, sw:1}, {x1:x1, y:0.795*h, sw:1},
        {x1:x1, y:0.855*h, sw:1}, {x1:x1, y:0.915*h, sw:1}, {x1:x1, y:0.975*h, sw:1}];
      var lines = self.nutrSpace.selectAll('line').data(lineData);
      lines.attr('stroke-width', d=>{return d.sw})
        .attr('x1', d=>{return d.x1}).attr('x2', w-x1)
        .attr('y1', d=>{return d.y}).attr('y2', d=>{return d.y})
        .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
      lines.enter().append('line')
        .attr('stroke-width', d=>{return d.sw})
        .attr('x1', d=>{return d.x1}).attr('x2', w-x1)
        .attr('y1', d=>{return d.y}).attr('y2', d=>{return d.y})
        .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
    }
  }
  brandToId(brand) {
    return brand.replace(/ /g, '-');
  }

  // Suggestion page
  setupSuggestionPage() {
    let self = this;
    if (self.selectedProduct=='') self.selectedProduct = self.defaultProduct;
    self.checkoutProduct = self.selectedProduct;

    var smartCartStars = self.SmartCartStars(self.products),
        brandArray = smartCartStars.map(d=>{return d.brand});
    var notSmartCartStars = smartCartStars.filter(d=>{return d.brand!=self.selectedProduct}),
        notBrandArray = notSmartCartStars.map(d=>{return d.brand});
    
    d3.timeout(()=>{
      var width = 1000, height = 470;
      var suggestionSpace = self.host.select('#suggestion-page').select('svg')
            .attr('width', '100%').attr('opacity', 1)
            .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
            .attr('viewBox', '0 0 '+width+' '+height);
      self.workSpace = suggestionSpace.append('g').attr('id', 'work-space')
        .attr('font-family', 'Prompt').style('fill', '#0e0e0e');
      
      // Selected product
      var selectedW = 0.30*width, selectedH = height-4;
      var selectSpace = self.workSpace.append('g').attr('class', 'selected-product')
        .attr('transform', 'translate(2,2)');
      selectSpace.append('rect')
        .style('fill', '#fffff0').attr('opacity', 0.8)
        .style('stroke', '#0e0e0e').attr('stroke-width', 4)
        .attr('width', selectedW).attr('height', selectedH);
      selectSpace.append('image')
        .attr('x', 0.15*selectedW).attr('y', 0.26*selectedH)
        .attr('width', 0.7*selectedW).attr('height', 0.7*selectedH*22/30)
        .attr('href', 'assets/img/products/beef_hotdog/'+self.selectedProduct+'.jpg');
      selectSpace.append('image')
        .attr('x', 0.1*selectedW).attr('y', 0.82*selectedH)
        .attr('width', 0.8*selectedW).attr('height', 0.8*selectedH*239/1280)
        .attr('href', ()=>{
          var star = smartCartStars[brandArray.indexOf(self.selectedProduct)].star;
          return self.starImage(star);
        });
      selectSpace.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', 0.5*selectedW).attr('y', 0.80*selectedH)
        .attr('font-size', 24).attr('font-weight', 'bold')
        .text(self.selectedProduct);
      selectSpace.append('text')
        .style('fill', 'orange').attr('font-weight', 'bold')
        .attr('x', 0.5*selectedW).attr('y', 0.085*selectedH)
        .attr('font-size', 20).attr('text-anchor', 'middle')
        .text('This is your product choice,');
      selectSpace.append('text')
        .attr('x', 0.5*selectedW).attr('y', 0.145*selectedH)
        .attr('font-size', 20).attr('text-anchor', 'middle')
        .text('but please consider our');
      selectSpace.append('text')
        .attr('x', 0.5*selectedW).attr('y', 0.205*selectedH)
        .attr('font-size', 20).attr('text-anchor', 'middle')
        .text('suggestion on the side');
      selectSpace.append('text')
        .attr('x', 0.5*selectedW).attr('y', 0.265*selectedH)
        .attr('font-size', 20).attr('text-anchor', 'middle')
        .text('before you check out!');

      // Other products
      var nsW = (width-selectedW-4)/3, nsH = (0.85*height-2)/2;
      self.workSpace.append('text')
        .attr('text-anchor', 'middle').attr('font-weight', 'bold')
        .attr('x', selectedW+nsW*3/2).attr('y', 42)
        .attr('font-size', 42).style('fill', '#0e0e0e')
        .html('Smart Cart Suggestion');
      var nsSpace = self.workSpace.append('g').attr('class', 'not-selected-product')
        .attr('transform', 'translate('+(selectedW+2)+','+(0.15*height)+')');
      var nsProducts = nsSpace.selectAll('g').data(notSmartCartStars).enter().append('g')
        .attr('id', d=>{return self.brandToId(d.brand)})
        .attr('transform', function(d,i) {
          var xPos = (i%3)*nsW, yPos = Math.floor(i/3)*nsH;
          return 'translate('+xPos+','+yPos+')';
        });
      nsProducts.append('rect').attr('class', 'product-border')
        .attr('width', nsW).attr('height', nsH).attr('opacity', 0.8)
        .style('fill', '#fffff0').style('stroke', '#0e0e0e').attr('stroke-width', 4)
        .on('click', (d)=>{
          if (self.checkoutProduct==d.brand) {
            self.checkoutProduct = self.selectedProduct;
            nsSpace.selectAll('g').select('rect.product-border')
              .transition().duration(200).style('fill', '#fffff0');
          } else {
            self.checkoutProduct = d.brand;
            nsSpace.selectAll('g').select('rect.product-border')
              .transition().duration(200)
                .style('fill', data=>{
                  // if (data.brand==d.brand) return 'orange';
                  if (data.brand==d.brand) return 'steelBlue';
                  else return '#fffff0';
                });
          }
        });
      nsProducts.append('image')
        .attr('pointer-events', 'none')
        .attr('x', 0.15*nsW).attr('y', 0.78*nsH)
        .attr('width', 0.7*nsW).attr('height', 0.7*nsW*239/1280)
        .attr('href', d=>{return self.starImage(d.star)});
      nsProducts.append('text')
        .attr('pointer-events', 'none')
        .attr('text-anchor', 'middle').attr('font-weight', 'bold')
        .attr('x', 0.5*nsW).attr('y', 0.74*nsH).attr('font-size', 18)
        .text(d=>{return d.brand});
      nsProducts.append('image')
        .attr('pointer-events', 'none')
        .attr('x', 0.2*nsW).attr('y', 0.07*nsH)
        .attr('width', 0.6*nsW).attr('height', 0.6*nsW*22/30)
        .attr('href', d=>{return 'assets/img/products/beef_hotdog/'+d.brand+'.jpg'});

      // Cart logo
      self.workSpace.append('image')
        .attr('x', 0.82*width).attr('y', 0.67*height).attr('opacity', 0.85)
        .attr('width', 0.15*width).attr('height', 404/476*0.15*width)
        .attr('href', 'assets/img/icon/shopping_cart.png');
    }, 100);
  }
  SmartCartStars(allProducts) {
    let self = this;

    var cal = allProducts.map(d=>{return d.cal/d.g});
    var calScale = d3.scaleLinear().domain([0, d3.max(cal)]).range([0, 1]);

    var fat = allProducts.map(d=>{return d.fat/d.g});
    var fatScale = d3.scaleLinear().domain([0, d3.max(fat)]).range([0, 1]);

    var chol = allProducts.map(d=>{return d.chol/d.g});
    var cholScale = d3.scaleLinear().domain([0, d3.max(chol)]).range([0, 1]);

    var sod = allProducts.map(d=>{return d.sod/d.g});
    var sodScale = d3.scaleLinear().domain([0, d3.max(sod)]).range([0, 1]);

    var fiber = allProducts.map(d=>{return d.fiber/d.g});
    var fiberScale = d3.scaleLinear().domain([0, d3.max(fiber)]).range([0, 1]);

    var sugar = allProducts.map(d=>{return d.sugar/d.g});
    var sugarScale = d3.scaleLinear().domain([0, d3.max(sugar)]).range([0, 1]);

    var pro = allProducts.map(d=>{return d.pro/d.g});
    var proScale = d3.scaleLinear().domain([0, d3.max(pro)]).range([0, 1]);

    var scoreArray = new Array(allProducts.length);
    for (var i=0; i<allProducts.length; i++) {
      var d = allProducts[i];
      scoreArray[i] = {
        brand:d.brand,
        star:(self.preferences[self.preferenceArray.indexOf('Calories')].value-5)*calScale(d.cal/d.g)
          + (self.preferences[self.preferenceArray.indexOf('Fat')].value-5)*fatScale(d.fat/d.g)
          + (self.preferences[self.preferenceArray.indexOf('Cholesterol')].value-5)*cholScale(d.chol/d.g)
          + (self.preferences[self.preferenceArray.indexOf('Sodium')].value-5)*sodScale(d.sod/d.g)
          + (self.preferences[self.preferenceArray.indexOf('Fiber')].value-5)*fiberScale(d.fiber/d.g)
          + (self.preferences[self.preferenceArray.indexOf('Sugar')].value-5)*sugarScale(d.sugar/d.g)
          + (self.preferences[self.preferenceArray.indexOf('Protein')].value-5)*proScale(d.pro/d.g)
      };
    }

    var sMin = d3.min(scoreArray.map(d=>{return d.star})),
        sMax = d3.max(scoreArray.map(d=>{return d.star}));

    if (sMin == sMax) {
      scoreArray.map(d=>{d.star = 5});
      return scoreArray;
    } else {
      var stareScale = d3.scaleLinear().domain([sMin, sMax]).range([1, 5]);
      scoreArray.map(d=>{d.star = stareScale(d.star)});
      scoreArray.sort((a, b)=>{
        if (a.star < b.star) return 1;
        else return 0;
      });
      return scoreArray;
    }
  }
  starImage(star) {
    if (star < 1.25) return 'assets/img/icon/star10.png';
    else if (star < 1.75) return 'assets/img/icon/star15.png';
    else if (star < 2.25) return 'assets/img/icon/star20.png';
    else if (star < 2.75) return 'assets/img/icon/star25.png';
    else if (star < 3.25) return 'assets/img/icon/star30.png';
    else if (star < 3.75) return 'assets/img/icon/star35.png';
    else if (star < 4.25) return 'assets/img/icon/star40.png';
    else if (star < 4.75) return 'assets/img/icon/star45.png';
    else return 'assets/img/icon/star50.png';
  }
  confirmProduct() {
    this.checkoutProduct = this.selectedProduct;
    this.appPage = 'Summary';
    this.setupSummaryPage();
    this.appPageChange.emit(this.appPage);
  }
  changeProduct() {
    this.appPage = 'Summary';
    this.setupSummaryPage();
    this.appPageChange.emit(this.appPage);
  }

  // Summary page
  setupSummaryPage() {
    let self = this;
    if (self.selectedProduct=='') self.selectedProduct = self.defaultProduct;
    if (self.checkoutProduct=='') self.checkoutProduct = self.defaultCheckout;

    var smartCartStars = self.SmartCartStars(self.products),
        brandArray = smartCartStars.map(d=>{return d.brand});
    var oldStar = smartCartStars[brandArray.indexOf(self.selectedProduct)].star,
        newStar = smartCartStars[brandArray.indexOf(self.checkoutProduct)].star;
    
    d3.timeout(()=>{
      var width = 1000, height = 470;
      var summarySpace = self.host.select('#summary-page').select('svg')
            .attr('width', '100%').attr('opacity', 1)
            .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
            .attr('viewBox', '0 0 '+width+' '+height);
      self.workSpace = summarySpace.append('g').attr('id', 'work-space')
        .attr('font-family', 'Prompt').style('fill', '#0e0e0e');

      // Left side information
      self.workSpace.append('text')
        .attr('text-anchor', 'middle').attr('font-weight', 'bold')
        .attr('font-size', 34)
        .attr('x', 0.26*width).attr('y', 0.1*height)
        .html('Your Shopping Choices');
      self.workSpace.append('image')
        .attr('x', 0.225*width).attr('y', 0.275*height)
        .attr('width', 0.08*width).attr('height', 0.08*width*179/254)
        .attr('href', 'assets/img/icon/full_arrow_right.png');
      self.workSpace.append('rect')
        .attr('x', 0.04*width).attr('y', 0.225*height)
        .attr('width', 0.16*width).attr('height', 0.16*width*22/30)
        .attr('stroke-width', 4).style('stroke', '#0e0e0e')
        .style('fill', 'white');
      self.workSpace.append('image')
        .attr('x', 0.04*width).attr('y', 0.225*height)
        .attr('width', 0.16*width).attr('height', 0.16*width*22/30)
        .attr('href', 'assets/img/products/beef_hotdog/'+self.selectedProduct+'.jpg');
      self.workSpace.append('rect')
        .attr('x', 0.32*width).attr('y', 0.225*height)
        .attr('width', 0.16*width).attr('height', 0.16*width*22/30)
        .attr('stroke-width', 4).style('stroke', '#0e0e0e')
        .style('fill', 'white');
      self.workSpace.append('image')
        .attr('x', 0.32*width).attr('y', 0.225*height)
        .attr('width', 0.16*width).attr('height', 0.16*width*22/30)
        .attr('href', 'assets/img/products/beef_hotdog/'+self.checkoutProduct+'.jpg');
      self.workSpace.append('text')
        .attr('text-anchor', 'middle').attr('font-weight', 'bold')
        .attr('font-size', 42).style('fill', 'orange')
        .attr('x', 0.26*width).attr('y', 0.94*height)
        .html('Thank You!');

      var y0 = 0.68*height, yyPad1 = 0.07*height, ts1 = 26;
      if (self.selectedProduct==self.checkoutProduct && oldStar>=4.75) {
        self.workSpace.append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', ts1)
          .attr('x', 0.26*width).attr('y', y0)
          .html('Your choice is already the best one');
        self.workSpace.append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', ts1)
          .attr('x', 0.26*width).attr('y', y0+yyPad1)
            .html('for your personal need!');
      } else if (oldStar < newStar) {
        self.workSpace.append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', ts1)
          .attr('x', 0.26*width).attr('y', y0)
          .html('You improve your choice for your');
        self.workSpace.append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', ts1)
          .attr('x', 0.26*width).attr('y', y0+yyPad1)
          .html('personal need with Smart Cart!');
      } else {
        self.workSpace.append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', ts1)
          .attr('x', 0.26*width).attr('y', y0)
          .html('You can still improve the shopping');
        self.workSpace.append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', ts1)
          .attr('x', 0.26*width).attr('y', y0+yyPad1)
          .html('choice for your personal needs');
      }
      self.workSpace.insert('rect', ':first-child')
        .attr('x', 2).attr('y', 0.58*height)
        .attr('width', 0.52*width-4).attr('height', 0.42*height-2)
        .style('fill', '#fffff0').attr('opacity', 0.8)
        .style('stroke', '#0e0e0e').attr('stroke-width', 4)

      // Make summary chart
      self.makeSummaryChart(width, height);
    }, 100);
  }
  makeSummaryChart(width, height) {
    let self = this;

    var ssW = 0.46*width-4, ssH = height-4,
        pad1 = 0.05*ssW;
    var sumSpace = self.workSpace.append('g').attr('id', 'summary-chart')
      .attr('transform', 'translate('+(0.54*width)+', 2)')
      .attr('font-family', 'Prompt').style('fill', '#0e0e0e');
    sumSpace.append('rect')
      .attr('width', ssW).attr('height', ssH)
      .attr('stroke-width', 4).style('stroke', '#0e0e0e')
      .style('fill', '#fffff0').attr('opacity', 0.8);
    sumSpace.append('text')
      .attr('text-anchor', 'middle').attr('font-weight', 'bold')
      .attr('font-size', 32)
      .attr('x', 0.5*ssW).attr('y', 0.10*ssH)
      .text('Shopping Summary');
    sumSpace.append('text')
      .attr('font-size', 20)
      .attr('x', pad1).attr('y', 0.20*ssH)
      .html('Base on your shopping choice, for every');
    sumSpace.append('text')
      .attr('font-size', 20)
      .attr('x', pad1).attr('y', 0.27*ssH)
      .html('<tspan font-weight="bold" style="fill:orange;">100g</tspan>'
        +' of products you consume, you can...');
    sumSpace.append('line')
      .attr('stroke-width', 8)
      .attr('x1', pad1).attr('x2', ssW-pad1)
      .attr('y1', 0.32*ssH).attr('y2', 0.32*ssH)
      .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');

    // Calculate nutrition changes
    var a = self.products.filter(d=>{return d.brand==self.selectedProduct})[0], 
        b = self.products.filter(d=>{return d.brand==self.checkoutProduct})[0];
    var nutrChanges = [{desc:'Calories', unit:'', change:Math.round((b.cal/b.g-a.cal/a.g)*1000)/100},
                      {desc:'Cholesterol', unit:'mg', change:Math.round((b.chol/b.g-a.chol/a.g)*1000)/100},
                      {desc:'Fat', unit:'g', change:Math.round((b.fat/b.g-a.fat/a.g)*1000)/100},
                      {desc:'Fiber', unit:'g', change:Math.round((b.fiber/b.g-a.fiber/a.g)*1000)/100},
                      {desc:'Sodium', unit:'mg', change:Math.round((b.sod/b.g-a.sod/a.g)*1000)/100},
                      {desc:'Sugar', unit:'g', change:Math.round((b.sugar/b.g-a.sugar/a.g)*1000)/100},
                      {desc:'Protein', unit:'g', change:Math.round((b.pro/b.g-a.pro/a.g)*1000)/100}];
    var nutrUp = nutrChanges.filter(d=>{return d.change>0}),
        nutrDown = nutrChanges.filter(d=>{return d.change<0});
    var upLength = nutrUp.length, 
        downLength = nutrDown.length;

    // Printing nutrition changes
    var pos = 0, ts1 = 20,
        y1 = 0.40*ssH, yPad1 = 0.065*ssH,
        x1 = 0.13*ssW, x2 = 0.23*ssW, x3 = 0.72*ssW, x4 = 0.75*ssW;
    if (upLength>0 && downLength>0) {
      // Text headers
      sumSpace.append('text')
        .attr('font-size', ts1).attr('font-weight', 'bold')
        .attr('x', x1).attr('y', y1)
        .text('Increase');
      sumSpace.append('line')
        .attr('stroke-width', 3)
        .attr('x1', pad1).attr('x2', ssW-pad1)
        .attr('y1', y1+yPad1*upLength+0.36*yPad1)
        .attr('y2', y1+yPad1*upLength+0.36*yPad1)
        .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
      sumSpace.append('text')
        .attr('font-size', ts1).attr('font-weight', 'bold')
        .attr('x', x1).attr('y', y1+1.2*yPad1+yPad1*upLength)
        .text('Reduce');
      sumSpace.append('line')
        .attr('stroke-width', 3)
        .attr('x1', pad1).attr('x2', ssW-pad1)
        .attr('y1', y1+1.2*yPad1+yPad1*(upLength+downLength)+0.36*yPad1)
        .attr('y2', y1+1.2*yPad1+yPad1*(upLength+downLength)+0.36*yPad1)
        .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');

      // Change detail
      while (pos < upLength) {
        var color = '#0e0e0e', weight = 'normal';
        if (self.preferences[self.preferenceArray.indexOf(nutrUp[pos].desc)].value>6) {
          color = 'orange'; weight = 'bold';
        }

        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x2).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrUp[pos].desc);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('text-anchor', 'end')
          .attr('x', x3).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrUp[pos].change);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x4).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrUp[pos].unit);
        pos++;
      }
      while (pos-upLength < downLength) {
        var color = '#0e0e0e', weight = 'normal';
        if (self.preferences[self.preferenceArray.indexOf(nutrDown[pos-upLength].desc)].value<3) {
          color = 'orange'; weight = 'bold';
        }

        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x2).attr('y', y1+2.2*yPad1+yPad1*pos)
          .text(nutrDown[pos-upLength].desc);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('text-anchor', 'end')
          .attr('x', x3).attr('y', y1+2.2*yPad1+yPad1*pos)
          .text(-nutrDown[pos-upLength].change);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x4).attr('y', y1+2.2*yPad1+yPad1*pos)
          .text(nutrDown[pos-upLength].unit);
        pos++;
      }
    } else if (upLength>0) {
      sumSpace.append('text')
        .attr('font-size', ts1).attr('font-weight', 'bold')
        .attr('x', x1).attr('y', y1)
        .text('Increase');
      sumSpace.append('line')
        .attr('stroke-width', 3)
        .attr('x1', pad1).attr('x2', ssW-pad1)
        .attr('y1', y1+yPad1*upLength+0.36*yPad1)
        .attr('y2', y1+yPad1*upLength+0.36*yPad1)
        .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');

      while (pos < upLength) {
        var color = '#0e0e0e', weight = 'normal';
        if (self.preferences[self.preferenceArray.indexOf(nutrUp[pos].desc)].value>6) {
          color = 'orange'; weight = 'bold';
        }

        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x2).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrUp[pos].desc);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('text-anchor', 'end')
          .attr('x', x3).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrUp[pos].change);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x4).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrUp[pos].unit);
        pos++;
      }
    } else if (downLength>0) {
      sumSpace.append('text')
        .attr('font-size', ts1).attr('font-weight', 'bold')
        .attr('x', x1).attr('y', y1)
        .text('Reduce');
      sumSpace.append('line')
        .attr('stroke-width', 3)
        .attr('x1', pad1).attr('x2', ssW-pad1)
        .attr('y1', y1+1.2*yPad1+yPad1*(downLength-1)+0.36*yPad1)
        .attr('y2', y1+1.2*yPad1+yPad1*(downLength-1)+0.36*yPad1)
        .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');

      while (pos < downLength) {
        var color = '#0e0e0e', weight = 'normal';
        if (self.preferences[self.preferenceArray.indexOf(nutrDown[pos])].value<3) {
          color = 'steelBlue'; weight = 'bold';
        }

        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x2).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrDown[pos].desc);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('text-anchor', 'end')
          .attr('x', x3).attr('y', y1+yPad1+yPad1*pos)
          .text(-nutrDown[pos].change);
        sumSpace.append('text')
          .style('fill', color).attr('font-weight', weight)
          .attr('font-size', ts1).attr('x', x4).attr('y', y1+yPad1+yPad1*pos)
          .text(nutrDown[pos].unit);
        pos++;
      }
    } else {
      sumSpace.append('text')
        .attr('font-size', 24).attr('font-weight', 'bold')
        .attr('x', 0.5*ssW).attr('y', y1+2*yPad1).attr('text-anchor', 'middle')
        .text('Nothing Changes');
    }
  }
  backToShoppingPage() {
    this.appPage = 'Shopping';
    this.setupShoppingPage();
    this.appPageChange.emit(this.appPage);
  }
  backToPreferencePage() {
    this.appPage = 'Preference';
    this.appPageChange.emit(this.appPage);
  }

  // Page change functionalities
  appNextPage() {
    let self = this;
    if (self.appPage=='Preference') {
      if (!self.initPref) {
        self.initPref = true;
        self.preferences.map((d,i)=>{d.value = self.defaultPrefValues[i]});
        var components = self.prefSliders.toArray();
        for (var i=0; i<components.length; i++) {
          components[i].selectedValue = self.defaultPrefValues[i];
          components[i].updateSliderValue();
        }
      } else {
        self.appPage = 'Shopping';
        self.setupShoppingPage();
      }
    } else if (self.appPage=='Shopping') {
      if (self.selectedProduct == '') {
        self.selectedProduct = self.defaultProduct;
        self.workSpace.select('g#product-space')
          .select('g#'+self.brandToId(self.selectedProduct))
          .select('rect.product-border')
            .style('fill', d=>{
              self.nutrSpace.transition().duration(200).attr('opacity', 1);
              self.makeNutritionFact();
              return 'orange';
            });
      } else {
        self.appPage = 'Suggestion';
        self.setupSuggestionPage();
      }
    } else if (self.appPage=='Suggestion') {
      if (self.checkoutProduct == self.selectedProduct) {
        self.checkoutProduct = self.defaultCheckout;
        self.workSpace.select('g.not-selected-product')
          .select('g#'+self.brandToId(self.checkoutProduct))
          .select('rect.product-border')
            // .style('fill', 'orange');
            .style('fill', 'steelBlue');
      } else {
        self.appPage = 'Summary';
        self.setupSummaryPage();
      }
    }

    self.appPageChange.emit(self.appPage);
  }
  appPreviousPage() {
    let self = this;
    if (self.appPage=='Preference') {
      self.appPage = 'Welcome';
      self.welcomeProcess();
    } else if (self.appPage=='Shopping') {
      self.appPage = 'Preference';
    } else if (self.appPage=='Suggestion') {
      self.appPage = 'Shopping';
      self.setupShoppingPage();
    } else if (self.appPage=='Summary') {
      self.appPage = 'Suggestion';
      self.setupSuggestionPage();
    }

    self.appPageChange.emit(self.appPage);
  }

}
