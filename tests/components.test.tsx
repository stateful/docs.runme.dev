import render from 'https://esm.sh/preact-render-to-string@5.2.1'
import { DOMParser } from 'https://deno.land/x/deno_dom@v0.1.32-alpha/deno-dom-wasm.ts'
import { describe, it } from 'https://deno.land/std@0.148.0/testing/bdd.ts'
import { assertEquals, assertExists } from 'https://deno.land/std@0.148.0/testing/asserts.ts'
import { assertSnapshot } from 'https://deno.land/std@0.159.0/testing/snapshot.ts'

import Footer from '../components/Footer.tsx';
import { Hero } from '../components/Hero.tsx';
import { CLI, Repo, HowItWorks, OpenSource } from '../components/Sections.tsx';

describe('Footer', () => {
  it('should render correctly', () => {
    const compAsString  = render(<Footer />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    assertEquals(doc.textContent, 'The developer happiness company.')
  })
})

describe('Hero', () => {
  it('should render correctly', async (t) => {
    const compAsString  = render(<Hero />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assertSnapshot(t, doc.querySelector('body')?.innerHTML)
  })
})

describe('Sections', () => {
  it('should render CLI section correctly', async (t) => {
    const compAsString  = render(<CLI />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assertSnapshot(t, doc.querySelector('body')?.innerHTML)
  })

  it('should render Repo section correctly', async (t) => {
    const compAsString  = render(<Repo url="https://github.com/webdriverio/webdriverio" name="WebdriverIO" description="A cool repo" />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assertSnapshot(t, doc.querySelector('body')?.innerHTML)
  })

  it('should render HowItWorks section correctly', async (t) => {
    const compAsString  = render(<HowItWorks />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assertSnapshot(t, doc.querySelector('body')?.innerHTML)
  })

  it('should render OpenSource section correctly', async (t) => {
    const compAsString  = render(<OpenSource />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assertSnapshot(t, doc.querySelector('body')?.innerHTML)
  })
})
