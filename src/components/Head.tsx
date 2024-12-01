import React from 'react';
import { Helmet } from 'react-helmet-async';

export function Head() {
  return (
    <Helmet>
      <title>Avalu AMC - Professional Appraisal Management Services</title>
      <meta name="description" content="Avalu AMC delivers accurate, timely, and compliant property valuations nationwide through our network of certified appraisers. Expert residential and commercial appraisal services." />
      <meta name="keywords" content="appraisal management company, property valuation, residential appraisal, commercial appraisal, real estate appraisal" />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Avalu AMC - Professional Appraisal Management Services" />
      <meta property="og:description" content="Expert appraisal management services delivering accurate and compliant property valuations nationwide." />
      <meta property="og:image" content="https://i.ibb.co/8784jqK/logo-removebg.png" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Avalu Appraisal Management Company" />
      <link rel="canonical" href="https://avaluamc.com" />
    </Helmet>
  );
}