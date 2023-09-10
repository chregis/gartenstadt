export interface Kontakt {
  name: string,
  adresse: string,
  plzOrt: string,
  email: string,
  telefon: string
}

export class Kontakte {

  private static readonly inhaber_email_1 = 'haasanita';
  private static readonly inhaber_email_2 = 'outlook';
  private static readonly inhaber_email_3 = 'com';

  private static readonly datenschutz_email_1 = 'christian.spiller';
  private static readonly datenschutz_email_2 = 'chaosnet';
  private static readonly datenschutz_email_3 = 'ch';

  public static readonly datenschutz: Kontakt = {
    name: 'Christian Spiller',
    adresse: 'Neuhausweg 37',
    plzOrt: '3097 Liebefeld',
    email: Kontakte.datenschutzEmail(),
    telefon: '079 768 08 49'
  }

  public static readonly inhaber: Kontakt = {
    name: 'Anita Haas',
    adresse: 'Höheweg 57',
    plzOrt: '3097 Liebefeld',
    email: Kontakte.inhaberEmail(),
    telefon: '079 600 21 64'
  }

  public static readonly webmaster: Kontakt = Kontakte.datenschutz;

  constructor() { }

  public static inhaberEmail(): string {
    return `${this.inhaber_email_1}@${this.inhaber_email_2}.${this.inhaber_email_3}`;
  }

  public static datenschutzEmail(): string {
    return `${this.datenschutz_email_1}@${this.datenschutz_email_2}.${this.datenschutz_email_3}`;
  }
}
