# Hybrid Commentary Storage Implementation Plan

## 1. Hosting Logic Recommendation

**Supabase** is recommended for this project due to its:
- Open-source nature and generous free tier
- Easy Postgres database with REST/GraphQL APIs
- Simple integration with React Native

Alternatives like Firebase or MongoDB Atlas are viable, but Supabase offers a modern, developer-friendly experience and is well-suited for SQL-like querying and scalable growth.

---

## 2. Hybrid Commentary Storage: Implementation Plan

### A. Database Schema (Supabase)
- **Table:** `commentaries`
  - `id` (UUID, primary key)
  - `book` (string)
  - `chapter` (int)
  - `verse` (int)
  - `commentary` (text/JSON)
  - `created_at` (timestamp)
  - (Optional: `updated_at`, `author`, etc.)

### B. API Logic
- **Read:**
  - Query Supabase for commentary by book/chapter/verse.
  - If found, return result.
- **Write:**
  - If not found, generate commentary (API/LLM), store in Supabase, and return.
  - (Optionally, restrict writes to admin/backend for moderation.)

### C. App Logic (React Native)
1. **On Commentary Request:**
   - Check local storage (AsyncStorage/MMKV/SQLite) for commentary.
   - If found, display immediately.
   - If not found, call Supabase API.
     - On success, store in local DB and display.
     - On failure, show error to user.
2. **Local Storage Layer:**

---

### D. TODO: Commentary Cache Management
- Implement cache pruning/eviction for AsyncStorage commentary cache.
- Target: Keep a maximum of 500–1000 entries or 5MB total size.
- Use LRU (Least Recently Used) or similar policy.
- Prune on app startup or periodically.
- **Rationale:** Prevent unbounded local storage growth for power users or edge cases.

   - Use a simple key (e.g., `commentary:Genesis:1:1`) for fast lookup.
   - Store commentary text/JSON for offline use.
3. **Sync/Update Logic:**
   - Optionally, add a “refresh” or background sync to update local cache from Supabase.
   - Handle versioning if you plan to update commentaries globally.

### D. Security & Cost Control
- Use Supabase Row Level Security (RLS) to allow only safe read/write operations.
- Monitor usage with Supabase’s dashboard.
- Set up alerts for usage/cost thresholds.

### E. Testing
- Unit tests for local storage logic.
- Integration tests for Supabase API calls.
- Manual tests for offline/online scenarios.

---

## 3. Step-by-Step Implementation Outline

1. **Set up Supabase Project & Table**
   - Create a new project at [supabase.com](https://supabase.com).
   - Set up the `commentaries` table as above.
   - Configure API keys and Row Level Security.

2. **Install Supabase Client in Your App**
   - `npm install @supabase/supabase-js`
   - Store your Supabase URL and anon key securely.

3. **Create Commentary Service/Hook**
   - Handles: local lookup, Supabase fetch, optional write, error handling, and caching.
   - Example: `useCommentary(book, chapter, verse)`

4. **Integrate with Screens**
   - Replace all direct fetch logic in screens with the new service/hook.
   - Show loading, error, and offline states as needed.

5. **Testing & QA**
   - Write tests for all edge cases.
   - Manually test offline/online, first-load, and repeat-access flows.

6. **Monitor & Optimize**
   - Watch Supabase usage/costs.
   - Optimize queries and caching as needed.

---

## 4. Optional: Scaffolding for Future Upgrades
- Design your commentary service to allow easy swapping of storage backends (e.g., if you want to migrate from Supabase to Firebase or your own server).
- Keep all DB/API logic in one place for maintainability.

---

## 5. Production Database Enhancements (Ranked)

1. **Indexing & Query Optimization** _(Immediate)_
   - Add indexes on `book`, `chapter`, `start_verse`, `end_verse`, `anchor_verse`.
   - Consider composite indexes for common queries.
2. **Data Integrity & Uniqueness** _(Immediate)_
   - Unique constraint on (`book`, `chapter`, `start_verse`, `end_verse`, `anchor_verse`).
   - Validate all incoming data.
3. **Security & Access (RLS, API keys, rate limiting)** _(Immediate)_
   - Use Supabase Row Level Security (RLS), secure API keys, and rate limiting.
4. **Backup & Recovery** _(Immediate)_
   - Enable automated backups and test recovery procedures.
5. **Storage & Retention**
   - Monitor table size and implement pruning/retention tools as needed.
6. **Versioning & Edits**
   - Add version/history fields if commentary edits are allowed.
7. **Analytics & Usage Tracking**
   - Track commentary accesses, add feedback/like counters.
8. **Scalability**
   - Plan for read replicas and monitor Supabase limits as userbase grows.

**Immediate items** are recommended for launch or pre-launch. Others can be scheduled for post-launch or as features require.

---

## App Features

### Required for Launch (V1)
- Payments & authentication (one-time upgrade, secure payment, feature gating)
- Bookmarks & Journal tab implementation (ensure bookmarks for paid, journal for all)
- About tab/section (vision, philosophy, feedback)
- Free/Paid tier feature access (gate features, upgrade prompts, UI separation)

### Future Features (V2+)
- Design your commentary service to allow easy swapping of storage backends (e.g., if you want to migrate from Supabase to Firebase or your own server).
- Keep all DB/API logic in one place for maintainability.

---

*Proceed step-by-step, following best practices for modularity, DRY code, and test coverage. Adjust the plan as needed based on real-world feedback and growth.*
