export interface Contact {
    id: number;
    profileImg: string;
    fullName: string;
    email: string;
    numbers: PhoneNumber[];
    favorite: boolean;
}

export interface PhoneNumber {
    phoneNumber: string;
    title: string; 
}