import fs from "fs";
import path from "path";

const htmlSource = fs.readFileSync(
  path.join(process.cwd(), "virtualcoffee-code.txt"),
  "utf8"
);

const bodyMatch = htmlSource.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const rawBody = bodyMatch ? bodyMatch[1] : htmlSource;
const sanitizedBody = rawBody.replace(/<script[\s\S]*?<\/script>/gi, "");

export default function HomePage() {
  return <div dangerouslySetInnerHTML={{ __html: sanitizedBody }} />;
}
