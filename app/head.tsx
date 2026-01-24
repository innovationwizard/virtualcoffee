import fs from "fs";
import path from "path";

const htmlSource = fs.readFileSync(
  path.join(process.cwd(), "virtualcoffee-code.txt"),
  "utf8"
);

const headMatch = htmlSource.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
const headHtml = headMatch ? headMatch[1] : "";

const linkMatches = Array.from(
  headHtml.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)
);

const styles = Array.from(
  headHtml.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)
).map((match) => match[1]);

const links = linkMatches
  .map((match) => {
    const hrefMatch = match[0].match(/href=["']([^"']+)["']/i);
    const mediaMatch = match[0].match(/media=["']([^"']+)["']/i);
    return {
      href: hrefMatch ? hrefMatch[1] : null,
      media: mediaMatch ? mediaMatch[1] : null,
    };
  })
  .filter((link): link is { href: string; media: string | null } => !!link.href);

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {links.map((link) => (
        <link
          key={`${link.href}-${link.media ?? "all"}`}
          rel="stylesheet"
          href={link.href}
          media={link.media ?? undefined}
        />
      ))}
      {styles.map((style, index) => (
        <style
          // Inline CSS copied from the archived HTML for pixel match.
          key={`legacy-style-${index}`}
          dangerouslySetInnerHTML={{ __html: style }}
        />
      ))}
    </>
  );
}
