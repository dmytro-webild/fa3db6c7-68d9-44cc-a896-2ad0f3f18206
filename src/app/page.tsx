"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Features",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Club Alda"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "radial-gradient"}}
      title="Escape to Club Alda"
      description="Surrounded by mountains, our laid-back retreat offers the perfect blend of coastal serenity and comfort."
      buttons={[
        {
          text: "Check Availability",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7434.jpg"
      imageAlt="Club Alda Hotel Resort"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Your Coastal Sanctuary"
      description="Club Alda is a 3-star gem set in the heart of Lapta. Whether you're here to visit the nearby water parks or simply enjoy the mountain views, our doors are open."
      metrics={[
        {
          value: "12m",          title: "Walk to Aqua Park"},
        {
          value: "5km",          title: "Distance to Beach"},
        {
          value: "3-Star",          title: "Hotel Rating"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-tasty-cookies-table_23-2148331686.jpg"
      imageAlt="Relaxed Hotel Interior"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Proximity to Fun",          description: "Just a short walk from Lapethos Aqua Park for family entertainment.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/colourful-plastic-slides-water-park-sunlight_1150-12378.jpg",            imageAlt: "Aqua Park"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/two-female-tourists-hold-map-find-places_1150-5739.jpg",            imageAlt: "Aqua Park Detail"}
        },
        {
          title: "Beach Access",          description: "Enjoy the Mediterranean sun, only 5km from the famous Mare Monte Beach.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-colorful-beach-huts-along-rye-shoreline_1308-189689.jpg",            imageAlt: "Mare Monte Beach"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/vintage-landscape-photo_23-2149728836.jpg",            imageAlt: "Coastal View"}
        },
        {
          title: "Exceptional Service",          description: "Our dedicated staff ensures your stay in Lapta is nothing short of exceptional.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/person-ask-receptionist-skiing-slopes_482257-76693.jpg",            imageAlt: "Staff service"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/friendly-cheerful-hotel-administrator-taking-guest-feedback-asking-about-their-stay-check-out-process-resort-staff-employees-working-front-desk-check-reception_482257-65130.jpg",            imageAlt: "Welcoming desk"}
        },
      ]}
      showStepNumbers={false}
      title="Why Choose Us"
      description="Experience personalized hospitality in a stunning mountain setting."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Comfort Rooms",          price: "Standard",          variant: "Cozy",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table_105762-2022.jpg"},
        {
          id: "p2",          name: "Dining Terrace",          price: "All Day",          variant: "Food",          imageSrc: "http://img.b2bpic.net/free-photo/summer-restaurant-mediterranean-coast-beautiful-sunset-tekirova-kemer-turkey_146671-18882.jpg"},
        {
          id: "p3",          name: "Poolside Bliss",          price: "Relax",          variant: "Fun",          imageSrc: "http://img.b2bpic.net/free-photo/swimming-pool_74190-7327.jpg"},
        {
          id: "p4",          name: "Mountain Vistas",          price: "View",          variant: "Nature",          imageSrc: "http://img.b2bpic.net/free-photo/autumn-hiking-trail_649448-738.jpg"},
        {
          id: "p5",          name: "Grand Entrance",          price: "Hotel",          variant: "Lobby",          imageSrc: "http://img.b2bpic.net/free-photo/view-luxurious-hotel-interior-space_23-2150683457.jpg"},
        {
          id: "p6",          name: "Garden Path",          price: "Nature",          variant: "Flora",          imageSrc: "http://img.b2bpic.net/free-photo/empty-outside-way-path-foliage_1253-513.jpg"},
      ]}
      title="Hotel Highlights"
      description="Take a closer look at what we have to offer."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Traveler",          company: "UK",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-middle-aged-woman-posing_344912-2831.jpg"},
        {
          id: "2",          name: "Mark R.",          role: "Guest",          company: "USA",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-walking-nature-medium-shot_23-2148970170.jpg"},
        {
          id: "3",          name: "Emily P.",          role: "Family",          company: "France",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-sits-chair-near-sea_169016-21188.jpg"},
        {
          id: "4",          name: "David W.",          role: "Adventurer",          company: "Canada",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-spend-weekend-nature-drinks-coffee-enjoy-being-fresh-air-use-binoculars-dressed-warm-casual-clothes-stands-each-other-blue-wall_273609-33668.jpg"},
        {
          id: "5",          name: "Maria L.",          role: "Soloist",          company: "Spain",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-hipster-company-friends-vacation-sitting-beach-bean-bags_285396-380.jpg"},
      ]}
      kpiItems={[
        {
          value: "154+",          label: "Happy Guests"},
        {
          value: "4.0",          label: "Star Rating"},
        {
          value: "Local",          label: "Experience"},
      ]}
      title="Guest Stories"
      description="What our guests say about their stay at Club Alda."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Is parking available?",          content: "Yes, we offer complimentary parking for our guests."},
        {
          id: "f2",          title: "Are pets allowed?",          content: "Please contact our reception desk for our pet policy."},
        {
          id: "f3",          title: "Do you offer airport transfer?",          content: "Yes, we can arrange airport transfers upon request."},
      ]}
      title="Frequently Asked"
      description="Answers to common questions regarding your stay."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Contact Us"
      title="Ready for your getaway?"
      description="Get in touch for bookings, inquiries, or special requests. We look forward to welcoming you to Club Alda."
      buttons={[
        {
          text: "Book Now",          href: "http://clubalda.traveleto.com"},
        {
          text: "+90 392 821 87 80",          href: "tel:+903928218780"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Club Alda"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
