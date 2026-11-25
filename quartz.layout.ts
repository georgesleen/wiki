import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Spacer(),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [Component.PageTitle(), Component.Explorer()],
  right: [],
}

export const defaultListPageLayout: PageLayout = defaultContentPageLayout
