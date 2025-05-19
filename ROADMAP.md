# Mystical Bible Companion – Production Roadmap

---

## **V1: Production Launch Roadmap (Required for Launch)**

### **1. Free Features**
- Bible reader (all books/chapters/verses) is free for all users
- Journal notes feature is free for all users
- Free users can access mystical commentary for Genesis 1 and Matthew 1 (all individual verses)

### **2. Paid Upgrade ($4.99 One-Time Fee)**
- Unlock unlimited mystical commentary for all passages (paid users only)
- Bookmarking (paid users only)
- Upgrade prompt and paid version button on home page
- Secure payment/authentication with CAPTCHA (no user profiles/settings required)

### **3. Commentary Persistence & Reuse**
- All commentary responses are stored in a database
- On passage request, check DB before calling the API
- Reduces API calls over time (responses served from DB if available)

### **4. About Tab**
- Dedicated tab introducing the app and its vision
- Explains the mystical/heterodox philosophy and mission
- Includes a user feedback button

### **Required for Launch**
- Payments & authentication (one-time upgrade, secure payment, feature gating)
- Bookmarks & Journal tab implementation (ensure bookmarks for paid, journal for all)
- About tab/section (vision, philosophy, feedback)
- Free/Paid tier feature access (gate features, upgrade prompts, UI separation)

---

## **V2+: Future Features & Enhancements**

### **Visual & Mystical UI Enhancements**

---

## **V2: Advanced & Community Features**
- Multiple Bible translations
- API-powered word/phrase lookup (concordance)
- Community wisdom sharing (optional, privacy-respecting)
- Social Reflection Messages: leave/share insights linked to verses/themes
- Daily mystical meditations or practices
- Integration with popular note-taking apps
- Customizable reading plans (mystical themes, life topics)
- Enhanced premium: Interconnected passages across chapters/books
- Admin/editor tools for reviewing/editing commentaries

---

## **V3+: Expansion & Ongoing**
- AI-powered “read between the lines” insights (allegorical/metaphorical)
- Advanced mystical commentary personalization
- Regular updates for OS compatibility
- User feedback loop and continuous improvement
- New content and features

---

## **Feature Backlog & Ideas**
- “Living prompts” for practical application (reflection questions, action steps)
- Passage randomizer (LLM + Bible API, already partially implemented)
- Global/public commentary DB for reuse and editorial control
- Additional premium features as userbase grows

---

## **Notes**
- All visual polish and advanced UI/UX features are deferred to V2 or later, but tracked for future upgrades.
- No user profiles/settings required for V1 (simplified onboarding and payment).
- Free to try, paid for full mystical commentary and bookmarking.
- This roadmap supersedes previous versions; any unique items from the old roadmap not present above should be reviewed and integrated as needed.

---

## **Visual & Mystical UI Enhancements**
> **Context:**
> The visual language of the Mystical Bible Companion is an evolving, central pillar of the user experience. This context box tracks all visual polish steps, mystical UI elements, and advanced effects added or planned for the app.

- Extend mystical style to all screens
- Custom icons (Christian, mystical, alchemical)
- Gradients, SVG overlays, and animated filigree
- Antiqued gilded navigation headers (Cardo font, gold gradients, layered shadow, metallic edge)
- Animated gold highlights and shimmering effects on navigation and buttons
- Gold gradients and metallic textures for text and icons
- SVG or image overlays for mystical motifs (stars, filigree, alchemy, etc.)
- Responsive, mobile-first layout with mystical branding
- Accessibility: ensure all effects maintain high contrast and legibility
- **Navigation Transition Animation Possibilities:**
  - Custom transition animations for navigation (fade, slide, etc.)
  - Use of React Navigation's TransitionPresets
  - Shared element transitions (e.g. react-navigation-shared-element)
  - Smoother header/title transitions to reduce flash
  - Explore future mystical transition effects (e.g. shimmering/fade overlays)
- Future: advanced mystical effects (animated backgrounds, interactive filigree, dynamic light rays, etc.)

---

## **App Store Readiness**
- Beta testing (TestFlight, Google Play Beta)
- App Store & Google Play submission (documentation, screenshots, privacy policy)
- Marketing launch (website, social media, outreach)

---

## **V2: Advanced & Community Features**
- Multiple Bible translations
- API-powered word/phrase lookup (concordance)
- Community wisdom sharing (optional, privacy-respecting)
- Social Reflection Messages: leave/share insights linked to verses/themes
- Daily mystical meditations or practices
- Integration with popular note-taking apps
- Customizable reading plans (mystical themes, life topics)
- Enhanced premium: Interconnected passages across chapters/books
- Admin/editor tools for reviewing/editing commentaries

---

## **V3+: Expansion & Ongoing**
- AI-powered “read between the lines” insights (allegorical/metaphorical)
- Advanced mystical commentary personalization
- Regular updates for OS compatibility
- User feedback loop and continuous improvement
- New content and features

---

## **Feature Backlog & Ideas**
- “Living prompts” for practical application (reflection questions, action steps)
- Passage randomizer (LLM + Bible API, already partially implemented)
- Global/public commentary DB for reuse and editorial control
- Additional premium features as userbase grows

---

## **Notes**
- Features are prioritized for best-practices delivery: foundational (auth, data), core experience, payment, persistence, polish, then advanced/community.
- Any features not critical for initial launch are deferred to V2/V3 for a focused, stable MVP.
- This roadmap supersedes previous versions; any unique items from the old roadmap not present above should be reviewed and integrated as needed.

---

## Security Checklist: Supabase Permissions
- Before production launch, restrict Supabase `insert` and `update` permissions on the `commentaries` table to admin or backend only.
- Remove or tighten any public insert/update policies used for development/testing.
- Test that no unauthorized client/app can write or modify commentaries after launch.
