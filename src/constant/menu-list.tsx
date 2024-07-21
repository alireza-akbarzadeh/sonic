import {
  Home,
  Music,
  Headphones,
  List,
  PlayIcon,
  TrendingUp,
  User,
  LogIn,
} from "lucide-react";
import { ReactNode } from "react";

type MenuList = {
  href: string;
  icon: ReactNode;
  label: string;
};

export const menuItems: MenuList[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/stream", icon: Music, label: "Stream" },
  {
    href: "/listen",
    icon: Headphones,
    label: "Listen",
  },
  { href: "/explore", icon: List, label: "Explore" },
  {
    href: "/playlists",
    icon: PlayIcon,
    label: "Playlists",
  },
  {
    href: "/top-charts",
    icon: TrendingUp,
    label: "Top Charts",
  },
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/login", icon: LogIn, label: "Login" },
];
