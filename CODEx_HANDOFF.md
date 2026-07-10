# Codex Handoff: Breakerspace Preview Site

This folder is the preview copy of the MIT DMSE Breakerspace website. It was copied from the production site repo so structural changes can be developed and reviewed without disturbing the live website.

Preview folder:

```text
/Users/justinlavallee/Documents/GitHub/breakerspace-preview
```

Original production working folder:

```text
/Users/justinlavallee/Library/CloudStorage/Dropbox-MIT/DMSE Breakerspace/admin/MIT-DMSE-Breakerspace
```

Work in the preview folder unless the user explicitly asks otherwise.

## Current State

### Status Summary - 2026-07-10

Migration to integrated instrument pages is roughly half complete by instrument count. Five instruments now have integrated pages under `instruments/`: FTIR, UV-Vis (Horiba Duetta), Optical (Olympus DSX-1000), Ion Mill, and the SEM family (`sem.md` hub plus `phenom-xl.md` and `phenom-pure.md`). All follow the standard page order and share the same section structure, and their in-page anchors (`#sop`, `#details`, `#science`, `#exercises`, etc.) resolve.

Five instruments still use their older `tutorials/` pages and are listed under "Instruments Awaiting Consolidation" in `instruments/index.md`: XRD, Instron, Raman (Horiba XploRA), Hardness Tester (Innovatest Nemesis), and Particle Size Analyzer (Microtrac).

Two items previously listed as future/likely improvements are now done:

* Navigation was moved into `_data/navigation.yml` and is rendered with `relative_url` in `_layouts/default.html`. The hardcoded absolute `breakerspace.mit.edu` nav links are gone.
* `instruments/index.md` exists as the instrument catalog, with separate "Updated Instrument Pages" and "Instruments Awaiting Consolidation" tables.

The `Training` nav item and `sop.md` have been retired. The old tutorial/SOP index (`sop.md`) was deleted, the `Training` entry was removed from `_data/navigation.yml`, and the "Training index" link in `resources.md` was removed. Links to the older tutorial files remain cataloged in `instruments/index.md` for use during the transition. Current top-level navigation is: Home, Instruments, Reservations, Resources, Lounge, Team.

### Original Setup Notes

The preview folder was copied from the production working tree with `.git` excluded. The user deleted `CNAME` from the preview folder so the preview GitHub Pages repo will not try to claim the live `breakerspace.mit.edu` domain.

This preview repo is connected to GitHub and actively builds a static preview site when commits are pushed. It is intended for browser review and sharing with collaborators, but it is not publicly linked or discoverable from the live site. Because this is a separate preview copy, it is acceptable to modify tutorial files here without worrying that active lab users are relying on them during instrument operation.

The SEM and ion mill tutorial preview files have been promoted in this preview copy:

* `tutorials/sem-preview.md` was copied over `tutorials/sem.md`, then removed.
* `tutorials/ion-mill-preview.md` was copied over `tutorials/ion-mill.md`, then removed.

Existing links to `tutorials/sem.html` and `tutorials/ion-mill.html` should now reach the updated content in the preview site.

`tutorials/xrd-preview.md` and `tutorials/uv-vis-preview.md` still exist from this early work. UV-Vis has since been built as an integrated page at `instruments/uv-vis.md`, so `tutorials/uv-vis-preview.md` is superseded. The `index_ref.md`, `tutorials/index_ref.md`, and `test.md` scaffolding files were removed on 2026-07-10, along with the unused `thumbnail.png`.

The early XRD cheat-sheet material was moved on 2026-07-10 from `tutorials/xrd/` to a new top-level `handouts/` folder (now `handouts/xrd/`). See the "Handouts" section below for what this category is and how to treat it.

## Site Architecture Notes

This is a simple Jekyll/GitHub Pages site using `jekyll-theme-minimal`.

Important files:

* `_config.yml`: site title, logo, description, theme.
* `_layouts/default.html`: global layout. Navigation is rendered from `_data/navigation.yml` using `relative_url`.
* `_data/navigation.yml`: top-level navigation items (Home, Instruments, Reservations, Resources, Lounge, Team).
* `_includes/`: shared Jekyll include snippets.
* `index.md`: homepage.
* `lab.md`: legacy instrument overview page (superseded as the catalog by `instruments/index.md`).
* `instruments/index.md`: current instrument catalog and landing page.
* `tutorials/`: legacy tutorial pages, kept as compatibility pages during migration.
* `instruments/`: integrated instrument pages (the preferred user-facing destinations).

Navigation now lives in `_data/navigation.yml` and is rendered with `relative_url` in `_layouts/default.html`, so the same layout works in production, preview, and local builds. This replaced the old hardcoded absolute `https://breakerspace.mit.edu/...` nav links.

## Content Strategy

The desired content model is a two-speed structure:

* The top of an operating/tutorial page should act as a concise quick reference for trained users.
* The detailed operating instructions should act as a rich training guide for new users, with images, GIFs, practical context, troubleshooting cues, exercises, and a to-do list.

The user especially likes the FTIR tutorial as an example of this concept.

The user also wants:

* consistent wording for routine tasks, such as "Log on to the instrument workstation using your MIT Kerberos."
* an educational section near the top of each integrated instrument page, usually titled "What This Instrument Shows You" or similar.
* educational sections written for curious MIT first-year undergraduates from any major: assume high-school bio/chem/physics exposure, but do not assume materials-science, advanced science, or engineering background.
* educational sections that are comprehensible without being oversimplified: plain-language instrument principle, anecdotal cross-disciplinary use cases, what results look like, and what the instrument cannot tell you.
* a few attention-catching images or example results in the educational section when available, used to pull readers in rather than to become step-by-step tutorial content.
* integrated instrument pages should not keep the old tutorial-style full index near the top.
* instead, use a concise Quick Actions table near the top with practical links for common user intents.
* Quick Actions should include separate anchor links for trained users operating now, usually to `#sop`, and new users learning the full workflow, usually to `#details`.
* the SOP section should be the fast trained-user reference, while the detailed operating section should be the new-user training guide.
* the SOP section should stay concise enough for advanced/trained users to scan on one screen where practical: mostly top-level required steps, short bullet points, and no large embedded figures or GIFs.
* when visual reminders are useful in the SOP, link to the relevant image/GIF inline from the bullet text; put full figures, GIFs, captions, and visual walkthroughs in the detailed operating instructions.
* details removed from the SOP for concision should still be covered in the detailed operating instructions when they are useful for training, troubleshooting, safety, or data quality.
* page titles should normally be the instrument name, not "Tutorial"; the page itself can explain that it is the operating page for that instrument.
* the top Overview should usually use a right-floated instrument image, one or two concise paragraphs describing what the instrument is for, and a sentence explaining that the page combines quick reference, detailed training notes, reservations, manuals, exercises, and staff to-do notes.
* where useful, add a quick method/mode/settings table between compatible materials and detailed instructions, so users can choose an operating approach without reading the whole training guide.
* keep the standard compatibility reminder: samples/materials must be non-hazardous and safe for Breakerspace use, with an italic ask-staff note when appropriateness is uncertain.
* normalize headings toward title case in integrated instrument pages, such as "Standard Operating Protocol," "Detailed Operating Instructions," "Data Processing And Analysis," "Common Failure Modes," and "Manufacturer Manuals."
* exercise sections at the bottom of tutorials.
* level 1 exercises to match the general instrument training task.
* future level 2 and level 3 exercises to support advanced/specialist training.
* tutorial-specific to-do lists for missing photos, GIFs, sample-library references, and student staff tasks.
* eventual material-library references with bin/location information once the sample cabinet is organized.

## Integrated Instrument Pages

The new long-term pattern is to build integrated instrument pages under `instruments/`. These pages should combine:

* overview and intended use
* direct training/reservation links
* quick operating reference
* detailed tutorial/training content
* manuals and supporting docs
* exercises
* tutorial to-do list

The `tutorials/` pages can remain during transition, but the integrated instrument pages are intended to become the more complete user-facing destinations.

For the remaining tutorial-to-instrument migrations, do not create new `*-preview.md` files by default. Instead, create the new draft page directly under `instruments/`, such as `instruments/uv-vis.md`, and treat it as the working draft in the preview site. The first pass on a new instrument page can focus on improving the tutorial substance only: SOP clarity, safety, detailed operating instructions, sample/material guidance, troubleshooting, data handling, exercises, images, and to-do notes. After the tutorial content is strong, add the broader landing-page layer: Quick Actions, educational section, method-selection tables, reservation links, overview polish, and final hierarchy cleanup.

The migration should not be only a structural wrapper around old tutorial content. Each instrument page should improve the instructional material as it moves.

For instruments that are single, unambiguous tools, one page such as `instruments/ftir.md` may eventually be enough.

For instrument families or cases where mixed instructions could confuse users, split pages are better.

## Handouts

`handouts/` is a top-level folder for print-oriented instrument content. The defining use case: material designed to be **printed as a one-page cheat sheet and kept at the instrument** for students to reference while operating, while also being viewable on a device if helpful. This is a distinct format and audience from both the legacy `tutorials/` pages and the integrated `instruments/` operating pages, and it is kept in its own folder to avoid confusion about what the content is for.

Current contents:

* `handouts/xrd/` — early XRD cheat-sheet material moved here on 2026-07-10 from `tutorials/xrd/`. It contains:
  * `index.md`: a cleaner, shorter XRD cheat-sheet draft with front matter and `permalink: /handouts/xrd/`, so it builds as a live page at that URL. The permalink was updated from the old `/tutorials/xrd/` during the move.
  * `index2.md`: a longer, more detailed draft with no front matter (does not build as a standalone page as-is).
  * `data/exercise_A_raw.csv`: sample data for a phase-identification exercise.
  * `templates/report_template.md`: a student lab-report template.

This XRD content is considered a good start but not necessarily fully adequate for the one-page-printed-cheat-sheet purpose. The user has not reviewed it exhaustively.

Future direction for this category:

* Revise the XRD handout specifically for the print/at-the-instrument cheat-sheet use case (fits usefully on one printed page, scannable while operating).
* Create matching handout content for other instruments at a similar level of detail where a printed cheat sheet is judged helpful.
* Keep handouts distinct from the integrated instrument pages: the instrument page is the complete online destination; the handout is the condensed printed companion.

Note on the eventual XRD instrument-page migration: XRD content is now spread across `tutorials/xrd.md`, `tutorials/xrd-preview.md`, and the handout drafts in `handouts/xrd/`. When XRD is migrated into `instruments/xrd.md`, consolidate the best operating/tutorial substance into that page, and keep the print-oriented cheat-sheet material in `handouts/xrd/`.

## SEM Split

The SEM content has been split into:

* `instruments/sem.md`: shared SEM hub, comparison page, interactive chooser, shared concepts.
* `instruments/phenom-xl.md`: Phenom XL-only operating page.
* `instruments/phenom-pure.md`: Phenom Pure-only operating page.

Reason for split: the Phenom XL and Phenom Pure have different safety-critical workflows, especially sample-height/loading rules. The XL page should not present Pure-specific holder-edge guidance as an operating option, and the Pure page should not present XL-specific tray/EDS guidance as an operating option.

SEM split-page pattern: `instruments/sem.md` has the shared educational "What This Instrument Shows You" section for SEM as a technique. The instrument-specific Phenom XL and Phenom Pure operating pages should not repeat that full section; instead, they use shorter lab-specific sections titled "What Makes This Phenom XL Different" and "What Makes This Phenom Pure Different." This wording is intentional because it describes the Breakerspace configurations, not universal capabilities of all Phenom XL/Pure systems. For example, this lab's Phenom XL has EDS and the larger/multiple-sample tray, while this lab's Phenom Pure has the temperature-controlled stage and no EDS. The old-style `Page Index` sections have been removed from these operating pages and replaced with fuller Quick Actions links.

Key SEM distinction:

* Phenom XL: large sample tray, multiple stubs, EDS, sample height approximately 5-7 mm below the top edge of the XL tray unless staff instruct otherwise.
* Phenom Pure: one 18 mm or smaller stub, no EDS, cold stage, highest part of sample must sit below the top edge of the Pure holder.

## SEM Includes

Shared SEM snippets live in `_includes/sem/`:

* `_includes/sem/common-safety.md`
* `_includes/sem/sample-prep-at-a-glance.md`
* `_includes/sem/quick-imaging-settings.md`
* `_includes/sem/detailed-training-intro.md`
* `_includes/sem/live-sem-workflow.md`
* `_includes/sem/data-and-analysis.md`
* `_includes/sem/common-failure-modes.md`

Use includes when the same language should stay identical across related pages. Keep safety-critical instrument-specific steps directly on the instrument page.

Important include-path note: Jekyll interprets relative links inside includes relative to the final page location. The current SEM includes are used by pages in `instruments/`, so their image links use paths like:

```text
../assets/img/tutorials/sem/navcam.PNG
```

If a SEM include is later used by a page outside `instruments/`, re-check the relative links.

## Instrument Reservation URLs

The user provided these LibCal single-seat reservation URLs. Use these on specific integrated instrument pages.

| Instrument | URL |
| --- | --- |
| Horiba Duetta | https://breakerspace.libcal.com/seat/174790 |
| Horiba XploRA Raman | https://breakerspace.libcal.com/seat/174794 |
| Innovatest Nemesis | https://breakerspace.libcal.com/seat/181543 |
| Instron UTM | https://breakerspace.libcal.com/seat/174792 |
| Microtrac PSA | https://breakerspace.libcal.com/seat/181544 |
| FTIR | https://breakerspace.libcal.com/seat/174791 |
| Olympus optical microscope | https://breakerspace.libcal.com/seat/174788 |
| XRD | https://breakerspace.libcal.com/seat/174789 |
| Ion mill | https://breakerspace.libcal.com/seat/181542 |
| Phenom Pure SEM | https://breakerspace.libcal.com/seat/174787 |
| Phenom XL SEM | https://breakerspace.libcal.com/seat/174786 |

The SEM pages already use direct XL/Pure seat links.

Recommendation discussed earlier:

* Specific instrument pages should link directly to the single-instrument seat page.
* Instrument-family hubs, such as `instruments/sem.md`, can show direct links for each relevant instrument.
* The homepage/lab/reservations pages may still use the general all-instruments LibCal page for browsing across tools.

LibCal availability embedding was investigated. A direct iframe of a seat page may technically work, but it embeds the whole LibCal page and the single-seat page did not appear to honor the lightweight `?embedded=1&noheader=1&nofooter=1` parameters. The underlying availability JSON endpoint works with a LibCal referrer but rejects Breakerspace-site referrers, so a native static-site JavaScript availability widget is probably not viable without an official LibCal widget/API option or a server-side proxy.

## Existing Updated Tutorial Work

Note: the primary destination for updated content is now the integrated pages under `instruments/` (see the Status Summary at the top). Five instruments have integrated pages: FTIR, UV-Vis, Optical, Ion Mill, and the SEM family. The improved tutorial content described below also lives in the corresponding legacy `tutorials/` pages, which remain as compatibility pages during the migration.

### SEM Tutorial

`tutorials/sem.md` and the integrated SEM pages (`instruments/sem.md`, `instruments/phenom-xl.md`, `instruments/phenom-pure.md`) contain the improved two-speed SEM content, including:

* concise SOP at top
* compatible materials and quick sample prep
* quick imaging settings
* detailed training guide
* sample-prep details
* Phenom Pure cold-stage details
* loading, NavCam, LiveSEM, acquisition
* EDS on Phenom XL
* data processing
* failure modes
* manuals and links
* exercises
* tutorial to-do list

The integrated SEM pages under `instruments/` are the preferred path; existing tutorial links continue to reach improved content.

### Ion Mill Tutorial

`tutorials/ion-mill.md` and the integrated `instruments/ion-mill.md` contain the improved two-speed ion mill content, including:

* concise SOP
* compatible materials
* method selection
* detailed polishing and slope-cutting workflows
* exercises
* tutorial to-do list

## Website/Navigation Ideas Already Discussed

The site is primarily operational. The landing page was intentionally kept short because many users are mainly looking for the calendar/reservations.

Possible future IA direction:

* keep the homepage short and operational
* the instrument catalog now lives at `instruments/index.md` (the legacy `lab.md` is superseded as the catalog)
* continue migrating tutorial pages into integrated pages under `instruments/`
* top-level navigation is now data-driven via `_data/navigation.yml`
* possibly have each instrument workstation open the relevant instrument page directly
* the separate tutorial/SOP index (`sop.md`) has been retired; legacy tutorial links now live in `instruments/index.md` during transition
* use direct single-instrument LibCal links on instrument pages

The sample library page, 3.000 page, reservations page, and image contest page may be testing/development or seasonally exposed pages. Do not assume all hidden pages should be linked from navigation.

## Validation Notes

Before promotion/copying:

* SEM and ion mill promoted tutorial files were checked for local links, anchors, and trailing whitespace.
* Integrated SEM pages were checked with include-expanded local link and anchor validation.
* A full `bundle exec jekyll build` was not available earlier because the local environment did not have the required Jekyll gem installed.

When continuing in the preview repo, prefer:

```sh
rg
git diff --check
```

This renamed preview folder is now a Git repository on the `gh-pages` branch with remote `https://github.com/MIT-DMSE-Breakerspace/breakerspace-preview.git`. Use normal Git status/diff commands there.

## Working Preferences

The user wants practical, polished content that lab staff and students can maintain. Avoid overly clever structures if they make manual updates harder. Use shared includes for consistency only where they clearly reduce duplicated wording and do not make the page hard to understand.

When creating new integrated instrument pages, preserve common language for routine tasks and add a bottom exercise/to-do section.

Do not edit the production folder unless explicitly asked. Work in this preview folder for the preview-site project.

## Latest Chat Context - 2026-07-07

The preview repo was renamed locally during this chat. The current working folder is:

```text
/Users/justinlavallee/Documents/GitHub/breakerspace-preview
```

The old thread/workspace sandbox still had write permission only for the previous folder name, so writes in this chat required per-command escalation after the rename. The user plans to create/open a new Codex project rooted at the renamed directory so normal write permission is restored.

Current Git context after the rename check:

* branch: `gh-pages`
* remote: `https://github.com/MIT-DMSE-Breakerspace/breakerspace-preview.git`
* `git diff --check` was clean before this handoff update.
* `CODEx_HANDOFF.md` was intentionally modified to record the renamed path and this latest context.

### Navigation And Structure Direction

The site navigation grew historically: `lab.md` became the instrument catalog, `sop.md` later became the tutorial/SOP index, and `resources.md` collected general lab infrastructure notes. The desired direction is to make each instrument page the canonical destination for that instrument.

Current implemented top-level navigation (in `_data/navigation.yml`):

* Home
* Instruments
* Reservations
* Resources
* Lounge
* Team

`Home` should stay short and operational, with access, hours, and calendar/training visibility.

`Instruments` replaced the old meaning of `Lab` as the main browsing catalog, via `instruments/index.md`. It links to integrated instrument pages under `instruments/` where available, and to existing tutorial pages only during transition. Instrument families can use hub pages, such as `instruments/sem.md`, while single instruments can use one landing/operating page.

`Reservations` remains top-level because instrument booking is a high-frequency user task. Specific instrument pages should use direct LibCal seat links.

The `Training` nav item and `sop.md` have been retired. Earlier this was proposed as a training index; instead, `instruments/index.md` now serves as the single instrument catalog, including the legacy tutorial links under "Instruments Awaiting Consolidation" during the transition. There is no longer a separate `sop.md` page or `Training` nav entry.

`Resources` should be reorganized around general lab support tasks rather than instrument-specific operating information. A proposed order is:

* Getting access: MIT Kerberos, workstation groups, who to contact.
* Files and data: Breakerspace Files drive, Dropbox team, suggested folder structure.
* Communication: Slack and email.
* Safety and lab use: general material rules, cleanup expectations, and when to ask staff.
* Reference materials: sample library and general docs that are not instrument-specific.

Most instrument-specific manuals, operating instructions, troubleshooting, exercises, and reservation links should live on the relevant instrument page instead of `resources.md`.

### Integrated Instrument Page Model

The preferred page order for integrated instrument pages is:

1. Title and instrument name.
2. Overview: what it does and what it is good for.
3. Quick actions: reserve, get trained, open manual, contact staff.
4. Access requirements.
5. Compatible samples and limitations.
6. Quick operating reference for trained users.
7. Detailed training guide for new users.
8. Data export and file handling.
9. Troubleshooting.
10. Manuals and supporting docs.
11. Exercises.
12. Tutorial to-do list.

Old `tutorials/` pages should not be deleted abruptly. Treat them as compatibility pages during migration so existing links keep working while new navigation points users toward `instruments/` pages.
