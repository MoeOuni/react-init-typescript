import dayjs from "dayjs";

export const validEmail = (email: string) => {
    return new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
}

export const validFirstName = (firstName: string) => {
    return new RegExp(/^[A-Za-z]+$/).test(firstName);
}

export const validLastName = (lastName: string) => {
    return new RegExp(/^[A-Za-z]+$/).test(lastName);
}

export const validBic = (bic: string) => {
    return new RegExp(/^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/).test(bic);
}

export const validIban = (iban: string) => {
    return new RegExp(/^[A-Za-z]{2}[0-9]{2}[A-Za-z0-9]{4}[0-9]{7}([A-Za-z0-9]?){0,16}$/).test(iban);
}

export const validAdultBirthDate = (current: any) => {
    return current?.isAfter(dayjs().subtract(18, "years"));
}

export const validBirthDate = (current: any) => {
    return current?.isAfter(dayjs());
}