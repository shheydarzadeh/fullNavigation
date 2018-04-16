import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubcatPage } from '../subcat/subcat';
/**
 * Generated class for the DastebandihaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dastebandiha',
  templateUrl: 'dastebandiha.html',
})
export class DastebandihaPage {
  //diseases = [
  //  { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
  //  { title: "Multiple Sclerosis", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
  //  { title: "Crohn's & Colitis", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." },
  //  { title: "Lupus", description: "Systemic lupus erythematosus (lupus) is a chronic, systemic autoimmune disease which can damage any part of the body, including the heart, joints, skin, lungs, blood vessels, liver, kidneys and nervous system." },
  //  { title: "Rheumatoid Arthritis", description: "Rheumatoid arthritis (RA) is an autoimmune disease in which the body's immune system mistakenly begins to attack its own tissues, primarily the synovium, the membrane that lines the joints." }
  //];

  //shownGroup = null;
  //toggleGroup(group) {
  //  if (this.isGroupShown(group)) {
  //    this.shownGroup = null;
  //  } else {
  //    this.shownGroup = group;
  //  }
  //};
  //isGroupShown(group) {
  //  return this.shownGroup === group;
  //};
  //items: object[];
  items: Array<any>;
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  constructor(private navCtrl: NavController, public navParams: NavParams) {

    //if (localStorage.getItem('token') == "ttttttoken")
    //{
    //  alert("ok");
    //  //this.nav.setRoot('MenuPage');
    //}
    //else {
    //  alert("nok");
    //}
    this.initializeItems();
  }
  initializeItems() {
   
    //this.items = [
    //  {
    //    id: 1,
    //    icon_name: 'star',
    //    title: 'املاک',
    //    items: [
    //      { id: 1, title: 'خرید املاک', items: [{ id: 1, title: 'خرید آپارتمان' }, { id: 2, title: 'خرید ویلا' }] },
    //      { id: 2, title: 'فروش املاک', items: [{ id: 1, title: 'فروش آپارتمان' }, { id: 2, title: 'فروش ویلا' }] }
    //    ]
    //  },
    //  {
    //    id: 2,
    //    icon_name: 'car',
    //    title: 'وسایل نقلیه',
    //    items: [
    //      { id: 3, title: 'خرید وسایل نقلیه' },
    //      { id: 4, title: 'فروش وسایل نقلیه' }
    //    ]
    //  },
    //  {
    //    id: 3,
    //    title: 'وسایل شخصی',
    //    icon_name: 'watch',
    //    items: [
    //      { id: 5, title: 'خرید وسایل شخصی' },
    //      { id: 6, title: 'فروش وسایل شخصی' }
    //    ]
    //  }
    //];
    //this.items = [
    //  { "title": "A", "id": 1, "parent_id": 0, icon_name: 'star',},
    //  { "title": "B", "id": 2, "parent_id": 0, icon_name: 'car',},
    //  { "title": "A1", "id": 3, "parent_id": 1 },
    //  { "title": "A2", "id": 4, "parent_id": 1 },
    //  { "title": "B1", "id": 5, "parent_id": 2 },
    //  { "title": "B2", "id": 6, "parent_id": 2 },];
    this.items = [
      {
        "category": "PC",
        "subs": [
          {
            "subcategory": "Processor",
            "manufactures": [
              {
                "manufacture": "Intel"
              },
              {
                "manufacture": "AMD"
              }
            ]
          },
          {
            "subcategory": "Motherboard",
            "manufactures": [
              {
                "manufacture": "Asus"
              },
              {
                "manufacture": "AMD"
              },
              {
                "manufacture": "GigaByte"
              },
              {
                "manufacture": "Intel"
              }
            ]
          },
          {
            "subcategory": "Memory",
            "manufactures": [
              {
                "manufacture": "Visipro"
              },
              {
                "manufacture": "Crucial"
              },
              {
                "manufacture": "VenomRX"
              }
            ]
          }
        ]
      },
      {
        "category": "Laptop",
        "subs": [
          {
            "subcategory": "Notebook",
            "manufactures": [
              {
                "manufacture": "Lenovo"
              },
              {
                "manufacture": "Dell"
              }
            ]
          },
          {
            "subcategory": "Netbook",
            "manufactures": [
              {
                "manufacture": "Lenovo"
              },
              {
                "manufacture": "Dell"
              },
              {
                "manufacture": "Acer"
              },
              {
                "manufacture": "HP"
              }
            ]
          }
        ]
      },
      {
        "category": "Printer",
        "subs": [
          {
            "subcategory": "Laserjet",
            "manufactures": [
              {
                "manufacture": "HP"
              },
              {
                "manufacture": "Brother"
              },
              {
                "manufacture": "Canon"
              },
              {
                "manufacture": "Samsung"
              }
            ]
          },
          {
            "subcategory": "Deskjet",
            "manufactures": [
              {
                "manufacture": "HP"
              },
              {
                "manufacture": "Canon"
              },
              {
                "manufacture": "Epson"
              }
            ]
          }
        ]
      }
    ]
  }
  nextpage(it)
  {
    alert('Clicked: ');
    this.navCtrl.push(SubcatPage, it);
  }
  
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad DastebandihaPage');
  //}

}
