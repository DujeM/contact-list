import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  constructor() { }

  getContacts() {
    this.contacts = JSON.parse(localStorage.getItem('contacts'));

    return this.contacts ? this.contacts : [];
  }

  getContact(id: number) {
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!this.contacts) return;
    const contact = this.contacts.filter(c => c.id == id)[0];
    return contact;
  }

  createContact(contact: Contact) {
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!this.contacts) this.contacts = [];
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  editContact(contact: Contact) {
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    
    this.contacts.forEach((c, i) => {
      if (c.id == contact.id) this.contacts[i] = contact;
    });

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  deleteContact(contactId: number) {
    this.contacts = JSON.parse(localStorage.getItem('contacts'))
    this.contacts = this.contacts.filter(c => c.id != contactId);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getUserId() {
    this.contacts = JSON.parse(localStorage.getItem('contacts'))
    if (!this.contacts) return 1;
    return this.contacts[this.contacts.length - 1].id + 1; 
  }
}
