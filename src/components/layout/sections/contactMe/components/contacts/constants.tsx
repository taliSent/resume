import { BsTelegram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const myTg = "https://t.me/TaliSent";
const myMail = "ns.sent@yandex.ru";
const myPhone = "+3043068596";

const style = {
  marginRight: '12px',
}

const CONTACTS = [
  {
    href: myTg,
    textPrimary: "Text me",
    textSecondary: "TaliSent",
    icon: <BsTelegram style={style} size="30" />
  },
  {
    href: `mailto: ${myMail}`,
    textPrimary: "Email me",
    textSecondary: "ns.sent@yandex.ru",
    icon: <MdOutlineAlternateEmail style={style} size="30" />
  },
  {
    href: `tel: ${myPhone}`,
    textPrimary: "Call me",
    textSecondary: myPhone,
    icon: <FiPhone style={style} size="30" />
  },
];

export default CONTACTS;
