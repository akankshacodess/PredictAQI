import { button as buttonStyles } from "@nextui-org/theme";
import { title } from "@/components/primitives";
import Image from "next/image";
import clsx from "clsx";
import { GithubIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div className="px-4">
      <h1 className="inline text-4xl font-semibold">Our Project</h1>
      <div className="min-h-screen">
        {/* Introduction Section */}
        <div
          className={clsx(
            "flex flex-col md:flex-row items-center",
            "bg-background shadow-lg p-6 rounded-lg min-h-svh",
            "hover:shadow-xl transition-shadow"
          )}
        >
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/images/intro.jpg"
              alt="introduction"
              className="rounded-lg shadow-md"
              width={500}
              height={300}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="font-bold text-2xl mb-4 text-primary">
              Introduction
            </h2>
            <p className="text-secondary-foreground">
              Air pollution poses significant threats to public health and the
              environment, making accurate prediction of pollutant levels a
              critical task for urban planning, policy-making, and health
              advisories. With advances in machine learning, deep learning
              models like LSTM (Long Short-Term Memory) and GRU (Gated Recurrent
              Unit) have shown promise in forecasting time series data. This
              project utilizes these models to predict concentrations of key air
              pollutants such as Ozone, CO, SO2, NO2, PM10, and PM2.5, aiming to
              provide reliable forecasts based on historical air quality data.
            </p>
          </div>
        </div>

        {/* Problem Section */}
        <div
          className={clsx(
            "flex flex-col md:flex-row-reverse items-center",
            "bg-background shadow-lg p-6 rounded-lg min-h-svh",
            "hover:shadow-xl transition-shadow"
          )}
        >
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/images/problem.jpg"
              alt="problem"
              className="rounded-lg shadow-md"
              width={500}
              height={300}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="font-bold text-2xl mb-4 text-primary">
              Problem We Faced
            </h2>
            <p className="text-secondary-foreground">
              Air quality forecasting is a complex problem influenced by
              numerous factors, including previous pollutant levels and
              environmental variables. Traditional statistical models often fail
              to capture the temporal dependencies and nonlinear patterns
              present in air quality data. This challenge calls for the
              development of more advanced models that can learn from historical
              data to predict future pollutant concentrations with high
              accuracy, enabling proactive measures to mitigate health risks and
              environmental damage.
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div
          className={clsx(
            "flex flex-col md:flex-row items-center",
            "bg-background shadow-lg p-6 rounded-lg min-h-svh",
            "hover:shadow-xl transition-shadow"
          )}
        >
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/images/solution.png"
              alt="solution"
              className="rounded-lg shadow-md"
              width={500}
              height={300}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="font-bold text-2xl mb-4 text-primary">Solution</h2>
            <p className="text-secondary-foreground">
              To address this issue, the project implements deep learning
              models, specifically LSTM and GRU, to learn from historical
              sequences of air pollutant data and forecast future levels. The
              models are trained and evaluated on a comprehensive air quality
              dataset, using a sequence length of 30 days to capture temporal
              dependencies. The data is preprocessed using MinMax scaling, and
              model performance is assessed using metrics like Mean Absolute
              Error, Root Mean Squared Error, and R-squared. The results
              indicate the models&apos; effectiveness in forecasting pollutant
              levels, with GRU showing slightly better performance in capturing
              patterns compared to LSTM.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center pb-10 m-5">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
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
    </div>
  );
}
