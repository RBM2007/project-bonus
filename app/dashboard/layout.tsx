
import { Sidebar } from "../layout/Sidebar";
import { LayoutContainer, Content } from "./layout.styles";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>{children}</Content>
    </LayoutContainer>
  );
}
