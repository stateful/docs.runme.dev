import React from 'react'

interface LayoutProps extends React.PropsWithChildren {
  isHomepage?: boolean;
}

export default function Layout(props: LayoutProps) {
  const { isHomepage, children } = props
  return (
    <div className="text-black relative z-0 overflow-x-hidden">
      {children}
    </div>
  );
}
