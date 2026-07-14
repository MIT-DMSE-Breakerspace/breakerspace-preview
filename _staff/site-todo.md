# Breakerspace Website To-Do

This is the canonical unlisted list for cross-site launch work, policy decisions, and maintenance tasks. Public pages should state current operating information clearly rather than expose unresolved work.

Instrument-specific tutorial and migration notes remain on their instrument pages while those pages are actively being developed. Move an item here when it affects multiple pages, requires a lab-wide decision, or must be coordinated for launch.

## Current Implementation Snapshot

The core operational architecture is implemented in preview:

* [x] Intent-based Start Here homepage and task-ordered navigation.
* [x] Canonical instrument catalog with updated and awaiting-consolidation groups.
* [x] Consolidated training pathway and embedded LibCal training calendar.
* [x] Practical reservation page with direct instrument calendars and operating rules.
* [x] Lab-wide safety, sample, guest, working-alone, cleanup, and incident guidance.
* [x] Help and support routing for instrument problems, access, files, data, and advanced work.
* [x] Teaching collaboration pathways, planning guidance, staffing model, and course examples.
* [x] Current lounge access, shared-space, coffee-equipment, teaching, and community-event page.
* [x] Homepage location and arrival section for Building 8, Room 8-102A.

The remaining work is verification, external-system alignment, instrument migration, deeper supporting content, legacy cleanup, and final launch review rather than another top-level information-architecture redesign.

## Location And Arrival

* [x] State on the homepage that the instrument lab is in Building 8, Room 8-102A and is entered through the Breakerspace Lounge.
* [ ] Confirm the public arrival description during the on-site safety walk and make sure the room and entry wording matches signs outside the space.
* [ ] Decide whether a real corridor/entrance photograph or MIT map link would materially help first-time visitors; add one only if it clarifies arrival without exposing sensitive access details.

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
* [ ] Confirm that LibCal descriptions, Moira responsibilities, tap-access processing, and public training language agree before launch.

## Instrument Pages And Legacy Content

* [x] Establish `instruments/index.md` as the canonical instrument catalog.
* [x] Consolidate operating pages for the two Phenom SEMs, ion mill, optical microscope, FTIR, and Duetta.
* [ ] Complete and promote the XRD operating page; reconcile `instruments/xrd.md`, the legacy XRD tutorial, preview material, and print handout.
* [ ] Consolidate the Instron, Raman, hardness tester, and particle size analyzer pages.
* [ ] Convert the legacy `lab.md` catalog into a concise compatibility pointer to the canonical instrument catalog.
* [ ] Review legacy tutorial URLs and preserve useful inbound links while removing conflicting instructions.
* [ ] Review visible instrument-page to-do sections before launch; retain public contributor tasks only where useful and move internal maintenance work here.

## Sample Library And Training Samples

* [ ] Define the sample-library record structure: sample identity, photograph, safe handling, compatible instruments, cabinet/bin location, preparation, expected results, data files, consumption status, and replenishment owner.
* [ ] Inventory the physical sample cabinet and assign stable identifiers and locations.
* [ ] Select and document a standard Level 1 sample or prepared kit for each instrument.
* [ ] Connect each Level 1 exercise, public instrument page, and staff training guide to the same sample record and expected result.
* [ ] Define how users report a missing, damaged, contaminated, or nearly depleted sample.
* [ ] Replace the current duplicate placeholder entries in `sample-library.md` with the chosen production structure before linking the page publicly.

## Projects And Examples

* [ ] Define a project/example record around the question, sample or material, instrument, preparation, result, interpretation, limits, and student learning rather than a photo-only gallery.
* [ ] Decide submission, permission, attribution, privacy, and editorial-review rules for student work.
* [ ] Identify initial examples from 3.000, 3.010, 3.042, instrument exercises, Infinite Halloween, and microscope-image contests.
* [ ] Decide how project examples link back to instrument pages and sample-library records without duplicating their operating content.
* [ ] Decide whether microscope-contest archives become one source within the broader gallery or remain separate seasonal pages.

## Resources And Support

* [ ] Add a short screenshot or rendered example showing the recommended folder structure within `Breakerspace Files`, beyond the existing drive-identification screenshot.
* [ ] Review the Resources page after each major instrument page is updated and remove material that belongs on the instrument page instead.

## About And Current Notices

* [x] Replace the thin Team page with an About page covering the lab's purpose, development, team model, and contact pathways.
* [ ] Add current student-staff names, roles, or areas of support when a roster is ready to publish.
* [ ] Decide who owns updates to staff names, roles, and photographs and how often the About page is reviewed.
* [ ] Decide whether outages, temporary access changes, or schedule interruptions need a small maintainable current-notices mechanism.
* [ ] If notices are added, define an owner, expiration behavior, and an empty state so old alerts cannot remain visible indefinitely.

## Lounge And Space Planning

* [ ] Decide whether the lounge will remain a lounge with coffee equipment, become a seating-only food-and-drink area, or be converted to lab space.
* [ ] When the room decision is implemented, coordinate updates to the navigation, homepage, Lounge page or replacement, instrument catalog, legacy `lab.md` compatibility page, Help routing, Safety food-and-drink and egress language, Teaching page, and 3.000 Coffee Matters page.
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
* [ ] Confirm that `lab.md` and other legacy entry points direct users to the current canonical pages without presenting conflicting guidance.
* [ ] Test navigation, internal links, external links, responsive layouts, and key task paths against the final production configuration.
* [ ] Confirm that contact information, hours, access instructions, reservation links, and emergency numbers are current.
* [ ] Review high-consequence policy pages with their operational owner before publishing.
