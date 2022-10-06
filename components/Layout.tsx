import type { ComponentChildren } from "preact";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import { h } from "preact";

type Props = {
  children: ComponentChildren;
};

export default function Layout(props: Props) {
  return (
    <div class="bg-[rgba(0,0,0,.75)] text-white">
      <video
        autoPlay
        loop
        muted
        class="opacity-20 w-full h-full fixed right-0 top-0 object-cover z-[-10]"
      >
        <source src="/light-particles-bg.mp4"></source>
      </video>

      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
