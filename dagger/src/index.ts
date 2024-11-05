/**
 * A generated module for DocsRunmeDev functions
 *
 * This module has been generated via dagger init and serves as a reference to
 * basic module structure as you get started with Dagger.
 */
import { dag, Container, Directory, object, func, Docusaurus, Service, Secret, Platform } from "@dagger.io/dagger"

@object()
export class DocsRunmeDev {
  site: Docusaurus

  constructor(site: Directory) {
    const disableCache = false
    this.site = dag.docusaurus(site, { disableCache })
  }

  /**
   * Returns a directory with a production-ready build of the docs site.
   */
  @func()
  build(): Directory {
    return this.site
    .build()
  }

  /**
   * Build container serving a build of the docs site.
   */
  @func()
  async container(): Promise<Container> {
    const platform = "linux/amd64" as Platform
    return (
      dag.container({ platform })
      .from("nginx:1.27.2-alpine-slim")
      .withDirectory("/usr/share/nginx/html", this.site.build())
      .withExposedPort(80)
    )
  }

  /**
   * Bring up container serving a build of the docs site.
   */
  @func()
  async serve(): Promise<Service> {
    const container = await this.container()
    return container.asService()
  }

  protected async publish(imageRef: string): Promise<string> {
    const image = await this.container()
    return image.publish(imageRef)
  }

  /**
   * Deploy docs site container image to Google Cloud Run.
   */
  @func()
  async deploy(project: string, region: string, repo: string, credentials: Secret): Promise<string> {
    const imageRef = await this.publish(`${region}-docker.pkg.dev/${project}/${repo}/site:lastest`)

    return dag
      .googleCloudRun()
      .createService("runme-ci", "us-central1", imageRef, 80, credentials)
  }
}
