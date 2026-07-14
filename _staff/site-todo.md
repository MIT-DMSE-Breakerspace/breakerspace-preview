# Breakerspace Website To-Do

This is the canonical unlisted list for cross-site launch work, policy decisions, and maintenance tasks. Public pages should state current operating information clearly rather than expose unresolved work.

Instrument-specific tutorial and migration notes remain on their instrument pages while those pages are actively being developed. Move an item here when it affects multiple pages, requires a lab-wide decision, or must be coordinated for launch.

## Safety And Lab Use

### Emergency Information And Visuals

* [ ] Confirm and record the exact location of the campus phone nearest the lab.
* [ ] Walk the emergency route from the lab door, through the lounge, through the lounge door into the Building 8 corridor, and onward to the nearest safe building exit. Confirm that this is the only egress route and that all website and posted language agrees.
* [ ] Confirm the locations of the nearest fire alarm pull and fire extinguisher during the same on-site walk.
* [ ] Photograph the exit route, campus phone, alarm pull, fire extinguisher, emergency and first-aid cabinet, shower and eyewash, spill kit, sharps container, and ordinary waste bins.
* [ ] Create one compact, annotated emergency-equipment and egress visual using real photographs or an accurate floor plan. Do not use a generated or decorative image for safety-critical locations.
* [ ] Confirm that posted emergency signs tell users to dial `100` from a campus phone or `617-253-1212` from a mobile or other phone, rather than 911.

### Policy Review

* [x] Add the MIT EHS reporting process for unpaid students and visitors, employees, and paid students.
* [ ] Decide which Breakerspace staff role helps complete or follow up on a Non-Employee Incident Report.
* [ ] Review the public safety page and incident workflow with the DMSE EHS contact before launch.
* [ ] Assess Instron tasks for any operation that should not be performed alone.
* [ ] Assess whether heavy Instron tooling calls for protective footwear or handling aids beyond two-person and controlled-transfer guidance.
* [ ] Confirm that posted lab signs use the same language as the website for PPE, food and drink, samples, guests, emergencies, and incident reporting.

## Training And Access

* [ ] Complete the coordinated Qualtrics review in [`../_staff-training/qualtrics-launch-review.md`](../_staff-training/qualtrics-launch-review.md) and release the updated survey with the redesigned production site.
* [ ] Build instrument-specific staff training guides from [`../_staff-training/instrument-training-template.md`](../_staff-training/instrument-training-template.md).
* [ ] Coordinate each Level 1 exercise with a documented sample-library item, cabinet location, expected result, and replenishment plan.
* [ ] Confirm that LibCal descriptions, Moira responsibilities, tap-access processing, and public training language agree before launch.

## Resources And Support

* [ ] Add a short screenshot or example showing the recommended `Breakerspace Files` folder structure.
* [ ] Review the Resources page after each major instrument page is updated and remove material that belongs on the instrument page instead.

## Lounge And Space Planning

* [ ] Decide whether the lounge will remain a lounge with coffee equipment, become a seating-only food-and-drink area, or be converted to lab space.
* [ ] When the room decision is implemented, coordinate updates to the navigation, home page, Lounge page, Lab page, Help routing, Safety food-and-drink and egress language, Teaching page, and 3.000 Coffee Matters page.
* [ ] Confirm the current lounge hours, undergraduate eligibility, access-form URL, and usual processing time before launch.
* [ ] Confirm which coffee and roasting equipment will remain and whether its operation and cleanup guidance should be published on the website.
* [ ] Replace lounge and equipment photographs if the physical configuration changes.

## Accessibility Follow-Up

The deterministic template and markup repairs are implemented in the preview site. These remaining items require subject knowledge, source material, authenticated access, a publishing decision, or outside review.

### Content And Source Material

* [ ] Decide whether the 2024 and 2026 microscope-contest galleries should remain public. If they remain public, provide or reconstruct a meaningful caption and image description for each entry; `Example 1`, `Example 2`, and similar text does not describe the visual content.
* [ ] Review abbreviated image descriptions in legacy tutorials with an instrument trainer. Prioritize screenshots whose current text only names the instrument, button, or software screen without conveying the state or action a user needs to understand.
* [ ] Confirm that every public YouTube demonstration has accurate, human-reviewed captions. Provide a transcript or the source narration when captions cannot be verified or corrected in YouTube.
* [ ] Locate original video files for instructional GIFs when available. The site now lets users pause embedded GIFs, but replacing animation files and direct GIF links with non-autoplaying video controls will provide better reduced-motion support.
* [ ] Identify which linked PDF manuals are essential to completing a Breakerspace task. Request tagged, accessible versions from manufacturers where possible and retain equivalent HTML instructions for essential workflows.

### External Workflows And Review

* [ ] Test the full Qualtrics onboarding workflow with keyboard-only navigation and a screen reader, including required fields, validation errors, review, and submission. Coordinate fixes with the website-launch survey update.
* [ ] Test LibCal training registration and instrument reservation after Touchstone sign-in, including keyboard navigation, time-slot selection, confirmation, cancellation, and the accessible reservation view.
* [ ] Test the Dropbox invitation and shared-file workflow for keyboard and screen-reader access, or document an accessible alternative for users who encounter a barrier.
* [ ] Complete a manual keyboard and VoiceOver pass on the final production build. Include the home page, training, safety, reservations, one image-heavy instrument page, one table-heavy instrument page, each third-party workflow, and pause/resume behavior for instructional animations.
* [ ] Ask MIT Digital Accessibility to review the launch candidate or provide a consultation, especially for instructional media, third-party services, and any remaining PDF dependencies.
* [ ] Decide whether to follow MIT's convention of opening external links in new tabs. If adopted, provide a consistent visible and screen-reader indication that the link opens a new tab; this is an MIT content convention, not a WCAG requirement.

## Launch Review

* [ ] Audit public pages for visible staff to-do lists. Keep active instrument migration notes only where they remain useful in context.
* [ ] Test navigation, internal links, external links, responsive layouts, and key task paths against the final production configuration.
* [ ] Confirm that contact information, hours, access instructions, reservation links, and emergency numbers are current.
* [ ] Review high-consequence policy pages with their operational owner before publishing.
