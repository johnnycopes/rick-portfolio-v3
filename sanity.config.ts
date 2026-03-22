import { defineConfig } from "sanity"
import { workProject, about, miscWebsite, miscSong, miscInstagram } from "./schemaTypes"

export default defineConfig({
  projectId: "hzn4ro6m",
  dataset: "production",
  schema: {
    types: [workProject, about, miscWebsite, miscSong, miscInstagram],
  },
})
