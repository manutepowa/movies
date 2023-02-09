import {
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import { NavLinkType } from "./types"

export const navigation: NavLinkType[] = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Teams", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "Directory",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
  { name: "Announcements", href: "#", icon: MegaphoneIcon, current: false },
  { name: "Office Map", href: "#", icon: MapIcon, current: false },
]
