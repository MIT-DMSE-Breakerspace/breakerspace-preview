# Instrument Pages README

This folder is for integrated instrument pages. These pages are intended to become the main user-facing destination for each lab instrument, combining the instrument overview, educational context, short operational reference, training/tutorial material, reservation links, manuals, exercises, and instrument-specific to-do lists.

The older `tutorials/` pages can remain in place during the transition. The working model is:

* `instruments/sem.md`: a shared SEM hub for choosing between SEM instruments and reviewing common SEM concepts.
* `instruments/phenom-xl.md`: the Phenom XL operating page, written only for the XL.
* `instruments/phenom-pure.md`: the Phenom Pure operating page, written only for the Pure.

For instruments that do not need to be split into multiple related tools, one page such as `instruments/ftir.md` may be enough.

## Current Migration Status

The canonical catalog is `instruments/index.md`. Consolidated pages currently cover six instruments:

* Phenom XL and Phenom Pure through the shared `sem.md` hub and separate operating pages.
* SEMPrep 2 ion mill.
* Olympus DSX-1000 optical microscope.
* Nicolet iS5 FTIR spectrometer.
* Horiba Duetta fluorescence and absorbance spectrometer.

Five instruments still use legacy tutorial/SOP destinations in the catalog: XRD, Instron, Raman, hardness tester, and particle size analyzer. `instruments/xrd.md` exists as a working draft but is not yet the public catalog destination.

The sample library and example/project gallery are planned supporting systems. Level 1 exercises should eventually point to documented sample-library records with cabinet locations, expected results, data files where useful, and replenishment information. Example results should be reusable from both instrument pages and the future gallery rather than copied into disconnected collections.

## Content Strategy

Instrument pages should be complete enough to use at the instrument without requiring the user to click away for basic safety, setup, loading, shutdown, or troubleshooting steps.

The top of each operating page should work as a quick reference for trained users. The detailed operating instructions should work as a training guide for new users, with images, GIFs, and practical context.

Each page should also include a short educational section near the top, after Quick Actions and before the SOP, aimed at curious undergraduates from any major. Assume students have completed high-school science but may not have taken university-level physics, chemistry, biology, or materials science. This section should answer what the instrument reveals, why scientists use it, what typical results look like, and what the instrument cannot tell you. Keep it satisfying but not textbook-length.

Avoid mixing instrument-specific steps when confusion could cause damage. For example, the Phenom XL and Phenom Pure have different sample-height rules, so they now have separate operating pages.

## Standard Page Order

Use this order unless an instrument family needs a hub/split structure:

1. Title and instrument name.
2. Overview: what it does and what it is good for.
3. Quick actions: reserve, get trained, open manuals, find exercises.
4. What this instrument shows you: accessible educational context, use cases, example results, and limits.
5. Page index.
6. Standard operating protocol: startup, operation, shutdown.
7. Compatible materials and sample preparation.
8. Quick method, mode, or settings selection where useful.
9. Detailed operating instructions for new users.
10. Data processing and analysis.
11. Common failure modes.
12. Manufacturer manuals and links.
13. Exercises.
14. Tutorial to-do list.

## Educational Section Format

The educational section should usually be 500-900 words total, plus images or example data when available. A good default structure is:

* **The basic idea:** 1-3 short paragraphs explaining the underlying principle in plain language.
* **What scientists use it for:** 3-5 bullets with cross-disciplinary, anecdotal scenarios.
* **What to look for in the results:** 2-4 annotated examples or plain-language descriptions of typical images, spectra, maps, curves, or measurements.
* **What this instrument cannot tell you:** a short list of limits and common misconceptions.

Use annotated images or example data when they exist, but do not block publishing a useful educational section while waiting for perfect examples. Add missing examples to the page to-do list.

## Shared Includes

Shared SEM text lives in `_includes/sem/`. These snippets are inserted into pages using Jekyll include tags, for example:

```liquid
{% include sem/common-safety.md %}
```

Current SEM includes:

* `_includes/sem/common-safety.md`: shared material rules, glove use, loose-particle warning, and ask-staff language.
* `_includes/sem/sample-prep-at-a-glance.md`: shared sample-prep table.
* `_includes/sem/quick-imaging-settings.md`: shared imaging starting points.
* `_includes/sem/detailed-training-intro.md`: standard paragraph explaining that the lower section is training-guide content.
* `_includes/sem/live-sem-workflow.md`: shared Phenom software workflow, including project labels, NavCam, LiveSEM, and image acquisition.
* `_includes/sem/data-and-analysis.md`: shared basic image data handling.
* `_includes/sem/common-failure-modes.md`: shared SEM troubleshooting table.

Update an include when the same language should change on every page that uses it. Update the instrument page directly when the change applies only to that instrument.

## Link And Image Paths

The include files are inserted into pages before the site is built. Relative links inside an include are interpreted relative to the final page location, not relative to `_includes/`.

Because the SEM includes are currently used by pages in `instruments/`, image links inside the includes should usually start with:

```text
../assets/img/tutorials/sem/
```

If an include is later used by a page in another folder, check every relative link after moving it.

## Anchors

Many instrument pages use explicit heading IDs such as:

```markdown
### Compatible Materials And Sample Prep {#materials}
```

These IDs make the page index and workstation shortcuts stable even if heading text changes. Do not include the same shared snippet twice on one page, because that can create duplicate IDs.

## Adding A New Instrument Page

1. Create a new Markdown file in `instruments/`, such as `instruments/xrd.md`.
2. Start with front matter:

```yaml
---
layout: default
---
```

3. Follow the standard page order above: overview, quick actions, educational context, page index, standard operating protocol, compatible materials, detailed operating instructions, data processing, common failure modes, manuals, exercises, and to-do list.
4. If several pages need the same text, create a small include under `_includes/<instrument-or-family>/`.
5. Keep instrument-specific safety-critical steps on the instrument page itself.
6. Validate local links and image paths before making the page live.

## Transition Notes

Markdown files with front matter build into accessible pages even when they are not linked from navigation. Do not put unsafe, misleading, or contradictory instructions in a buildable draft. Add a page to `instruments/index.md` only when it is ready to replace the legacy catalog destination.

The legacy `lab.md` catalog is superseded by `instruments/index.md`. Preserve its URL during migration, but do not use it as a second catalog or as the place to announce new instrument pages. It should ultimately become a concise compatibility pointer to the canonical catalog.

The intended future pattern is that instrument workstations open the relevant instrument page directly, for example:

* Phenom XL workstation: `instruments/phenom-xl.html`
* Phenom Pure workstation: `instruments/phenom-pure.html`

The shared hub, such as `instruments/sem.html`, is best linked from the instrument catalog and used by users who are deciding which instrument to reserve.

Instrument-specific to-do sections are useful while a page is being actively developed in preview. Before production launch, review visible to-do sections and retain only items that are genuinely useful to student contributors or public collaborators; move internal maintenance work to `_staff/site-todo.md`.
