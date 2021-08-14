import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  get numbersControl() { return this.contactForm.controls.numbers as FormArray; }

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
        profileImg: new FormControl('', Validators.required),
        numbers: new FormArray([
          new FormGroup({
          phoneNumber: new FormControl(''),
          title: new FormControl('')
        })])
    });
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
    console.log(this.contactForm.valid)
    console.log('Submited', this.contactForm);
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
