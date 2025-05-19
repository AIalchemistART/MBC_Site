# Mystical Bible Companion

A cross-platform mobile app for seekers, mystics, and spiritually curious users. Mystical Bible Companion integrates API-powered Bible texts, mystical commentary, and actionable prompts to help users discover and apply the deeper, practical wisdom of the Bible—bridging ancient stories and modern life.

## Vision
To create a living, interactive Bible study companion that reveals the Bible’s hidden, transformative truths and empowers users to find personal meaning in every passage.

## Platforms
- iOS (Apple App Store)
- Android (Google Play)

---

## 🚀 Quickstart

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd mystical-bible-companion
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in required secrets (see below).
   - Never commit `.env` with secrets to version control.
4. **Run the app:**
   ```bash
   npx expo start
   ```

---

## ⚙️ Environment Variables

All keys and credentials must be loaded from environment variables. Example:

```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
# ...other keys
```

See `.env.example` for the full list.

---

## 🔒 Security & Privacy
- No hardcoded secrets or keys in codebase.
- Supabase permissions locked down for production (no public insert/update for commentaries).
- No mock/test data in dev or prod environments.
- API usage limited to 31 free calls per user/month.
- CAPTCHA on signup and payment forms.
- Persistent authentication via SecureStore.

---

## ♿ Accessibility
- Adjustable text size (planned)
- Text-to-speech (planned)
- Speech-to-text input (planned)
- Mobile-friendly, high-contrast UI

---

## 🛠️ Contributing
- PRs welcome! Please follow code style and add/maintain tests.
- Review the [ROADMAP.md](./ROADMAP.md) and [NEW_LAUNCHPAD.md](./NEW_LAUNCHPAD.md) before proposing new features.

---

## 📋 Production Readiness Checklist
- [ ] All secrets in env vars
- [ ] No mock/test data in prod
- [ ] Supabase permissions locked down
- [ ] Payment and CAPTCHA integrated
- [ ] Accessibility tested
- [ ] API usage limits enforced
- [ ] Documentation up to date

---

## 📚 Project Links
- [Roadmap](./ROADMAP.md)
- [Launchpad](./NEW_LAUNCHPAD.md)

---

*Ready to continue building a mystical, secure, and user-friendly app!*
