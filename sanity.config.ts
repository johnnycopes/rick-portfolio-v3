import { defineConfig } from "sanity"
import { workProject, about } from "./schemaTypes"

export default defineConfig({
  projectId: "hzn4ro6m",
  dataset: "production",
  schema: {
    types: [workProject, about],
  },
})
