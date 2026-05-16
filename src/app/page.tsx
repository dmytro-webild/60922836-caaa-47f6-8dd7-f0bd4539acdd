"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Award, Users, MapPin, BriefcaseBusiness } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Lindkvist Services"
          navItems={[
            { name: "Tjänster", id: "services" },
            { name: "Om oss", id: "about" },
            { name: "Kontakt", id: "contact" },
          ]}
          button={{ text: "Kontakta oss", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Vi bygger din digitala framgång"
          description="Lindkvist Services hjälper företag i Blekinge att synas digitalt. Vi skapar moderna, snabba och konverterande hemsidor som hjälper ditt företag att växa."
          tag="Webbyrå i Karlshamn"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Starta projekt", href: "#contact" },
            { text: "Våra tjänster", href: "#services" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-her-colleagues-brainstorming-while-using-desktop-pc-office_637285-2664.jpg", imageAlt: "Webbdesign projekt" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-office-desk-with-growth-chart-laptop_23-2148780610.jpg", imageAlt: "Digital strategi" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/responsive-design-layout-software-concept_53876-124325.jpg", imageAlt: "Responsiv layout" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-career-guidance-items-designers_23-2149443503.jpg", imageAlt: "Modern UI" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Våra Tjänster"
          description="Vi levererar skräddarsydda digitala lösningar för ditt företag."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Webbutveckling",              description: "Vi bygger moderna hemsidor med fokus på användarvänlighet och hastighet.",              bentoComponent: "reveal-icon",              icon: Monitor,
            },
            {
              title: "SEO",              description: "Bli hittad på Google. Vi optimerar din hemsida för bättre synlighet.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["SEO", "Sökordsanalys", "Google Rank", "Lokal synlighet"],
            },
            {
              title: "Digital Närvaro",              description: "Vi hjälper dig med grafisk profil och digital branding.",              bentoComponent: "reveal-icon",              icon: Zap,
            },
          ]}
        />
        <MetricCardOne
          title="Varför välja oss?"
          description="Vi sätter kunden i fokus och levererar kvalitet som ger resultat."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "local", value: "Lokal", title: "Baserade i Karlshamn", description: "Vi finns nära dig på Elvsbergsvägen 2D", icon: MapPin },
            { id: "trust", value: "Trygghet", title: "Organisationsnummer", description: "051201-4671", icon: Shield },
            { id: "support", value: "Support", title: "Personlig service", description: "Vi finns här för ditt företag", icon: Users },
          ]}
        />
        <FaqBase
          title="Vanliga frågor"
          description="Har du funderingar? Här hittar du svaren."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "Var finns ni?", content: "Vi finns fysiskt på Elvsbergsvägen 2D, Bv, 37441 Blekinge, Karlshamn." },
            { id: "2", title: "Hur kontaktar jag er?", content: "Du kan nå oss på telefon 0733505137 eller besöka vårt kontor." },
            { id: "3", title: "Vad innebär ert organisationsnummer?", content: "Vårt organisationsnummer är 051201-4671, vilket garanterar att vi är ett registrerat företag." },
          ]}
        />
        <ContactCTA
          tag="Kontakta oss"
          title="Redo att ta nästa steg?"
          description="Kontakta Lindkvist Services för en kostnadsfri genomgång av dina behov."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Ring oss: 0733505137", href: "tel:0733505137" },
            { text: "Besök oss i Karlshamn", href: "#" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Lindkvist Services"
          copyrightText="© 2025 Lindkvist Services | 051201-4671"
          columns={[
            {
              title: "Kontakt",              items: [
                { label: "Elvsbergsvägen 2D, Bv", href: "#" },
                { label: "37441 Karlshamn", href: "#" },
                { label: "0733505137", href: "tel:0733505137" },
              ],
            },
            {
              title: "Tjänster",              items: [
                { label: "Webbutveckling", href: "#" },
                { label: "SEO", href: "#" },
                { label: "Design", href: "#" },
              ],
            }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
