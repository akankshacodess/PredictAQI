import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen py-6">
      <section className="flex flex-col items-center justify-center gap-6  md:py-12 px-4 md:px-8">
        <div className="inline-block max-w-2xl text-center justify-center">
          <span className={title()}>Real Time&nbsp;</span>
          <span className={title({ color: "violet" })}>Air Quality&nbsp;</span>
          <br />
          <span className={title()} style={{ lineHeight: "2" }}>
            Reporting System
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Monitoring Pollution Levels for a Healthier Tomorrow.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              // color: "primary",
              className: "bg-blue-500 text-white",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Result
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <div className="items-center">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              className: "bg-gray-300 text-black",
              variant: "shadow",
            })}
            href={siteConfig.links.predict}
          >
            Check AQI Prediction Here
          </Link>
        </div>

        {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
      </section>
    </div>
  );
}
