import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "AgentiCaller",
  description: "Voice AI Agent Performance Analytics for Agencies",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://site.agenticaller.com",
  keywords: ["Voice AI", "Agent Dashboard", "Analytics", "Performance Tracking", "SaaS"],
  ctaLink: "https://app.agenticaller.com",
  calendarLink:"https://calendar.app.google/SdCB8dsnamqTVUbCA",
  links: {
    email: "info.agenticaller@gmail.com",
    twitter: "https://twitter.com/agenticaller",
    discord: "https://discord.gg/agenticaller",
    github: "https://github.com/agenticaller",
    instagram: "https://instagram.com/agenticaller/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Voice Agent Analytics",
          description: "Comprehensive performance tracking for voice AI agents.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Call Performance Metrics",
            description: "Track success rates, call durations, and conversions.",
          },
          {
            href: "#",
            title: "Sentiment Analysis",
            description: "Understand customer satisfaction in real-time.",
          },
          {
            href: "#",
            title: "Agent Benchmarking",
            description: "Compare agent performance against industry standards.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Voice Agencies",
            href: "#",
            description: "Provide clients with transparent agent performance data.",
          },
          {
            title: "Enterprise Clients",
            href: "#",
            description: "Scalable analytics for large-scale voice operations.",
          },
          {
            title: "Developers",
            href: "#",
            description: "API access for custom voice agent integrations.",
          },
          {
            title: "Lead Generation",
            href: "#",
            description: "Specialized metrics for sales-focused voice agents.",
          },
          {
            title: "Customer Service",
            href: "#",
            description: "Track support resolution rates and customer satisfaction.",
          },
          {
            title: "Multi-Channel Services",
            href: "#",
            description: "Unified analytics across voice, SMS, and chat agents.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "",
    },
  ],
  pricing: [
    {
      name: "FREE FOREVER",
      href: "https://app.agenticaller.com",
      price: "$0",
      period: "month",
      features: [
        "Unlimited Voice Agents",
        "Complete Call Analytics Suite",
        "Real-time Performance Dashboard",
        "Sentiment Analysis & Conversion Tracking",
        "Client-ready Reports & Dashboards",
        "White-label Customization",
        "Multi-platform Voice Agent Support",
        "Standard Support",
      ],
      description: "Everything you need to track and showcase your voice agent performance",
      buttonText: "Get Started Free",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "What is AgentiCaller?",
      answer: (
        <span>
          AgentiCaller is a specialized analytics platform for voice AI agencies to track and measure the performance of their voice agents. Our dashboard provides comprehensive metrics and insights that agencies can share with their clients to demonstrate ROI and improve voice agent effectiveness.
        </span>
      ),
    },
    {
      question: "How can I get started with AgentiCaller?",
      answer: (
        <span>
          Getting started with AgentiCaller is simple and completely free. Sign up for an account, connect your voice agent platforms through our integration system, and immediately start monitoring performance. We offer a quick setup wizard and documentation to help you get your dashboards configured within minutes.
        </span>
      ),
    },
    {
      question: "Is AgentiCaller really free?",
      answer: (
        <span>
          Yes! AgentiCaller is 100% free with no hidden costs or premium tiers. We provide all features to all users, including unlimited voice agent tracking, white-labeled dashboards, and all analytics capabilities. No credit card is required to sign up.
        </span>
      ),
    },
    {
      question: "What voice agent platforms does AgentiCaller support?",
      answer: (
        <span>
          AgentiCaller supports all major voice AI platforms including but not limited to Claude Voice, GPT Voice, ElevenLabs, Anthropic Voice, Deepgram, and custom voice agent solutions. We&apos;re constantly expanding our integration options to support new platforms.
        </span>
      ),
    },
    {
      question: "How can agencies share dashboards with their clients?",
      answer: (
        <span>
          AgentiCaller provides white-labeled client dashboards that agencies can customize with their own branding. These dashboards can be shared via secure links, embedded in your agency portal, or accessed through our client access system with customizable permission levels.
        </span>
      ),
    },
    {
      question: "What metrics does AgentiCaller track for voice agents?",
      answer: (
        <span>
          AgentiCaller tracks comprehensive metrics including call success rates, conversation duration, task completion, customer sentiment, response accuracy, conversion rates, call volume, peak usage times, and custom defined KPIs. Our platform allows you to define what success means for each unique voice agent deployment.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
