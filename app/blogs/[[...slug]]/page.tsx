import { source } from '@/lib/source';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import Link from 'next/link';
import { Step, Steps } from "fumadocs-ui/components/steps";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { createTypeTable } from "fumadocs-typescript/ui";
import { absoluteUrl, cn } from '@/lib/utils';
const { AutoTypeTable } = createTypeTable();
export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  // const time = await getGithubLastEdit({
  //   owner: '100xcoding-blogs',
  //   repo: '100xcoding-blogs',
  //   path: `content/blogs/${page.file.path}`,
  // });
  return (
    <DocsPage toc={page.data.toc} full={page.data.full} editOnGithub={{
      owner: "100xcoding Blogs",
      repo: "100xcoding-blogs",
      sha: "main",
      path: `content/blogs/${page.file.path}`
    }} lastUpdate={new Date(page.data.lastModified || "2023-01-01")}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{
          ...defaultMdxComponents,
          Link: ({
            className,
            ...props
          }: React.ComponentProps<typeof Link>) => (
            <Link
              className={cn(
                "font-medium underline underline-offset-4",
                className,
              )}
              {...props}
            />
          ),
          Step,
          Steps,
          File,
          Folder,
          Files,
          Tab,
          Tabs,
          AutoTypeTable,
          TypeTable,
          Accordion,
          Accordions,
          iframe: (props) => (
            <iframe {...props} className="w-full h-[500px]" />
          ),
        }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (page == null) notFound();
  const baseUrl = process.env.NEXT_PUBLIC_URL || process.env.VERCEL_URL;
  const url = new URL(`${baseUrl}/api/og`);
  const { title, description } = page.data;
  const pageSlug = page.file.path;
  url.searchParams.set("type", "Blog");
  url.searchParams.set("mode", "dark");
  url.searchParams.set("heading", `${title}`);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(`blogs/${pageSlug}`),
      images: [
        {
          url: url.toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [url.toString()],
    },
  };
}
