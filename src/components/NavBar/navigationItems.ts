import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  FilmIcon,
} from "@heroicons/react/24/outline"
import { NavLinkType } from "./types"

export const navigation: NavLinkType[] = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon, current: false },
  { name: "News", href: "/news", icon: UserGroupIcon, current: false },
  {
    name: "Speech / Text",
    href: "/text-speech",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Todo App",
    href: "/todoapp",
    icon: FilmIcon,
    current: false,
  },
  // {
  //   name: "Directory",
  //   href: "/directory",
  //   icon: MagnifyingGlassCircleIcon,
  //   current: false,
  // },
  // {
  //   name: "Announcements",
  //   href: "/announcements",
  //   icon: MegaphoneIcon,
  //   current: false,
  // },
  // { name: "Office Map", href: "/office-map", icon: MapIcon, current: false },
]
