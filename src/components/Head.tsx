import React from 'react';
import { Helmet } from 'react-helmet-async';

export function Head() {
  return (
    <Helmet>
      <title>Avalu Appraisals | Modern Property Valuation Solutions</title>
      <meta name="description" content="Avalu Appraisals delivers innovative property valuation solutions with cutting-edge technology and expert certified appraisers. Fast, accurate, and fully compliant residential and commercial appraisal services." />
      <meta name="keywords" content="property valuation, residential appraisal, commercial appraisal, real estate appraisal, appraisal technology, certified appraisers, property assessment" />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Avalu Appraisals" />
      <meta property="og:title" content="Modern Property Valuation Solutions" />
      <meta property="og:description" content="Leading the future of property valuation with innovative technology and expert certified appraisers." />
      <meta property="og:image" content="https://i.ibb.co/8784jqK/logo-removebg.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://avaluamc.com" />
      
      {/* Apple-specific meta tags for iMessage */}
      <meta name="apple-mobile-web-app-title" content="Avalu Appraisals" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Avalu Appraisals | Modern Property Valuation" />
      <meta name="twitter:description" content="Leading the future of property valuation with innovative technology and expert certified appraisers." />
      <meta name="twitter:image" content="https://i.ibb.co/8784jqK/logo-removebg.png" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Avalu Appraisals" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0dc7c4" />
      <meta name="geo.region" content="US" />
      
      {/* Schema.org markup for rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Avalu Appraisals",
          "description": "Modern property valuation solutions with cutting-edge technology and expert certified appraisers.",
          "image": "https://i.ibb.co/8784jqK/logo-removebg.png",
          "telephone": "+17862588479",
          "email": "contact@avaluamc.com",
          "url": "https://avaluamc.com",
          "sameAs": ["https://www.linkedin.com/company/avalu-amc/"],
          "priceRange": "$$",
          "serviceType": ["Residential Appraisal", "Commercial Appraisal"],
        })}
      </script>
      
      <link rel="canonical" href="https://avaluamc.com" />
    </Helmet>
  );
}