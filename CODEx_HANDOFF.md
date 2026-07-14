# Breakerspace Preview Site: Current Project Overview

Last updated: 2026-07-14

This repository is the working preview for the MIT DMSE Breakerspace website. It is used to develop and review the redesigned site before coordinated changes are released to the production site at `breakerspace.mit.edu`.

Working folder:

```text
/Users/justinlavallee/Documents/GitHub/breakerspace-preview
```

Original production working folder:

```text
/Users/justinlavallee/Library/CloudStorage/Dropbox-MIT/DMSE Breakerspace/admin/MIT-DMSE-Breakerspace
```

Work in the preview repository unless the user explicitly requests a production-site change. The preview has no `CNAME`, so it does not claim the production domain.

## Current Site Direction

The site is an operational guide for undergraduate lab users and teaching teams. It is organized around what a visitor is trying to do rather than the Breakerspace's internal organization.

The current top-level navigation is defined in `_data/navigation.yml`:

1. Start Here
2. Reserve Time
3. Find an Instrument
4. Get Trained
5. Get Help
6. Safety & Lab Use
7. Use the Lounge
8. Teach With Us
9. About

The homepage should remain concise. It routes users by intent and provides the lab location, arrival route, hours, and access distinction. Detailed policies and workflows belong on their task-specific pages.

## Operational Content Status

| Area | Current status |
| --- | --- |
| Start Here | Implemented as an intent-based homepage with routes for training, instrument selection, reservations, teaching, help, and lounge access. |
| Location and arrival | Implemented on the homepage: Building 8, Room 8-102A, entered through the Breakerspace Lounge. Physical emergency-route details still require an on-site launch check. |
| Instrument catalog | Implemented at `instruments/index.md`. It separates consolidated operating pages from legacy tutorials that remain during migration. |
| Training | Implemented at `training.md`, including the one-time Qualtrics record, one-hour in-person sessions, access follow-up, advanced support, and the LibCal training calendar. The Qualtrics survey itself must be updated with launch. |
| Reservations | Implemented at `reservations.md`, including direct calendars, the one-hour initial norm, reservation ownership, the 10-minute late rule, cancellations, handoffs, guests, and problem routing. |
| Safety and lab use | Implemented at `safety.md`, including emergency response, PPE, food and drink, samples, guests, working alone, cleanup, damage, and incident reporting. Field verification and DMSE EHS review remain launch work. |
| Help and support | Implemented at `resources.md`, covering instrument problems, access, workstation permissions, files, Dropbox, Slack, project support, and contact paths. |
| Teaching | Implemented at `teaching.md`, with collaboration models, staffing guidance, planning timelines, student preparation, and established course examples. |
| Lounge | Implemented at `lounge.md` for the current lounge, coffee equipment, access, food and drink boundary, teaching, and community use. Future accuracy depends on the unresolved space decision. |
| About | Implemented at `about.md`, with the lab's educational purpose, a brief account of its development through undergraduate teaching and student use, the team model, and contact pathways. The current student-staff roster can be added when it is ready for ongoing maintenance. |
| Sample library | A placeholder page exists, but it is not yet a usable inventory or training resource. This is a planned content system. |
| Project/example gallery | Not yet implemented. Course and event pages contain examples, but there is no browsable project and result collection. |

## Instrument Page Migration

The canonical instrument catalog is `instruments/index.md`.

Consolidated coverage currently includes six instruments:

* Thermo Fisher Phenom XL SEM
* Thermo Fisher Phenom Pure SEM
* Technoorg-Linda SEMPrep 2 ion mill
* Olympus DSX-1000 optical microscope
* Thermo Scientific Nicolet iS5 FTIR spectrometer
* Horiba Duetta fluorescence and absorbance spectrometer

The SEMs use a shared hub at `instruments/sem.md` plus separate safety-critical operating pages at `instruments/phenom-xl.md` and `instruments/phenom-pure.md`.

Five instruments still route users to legacy tutorial/SOP pages:

* Panalytical Aeris Research XRD
* Instron 68TM-50 universal testing system
* Horiba XploRA Raman microscope
* Innovatest Nemesis hardness tester
* Microtrac Sync particle size analyzer

`instruments/xrd.md` is a working draft but is not yet the catalog destination. The detailed page model and migration rules live in `instruments/readme.md`.

Legacy `tutorials/` pages should remain available until their replacement is complete and existing links have been reviewed. The old `lab.md` catalog is superseded by `instruments/index.md` and should eventually become a concise compatibility pointer rather than a competing catalog.

## Authoritative Planning Files

Use one source of truth for each kind of work:

* `_staff/site-todo.md`: cross-site launch work, policy decisions, accessibility follow-up, and ongoing operational maintenance.
* `_staff-training/`: trainer-facing guide model and the coordinated Qualtrics launch review.
* `instruments/readme.md`: instrument-page architecture, migration status, shared includes, and authoring conventions.
* Instrument-page to-do sections: instrument-specific missing images, workflows, examples, exercises, and technical review items while migration is active.

Public pages should state current policy clearly. Do not expose unresolved policy questions on public pages merely to track them; place those decisions in `_staff/site-todo.md`.

## Planned Work

Current priorities, in order of operational importance:

1. Complete the on-site safety and arrival audit: campus phone, alarm pull, extinguisher, egress route, emergency equipment, and real location visuals.
2. Review the safety and incident workflow with the DMSE EHS contact.
3. Coordinate the production launch with the updated Qualtrics survey, LibCal descriptions, Moira responsibilities, tap-access processing, Slack, and Dropbox.
4. Continue the five remaining instrument-page migrations and retire duplicate catalog content.
5. Design and populate the sample library, including cabinet locations, expected results, training use, data files, consumables, and replenishment.
6. Build instrument-specific staff training guides around stable Level 1 exercises and sample-library items.
7. Design an example/project gallery organized around questions, samples, instruments, results, and what students learned.
8. Add and maintain current student-staff information on the About page when a roster and update owner are established.
9. Decide whether the site needs a maintainable current-notices mechanism for outages and temporary changes.
10. Resolve the future lounge configuration and update every affected page together.
11. Complete external-workflow accessibility testing and final launch review.

The canonical detailed checklist is `_staff/site-todo.md`.

## Content And Maintenance Principles

* Prefer task-based routes and plain operational language.
* Keep the homepage short; do not turn it into a complete policy page.
* Make each consolidated instrument page the canonical destination for that instrument.
* Put trained-user quick references near the top and detailed learning guidance below.
* Link to shared lab policy instead of duplicating it, while keeping safety-critical instrument steps on the instrument page.
* Use real lab photographs and real example data when users need to identify equipment, spaces, samples, or results.
* Keep staff-only planning in underscore-prefixed directories, but remember that the repository may still be publicly readable.
* Avoid storing credentials, access codes, private student information, or sensitive physical-security details in the repository.
* Preserve old public URLs during migration when practical, but do not maintain two conflicting sources of operational truth.

## Local Development And Validation

Install dependencies once from the repository root:

```sh
script/bootstrap
```

Build the site:

```sh
bundle exec jekyll build
```

Run a local preview:

```sh
bundle exec jekyll serve --host 127.0.0.1
```

The current build succeeds. Dart Sass reports existing `@import` deprecation warnings; these are not build failures. Generated `_site/` output and Jekyll caches are ignored by Git.

Before finishing a site change:

* Run `git diff --check`.
* Run `bundle exec jekyll build`.
* Check internal links and heading fragments when navigation or anchors change.
* Check image dimensions, alternative text, and responsive behavior for new media.
* Review the change against `_staff/site-todo.md` when it affects launch policy or more than one page.

## Repository Context

The preview repository uses the `gh-pages` branch and the remote:

```text
https://github.com/MIT-DMSE-Breakerspace/breakerspace-preview.git
```

The user prefers practical, polished content that students and lab staff can maintain. Favor established site patterns over clever abstractions, and keep unrelated refactors out of focused content changes.
