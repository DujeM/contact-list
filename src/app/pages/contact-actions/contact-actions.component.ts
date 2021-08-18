import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, PhoneNumber } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-actions',
  templateUrl: './contact-actions.component.html',
  styleUrls: ['./contact-actions.component.scss']
})
export class ContactActionsComponent implements OnInit {
  contactForm: FormGroup;
  filePath: string;
  editId: number;

  get fullNameControl() { return this.contactForm.controls.fullName as FormControl; }
  get emailControl() { return this.contactForm.controls.email as FormControl; }
  get profileImgControl() { return this.contactForm.controls.profileImg as FormControl; }
  get numbersControl() { return this.contactForm.controls.numbers as FormArray; }

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editId = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    if (!this.editId) return this.initForm();
    this.initEditForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
        id: new FormControl(this.contactService.getUserId()),
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
        profileImg: new FormControl('', Validators.required),
        favorite: new FormControl(false),
        numbers: new FormArray([
          new FormGroup({
          phoneNumber: new FormControl(''),
          title: new FormControl('')
        })])
    });
  }

  initEditForm() {
    this.initForm();
    const contact = this.contactService.getContact(this.editId);
    this.contactForm.patchValue(contact);
    this.filePath = contact.profileImg;
  }

  createContact(newContact: Contact) {
    this.contactService.createContact(newContact)
  }

  addNumber() {    
    if (this.numbersControl.value[this.numbersControl.value.length - 1].title == '') return;
    if (this.numbersControl.value[this.numbersControl.value.length - 1].phoneNumber == '') return;

    this.numbersControl.push(
      new FormGroup({
      phoneNumber: new FormControl(''),
      title: new FormControl('')
    }));
  }

  removeNumber(index: number) {
    this.numbersControl.removeAt(index);
  }

  onSubmit() {
    if (!this.contactForm.valid) return;

    if (!this.editId) {
      this.contactService.createContact(this.contactForm.value);
      return this.router.navigate(['/']);
    }

    this.contactService.editContact(this.contactForm.value);
    this.router.navigate(['/']);
  }

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.filePath = reader.result as string;

      this.contactForm.patchValue({
        profileImg: this.filePath
      });
  
      this.contactForm.get('profileImg').updateValueAndValidity()
    }

    if (file) reader.readAsDataURL(file);
  }

}
