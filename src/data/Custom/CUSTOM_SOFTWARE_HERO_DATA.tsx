import { 
  MonitorSmartphone, 
  Zap, 
  CalendarCheck, 
  Users 
} from "lucide-react";

export const CUSTOM_SOFTWARE_HERO_DATA = {
  title: "Custom Software Development", 
  subHeadline: "Build Enterprise-Grade Applications Tailored to Your Unique Business Needs",
  
  valueProps: [
    {
      icon: MonitorSmartphone,
      text: "Full-stack development expertise (web, mobile, desktop)"
    },
    {
      icon: Zap,
      text: "Agile methodology with 2-week sprint cycles"
    },
    {
      icon: CalendarCheck,
      text: "98% on-time delivery across 1000+ projects"
    },
    {
      icon: Users,
      text: "Dedicated teams with domain expertise"
    }
  ],
  
  cta: {
    primary: "Discuss Your Project",
    secondary: "View Development Portfolio"
  }
};