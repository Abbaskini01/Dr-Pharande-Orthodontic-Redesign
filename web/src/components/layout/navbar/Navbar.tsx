"use client";
import { motion } from "framer-motion";

import { Container } from "../Container";

import { DesktopNavigation } from "./DesktopNavigation";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
sticky
top-0
z-50
border-b
border-slate-200/70
bg-white/90
backdrop-blur-xl
shadow-sm
"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <DesktopNavigation />
        </div>
      </Container>
    </motion.header>
  );
}