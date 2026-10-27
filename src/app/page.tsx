import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteNav } from "@/components/site-nav";
import { Events } from "@/components/sections/events";
import { Faq, Footer, Rsvp } from "@/components/sections/faq-rsvp";
import { Hero } from "@/components/sections/hero";
import { Invitation } from "@/components/sections/invitation";
import { Engagement, Story } from "@/components/sections/story";
import { Explore, GettingThere, Stay } from "@/components/sections/travel";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Story />
        <Engagement />
        <Invitation />
        <Events />
        <GettingThere />
        <Stay />
        <Explore />
        <Faq />
        <Rsvp />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
