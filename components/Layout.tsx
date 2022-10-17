import type { ComponentChildren } from "preact";
import Footer from "../components/Footer.tsx";
import Header from "../islands/Header.tsx";

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
      <div class="relative">
        <div className="absolute top-[-6.5px] sm:top-[-10px] md:top-[-13px] lg:top-[-16px] xl:top-[-20px] 2xl:top-[-25px] 3xl:top-[-32px] 4xl:top-[-40px] translate-x-1/2 right-1/2 w-[102%] lg:w-[105%] 3xl:w-[110%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"100%"}
            height={"100%"}
            viewBox="0 0 4002 68"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M4000.99 67H1C1 42.2532 548.893 0.313874 2086.86 1.00852C3624.83 1.70317 4003.76 45.2923 4000.99 67Z"
              fill="#0D003D"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
}
