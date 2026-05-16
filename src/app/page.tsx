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
      brandName="Club Alda Hotel"
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778951928314-2xquzkfv.jpg"
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778951945632-pnrxe3r0.jpg"
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
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778951957996-uasr7jcz.jpg",            imageAlt: "Aqua Park"},
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952229702-wwgu0o7f.jpg",            imageAlt: "Aqua Park Detail"}
        },
        {
          title: "Beach Access",          description: "Enjoy the Mediterranean sun, only 5km from the famous Mare Monte Beach.",          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778951968290-mn96h00o.jpg",            imageAlt: "Mare Monte Beach"},
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952239838-kl6e8t05.jpg",            imageAlt: "Coastal View"}
        },
        {
          title: "Exceptional Service",          description: "Our dedicated staff ensures your stay in Lapta is nothing short of exceptional.",          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952208010-l6y72sdp.jpg",            imageAlt: "Staff service"},
          phoneTwo: {
            imageSrc: "https://img.b2bpic.net/free-photo/hotel-guest-entering-reception-with-luggage-travelling-abroad-attend-important-business-meetings-entrepreneur-approaching-front-desk-check-booking-accommodation-close-up_482257-65305.jpg?id=53000719",            imageAlt: "Welcoming desk"}
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
          id: "p1",          name: "Comfort Rooms",          price: "Standard",          variant: "Cozy",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952295954-n7bhgzrz.jpg"},
        {
          id: "p2",          name: "Dining Terrace",          price: "All Day",          variant: "Food",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952409885-7q53i17j.jpg"},
        {
          id: "p3",          name: "Poolside Bliss",          price: "Relax",          variant: "Fun",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952420780-9g5m1g8m.jpg"},
        {
          id: "p4",          name: "Mountain Vistas",          price: "View",          variant: "Nature",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952438717-k1mft2wc.jpg"},
        {
          id: "p5",          name: "Grand Entrance",          price: "Hotel",          variant: "Lobby",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952617759-kvp9hqrj.jpg"},
        {
          id: "p6",          name: "Garden Path",          price: "Nature",          variant: "Flora",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952631655-mro7tdvf.jpg"},
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
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952496966-pi3zkljm.png"},
        {
          id: "2",          name: "Mark R.",          role: "Guest",          company: "USA",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952496966-pi3zkljm.png"},
        {
          id: "3",          name: "Emily P.",          role: "Family",          company: "France",          rating: 4,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do3l1ShNQWHbImSzzoeNWne4vb/uploaded-1778952496966-pi3zkljm.png"},
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
