import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContactDataService } from '../../services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.scss']
})

/**
 * This is the component which is entry component for the App.
 * This accounts for Add, delete and show Contacts
 */
export class GetContactComponent implements OnInit, AfterViewInit {

  title = 'contacts-app';
  componentproperty;
  formdata;
  dataAddress;
  dataCompany;
  updateindex: number;
  contactContent: any;
  constructor(private contactDataService: ContactDataService,
  public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.getContentJSON();
    this.formdata = new FormGroup({
      name: new FormControl('', Validators.compose([
       Validators.required
    ])),
      address: new FormControl(''),
      company: new FormControl('')
   });
  }

  /**
  * This is a function fetches data from service and puts up in Array object
  */
  getContentJSON() {
    this.contactDataService.getJSON().subscribe(data => {
      this.contactContent = data;
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

 /**
  * This is a function which deletes the contact from table
  * this will be triggered on Remobe button click
  * @param indexVal
  */
  onDeleteClick(indexVal: number): void {
    this.contactContent.splice(indexVal, 1);
  }

  /**
  * This is a function which adds the contact from table
  * this will be triggered when user click on Add Contact Button
  * @param data
  */
  onAddClick(data: any): void {
    this.contactContent.push({ 'name': data.name,
    'address': data.address, 'company': data.company });
    this.formdata.reset();
  }
  onUpdateClick(num: number) {
    this.updateindex = num;
  }

  ngAfterViewInit() {
    this.onclickFunction();
}

onclickFunction() {
  const obj: Object = {
    name: this.contactContent[this.updateindex].name,
    address: this.contactContent[this.updateindex].address,
    company: this.contactContent[this.updateindex].company
  };
  this.ngxSmartModalService.setModalData(obj, 'myModal');
}

updateContact(company: string, address: string ): void {
  console.log('inside');
  console.log(company, address);
  this.contactContent[this.updateindex].address = address;
  this.contactContent[this.updateindex].company = company;
  console.log(this.contactContent);
 }
}
