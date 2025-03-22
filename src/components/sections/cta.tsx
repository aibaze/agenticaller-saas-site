import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Ready to transform your voice agent reporting?"
      subtitle="Start using our completely free platform to show clients the true value of your voice AI."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
         href={siteConfig.ctaLink}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
        {/*   <Icons.logo className="h-6 w-6" /> */}
          Get Started Free
        </Link>
        <Link
          href={siteConfig.calendarLink}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full sm:w-auto"
          )}
        >
Let&apos;s talk
        </Link>
      </div>
    </Section>
  );
}
