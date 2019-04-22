import { IDesigner } from "../Designer";

export const designers: IDesigner[] = [
  {
    bio: "Mexican Engineer",
    location: "Salamanca, Mexico",
    name: "Mario Gil",
    picture: { small: "", large: "" },
    tags: [],
    title: "UX designer",
    urls: {
      personal: "www.google.com"
    }
  },{
    bio: "I decide what the internet robots speak like",
    location: "Siem Reap, Cambodia",
    name: "Chankrisna Visna",
    picture: { small: "", large: "" },
    tags: ["Writer"],
    title: "Chatbot Script Designer",
    urls: {
      personal: "www.facebook.com"
    }
  }
];

export default {
  designers
}
