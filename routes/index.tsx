import { Section, HowItWorks, OpenSource, CLI } from '../components/Sections.tsx';
import { Hero } from '../components/Hero.tsx'
import { PageWrapper } from '../components/Layout.tsx'

import ServiceTabs from "../islands/ServiceTabs.tsx";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />

      <HowItWorks />
      <OpenSource />
      <CLI />

      <Section
        title="Cloud Service Integrations"
        description="Visibility and status embedded inline in your docs.
        "
      >
        <div class="pt-6">
          <ServiceTabs />
        </div>
      </Section>
    </PageWrapper>
  );
}
