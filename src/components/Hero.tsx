import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-36 md:gap-16">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Catch up{" "}
            <span className="inline bg-gradient-to-r from-[#F2A98C]  to-[#E07A5F] text-transparent bg-clip-text">
              Faster
            </span>
          </h1>{" "}
          on{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#834C85] to-[#581E59] text-transparent bg-clip-text">
              Slack
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Find out what you need to know across Slack without reading hundreds of messages.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://slack.com/oauth/v2/authorize?client_id=7919030236097.7919041957041&scope=app_mentions:read,channels:history,channels:read,chat:write,chat:write.customize,commands,files:read,im:history,im:read,im:write,links:read,users:read,users:read.email&user_scope="
            className="inline-block"
          >
            <img
              alt="Add to Slack"
              src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
            />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
