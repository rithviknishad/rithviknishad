import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export default async function Markdown(props: { children: string }) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(props.children || "");

  return (
    <div
      className="prose font-sans leading-relaxed dark:prose-invert xl:text-left"
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    />
  );
}
