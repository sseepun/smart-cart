import { Component, Input, enableProdMode, ViewChild } from '@angular/core';
import { ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private isFullScreen = false;
  private pageArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  private pageDisplay = ['intro','population','statistic','sale','problem','survey', 'solution', 
    'bd ml', 'smart cart', 'mana', 'manee', 'result', 'future', 'thanks', 'references'];
  private page = 0;

  private host;
  private stage = 0;

  @ViewChild('introPage') introPage; // 0
  @ViewChild('globe') globe; // 1
  @ViewChild('usaStatisticPage') usaStatisticPage; // 2
  @ViewChild('grocerySale') grocerySale; // 3
  @ViewChild('problemPage') problemPage; // 4
  @ViewChild('surveyPage') surveyPage; // 5
  @ViewChild('solutionPage') solutionPage; // 6
  @ViewChild('smartCartPage') smartCartPage; // 8
  @ViewChild('personaMana') personaMana; // 9
  @ViewChild('personaManee') personaManee; // 10
  @ViewChild('thanks') thanks; // 13

  // Resource path cross origin problems
  private resources;
  
  constructor(private element: ElementRef) { }

  ngOnInit() {
    let self = this;
    self.host = d3.select(self.element.nativeElement);

    // Key change page
    self.keyChangePage();
    
    // Resources cross origin
    if (navigator.onLine) {
      self.resources = {
        bg: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/bg.jpg',
        texture: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_texture_4.jpg',
        bump: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_bump_map.jpg',
        specular: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_specular_map.jpg',
        light: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_light_map.jpg',
        cloud: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/cloud_3.jpg',
        world: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/json/world.json',
        worldCapitals: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/json/world-capitals.json',
        mapUSA: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/json/usa-map.json',
        particleFile: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/json/particles.json'
      };
    } else {
      self.resources = {
        bg: 'assets/img/globe/bg.jpg',
        texture: 'assets/img/globe/earth_texture_4.jpg',
        bump: 'assets/img/globe/earth_bump_map.jpg',
        specular: 'assets/img/globe/earth_specular_map.jpg',
        light: 'assets/img/globe/earth_light_map.jpg',
        cloud: 'assets/img/globe/cloud_3.jpg',
        world: 'assets/json/world.json',
        worldCapitals: 'assets/json/world-capitals.json',
        mapUSA: 'assets/json/usa-map.json',
        particleFile: 'assets/json/particles.json'
      };
    }
  }

  keyChangePage() {
    let self = this;

    d3.select('body').on('keyup', ()=>{
      if (d3.event.code=='Space' || d3.event.code=='ArrowRight'
          || d3.event.code=='PageDown') self.keyNextStage();
      else if (d3.event.code=='ArrowLeft' || d3.event.code=='PageUp') self.keyPreviousStage();
      else if (d3.event.code=='ArrowUp') self.keyInitStage();
      else if (d3.event.code=='Period') {
        
      }
    });
  }
  keyNextStage() {
    let self = this;
    self.stage += 1;

    if (self.page==1 && self.stage<4) self.nextStagePage1();
    else if (self.page==2 && self.stage<3) self.usaStatisticPage.changeYear(2014+self.stage);
    else if (self.page==3 && self.stage<6) self.grocerySale.chooseStage(self.stage*5 - 4);
    else if (self.page==4 && self.stage<3) self.problemPage.nextStage();
    else if (self.page==5 && self.stage<3) self.surveyPage.changeSurveyType(self.stage);
    else if (self.page==6 && self.stage<6) self.solutionPage.nextStage();
    else if (self.page==8 && self.smartCartPage.appPage!='Summary') self.smartCartPage.appNextPage();
    else if (self.page==9 && self.personaMana.appPage!='Summary') self.personaMana.appNextPage();
    else if (self.page==10 && self.personaManee.appPage!='Summary') self.personaManee.appNextPage();
    else if (self.page==13 && self.stage<3) self.thanks.nextStage();
    else self.changePage(d3.min([self.page+1, d3.max(self.pageArray)]));
  }
  keyPreviousStage() {
    let self = this;
    self.stage -= 1;

    if (self.stage>-1 && self.page!=8 && self.page!=9 && self.page!=10) {
      if (self.page==1) self.previousStagePage1();
      else if (self.page==2) self.usaStatisticPage.changeYear(2014+self.stage);
      else if (self.page==3) self.grocerySale.chooseStage(self.stage*5 - 4);
      else if (self.page==4) self.problemPage.previousStage();
      else if (self.page==5) self.surveyPage.changeSurveyType(self.stage);
      else if (self.page==6) self.solutionPage.previousStage();
      else if (self.page==13) self.thanks.previousStage();
    } else if (self.page==8 && self.smartCartPage.appPage!='Welcome') {
      self.smartCartPage.appPreviousPage();
    } else if (self.page==9 && self.personaMana.appPage!='Welcome') {
      self.personaMana.appPreviousPage();
    } else if (self.page==10 && self.personaManee.appPage!='Welcome') {
      self.personaManee.appPreviousPage();
    }  else {
      self.changePage(d3.max([self.page-1, 0]));
    }
  }
  keyInitStage() {
    let self = this;

    self.stage = 0;        
    if (self.page==1) self.initStagePage1();
    else if (self.page==2) self.usaStatisticPage.changeYear(2014);
    else if (self.page==3) self.grocerySale.initStage();
    else if (self.page==4) self.problemPage.initStagePage1();
    else if (self.page==5) self.surveyPage.changeSurveyType(0);
    else if (self.page==6) self.solutionPage.initStage();
    else if (self.page==8) {
      if (self.smartCartPage.appPage != 'Welcome') {
        self.smartCartPage.appPage = 'Welcome';
        self.smartCartPage.appReset();
      }
    } else if (self.page==9) {
      if (self.personaMana.appPage != 'Welcome') {
        self.personaMana.appPage = 'Welcome';
        self.personaMana.appReset();
      }
    } else if (self.page==10) {
      if (self.personaManee.appPage != 'Welcome') {
        self.personaManee.appPage = 'Welcome';
        self.personaManee.appReset();
      }
    }
    else if (self.page==13) self.thanks.initStage();
  }

  changePage(page) {
    let self = this;

    // Introduction page
    if (self.page<2 && page<2) {
      self.introPage.page = page;
      self.introPage.pageChange();
    }
    // Interactive globe page
    if (self.page<2 && page>1) self.globe.destroy();

    self.page = page;
    self.stage = 0;
  }

  pageSelectClass(page) {
    if (this.page==page) return true;
    else return false;
  }

  nextStagePage1() {
    let self = this;
    if (self.page == 1) {
      self.host.selectAll('.stage-'+self.stage).style('opacity', 1);
      if (self.stage == 3) {
        self.globe.beginMoveTo();
      }
    }
  }
  previousStagePage1() {
    let self = this;
    if (self.page == 1) {
      self.host.selectAll('.stage-'+(self.stage+1)).style('opacity', 0);
    }
  }
  initStagePage1() {
    let self = this;
    if (self.page == 1) {
      self.stage = 0;
      self.host.selectAll('.stage-1').style('opacity', 0);
      self.host.selectAll('.stage-2').style('opacity', 0);
      self.host.selectAll('.stage-3').style('opacity', 0);
    }
  }

}
