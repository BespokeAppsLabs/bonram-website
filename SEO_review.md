# Bonram Website SEO Review

**Date:** June 24, 2026
**Overall Rating:** 8.5 / 10 (Very Good)

This document contains a technical SEO review of the Bonram (Pty) Ltd Next.js website. The implementation demonstrates a strong, modern approach to technical SEO, covering almost all critical bases for a local B2B service company.

## Strengths (What is implemented well) 🏆

1. **Robust Next.js Metadata API Usage:** 
   The application properly utilizes the Next.js `metadata` object in both `app/layout.tsx` and `app/page.tsx`. Setting up a `title.template` (`"%s | Bonram (Pty) Ltd"`) in the root layout ensures consistent branding across all page titles. OpenGraph and Twitter cards are also configured correctly.
   
2. **Excellent Structured Data (JSON-LD):** 
   The custom, XSS-safe `JsonLd` component (`components/seo/JsonLd.tsx`) is a great implementation. Injecting a comprehensive `LocalBusiness` schema in the root layout that includes contact points, a physical address, service areas (`areaServed`), and an `OfferCatalog` of services is top-tier for local SEO. This directly helps search engines understand the business, operating locations, and offerings.

3. **Smart Sitemap Strategy (`sitemap.ts`):** 
   Generating a dynamic sitemap that maps over service routes and location slugs is the correct approach. Hardcoding the `lastModified` date (with a comment explaining why `new Date()` should be avoided) shows advanced technical SEO knowledge. It prevents "fake freshness" signals that search engines penalize.

4. **Font Optimization:** 
   Using `next/font/google` (`Inter`) with `display: "swap"` is excellent for Core Web Vitals, specifically helping to improve the Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).

5. **Local SEO Silos:** 
   The presence of a `[location]` dynamic route indicates a localized content strategy, which is critical for a company with multiple national offices.

## Areas for Improvement (Recommendations) 🛠️

> [!TIP]
> Implementing the following recommendations will further solidify the website's technical SEO foundation.

1. **Add Explicit Canonical URLs:** 
   While Next.js handles routing well, it's a best practice to explicitly declare canonical URLs to prevent duplicate content issues (e.g., from query parameters or trailing slashes). This should be added to the metadata:
   ```typescript
   alternates: {
     canonical: 'https://www.bonram.co.za', // Should be dynamic per page
   }
   ```

2. **Remove Meta Keywords:** 
   In `layout.tsx`, there is a `keywords` array. As noted in the codebase comments, Google has ignored this tag since 2009. While it doesn't harm rankings, it adds unnecessary bytes to the document head and allows competitors to easily see targeted terms. It is recommended to remove this entirely.

3. **Dynamic Metadata for Services and Locations:**
   Ensure that dynamic routes (like `app/[location]/page.tsx` and `app/services/[slug]/page.tsx`) use the `generateMetadata` function instead of static `metadata`. Each location and service page must have a highly specific, unique `<title>` and `<meta description>`.

4. **Breadcrumb Schema:** 
   While the `LocalBusiness` schema is excellent, adding `BreadcrumbList` schema helps search engines understand the hierarchy of the site (e.g., Home > Services > Logistics) and often results in rich breadcrumb snippets in search results.

5. **Verify On-Page Semantic HTML:**
   Ensure components (like `<Hero />`, `<ServicesGrid />`, etc.) use semantic HTML tags (`<section>`, `<article>`, `<aside>`) and strictly maintain a logical heading structure (only one `<h1>` per page, followed by `<h2>`, `<h3>`, without skipping levels). Additionally, ensure all images within these components use the `<Image>` tag with descriptive `alt` text.
