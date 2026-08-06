import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Route-level code splitting: each page (and its images/CSS) only loads
// when the user actually navigates there, instead of one giant upfront
// bundle. Pure build-output optimization — no visual/behavioral change.
const Home = lazy(() => import("./pages/Home"));

const WeddingHome = lazy(() => import("./pages/Cases/Wedding"));
const WeddingPuzzle1 = lazy(() => import("./pages/Cases/Wedding/Puzzle1"));
const WeddingPuzzle2 = lazy(() => import("./pages/Cases/Wedding/Puzzle2"));
const WeddingPuzzle3 = lazy(() => import("./pages/Cases/Wedding/Puzzle3"));

const FinalShowHome = lazy(() => import("./pages/Cases/FinalShow"));
const FinalShowPuzzle1 = lazy(() => import("./pages/Cases/FinalShow/Puzzle1"));
const FinalShowPuzzle2 = lazy(() => import("./pages/Cases/FinalShow/Puzzle2"));
const FinalShowPuzzle3 = lazy(() => import("./pages/Cases/FinalShow/Puzzle3"));

const DeathInTheDarknessHome = lazy(() =>
  import("./pages/Cases/DeathInTheDarkness")
);
const DeathInTheDarknessPuzzle1 = lazy(() =>
  import("./pages/Cases/DeathInTheDarkness/Puzzle1")
);
const DeathInTheDarknessPuzzle2 = lazy(() =>
  import("./pages/Cases/DeathInTheDarkness/Puzzle2")
);
const DeathInTheDarknessPuzzle3 = lazy(() =>
  import("./pages/Cases/DeathInTheDarkness/Puzzle3")
);

const InternalBurglaryHome = lazy(() =>
  import("./pages/Cases/InternalBurglary")
);
const InternalBurglaryPuzzle1 = lazy(() =>
  import("./pages/Cases/InternalBurglary/Puzzle1")
);
const InternalBurglaryPuzzle2 = lazy(() =>
  import("./pages/Cases/InternalBurglary/Puzzle2")
);
const InternalBurglaryPuzzle3 = lazy(() =>
  import("./pages/Cases/InternalBurglary/Puzzle3")
);

const Puzzle4 = lazy(() => import("./pages/MiniGames/Puzzle4"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/case/wedding" element={<WeddingHome />} />
        <Route path="/case/wedding/puzzle1" element={<WeddingPuzzle1 />} />
        <Route path="/case/wedding/puzzle2" element={<WeddingPuzzle2 />} />
        <Route path="/case/wedding/puzzle3" element={<WeddingPuzzle3 />} />

        <Route path="/case/final-show" element={<FinalShowHome />} />
        <Route
          path="/case/final-show/puzzle1"
          element={<FinalShowPuzzle1 />}
        />
        <Route
          path="/case/final-show/puzzle2"
          element={<FinalShowPuzzle2 />}
        />
        <Route
          path="/case/final-show/puzzle3"
          element={<FinalShowPuzzle3 />}
        />

        <Route
          path="/case/death-in-the-darkness"
          element={<DeathInTheDarknessHome />}
        />
        <Route
          path="/case/death-in-the-darkness/puzzle1"
          element={<DeathInTheDarknessPuzzle1 />}
        />
        <Route
          path="/case/death-in-the-darkness/puzzle2"
          element={<DeathInTheDarknessPuzzle2 />}
        />
        <Route
          path="/case/death-in-the-darkness/puzzle3"
          element={<DeathInTheDarknessPuzzle3 />}
        />

        <Route
          path="/case/internal-burglary"
          element={<InternalBurglaryHome />}
        />
        <Route
          path="/case/internal-burglary/puzzle1"
          element={<InternalBurglaryPuzzle1 />}
        />
        <Route
          path="/case/internal-burglary/puzzle2"
          element={<InternalBurglaryPuzzle2 />}
        />
        <Route
          path="/case/internal-burglary/puzzle3"
          element={<InternalBurglaryPuzzle3 />}
        />

        <Route path="/minigames/puzzle4" element={<Puzzle4 />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
