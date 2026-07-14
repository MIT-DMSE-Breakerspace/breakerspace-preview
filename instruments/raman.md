---
layout: default
title: Horiba XploRA Confocal Raman Microscope
---
# Horiba XploRA Confocal Raman Microscope

## Overview

<img src="../assets/img/raman.JPG" alt="Horiba XploRA confocal Raman microscope." style="width:45%; float:right; margin-left:10px; margin-bottom:1.4em;">

The Horiba XploRA is a confocal Raman microscope: it combines an optical microscope with a Raman spectrometer, so you can focus on a specific spot of a sample and collect a spectrum that helps identify what it is made of. It works on solids, powders, liquids, and gases, and is especially useful for organics, polymers, and many inorganic compounds.

The Breakerspace system is configured with three lasers (532 nm, 638 nm, and 785 nm) and four diffraction gratings (600, 1200, 1800, and 2400 grooves/mm), which let you trade off signal strength, spectral resolution, and fluorescence to suit different samples.

This page is the operating page for the Raman microscope. It combines the quick reference for trained users, detailed training notes, reservation link, manuals, exercises, and staff to-do list.

<div style="clear:both;"></div>

### Quick Actions {#quick-actions}

| Need | Use this link |
| --- | --- |
| New lab user or untrained Raman user | [Register for a Breakerspace lab training](https://breakerspace.libcal.com/calendar?cid=19408&t=w&d=0000-00-00&cal=19408&ct=69558&inc=0) |
| Reserve instrument time | [Open Raman microscope reservations](https://breakerspace.libcal.com/seat/174794) |
| Trained user operating the Raman now | [Standard operating protocol](#sop) |
| New user learning the full workflow | [Detailed operating instructions](#details) |
| Learning what Raman is used for | [What this instrument shows you](#science) |
| Choosing a laser and grating | [Laser and grating selection](#laser-grating) |
| Analyzing your data | [Data processing and analysis](#data) |
| Need practice tasks | [Exercises](#exercises) |

### What This Instrument Shows You {#science}

#### The Basic Idea

Raman spectroscopy identifies materials by how their molecules vibrate. When you shine a laser on a sample, almost all the light bounces off unchanged, but a tiny fraction exchanges a little energy with the molecule's vibrating bonds and comes back at slightly shifted wavelengths. Measuring those small shifts produces a spectrum with peaks at characteristic positions, a molecular "fingerprint" that often identifies a compound outright.

Because the XploRA is a *microscope*, you aim that laser through an objective lens at a specific spot, often just a few micrometers across. You can see the sample on screen, pick the exact feature you care about, and collect a spectrum from that point. Being *confocal* also means it can reject light from above and below the focal plane, so it can probe different depths within a transparent or layered sample.

Raman is often described as complementary to FTIR. Both probe molecular vibrations, but they respond to different kinds of bonds, so a feature that is weak in one is frequently strong in the other. A material that is difficult in the FTIR may be straightforward in the Raman, and vice versa.

#### What Scientists Use It For

* A chemist or materials scientist can identify an unknown solid, powder, or liquid by matching its Raman fingerprint to reference spectra.
* A pharmaceutical scientist can tell apart the active ingredients in a combination tablet, and even map where each is distributed across the surface.
* A geologist or gemologist can identify minerals and gemstones nondestructively, without cutting or dissolving the sample.
* An art conservator or forensic examiner can identify pigments, inks, fibers, or residues from a tiny spot without damaging the object.
* A semiconductor or 2D-materials researcher can measure strain, layer number, and quality in materials such as silicon, diamond, and graphene.
* A curious student can compare everyday plastics (is this container PET, HDPE, or polystyrene?), check whether two white powders are actually the same thing, or probe the layers of a snack-bag film.

#### What To Look For In The Results

Start with the peak positions. Raman peaks are plotted against "Raman shift" in wavenumbers (cm<sup>-1</sup>), and their positions are the primary fingerprint. Matching that pattern of positions against reference spectra is how compounds are identified, and a good match lines up several peaks rather than one.

Watch for a broad, sloping background swamping the peaks. That usually means fluorescence, where the sample re-emits light far more strongly than it Raman-scatters. It is the most common reason a Raman measurement fails, and the usual fix is a longer-wavelength laser (see [laser and grating selection](#laser-grating)).

Finally, judge peak sharpness and signal strength against your settings. Sharp, well-separated peaks may need a finer grating to resolve; a weak signal may need a shorter-wavelength laser or longer collection. The [detailed instructions](#details) explain these trade-offs.

#### What This Instrument Cannot Tell You

* It does not work well on metals, which do not produce a useful Raman signal, or on simple ionic salts such as NaCl.
* Strongly fluorescing materials can overwhelm the Raman signal entirely; if a sample still fluoresces with the 785 nm laser, it may simply not be suitable.
* It reports which molecules or bonds are present, not a full quantitative composition by default.
* It samples a tiny spot. That is powerful for targeting a feature, but it means one spectrum may not represent a non-uniform sample; sample several spots.
* Higher-energy lasers can heat or burn delicate, dark, or temperature-sensitive samples, so the "strongest signal" setting is not always safe to use.

### Standard Operating Protocol {#sop}

#### Instrument Startup {#startup}

* Log on to the instrument workstation using your MIT Kerberos.
* Open the LabSpec 6 software.
* Confirm the instrument is powered on. It should always be left powered on.
* Turn the laser emission remote-control power to on if needed. This enables the lasers but does not fire one.

#### Operation {#operation}

* Prepare your sample on a glass microscope slide (see [compatible materials and sample prep](#materials)).
* Lower the microscope stage with the coarse focus knob.
* Load the slide into the slide holder on the stage.
* Set the brightfield light source to full brightness.
* Find approximate focus with the coarse knob, adjusting brightness as needed.
* Refine the focus by rotating the joystick.
* Close the doors on the microscope enclosure.
* Collect Raman spectra as appropriate for your sample (see [detailed operating instructions](#details)).
* Repeat as needed.

#### Instrument Shutdown {#shutdown}

* Remove your sample from the stage and close the doors.
* Turn the laser emission remote-control power to off.
* Save all data. Each spectrum must be selected and saved individually.
* Close LabSpec 6.
* Log off the workstation.

### Compatible Materials And Sample Prep {#materials}

* All materials must be non-hazardous and safe to handle in the Breakerspace.
* The instrument can measure solids, powders, liquids, and gases.
* It works well for organics, polymers, acids and bases, metal oxides, and semiconductors.
* It is not useful for metals, ionic salts such as NaCl, or strongly fluorescing materials.

<p class="guidance-note"><em>If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab.</em></p>

#### Sample Prep

* Place the sample on a glass microscope slide.
* The objectives have a short working distance, so grind powders finely and keep the surface level and smooth.
* For a solid without a flat face, mount it to the slide with the sample press and Plastilina mounting clay to create a stable surface to focus on.

### Laser And Grating Selection {#laser-grating}

Choosing the laser and grating is the heart of getting a good Raman spectrum. The tables below summarize the trade-offs explained in the [detailed instructions](#details).

| Laser | Relative energy | When to use it |
| --- | --- | --- |
| 638 nm | Medium | Recommended starting point for most samples. |
| 532 nm | Highest | Switch to it when you need a stronger signal or better signal-to-noise, but avoid it for temperature-sensitive, dark, or delicate samples that could burn. |
| 785 nm | Lowest | Switch to it when the sample fluoresces. If it still fluoresces at 785 nm, it may not be suitable for Raman. |

| Grating (gr/mm) | Resolution | Signal strength | Note |
| --- | --- | --- | --- |
| 600 | Lower | Higher | The CCD usually captures the whole spectrum in one position; good for a first look. |
| 1200 | Medium | Medium | A balance between resolution and signal. |
| 1800 / 2400 | Higher | Lower | May need the grating repositioned five or more times to capture the full spectrum. |

### Detailed Operating Instructions {#details}

The sections above are a quick reference for trained users. The sections below are a training guide for new users that explains why the laser and grating choices matter.

#### Choosing A Laser

The system includes three lasers: 532 nm, 638 nm, and 785 nm. Shorter wavelengths carry more energy and generally produce a stronger Raman signal, which is usually what you want. But higher energy has two costs. First, it can burn temperature-sensitive samples, especially at 532 nm. Second, materials that fluoresce fluoresce more strongly at shorter wavelengths, and that fluorescence can swamp the detector until the Raman peaks are lost in the background.

A practical approach is to start with the 638 nm laser. Move to 532 nm if you need a stronger signal or better signal-to-noise. If you see fluorescence, switch to 785 nm. If the sample still fluoresces at 785 nm, it may not be a good candidate for Raman spectroscopy.

#### Choosing A Grating

Scattered light must be spread out by a diffraction grating before the detector can measure its intensity at each wavelength. The system has four gratings: 600, 1200, 1800, and 2400 grooves/mm.

A coarser grating (600 gr/mm) spreads the light less, so more signal lands on the detector at once: higher signal strength but lower resolution, and closely spaced peaks can merge. Finer gratings spread the light more, giving higher resolution at the cost of signal strength.

Finer gratings also produce a [wider dispersion](https://www.dropbox.com/scl/fi/0kcumhfxxhycy8b47l32d/Raman-Spectral-Resolution-Tech-Note.pdf?rlkey=321k53nqc9jn6cdqkqhpb0rzd&st=dr66nh85&dl=0) than the CCD detector chip is wide. The instrument handles this by moving the grating to aim different segments of the spectrum onto the detector in turn. With an 1800 or 2400 gr/mm grating you may need five or more grating positions to capture a full spectrum, whereas the 600 gr/mm grating usually captures it in a single position.

#### A Typical Workflow

1. Load and focus the sample.
2. Select the 638 nm laser and 600 gr/mm grating.
3. Use the real-time display (RTD) to look for a signal, and confirm the spectrometer is covering the wavenumber range where you expect key peaks. With this combination the CCD should capture the full width in one position.
4. Refine the focus by rotating the joystick to control fine focus, maximizing the signal strength.
5. Once you can see key peaks and the setup is working, choose laser and grating combinations that suit your specific goal and collect your spectra.

### Data Processing And Analysis {#data}

Spectra are collected and saved in LabSpec 6. Remember that each spectrum must be selected and saved individually before you close the software.

Typical processing steps include:

* **Baseline correction:** subtract the sloping background (often from residual fluorescence) so the true peaks stand out.
* **Peak identification:** note the positions of the main peaks in Raman shift (cm<sup>-1</sup>), which are the basis for identification.
* **Comparison and matching:** compare your peaks against reference spectra, a database, or a known control. As with other fingerprint methods, a good match lines up several peaks, not just one.
* **Export:** save both the raw spectrum and any processed version, and keep a copy on your own storage.

Data processing beyond these basics is best learned at the instrument; please ask lab staff if you have questions about analysis or database searching.

### Common Failure Modes {#failures}

| Symptom | Likely cause | What to try |
| --- | --- | --- |
| Cameras do not connect to the software | Software or camera communication issue | Restart the workstation, then reopen LabSpec 6. |
| No spectrum at all | Laser is not actually on | Confirm the laser is firing using the internal camera view. |
| No spectrum, signal seems out of range | Spectrometer position is outside the displayed range | Reposition the spectrometer to cover the expected wavenumber range. |
| No identifiable peaks, just a large broad hump | Fluorescence is overwhelming the Raman signal | Switch to a longer-wavelength laser (785 nm); the material may not be suitable for Raman. |
| Weak signal | Poor focus, or laser/grating combination too weak | Refine focus to maximize signal, then consider a shorter-wavelength laser or coarser grating. |
| Sample looks damaged after measurement | Laser burned a temperature-sensitive sample | Use a longer-wavelength laser and lower power; ask staff about power settings. |

### Manufacturer Manuals {#manuals}

Manufacturer manuals for the XploRA and LabSpec 6 will be linked here. In the meantime, ask Breakerspace staff for the current documentation.

* [Raman spectral resolution technical note (grating dispersion)](https://www.dropbox.com/scl/fi/0kcumhfxxhycy8b47l32d/Raman-Spectral-Resolution-Tech-Note.pdf?rlkey=321k53nqc9jn6cdqkqhpb0rzd&st=dr66nh85&dl=0)

### Links {#links}

* [Horiba: what is Raman spectroscopy?](https://www.horiba.com/int/scientific/technologies/raman-imaging-and-spectroscopy/raman-spectroscopy/)
* [Horiba XploRA PLUS product page](https://www.horiba.com/int/scientific/products/detail/action/show/Product/xplora-plus-1528/)

### Exercises {#exercises}

* **Level 1 - Calibration and a known sample:** Run the autocalibration routine and collect a spectrum from the polystyrene standard. Confirm your peaks match the known polystyrene reference.
* **Level 2 - Laser and grating comparison:** Collect a spectrum from one sample using different laser and grating combinations. Describe how each choice changed signal strength, resolution, and fluorescence.
* **Level 2 - Combination-tablet mapping:** Perform a spatial map on an [aspirin/paracetamol/caffeine tablet](https://en.wikipedia.org/wiki/Aspirin/paracetamol/caffeine) and identify the different compounds present.
* **Level 3 - Confocal depth profiling:** Use the confocal capability to collect spectra at different depths within a layered material, such as a snack-bag film, and identify the layers.
* **Level 3 - Fluorescence troubleshooting:** Take a sample that fluoresces under the 532 nm laser and work through the laser choices to recover a usable Raman spectrum, or determine that the sample is not suitable.

### Tutorial To-Do List {#todo}

* Add a startup image showing the laser emission remote-control power and the powered-on indicator.
* Add photos or annotated stills of sample loading, focusing with the joystick, and the slide holder on the stage.
* Add an annotated example spectrum showing labeled peaks and a fluorescence-dominated spectrum for comparison.
* Link the manufacturer XploRA and LabSpec 6 manuals once the current files are gathered.
* Expand the data-processing section with a LabSpec 6 baseline-correction and peak-search walkthrough, ideally with screenshots.
* Confirm approved standard/training samples (polystyrene, combination tablet) for the exercises once the sample library is ready.
* Consider adding real student-project or example-result links to the Links section.
