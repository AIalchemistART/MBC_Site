# Production Readiness Checklist

- [ ] All secrets in environment variables (no hardcoded keys)
- [ ] No mock/test data in dev or prod
- [ ] Supabase permissions locked down (no public insert/update for commentaries)
- [ ] Payment and CAPTCHA integrated (signup: invisible, payment: visible)
- [ ] Accessibility tested (text size, TTS, speech input)
- [ ] API usage limits enforced (31/month)
- [ ] Documentation up to date and accurate
- [ ] Security/privacy audit complete
- [ ] Beta tested on emulator and real devices

*Use this checklist before any production deploy!*
