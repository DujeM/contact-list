import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContact() {
    localStorage.getItem('contacts');
  }

  createContact(contact: Contact) {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  updateContact(contact: Contact) {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  deleteContact() {
    localStorage.removeItem('contacts');
  }
}
