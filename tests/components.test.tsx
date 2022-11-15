import render from 'https://esm.sh/preact-render-to-string@5.2.1'
import { DOMParser } from 'https://deno.land/x/deno_dom@v0.1.32-alpha/deno-dom-wasm.ts'
import { describe, it } from 'https://deno.land/std@0.148.0/testing/bdd.ts'
import { assert, assertExists } from 'https://deno.land/std@0.148.0/testing/asserts.ts'

import Footer from '../components/Footer.tsx';
import { Hero } from '../components/Hero.tsx';
import { CLI, Repo, HowItWorks, OpenSource } from '../components/Sections.tsx';

describe('Footer', () => {
  it('should render correctly', () => {
    const compAsString  = render(<Footer />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    assert(doc.textContent.includes('Stateful Inc. All rights reserved.'))
  })
})

describe.ignore('Hero', () => {
  it('should render correctly', async (t) => {
    const compAsString  = render(<Hero />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assert(doc.querySelector('body')?.innerHTML.includes(
      'Run your <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A38CF0] to-[#C83D79]">Readme.md</span>'
    ))
  })
})

describe('Sections', () => {
  it('should render CLI section correctly', async (t) => {
    const compAsString  = render(<CLI />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assert(doc.querySelector('body')?.innerHTML.includes('Command Line Interface'))
  })

  it('should render Repo section correctly', async (t) => {
    const compAsString  = render(<Repo url="https://github.com/webdriverio/webdriverio" name="WebdriverIO" description="A cool repo" />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assert(doc.querySelector('body')?.innerHTML.includes('WebdriverIO'))
  })

  it('should render HowItWorks section correctly', async (t) => {
    const compAsString  = render(<HowItWorks />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assert(doc.querySelector('body')?.innerHTML.includes('How it works'))
  })

  it('should render OpenSource section correctly', async (t) => {
    const compAsString  = render(<OpenSource />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
    assertExists(doc)
    await assert(doc.querySelector('body')?.innerHTML.includes('Open Source Software'))
  })
})
