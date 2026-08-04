"use client";

import { motion } from "framer-motion";

import { Container } from "../Container";

import { DesktopNavigation } from "./DesktopNavigation";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";

export function Navbar() {
  return (
    <motion.header
      initial={{
        y: -32,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        sticky
        top-0
        z-50
        border-b
        border-border/40
        bg-background/75
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-background/60
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
      "
    >
      <Container>
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <Logo />

          <DesktopNavigation />

          <MobileNavigation />
        </div>
      </Container>
    </motion.header>
  );
}