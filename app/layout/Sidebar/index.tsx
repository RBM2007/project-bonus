"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  PlusCircle,
  ListBullets,
  SignOut,
} from "phosphor-react";

import {
  SidebarContainer,
  LogoBonus,
  Divider,
  Menu,
  MenuItem,
  Footer,
} from "./styles";

import logo from "../../assets/logo-bonus-branca.png";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <div>
        <LogoBonus>
          <Image src={logo} alt="Bônus" />
        </LogoBonus>

        <Divider />

        <Menu>
          <Link href="/dashboard/registrar-venda">
            <MenuItem active={pathname === "/registrar-venda"}>
              <PlusCircle size={20} />
              Registrar venda
            </MenuItem>
          </Link>

          <Link href="/dashboard/historico-vendas">
            <MenuItem active={pathname === "/historico-vendas"}>
              <ListBullets size={20} />
              Histórico de vendas
            </MenuItem>
          </Link>
        </Menu>
      </div>

      <Footer>
        <div>
          <strong>Biquíni Brasil</strong>
          <span>loja@biquinibrasil.com</span>
        </div>

        <SignOut size={20} />
      </Footer>
    </SidebarContainer>
  );
}
