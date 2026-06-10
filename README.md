# DevLore - Master Trivia & Level Up Your Mind

A modern, gamified React quiz application where users journey through academic quests, earn experience points (XP), unlock levels, and battle for the top spot on a real-time global leaderboard.


---

## Features
### Core Functionality
- **Dynamic Quest System**: Dynamically fetches 10 targeted trivia challenges from the Open Trivia DB API.
- **Session-Scoped Authentication**: Seamless username initialization that protects individual user states and clears sessions on tab closures.
- **Sandboxed Progress Tracking**: Complete data isolation using user-specific local storage scopes to prevent multi-user data bleeding.
- **Real-Time Leaderboard**: A cross-tab synchronized competitive ranking matrix sorting users by Level and tie-breaking XP.
- **Comprehensive Analytics**: Dashboard tracking featuring total quests completed, fluid average scores, and automated best category calculations.

### Quiz Mechanics
- **Diverse Domains**: 9 unique quiz categories spanning science, history, entertainment, and sports.
- **Intensity Tiers**: 3 structural difficulty options (Relaxed/Easy, Focused/Medium, Elite/Hard).
- **Time Attack**: A 10-minute automated countdown timer badge with built-in auto-submission fallback.
- **Interactive Review**: Full post-quest question breakdowns with visual solution indicator highlights for selected vs. correct answers.

### User Experience
- **Fluid Layout**: Completely responsive, mobile-first design architecture styled dynamically via modern CSS custom scaling.
- **Visual Feedback**: Real-time progress tracking bar indicators displaying ongoing question iterations.
- **Instant Sync**: Fully integrated window storage tracking triggers to immediately update components across inactive tabs.
---

## Tech Stack
**Frontend:**
- React 18+ with declarative React Router navigation management
- Hooks architecture (`useState`, `useEffect`, layout optimization)
- Synchronized client-side web storage engine (`localStorage` & `sessionStorage`)
- Fluid, media-query optimized CSS3 configurations

**Data Source / API:**
- Open Trivia DB API (https://opentdb.com/api.php)

**Deployment & Tools:**
- Vite Bundler
- Git & GitHub
- Vercel Cloud Platform (Production Hosting)

---

## Data Structure

### Storage Schemas

#### Global Registry (`leaderboardUsers`)
```json
[
  {
    "username": "Rahul",
    "xp": 45,
    "level": 2,
    "createdAt": "6/10/2026"
  },
  {
    "username": "CodeNinja",
    "xp": 120,
    "level": 3,
    "createdAt": "6/10/2026"
  }
]
```

#### User Session Context (currentUser)
```json
{
  "username": "Rahul",
  "xp": 45,
  "level": 2,
  "createdAt": "6/10/2026"
}
```

#### Isolated Performance History (quizHistory_[username])
```json
[
  {
    "score": 6,
    "totalQuestions": 10,
    "category": "Science: Mathematics",
    "difficulty": "easy",
    "timeStamp": "1.17",
    "attempted": 10,
    "date": "6/10/2026"
  }
]
```

#### Isolated Snapshot Result (latestResult_[username])
```json
{
  "score": 6,
  "totalQuestions": 10,
  "questions": [/* 10 fetched question objects */],
  "timeStamp": "1.17",
  "attempted": 10,
  "selectedOption": { "0": "Algebra", "1": "Geometry" },
  "category": "Science: Mathematics",
  "difficulty": "easy",
  "date": "6/10/2026"
}
```

---

## How to Play

1. **Initialize Session**: Enter a unique username on the portal gateway screen.
2. **Select Focus**: Pick your category domain and assign an operational intensity tier.
3. **Run the Quest**: Complete the 10 loaded questions before the countdown timer hits `00:00`.
4. **Evaluate Results**: Check out your score ring, check details, and review the corrected solution options.
5. **Climb Rankings**: Amass structural experience payouts to push your global academy level standing higher.

---

## Progression Metrics

* **Easy Intensity**: +10 Base XP per correct choice $\times$ 1 Multiplier (Up to 100 XP per match).
* **Medium Intensity**: +10 Base XP per correct choice $\times$ 2 Multiplier (Up to 200 XP per match).
* **Hard Intensity**: +10 Base XP per correct choice $\times$ 3 Multiplier (Up to 300 XP per match).
* **Milestone Threshold**: Every 100 accumulative XP triggers an immediate character level upgrade.

---

## Key Implementations

### Sandboxed Web Storage Wrapper

```javascript
const Storage = {
  get: (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Failed to parse stored data", error);
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        console.error("Storage quota exceeded");
      }
      return false;
    }
  }
};
```

### Tab Close Event Cleanup

``` javascript
useEffect(() => {
  const handleTabClose = () => {
    Storage.set("currentUser", null);
  };
  window.addEventListener("beforeunload", handleTabClose);
  return () => window.removeEventListener("beforeunload", handleTabClose);
}, []);
```

---

## Learnings & Best Practices

This project demonstrates:

**React Fundamentals**
- Component composition
- Hooks (useState, useEffect)
- React Router navigation
- State management patterns

**API Integration**
- Fetching from external APIs
- Error handling
- Data transformation (HTML entity decoding)
- Answer shuffling algorithms

**Data Persistence**
- localStorage implementation
- User session management
- Data structure design

**User Experience**
- Responsive design
- Real-time updates
- Progress indicators
- Clear user feedback

**Code Organization**
- File structure
- Component separation
- Utility functions
- Consistent naming

---

## Resources Used

- [React Documentation](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Open Trivia DB API](https://opentdb.com/api_config.php)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)

---

## License

This project is open source and available under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Open Trivia Database for the free API
- React and web dev communities
- All users who test and provide feedback

---

## Stats

- **Language**: JavaScript (React)
- **Lines of Code**: ~3,500
- **Components**: 15
- **Pages**: 6

---

**Last Updated**: June 2025  
**Current Version**: 1.0.0  
**Status**: Production Ready ✅

