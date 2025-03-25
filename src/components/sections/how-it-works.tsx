import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { ArrowRightLeft, BarChart3, Share2 } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Connect Your VAPI Keys",
    content:
      "Easily connect your voice AI systems to AgentiCaller through our simple integration process. We support all major voice AI platforms and can be set up in minutes.",
    image: "/vapi-keys.png",
    icon: <ArrowRightLeft className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Analyze Your Metrics",
    content:
      "Define the metrics that matter most for each voice agent and client. Track call success rates, sentiment scores, conversion metrics, or create custom KPIs unique to your clients' needs.",
    image: "/dashboard.png",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Share Branded Dashboards",
    content:
      "Provide clients with white-labeled dashboards showcasing the performance and ROI of their voice agents. Dashboards can be shared via secure links or embedded directly into your agency portal.",
    image: "/vapi-cost.png",
    icon: <Share2 className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Three simple steps to transparent voice agent analytics">
      <Features data={data} />
    </Section>
  );
}
