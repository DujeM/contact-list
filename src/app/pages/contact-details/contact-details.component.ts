import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  contactId: number;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.contactId = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.contact = this.contactService.getContact(this.contactId);
  }

  updateFavorite(contact: Contact, favorite: boolean) {
    contact.favorite = favorite;
    this.contactService.editContact(contact);
  }

}
