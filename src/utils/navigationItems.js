import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import ElderlyOutlinedIcon from "@mui/icons-material/ElderlyOutlined";

const navigationItems = [
  {
    id: 1,
    name: "News",
    href: "/",
    icon: <HomeOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 2,
    name: "Telefonlisten",
    href: "/telefonlisten",
    icon: <ContactPhoneOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 3,
    name: "DRK Rostock KV",
    href: "",
    icon: <LocalHospitalOutlinedIcon />,
    sub_href: [
      {
        id: 1,
        name: "KV",
        href: "/kv",
        icon: <LocalHospitalOutlinedIcon />,
        sub_href: [],
      },
      {
        id: 2,
        name: "Cafeteria",
        href: "/kv/cafeteria",
        icon: <FoodBankOutlinedIcon />,
        sub_href: [],
      },
      {
        id: 3,
        name: "Unter uns",
        href: "",
        icon: <ChatBubbleOutlineOutlinedIcon />,
        sub_href: [
          {
            id: 1,
            name: "Fahrpläne",
            href: "kv/fahrplaene",
          },
        ],
      },
      {
        id: 4,
        name: "Mitarbeiter",
        href: "",
        icon: <PeopleAltOutlinedIcon />,
        sub_href: [
          {
            id: 1,
            name: "BGM",
            href: "/kv/bgm",
          },
          {
            id: 2,
            name: "PIK",
            href: "/kv/pik",
          },
        ],
      },
      {
        id: 5,
        name: "Dienstanweisungen",
        href: "/kv/dienstanweisungen",
        icon: <WorkOutlineOutlinedIcon />,
        sub_href: [],
      },
      {
        id: 6,
        name: "Hausordnung",
        href: "/kv/hausordnung",
        icon: <MenuBookOutlinedIcon />,
        sub_href: [],
      },
      {
        id: 7,
        name: "Betriebsanweisung",
        href: "/kv/betriebsanweisung",
        icon: <MenuBookOutlinedIcon />,
        sub_href: [],
      },
    ],
  },
  {
    id: 4,
    name: "DRK Rostock KiJu",
    href: "",
    icon: <ChildCareOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 5,
    name: "DRK Rostock RoWe",
    href: "",
    icon: <AccessibilityIcon />,
    sub_href: [],
  },
  {
    id: 6,
    name: "DRK Rostock WoPe",
    href: "",
    icon: <ElderlyOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 7,
    name: "Corona",
    href: "/corona",
    icon: <CoronavirusOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 8,
    name: "Ausschreibung",
    href: "/stellenausschreibungen",
    icon: <WorkOutlineOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 9,
    name: "Formulare",
    href: "/formulare",
    icon: <DescriptionOutlinedIcon />,
    sub_href: [],
  },

  {
    id: 10,
    name: "IT",
    href: "",
    icon: <SecurityOutlinedIcon />,
    sub_href: [
      {
        id: 1,
        name: "Datenschutz",
        href: "/datenschutz",
        sub_href: [],
      },
      {
        id: 2,
        name: "Fernwartung",
        href: "/fernwartung",
        sub_href: [],
      },
      {
        id: 3,
        name: "Technik",
        href: "/technik",
        sub_href: [],
      },
      {
        id: 4,
        name: "Meetings abhalten",
        href: "/meetings",
        sub_href: [],
      },
      {
        id: 5,
        name: "Excel Schulungen",
        href: "/excel-schulungen",
        sub_href: [],
      },
    ],
  },
];

export default navigationItems;
