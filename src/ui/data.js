import Mathias from "../upload/MathiasJorgensen.jpg"
import Mila from "../upload/MillaHuhtala.jpg"
import Leroy from "../upload/LeroyLong.jpg"
import Leonard from "../upload/LeonardPena.jpg"
import Jill from "../upload/JillCox.jpg"
export const data = [
  {
    userLogo: Mathias,
    name: "Mathias Jorgensen",
    time: "15:15pm",
    msg:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  },
  {
    userLogo: Mila,
    name: "Milla Huhtala",
    time: "15:32pm",
    msg:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  },
  {
    userLogo: Leroy,
    name: "Leroy Long",
    time: "15:36pm",
    msg:
      "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
  {
    userLogo: Leonard,
    name: "Leonard Pena",
    time: "15:41pm",
    msg:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
  },
  {
    userLogo: Jill,
    name: "Jill Cox",
    time: "15:58pm",
    msg:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  }
];

export const messages = data.map(message => ({
  ...message,
  id: message.time
}));
