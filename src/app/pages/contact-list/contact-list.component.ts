import { Component, OnInit } from '@angular/core';
import { AreYouSureComponent } from 'src/app/dialogs/are-you-sure/are-you-sure.component';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact/contact.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  toggleFavoriteOnly: boolean = false;
  public searchInput: string = '';

  constructor(
    private contactService: ContactService,
    private dialog: MatDialog
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

  deleteContact(contactId: number) {
    const dialogRef = this.dialog.open(AreYouSureComponent, {
      width: '480px',
      height: '240px',
      panelClass: 'no-padding'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.deleteContact(contactId);
        this.getContacts();
      } 
    });
  }

}
