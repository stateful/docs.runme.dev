import React from 'react'

interface LayoutProps extends React.PropsWithChildren {
  isHomepage?: boolean;
}

export function PageWrapper(props: React.PropsWithChildren) {
  return (
    <div className="min-h-screen 2xl:min-h-[50vh] z-[100] text-black max-w-[1440px] mx-auto">
      {props.children}
    </div>
  )
}

export default function Layout(props: LayoutProps) {
  const { isHomepage, children } = props
  return (
    <div className="text-black relative z-0 overflow-x-hidden">
      {children}
    </div>
  );
}
