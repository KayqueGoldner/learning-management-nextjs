"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useCarousel } from "@/hooks/useCarousel";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="landing-skeleton">
      <div className="landing-skeleton__hero">
        <div className="landing-skeleton__hero-content">
          <Skeleton className="landing-skeleton__title" />
          <Skeleton className="landing-skeleton__subtitle" />
          <Skeleton className="landing-skeleton__subtitle-secondary" />
          <Skeleton className="landing-skeleton__button" />
        </div>
        <Skeleton className="landing-skeleton__hero-image" />
      </div>

      <div className="landing-skeleton__featured">
        <Skeleton className="landing-skeleton__featured-title" />
        <Skeleton className="landing-skeleton__featured-description" />

        <div className="landing-skeleton__tags">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__tag" />
          ))}
        </div>

        <div className="landing-skeleton__courses">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__course-card" />
          ))}
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const currentImage = useCarousel({ totalImages: 3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            This is a list of the courses you can enroll in.
            <br />
            Courses when you need them and want them.
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Search for courses</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Hero banner ${index + 1}`}
              fill
              priority={index === currentImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`landing__hero-image ${index === currentImage ? "landing__hero-image--active" : ""}`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="landing__featured"
      >
        <h2 className="landing__featured-title">Featured courses</h2>
        <p className="landing__featured-description">
          From beginner to advanced, in all industries, we have the right
          courses just for you and preparing your entire journey for learning
          and making the most.
        </p>

        <div className="landing__tags">
          {["web development", "enterprise IT", "IA", "web designer"].map(
            (tag, index) => (
              <span key={index} className="landing__tag">
                {tag}
              </span>
            ),
          )}
        </div>

        <div className="landing__courses">{/* TODO: courses list */}</div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;