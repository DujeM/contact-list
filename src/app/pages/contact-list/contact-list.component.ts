import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contacts = this.contactService.getContacts();
  }

  updateFavorite(contact: Contact, favorite: boolean) {
    contact.favorite = favorite;
    this.contactService.editContact(contact);
  }

}
