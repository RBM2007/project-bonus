"use client";

import Image from "next/image";
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
  return (
    <SidebarContainer>
      <div>
        <LogoBonus>
          <Image src={logo} alt="Bônus" />
        </LogoBonus>

        <Divider />

        <Menu>
          <MenuItem active>
            <PlusCircle size={20} />
            Registrar venda
          </MenuItem>

          <MenuItem>
            <ListBullets size={20} />
            Histórico de vendas
          </MenuItem>
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
