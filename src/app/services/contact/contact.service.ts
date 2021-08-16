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
    if (!this.contacts) this.contacts = [];
    return this.contacts;
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

  updateContact(contact: Contact) {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  deleteContact() {
    localStorage.removeItem('contacts');
  }

  getUserId() {
    this.contacts = JSON.parse(localStorage.getItem('contacts'))
    if (!this.contacts) return 1;
    return this.contacts.length + 1; 
  }
}
