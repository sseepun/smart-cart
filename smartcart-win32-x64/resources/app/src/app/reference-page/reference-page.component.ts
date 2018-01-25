import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-page',
  templateUrl: './reference-page.component.html',
  styleUrls: ['./reference-page.component.css']
})
export class ReferencePageComponent implements OnInit {

  private references = ['Hudson, E.: Health and Wellness the Trillion Dollar Industry in 2017: Key Research Highlights. Euromonitor International, November 2012. <a href="https://blog.euromonitor.com/" target="_blank">[Link]</a>',
    'What to Do When There Are Too Many Product Choices on the Store Shelves? Consumer Reports Magazine, March 2014. <a href="https://www.consumerreports.org/cro/magazine/2014/03/index.htm" target="_blank">[Link]</a>',
    'Nielsen Global Health and Wellness Report. The Neilsen Company, January 2015. <a href="https://www.nielsen.com/content/dam/nielsenglobal/eu/nielseninsights/pdfs/Nielsen%20Global%20Health%20and%20Wellness%20Report%20-%20January%202015.pdf" target="_blank">[Link]</a>',
    'Moore, G.A.: Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers. Publisher Harper Collins (1991).',
    'Ahn, J., Williamson, J., Gartrell, M., Han, R., Lv, Q., Mishra, S.: Supporting Healthy Grocery Shopping via Mobile Augmented Reality. ACM Trans. Multimedia Comput. Commun. Appl. 12, 1s, Article 16 (October 2015), 24 pages. <a href="https://dl.acm.org/citation.cfm?doid=2837676.2808207" target="_blank">[Link]</a>',
    'Shekar, S., Nair, P., Helal, A.: iGrocer: A ubiquitous and pervasive smart grocery shopping system. In: Proceedings of the 2003 ACM Symposium on Applied Computing. (2003) 645–652.',
    'Rosenstock, I.: Historical Origins of the Health Belief Model. Health Education & Behavior. 2 (4): 328–335 (1974).',
    'Escoto, K.H., Laska, M.N., Larson, N., et al.: Work hours and perceived time barriers to healthful eating among young adults. American Journal of Health Behavior, 36, 786–796. (2012).',
    'Ross, A.C., Taylor, C.L., Yaktine, A.L., et al. (eds) Dietary Reference Intakes for Calcium and Vitamin D. Washington (DC), National Academies Press. (2011).',
    'Petty, R.E., Cacioppo, J.T.: The elaboration likelihood model of persuasion. Advances in Experimental Social Psychology: 125. doi:10.1016/s0065-2601(08)60214-2 (1986).',
    'Li, H., Chatterjee, S.: Designing effective persuasive systems utilizing the power of entanglement: communication channel, strategy and affect. Lecture notes in computer science, persuasive, vol 6137 (2010).',
    'Fogg, B.J.: Creating persuasive technologies: An eight-step design process. In: Proceedings of the 4th International Conference on Persuasive Technology, pp. 1–6. ACM, Claremont (2009).',
    'Fogg, B.J.: A Behavior Model for Persuasive Design. Persuasive Technology Lab, Stanford University. <a href="http://bjfogg.com/fbm_files/page4_1.pdf" target="_blank">[Link]</a>',
    'Fogg, B.J.: Persuasive technology: using computers to change what we think and do. Morgan Kaufmann, San Francisco (2003).',
    'Nutritional Scoring System. Nuval LLC, Massachusetts. <a href="www.nuval.com" target="_blank">[Link]</a>'];

  constructor() { }

  ngOnInit() {
  }

}
