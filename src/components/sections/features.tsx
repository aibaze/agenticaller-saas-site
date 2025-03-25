import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Headphones, FileText, MessageSquareText } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Call Performance Tracking",
    content: "Monitor success rates, duration, and outcomes of all voice agent interactions.",
    image: "/vapi-cost.png",
    icon: <Headphones className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    content: "Understand customer reactions and satisfaction levels during voice interactions.",
    image: "/vapi-summary.png",
    icon: <MessageSquareText className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Conversion Analytics",
    content: "Track how effectively voice agents convert leads and accomplish business goals.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Client-Ready Reports",
    content: "Generate branded reports that showcase voice agent ROI to your clients.",
    image: "/vapi-cost.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Key Features" subtitle="Powerful Voice Agent Analytics Made Simple">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
