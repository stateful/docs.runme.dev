import type { ComponentChildren } from "preact";
import Footer from "../components/Footer.tsx";
import Header from "./Header.tsx";

interface Props {
  children: ComponentChildren;
}

interface LayoutProps {
  isHomepage?: boolean;
  children: ComponentChildren
}

export function PageWrapper(props: Props) {
  return (
    <div class="min-h-screen 2xl:min-h-[50vh] z-[100] text-black max-w-[1440px] mx-auto">
      {props.children}
    </div>
  )
}

export default function Layout(props: LayoutProps) {
  const { isHomepage, children } = props
  return (
    <div class="text-black relative z-0 overflow-x-hidden">
      <Header isHomepage={isHomepage} />
      {children}
      <Footer />
    </div>
  );
}
