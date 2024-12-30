import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
import { rehypeToc } from "fumadocs-core/mdx-plugins";
export const { docs, meta } = defineDocs({
  dir: "content/blogs",
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    remarkPlugins: [
      [
        remarkInstall,
        rehypeToc,
        {
          persist: {
            id: "persist-install",
          },
        },
      ],
    ],
  },
});
