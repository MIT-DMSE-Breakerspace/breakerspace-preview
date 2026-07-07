# Codex Handoff: Breakerspace Preview Site

This folder is the preview copy of the MIT DMSE Breakerspace website. It was copied from the production site repo so structural changes can be developed and reviewed without disturbing the live website.

Preview folder:

```text
/Users/justinlavallee/Library/CloudStorage/Dropbox-MIT/DMSE Breakerspace/admin/MIT-DMSE-Breakerspace-preview
```

Original production working folder:

```text
/Users/justinlavallee/Library/CloudStorage/Dropbox-MIT/DMSE Breakerspace/admin/MIT-DMSE-Breakerspace
```

Work in the preview folder unless the user explicitly asks otherwise.

## Current State

The preview folder was copied from the production working tree with `.git` excluded. The user deleted `CNAME` from the preview folder so the preview GitHub Pages repo will not try to claim the live `breakerspace.mit.edu` domain.

The SEM and ion mill tutorial preview files have been promoted in this preview copy:

* `tutorials/sem-preview.md` was copied over `tutorials/sem.md`, then removed.
* `tutorials/ion-mill-preview.md` was copied over `tutorials/ion-mill.md`, then removed.

Existing links to `tutorials/sem.html` and `tutorials/ion-mill.html` should now reach the updated content in the preview site.

`tutorials/xrd-preview.md` and `tutorials/uv-vis-preview.md` still exist but were not promoted, because they predated this work and may not be ready.

## Site Architecture Notes

This is a simple Jekyll/GitHub Pages site using `jekyll-theme-minimal`.

Important files:

* `_config.yml`: site title, logo, description, theme.
* `_layouts/default.html`: global layout and current top-level navigation.
* `_includes/`: shared Jekyll include snippets.
* `index.md`: homepage.
* `lab.md`: instrument overview page.
* `sop.md`: existing tutorial/SOP index page.
* `tutorials/`: current tutorial pages.
* `instruments/`: new integrated instrument page pilot area.

The current production-style navigation in `_layouts/default.html` is hardcoded with absolute links to `https://breakerspace.mit.edu/...`. A likely preview-site improvement is to move navigation into `_data/navigation.yml` and render it with `relative_url`, so the same layout works in production, preview, and local builds.

## Content Strategy

The desired content model is a two-speed structure:

* The top of an operating/tutorial page should act as a concise quick reference for trained users.
* The detailed operating instructions should act as a rich training guide for new users, with images, GIFs, practical context, troubleshooting cues, exercises, and a to-do list.

The user especially likes the FTIR tutorial as an example of this concept.

The user also wants:

* consistent wording for routine tasks, such as "Log on to the instrument workstation using your MIT Kerberos."
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

For instruments that are single, unambiguous tools, one page such as `instruments/ftir.md` may eventually be enough.

For instrument families or cases where mixed instructions could confuse users, split pages are better.

## SEM Split

The SEM content has been split into:

* `instruments/sem.md`: shared SEM hub, comparison page, interactive chooser, shared concepts.
* `instruments/phenom-xl.md`: Phenom XL-only operating page.
* `instruments/phenom-pure.md`: Phenom Pure-only operating page.

Reason for split: the Phenom XL and Phenom Pure have different safety-critical workflows, especially sample-height/loading rules. The XL page should not present Pure-specific holder-edge guidance as an operating option, and the Pure page should not present XL-specific tray/EDS guidance as an operating option.

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

### SEM Tutorial

`tutorials/sem.md` now contains the improved two-speed SEM tutorial content, including:

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

The integrated SEM pages under `instruments/` may become the preferred future path, but existing tutorial links now reach improved content.

### Ion Mill Tutorial

`tutorials/ion-mill.md` now contains the improved two-speed ion mill tutorial content, including:

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
* make `lab.md` an instrument overview and browsing page
* add integrated instrument pages under `instruments/`
* update top-level navigation to expose lab/instruments/tutorials/resources cleanly
* possibly have each instrument workstation open the relevant instrument page directly
* keep or rework `sop.md` as a concise tutorial index during transition
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

If a new preview repo is initialized, use normal Git status/diff commands there. Until then, this preview folder may not be a git repository.

## Working Preferences

The user wants practical, polished content that lab staff and students can maintain. Avoid overly clever structures if they make manual updates harder. Use shared includes for consistency only where they clearly reduce duplicated wording and do not make the page hard to understand.

When creating new integrated instrument pages, preserve common language for routine tasks and add a bottom exercise/to-do section.

Do not edit the production folder unless explicitly asked. Work in this preview folder for the preview-site project.
