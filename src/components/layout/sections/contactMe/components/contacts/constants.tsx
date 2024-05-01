import { BsTelegram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const MY_TG = "https://t.me/TaliSent";
const MY_MAIL = "ns.sent@yandex.ru";
const MY_PHONE = "0552576608";

const CONTACTS = [
  {
    href: MY_TG,
    textPrimary: "Text me",
    textSecondary: "TaliSent",
    icon: <BsTelegram size="30" />,
  },
  {
    href: `mailto: ${MY_MAIL}`,
    textPrimary: "Email me",
    textSecondary: "ns.sent@yandex.ru",
    icon: <MdOutlineAlternateEmail size="30" />,
  },
  {
    href: `tel: ${MY_PHONE}`,
    textPrimary: "Call me",
    textSecondary: MY_PHONE,
    icon: <FiPhone size="30" />,
  },
];

export default CONTACTS;
