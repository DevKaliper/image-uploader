
"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { useTheme } from "next-themes";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { LogoWhite, LogoBlack } from "@/components/icons";

export const Navbar = () => {
	const { theme } = useTheme();
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky">
      <NavbarContent
        className="basis-1/5 sm:basis-full"
        justify="start">
        <NavbarBrand
          as="li"
          className="max-w-fit gap-3">
          <NextLink
            className="flex items-center justify-start gap-1"
            href="/">
				{
					theme === "dark" ? <LogoWhite /> : <LogoBlack />
				}
            
            <p className="font-bold text-inherit">DevKaliper</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end">
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link
            isExternal
            href={siteConfig.links.github}
            aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="basis-1 pl-4 sm:hidden"
        justify="end">
        <Link
          isExternal
          href={siteConfig.links.github}
          aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
