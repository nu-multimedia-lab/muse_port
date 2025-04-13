"use client";

import React from "react";
import { HeroSection } from "@/components/features/home/HeroSection";
import { FeaturedWorksSection } from "@/components/features/home/FeaturedWorksSection";
import { CategoryNavSection } from "@/components/features/home/CategoryNavSection";
import { ClubIntroSection } from "@/components/features/home/ClubIntroSection";
import { NewsSection } from "@/components/features/home/NewsSection";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedWorksSection />
      <CategoryNavSection />
      <ClubIntroSection />
      <NewsSection />
    </main>
  );
};

export default Home;
