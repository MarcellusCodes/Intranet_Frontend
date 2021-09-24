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
    name: "Corona",
    href: "/corona",
    icon: <CoronavirusOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 3,
    name: "Cafeteria",
    href: "/cafeteria",
    icon: <FoodBankOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 4,
    name: "Unter uns",
    href: "",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    sub_href: [
      {
        id: 1,
        name: "Fahrpläne",
        href: "/unter-uns/fahrpläne",
      },
      {
        id: 2,
        name: "Telefonlisten",
        href: "/unter-uns/telefonlisten",
      },
    ],
  },
  {
    id: 5,
    name: "Mitarbeiter",
    href: "",
    icon: <PeopleAltOutlinedIcon />,
    sub_href: [
      {
        id: 1,
        name: "Newsletter",
        href: "/mitarbeiter/newsletter",
      },
      {
        id: 2,
        name: "Ausschreibung",
        href: "/mitarbeiter/ausschreibung",
      },
      {
        id: 3,
        name: "BGM",
        href: "/mitarbeiter/bgm",
      },
      {
        id: 4,
        name: "PIK",
        href: "/mitarbeiter/pik",
      },
    ],
  },
  {
    id: 6,
    name: "Formulare",
    href: "/formulare",
    icon: <DescriptionOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 7,
    name: "Dienstanweisungen",
    href: "/dienstanweisungen",
    icon: <WorkOutlineOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 8,
    name: "IT / Datenschutz",
    href: "",
    icon: <SecurityOutlinedIcon />,
    sub_href: [
      {
        id: 1,
        name: "Datenschutz",
        href: "/it-datenschutz/datenschutz",
      },
      {
        id: 2,
        name: "Fernwartung",
        href: "/it-datenschutz/fernwartung",
      },
      {
        id: 3,
        name: "Technik",
        href: "/it-datenschutz/technik",
      },
      {
        id: 4,
        name: "Meetings abhalten",
        href: "/it-datenschutz/meetings-abhalten",
      },
    ],
  },
  {
    id: 9,
    name: "Hausordnung",
    href: "/hausordnung",
    icon: <MenuBookOutlinedIcon />,
    sub_href: [],
  },
  {
    id: 10,
    name: "Hilfe",
    href: "/hilfe",
    icon: <HelpCenterOutlinedIcon />,
    sub_href: [],
  },
];

export default navigationItems;
