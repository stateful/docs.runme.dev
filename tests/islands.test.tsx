import render from 'https://esm.sh/preact-render-to-string@5.2.1'
import { describe, it } from 'https://deno.land/std@0.148.0/testing/bdd.ts'
import { assert, assertExists } from 'https://deno.land/std@0.148.0/testing/asserts.ts'
// @ts-expect-error no exported memeber is recognised
import { JSDOM } from "https://esm.sh/jsdom@20.0.1"

import ServiceTabs from '../islands/ServiceTabs.tsx'

describe('Footer', () => {
  function renderComponent () {
    const compAsString  = render(<ServiceTabs />)
    return new JSDOM(compAsString.replace('<img', '<div'), {
      url: "https://example.com/",
      referrer: "https://example.org/",
      contentType: "text/html",
      storageQuota: 10000000,
    })
  }

  it('should render as Deno example as default state', () => {
    const { window: { document } } = renderComponent()
    assert(document.body.innerHTML.includes('src="/tabs/deno.gif"'))
  })

  /**
   * window.MouseEvent is undefined
   */
  it.ignore('should allow to switch tab', () => {
    const { window: { document } } = renderComponent()
    const evt = new window.MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
    document.body.querySelector('#vercel')?.dispatchEvent(evt)
    assert(document.body.innerHTML.includes('src="/tabs/deno.gif"'))
  })
})
