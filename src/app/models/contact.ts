export interface Contact {
    profileImg: string;
    fullName: string;
    email: string;
    numbers: PhoneNumber[];
    favorit: boolean;
}

export interface PhoneNumber {
    phoneNumber: string;
    title: string; 
}