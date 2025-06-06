# 🐶 Dog App – Monorepo Structure
A scalable mono-repo structure for your Dog Breed Web + Mobile Application using React, Vite, Expo, and Shared TypeScript logic.

---

## Project Structure 📁 

```folderLayout
dog-app/
        ├── app/                                  ---### All navigation/screens/routes (Expo Router) ###---
                ├── _layout.jsx                      # Main layout: sets up tab navigation
                ├── index.jsx                        # Home (Breed listing/grid)
                ├── login.jsx                        # Auth (login page)
                ├── register.jsx                     # Auth (register page)
                ├── breed/
                │       └── [id].jsx                 # Breed details page (PROTECTED)
                ├── compare.jsx                      # Comparison (PROTECTED)
                ├── favorites.jsx                    # Favorites (PROTECTED)
                ├── search.jsx                       # Search (PROTECTED)
                ├── account.jsx                      # Account/profile (PROTECTED)
                └── quiz/
                        ├── index.jsx                # Start Dog Quiz/Matching (PROTECTED)
                        ├── [step].jsx               # Quiz steps (optional, multi-step) (PROTECTED) 
                        └── result.jsx               # Quiz result/match (PROTECTED)

        ├── components/
                ├── BreedCard.jsx                    # Breed grid/listing card (image, name, info)
                ├── LoginForm.jsx                    # Login form UI 
                ├── ProtectedRoute.jsx               # Wrapper to block/redirect unauthenticated access
                └── ...                              # More UI components

        ├── assets/                              ---### All static assets (images, icons, fonts) ###---
                ├── breedsImages/                   # All dog breed images (jpg/png, mapped by id in data)
                        ├── labrador.jpg
                        ├── germanshephered.jpg
                        ├── ...
                ├── icons/
                        ├── paw.png
                        ├── applogo.png
                        ├── heart.png
                        ├── ...
                └── fonts/

        ├── shared/                               ---### App-wide logic/data ###---
                ├── data/
                │       ├── breeds.json              # Canonical list of all breeds (with fields: id, name, image, etc)
                │       ├── traits.json              # List of breed traits (for quiz/matching)
                │       └── quiz.json                # quiz steps/questions/answers
                ├── utils/
                │       ├── compare.js               # Breed comparison logic
                │       ├── match.js                 # Matching algorithm (quiz)
                │       └── helpers.js               # General helpers (slugify, etc)
                ├── types/
                │       └── Breed.js                 # interfaces/types for breed, trait, quiz, etc...
                └── constants/
                        └── config.js                # App constants (labels, colors, etc)

        ├── hooks/                                ---### Custom React hooks (if any) ###---
                └── useAuth.js                       # Authentication state/logic hook

        ├── services/                             ---### API services, backend integration ###---
                └── auth.js                          # Auth service (login/register/etc)


        ├── app.json                                 # Expo config
        ├── package.json                             # Project dependencies/scripts
        └── README.md
```





------------------------------------------------OLD----------------------------------------------------


```folderLayout
dog-app/
        ├── .expo/
                └── devices.json 

        ├── app/
                ├── index.jsx
                └── compare.jsx
                
        ├── node_modules/
                ├── ...
                ├── ...
                └── ...

        ├── shared/         # Breed data, helper libs, TS types
                ├── data/
                        ├── breeds.json   # Canonical list of all dog breeds
                        └── traits.json   # Optional: metadata like trait categories
                
                ├── assets/              # Breed images, logos, splash
                        breedsImages/
                                ├── germanshepherd.jpg
                                ├── labrador.jpg
                                ├── ...
                                └── ...
                ├── types/
                        └── Breed.ts      # TypeScript interfaces
                ├── utils/
                        ├── compare.ts    # Breed comparison scoring logic
                        └── helpers.ts    # Slugify, search filters, groupings
                └── constants/
                        └── config.ts     # Breed size labels, color codes, icons              

        ├── src/
                ├── screens/         # BreedListScreen, CompareScreen
                        ├── BreedListScreen.js
                        ├── CompareScreen.js
                        └── MainNavigator.js
                ├── components/      # Card UI (mobile version)
                        └── BreedCard.js
                └── utils/           # Helpers, shared logic

        ├── app.json             # Expo configuration 
        ├── package.json 
        ├── package-lock.json   
        ├── tsconfig.json      
        └── README
```