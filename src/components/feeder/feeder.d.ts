export type Contact = {
  phone: string;
  email: string;
}

export type ImageType = {
  id: number,
  url: string;
}

export type FeedspotTypes = {
  id: number;
  rating: number;
  title: string;
  address: string;
  contacts: Contact;
  latitude: number;
  longitude: number;
  images?: Image[]
}
