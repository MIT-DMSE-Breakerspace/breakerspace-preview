---
layout: default
---
# Horiba Duetta Fluorescence And Absorbance Spectrometer

## Overview

<img src="../assets/img/uv-vis.JPG" alt="Horiba Duetta fluorescence and absorbance spectrometer." style="width:45%; float:right; margin-left:10px; margin-bottom:1.4em;">

The Horiba Duetta is the Breakerspace spectrometer for measuring how liquid samples absorb and emit light. It can operate as a UV-Vis-NIR absorbance spectrometer, as a fluorometer, or as a combined absorbance and fluorescence instrument for workflows that need inner-filter-effect correction.

Routine Breakerspace training currently focuses on absorbance and transmission spectra using cuvette samples in EZ Spec. Fluorescence and combined molecular-fingerprint workflows are useful, but should be treated as staff-guided until the full lab workflow is documented.

This draft page is the upgraded operating content for the Duetta. It focuses first on improving the SOP, detailed operating notes, sample handling, data handling, troubleshooting, exercises, and to-do list. The full integrated landing-page layer can be added after the core tutorial content is reviewed.

<div style="clear:both;"></div>

<a name="sop"></a>
### Standard Operating Protocol

<a name="startup"></a>
#### Instrument Startup

* Confirm the sample compartment is empty and the lid can close normally.
* Turn on the rear instrument power switch if the instrument is off.
* Press the front power button.
* Confirm that the front power button is blue before operating the instrument.
* Log on to the instrument workstation using your MIT Kerberos.
* Open EZ Spec software.
* Click the EZ Spec button to enter the acquisition interface.
* For best results, let the lamps warm up before collecting data, especially if quantitative comparison matters.

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/uv-vis/duetta back power switch.jpg" target="_parent"><img src="../assets/img/tutorials/uv-vis/duetta back power switch.jpg" alt="Rear power switch on the Horiba Duetta." style="width:49%; margin:0"></a>
  <a href="../assets/img/tutorials/uv-vis/duetta power front button.jpg" target="_parent"><img src="../assets/img/tutorials/uv-vis/duetta power front button.jpg" alt="Front power button on the Horiba Duetta." style="width:49%; margin:0"></a>
  <figcaption>Use the rear switch and front power button to start the Duetta. The front power button must be blue before operation.</figcaption>
</figure>

<a name="operation"></a>
#### Operation

* Wear nitrile gloves when handling cuvettes, samples, pipettes, wipes, or any liquid-handling supplies.
* Prepare a clean blank/reference cuvette and a clean sample cuvette.
* For routine absorbance work, use the same solvent or matrix for the blank that is used in the sample. Deionized water is appropriate only when the sample is water-based and contains no other background components that need to be subtracted.
* Click New Method.
* For routine training, choose Absorbance and Transmission.
* Choose Spectra.
* Check wavelength range, increment, integration/acquisition settings, and file name/location before collecting data.
* Set Mode to Both if you want both absorbance and transmission outputs.
* Fill the cuvette with enough liquid to cover the optical beam path.
* Check the cuvette for bubbles, fingerprints, droplets, scratches, sediment, or lint in the beam path.
* Wipe the outside of the cuvette with a clean lint-free wipe before loading.
* Click Acquire.
* When prompted, load the blank/reference cuvette, close the lid, and collect the blank.
* When prompted, load the sample cuvette in the same orientation, close the lid, and collect the sample spectrum.
* Save or export the data before closing the method or software.

<figure>
  <a href="../assets/img/tutorials/uv-vis/Both.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/Both.png" alt="EZ Spec mode set to Both for absorbance and transmission." style="width:50%; margin:0"></a>
  <figcaption>For routine absorbance training, set the acquisition mode to Both when absorbance and transmission are both useful.</figcaption>
</figure>

<figure>
  <a href="../assets/img/tutorials/uv-vis/Acquire.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/Acquire.png" alt="Acquire button in EZ Spec." style="width:50%; margin:0"></a>
  <figcaption>Click Acquire after the method, file name, save location, and sample setup are ready.</figcaption>
</figure>

<figure style="margin-left:0; margin-right:0;">
  <a href="../assets/img/tutorials/uv-vis/open uv-vis lid.gif" target="_parent"><img src="../assets/img/tutorials/uv-vis/open uv-vis lid.gif" alt="Opening the Duetta sample compartment lid." style="width:49%; margin:0"></a>
  <a href="../assets/img/tutorials/uv-vis/add in cuvette.gif" target="_parent"><img src="../assets/img/tutorials/uv-vis/add in cuvette.gif" alt="Loading a cuvette into the Duetta sample compartment." style="width:49%; margin:0"></a>
  <figcaption>Load cuvettes gently, keep the optical faces clean, and close the lid before acquisition.</figcaption>
</figure>

<a name="shutdown"></a>
#### Instrument Shutdown

* Save and export all data you need.
* Remove your sample and blank cuvettes from the instrument.
* Dispose of or store samples according to the approved plan for that material.
* Leave spare cuvettes, wipes, and the sample area clean.
* Close EZ Spec.
* Log out of the workstation.
* Push and hold the front power button until the light shuts off. Shutting the instrument down is important so the lamp does not burn unnecessarily.
* Leave the work area clean and remove all samples, labels, wipes, and liquid-handling supplies.

<a name="materials"></a>
### Compatible Materials And Sample Prep

* Samples must be non-hazardous and safe to handle in the Breakerspace.
* Routine samples should be liquids that can be contained safely in a clean cuvette.
* Most routine training samples should be water-based, low-odor, non-volatile, non-staining, and easy to clean if spilled.
* Do not bring hazardous solvents, reactive chemicals, biological hazards, strongly odorous liquids, staining dyes, or unknown liquids without staff approval.
* Do not load leaking, cracked, dirty, overfilled, or unstable cuvettes.
* Do not place loose solids, powders, open containers, or uncontained wet materials in the sample compartment.
* If a sample contains particles or sediment, decide whether the goal is to measure the dissolved material, the suspension, or scattering from particles. Those are different measurements.

##### _If you have any questions about whether a sample is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab._

#### Cuvettes

* Spare cuvettes are in the bottom drawer under the sample-prep bench, labeled "Spare Cuvettes."
* Deionized water for dilution or blank samples is typically available near the sink or sample-prep bench.
* Use cuvettes that are clean, clear, and compatible with the wavelength range and sample.
* Handle cuvettes by the frosted or non-optical sides when possible.
* Do not touch the clear optical faces with bare fingers or gloves.
* Keep the outside of the cuvette dry and clean. Fingerprints, droplets, lint, and scratches can add false absorbance or scattering.
* Fill the cuvette enough to cover the optical beam path, but do not overfill it.
* Remove bubbles from the optical path before measurement.
* Use the same cuvette orientation for blank and sample whenever possible.
* Use matched cuvettes or the same cuvette rinsed between measurements when small differences matter.

#### Concentration And Dilution

Absorbance measurements work best when the sample absorbs some light but does not block nearly all of it. If a peak is cut off, flat at the top, noisy, or far above the useful range, the sample is probably too concentrated at that wavelength.

Start with a dilute sample when the concentration is unknown. If the spectrum is too weak, increase concentration or path length if appropriate. If the spectrum is saturated, dilute the sample and collect the blank and sample again.

For fluorescence, high concentration can be especially misleading because molecules can reabsorb emitted light or quench each other. If fluorescence workflows are used, dilution series and inner-filter-effect correction may be needed.

<a name="quick-method"></a>
### Quick Method Selection

| Goal | Starting method | Notes |
| --- | --- | --- |
| Measure color, dye concentration, or visible absorption | Absorbance and Transmission, Spectra | Use an appropriate blank and check that peaks are not saturated. |
| Compare a dilution series | Absorbance and Transmission, Spectra | Keep cuvette type, orientation, wavelength range, and blank consistent. |
| Check whether a sample transmits or absorbs light across UV/visible/NIR wavelengths | Absorbance and Transmission, Spectra | Make sure the cuvette and solvent are appropriate for the wavelength range. |
| Measure fluorescence emission or excitation | Fluorescence method | Staff-guided until the Breakerspace fluorescence workflow is fully documented. |
| Use absorbance-corrected fluorescence or molecular fingerprint workflows | Combined absorbance and fluorescence method | Staff-guided; method setup and interpretation are more specialized. |
| Estimate relative nanoparticle or suspension behavior | Absorbance/scattering comparison | Interpret carefully: turbidity, scattering, and settling can dominate the result. |

<a name="details"></a>
### Detailed Operating Instructions

The sections above are meant as a quick reference for trained users. The sections below are written as a training guide for new users and include practical details, images, and troubleshooting cues that are easiest to understand at the instrument.

The most common preventable Duetta problems are dirty cuvettes, mismatched blanks, samples that are too concentrated, bubbles in the beam path, unclear file names, and data that was collected but not exported before the user left.

#### What Absorbance And Transmission Measure

Absorbance and transmission describe how much light passes through a sample at each wavelength. Transmission is the fraction of light that gets through. Absorbance is a logarithmic way of reporting how much light was lost relative to the blank.

In a simple dye solution, more dye usually means higher absorbance at the dye's absorbing wavelengths. That relationship is often useful for concentration comparisons, but only when the sample is dilute enough, the blank is appropriate, the path length is known, and the instrument response is not saturated.

Absorbance spectra can be affected by more than molecular absorption. Particles, bubbles, fingerprints, scratches, cuvette mismatch, solvent background, fluorescence, and stray light can all change the spectrum. Always compare the result with what you know about the sample and how it was prepared.

#### What Fluorescence Measures

Fluorescence occurs when a sample absorbs light and then emits light at a longer wavelength. Fluorescence can be extremely sensitive, which makes it useful for fluorescent dyes, quantum dots, biological labels, and some natural materials.

Fluorescence is also easy to misinterpret if the method is not chosen carefully. Excitation wavelength, emission range, slit settings, concentration, solvent, scattering, photobleaching, and inner-filter effects can all change the result. For now, use fluorescence workflows with staff guidance unless you have already been trained on the specific method.

#### Blank And Reference Selection

The blank should represent everything in the sample except the absorbing or fluorescent material you want to measure. For a dye dissolved in deionized water, deionized water can be a reasonable blank. For a dye in buffer, solvent mixture, media, or extract, the blank should usually be that same background without the dye.

If the blank does not match the sample background, the spectrum may include solvent, cuvette, buffer, or container effects that do not belong to the material you are trying to study.

When comparing several samples, use the same blank strategy for all of them and record what the blank was.

#### Cuvette Loading Workflow

1. Label samples before going to the instrument if several liquids look similar.
2. Mix the sample gently if it may have settled, but avoid making bubbles.
3. Rinse the cuvette with a small amount of the solution when appropriate, then fill with the measurement sample.
4. Check that the liquid level covers the beam path.
5. Inspect the optical faces for droplets, fingerprints, scratches, dust, or lint.
6. Wipe the cuvette exterior with a clean lint-free wipe.
7. Hold the cuvette by non-optical sides and load it in a consistent orientation.
8. Close the sample compartment lid before acquisition.
9. Remove the cuvette after measurement; do not leave samples in the instrument.

#### Routine Absorbance Workflow In EZ Spec

1. Start EZ Spec and click the EZ Spec button.
2. Click New Method.
3. Choose Absorbance and Transmission.
4. Choose Spectra.
5. Review the wavelength range and acquisition settings.
6. Set Mode to Both if you want both absorbance and transmission.
7. Enter a clear sample name and choose the save location.
8. Prepare and inspect the blank cuvette.
9. Click Acquire.
10. Load the blank when prompted, close the lid, and collect the blank.
11. Prepare and inspect the sample cuvette.
12. Load the sample when prompted, close the lid, and collect the spectrum.
13. Check the spectrum for saturation, unexpected baseline shape, or obvious artifacts.
14. Save or export the data before moving to the next sample.

#### Comparing A Series Of Samples

For concentration comparisons, keep everything consistent except the concentration or treatment being tested.

* Use the same blank.
* Use the same cuvette type and orientation.
* Use the same wavelength range and acquisition settings.
* Measure from low concentration to high concentration when carryover is a concern.
* Rinse or replace cuvettes between samples.
* Watch for saturation at the strongest peaks.
* Record dilution factors and sample labels outside the software as well as in file names.

#### Working With Suspensions, Particles, Or Turbid Samples

Suspensions and nanoparticle samples can produce spectra that include both absorption and scattering. Larger particles, aggregates, bubbles, or settling can increase apparent absorbance even when the material is not absorbing strongly at that wavelength.

Before interpreting a suspension spectrum, ask whether the sample is stable during the measurement. If particles settle quickly, repeat measurements may change. If the goal is particle size or aggregation, the Duetta result may be useful as a relative comparison, but it should not be treated as a direct particle-size measurement without a validated method.

<a name="data"></a>
### Data Processing And Analysis

* Under the Acquire tab, you can toggle between Transmission, Absorbance, and Fluorescence views when those data are available.

<figure>
  <a href="../assets/img/tutorials/uv-vis/Absorbance.png" target="_parent"><img src="../assets/img/tutorials/uv-vis/Absorbance.png" alt="Absorbance and transmission display in EZ Spec." style="width:50%; margin:0"></a>
  <figcaption>Use the Acquire tab to view collected absorbance and transmission data.</figcaption>
</figure>

* Use clear file names that include sample identity, concentration or dilution, date, and measurement type when useful.
* Save the native EZ Spec file if you may need to reopen or process the method later.
* Export text or CSV-style data when you need to plot spectra in another program.
* Export or save a report when you need a quick summary for notes or training documentation.
* Under the Process tab, EZ Spec can process data in several ways, including smoothing, peak finding, curve fitting, and related operations.
* Do not rely on smoothing or peak finding to fix poor data. If the raw spectrum is saturated, noisy, contaminated, or blanked incorrectly, recollect the measurement.

#### What To Check Before Trusting A Spectrum

* Are the strongest peaks within a useful absorbance range, or are they clipped/saturated?
* Does the blank match the solvent or sample background?
* Could bubbles, fingerprints, scratches, lint, or droplets be in the beam path?
* Does the spectrum repeat when the same sample is measured again?
* Does a dilution series behave in the expected direction?
* Are particles settling, scattering, or aggregating during measurement?
* Is the file saved and exported in a format you can use later?

<a name="failures"></a>
### Common Failure Modes

| Problem | Likely Cause | What To Try |
| --- | --- | --- |
| Peaks are cut off, flat-topped, or extremely high | Sample is too concentrated, detector is saturated, or wavelength range includes very strong absorption | Dilute the sample, recollect the blank, and measure again. |
| Absorbance baseline is unexpectedly high across most wavelengths | Dirty cuvette, fingerprints, bubbles, scattering particles, wrong blank, or sample turbidity | Inspect and wipe the cuvette, remove bubbles, use the correct blank, dilute or clarify the sample if appropriate. |
| Spectrum is noisy or weak | Sample absorbs very little, integration/acquisition settings are not ideal, lamp is not warmed up, or cuvette/sample is inappropriate for the wavelength range | Let lamps warm up, check method settings, increase concentration if safe and appropriate, or ask staff about method choice. |
| Repeat measurements do not agree | Cuvette orientation changed, bubbles moved, sample settled, cuvette was not rinsed, or file/method settings changed | Keep orientation consistent, remix gently, remove bubbles, rinse/replace cuvette, and repeat with consistent settings. |
| Blank-corrected spectrum looks physically strange | Blank does not match the sample background or was collected with a dirty/mismatched cuvette | Prepare a better blank, clean or replace cuvettes, and recollect blank and sample. |
| Fluorescence signal is unexpectedly low | Wrong excitation/emission settings, sample does not fluoresce, photobleaching, quenching, or concentration effects | Ask staff to review the fluorescence method; try a known fluorescent standard or dilution series if appropriate. |
| Fluorescence signal is distorted or lower at high concentration | Inner-filter effects, reabsorption, or quenching | Dilute the sample and use absorbance-corrected workflows only with staff-approved methods. |
| Sample spills or cuvette leaks | Overfilled, cracked, poorly capped, or mishandled cuvette | Stop, keep liquid out of the instrument, notify staff, and clean only according to the approved material and spill procedure. |
| Data was collected but cannot be found later | File name, save location, or export step was missed | Save/export before closing EZ Spec; use clear project folders and file names. |

<a name="manuals"></a>
### Manufacturer Manuals

* [Local copy of Duetta with EZ Spec operation manual](../assets/img/tutorials/uv-vis/Duetta%20with%20EZ%20Spec%20Operation%20Manual%205700004252%20Rev%201.4.3.pdf)
* [Dropbox copy of Duetta with EZ Spec operation manual](https://www.dropbox.com/scl/fi/9bzwitjz004xd8pl5bpyl/Duetta-with-EZ-Spec-Operation-Manual-5700004252-Rev-1.4.3.pdf?rlkey=8ekvwddzdt0pk931zwpxov43l&st=yisoc2r2&dl=0)

<a name="exercises"></a>
### Exercises

* **Level 1 - General training:** Measure absorbance and transmission spectra from water with food coloring. Identify the wavelengths where the colored sample absorbs most strongly and export the data.
* **Level 1 - Blank comparison:** Measure the same colored water sample using deionized water as the blank, then repeat with an intentionally mismatched blank chosen by staff. Compare how the spectrum changes.
* **Level 1 - Concentration series:** Prepare or use a staff-provided dilution series of a colored sample. Measure each sample with the same method and plot peak absorbance versus relative concentration.
* **Level 2 - Saturation and dilution:** Measure a sample that is too concentrated, identify the saturated or clipped region, dilute it, and show how the spectrum improves.
* **Level 2 - Suspension comparison:** Compare a stable dye solution with a turbid or particle-containing sample. Describe which spectral features may come from absorption and which may come from scattering.
* **Level 3 - Fluorescence workflow:** With staff guidance, collect fluorescence data from a known fluorescent standard or safe fluorescent sample, then compare how excitation wavelength, concentration, or inner-filter correction changes the result.
* **Level 3 - Method development:** With staff guidance, create a repeatable absorbance or fluorescence method for a recurring sample type, including sample prep, blank choice, method settings, export format, and acceptance checks.

<a name="todo"></a>
### Tutorial To-Do List

* Confirm the current preferred EZ Spec method settings for routine absorbance training, including wavelength range, increment, integration/acquisition settings, and save/export workflow.
* Add screenshots for New Method, Absorbance and Transmission, Spectra, wavelength-range setup, sample naming, save location, blank prompt, and export options.
* Replace or supplement the cuvette-loading GIFs with versions showing appropriate glove use and clearer cuvette orientation.
* Add photos showing clean vs dirty cuvette optical faces, bubbles in the beam path, and the correct liquid fill height.
* Add a short absorbance example using a safe training dye, including the expected peak region and a dilution-series plot.
* Add a fluorescence example using a safe, robust training sample if fluorescence becomes part of routine training.
* Add a combined absorbance/fluorescence inner-filter-effect example or mark that workflow as staff-guided until documented.
* Add a complete level 1 exercise using a specific material-library or training-kit sample, including bin number/location once the cabinet is organized.
* Decide whether to link the current `tutorials/uv-vis.html` page to this draft after review or wait until the full integrated landing-page layer is complete.
