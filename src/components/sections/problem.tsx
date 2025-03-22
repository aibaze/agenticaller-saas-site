import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Shield, Phone } from "lucide-react";

const problems = [
  {
    title: "Lack of Performance Visibility",
    description:
      "Voice agencies struggle to demonstrate the ROI and effectiveness of their AI agents to clients without clear, accessible performance metrics.",
    icon: BarChart3,
  },
  {
    title: "Client Transparency Issues",
    description:
      "Without dedicated dashboards, clients have no visibility into how their voice agents are performing, leading to trust issues and uncertainty.",
    icon: Shield,
  },
  {
    title: "Complex Voice Analytics",
    description:
      "Voice agents generate complex interaction data that's difficult to track, measure, and present in a way that demonstrates clear business value.",
    icon: Phone,
  },
];

export default function Component() {
  return (
    <Section
      title="The Challenge"
      subtitle="Voice Agencies Need Better Client Analytics"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
