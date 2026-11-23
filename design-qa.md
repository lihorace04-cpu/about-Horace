# Design QA — selected option 3

final result: passed

Approved reference: qa/veil/approved-option-3.png (1487 × 1058). Implemented capture: qa/veil/signal-final.png at the same viewport and density. Side-by-side evidence: qa/veil/signal-comparison.png. Mobile: qa/veil/signal-mobile-final.png at 390 CSS pixels.

First pass found a CSS inheritance issue shrinking and italicizing the main heading, an oversized point-mode label, and undersized wordmark. Fixed scoped heading/label typography, increased wordmark scale, and restored supporting English invitation copy. Recaptured and compared both versions together.

Typography: local Cormorant, readable Chinese body, large crimson wordmark and serif invitation follow the selected composition. Layout: left chapter rail, central glass/mask art, perched rabbit and right actions retained. Mobile reflows vertically. Colors: black, silver and crimson replace gold/opera styling. Image quality: dedicated high-resolution assets generated from the selected reference, with separate transparent rabbit/card layers. Copy: five chapters follows the actual user brief; the concept image's extra chapter is not reproduced. Core information remains available through backstage.

Independent reviewer disposition: Ship, scoped to the desktop/mobile/reference screenshots and implementation CSS. It found no material visible issue. It did not independently run browser interactions, inspect all nine pages, measure contrast or evaluate moving animation.

Functional evidence: verify-veil.cjs, 80 checks passed, no page errors, broken local references or external runtime requests. Includes chapter navigation, identity reveal, collection, gift, themes, persistence/reset, language, motion, skill examples and responsive widths.

Implementation scope: layered pre-rendered art preserves the selected image's detail; point mode is live 3D rendering. This is not a fully rigged solid mask/rabbit model. Further character modelling remains separate work; no claim of that capability is made.

Completion verification, 2026-11-13: the direct-interaction suite passed 24 checks. The final stability suite passed 16 checks, including immediately closing one world and opening another, pending-launch cancellation, all three environments, keyboard focus and phone scroll restoration. Independent review marked the launch/return accessibility and race fixes Ship; that verdict does not assess the subjective originality of the whole experience. Final desktop/phone captures are qa/interaction/final-entry-1440.png and final-entry-390.png. All nine HTML pages have valid local links, and the removed disclosure page has no remaining navigation links. Four affected pages were opened offline at 1440 and 390 px without script errors or horizontal overflow.

Horace opening verification: verify-opening.cjs passed 21 checks at desktop, 768, 390 and 360 px, including name visibility, automatic start/end, Skip, Escape, Replay, chapter interruption, silent startup, persisted/system reduced motion and mobile replay returning to the top. verify-interaction.cjs again passed 24 checks for the existing card and demo paths. The opening review identified an inherited pointer-events issue and mobile control overlap; both were corrected and checked in the browser. Final captures: qa/opening/01-name.png, 02-reveal.png, 03-desktop.png, 04-mobile.png and 05-tablet.png. No new whole-site independent Ship verdict is claimed for this opening revision.

Navigation/reading revision: verify-navigation.cjs passed 42 checks covering direct Site map access, stage chapter/theme/card restoration, intro suppression, archive back-stack order, page removal, desktop/mobile layout and removed-page links. Additional English phone layouts and a direct archive-to-stage visit passed. Screenshots are in qa/navigation/. The archive action contrast and footer contrast were corrected after visual inspection.


Archive visual revision: replaced the rejected ivory archive with the existing black/silver/crimson world. Reviewed profile and map captures at 1440 and 390 px, including English, hover and touch preview. verify-navigation.cjs passed 42 checks; verify-archive-world.cjs passed 15 checks with no script errors, covering preview open/close, stable visible titles, keyboard/Escape, touch navigation, loaded profile art, viewport fit and reduced motion. Evidence: qa/archive-world/. Reference: user-supplied NetEase screenshot; the live reference URL was unavailable. No independent review verdict is claimed for this revision.

Element War addition: verify-game-project.cjs passed 18 checks, verify-navigation.cjs passed 42 checks, and verify-interaction.cjs passed 24 checks. Screenshots reviewed at desktop and phone sizes, including English and the project-world preview. Existing game screenshots and release were reused; this portfolio change does not claim a fresh full game playtest.
