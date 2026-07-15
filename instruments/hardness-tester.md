---
layout: default
title: Innovatest Nemesis 5100G2 Hardness Tester
---
# Innovatest Nemesis 5100G2 Hardness Tester

## Overview

<img src="../assets/img/hardness-tester.JPG" alt="Innovatest Nemesis 5100G2 hardness tester." style="width:45%; float:right; margin-left:10px; margin-bottom:1.4em;">

The Innovatest Nemesis 5100G2 measures the hardness of a material by pressing a hard indenter into its surface under a known load and measuring the size or depth of the resulting indent. A smaller indent means a harder material.

The Breakerspace system has a 9-position turret that automatically switches between indenters and objectives, a load cell to apply and measure the test force, and a motorized XY stage that can run programmed test patterns. It is equipped with indenters for Vickers, Rockwell, and Brinell tests and can run a range of scales.

This page is the operating page for the hardness tester. It combines the quick reference for trained users, detailed training notes, reservation link, manuals, exercises, and staff to-do list.

<div style="clear:both;"></div>

### Quick Actions {#quick-actions}

| Need | Use this link |
| --- | --- |
| New lab user or untrained hardness-tester user | [Register for a Breakerspace lab training](https://breakerspace.libcal.com/calendar?cid=19408&t=w&d=0000-00-00&cal=19408&ct=69558&inc=0) |
| Reserve instrument time | [Open hardness tester reservations](https://breakerspace.libcal.com/seat/181543) |
| Trained user operating the tester now | [Standard operating protocol](#sop) |
| New user learning the full workflow | [Detailed operating instructions](#details) |
| Learning what hardness testing shows you | [What this instrument shows you](#science) |
| Choosing a test method | [Test method selection](#test-method) |
| Analyzing your data | [Data processing and analysis](#data) |
| Need manufacturer documentation | [Manufacturer manuals](#manuals) |
| Need practice tasks | [Exercises](#exercises) |

### What This Instrument Shows You {#science}

#### The Basic Idea

Hardness is a measure of how well a material resists being permanently dented. To measure it, the instrument presses a hard, precisely shaped indenter into the surface with a controlled force, holds it briefly, and then withdraws it. The material's hardness is calculated from how big the leftover indent is (for methods that measure the indent optically) or how deep the indenter went (for methods that measure depth). Harder materials leave smaller, shallower indents.

Hardness is quick, requires little sample preparation compared with a full mechanical test, and only marks a small spot, so it is one of the most common ways to characterize metals and other solids. It also correlates usefully with other properties: for many metals, higher hardness tracks with higher strength and wear resistance.

There are several standard methods, and they differ mainly in the indenter shape and how the result is read:

* **Vickers** presses a diamond pyramid and measures the diagonals of the square indent under a microscope. It works across a very wide range of materials and loads.
* **Rockwell** presses a diamond cone or a hardened ball and measures the *depth* of penetration directly. It is fast and needs no microscope, but the indenter and scale must be matched to the material.
* **Brinell** presses a larger ball and measures the indent diameter. The larger indent averages over a bigger area, which suits coarse or non-uniform materials.

#### What Scientists Use It For

* A metallurgist can check whether a heat treatment worked, since hardening, tempering, and annealing all change hardness in predictable ways.
* A manufacturer can verify that incoming stock or a finished part meets a hardness specification.
* A materials scientist can map hardness across a weld, a coating, or a case-hardened surface to see how properties vary from point to point.
* A failure analyst can compare a broken part against spec to see whether the wrong material or treatment was used.
* A student can compare the hardness of different alloys, or see for themselves how cold-working or heat-treating a metal changes it.

#### What To Look For In The Results

The main output is a hardness number with its scale, such as `669 HV 40` (a Vickers value at a 40 kgf-equivalent load) or an HRC value for Rockwell. Always record the scale, not just the number, because a bare number is meaningless without it.

For Vickers and Brinell, the instrument also reports the measured indent dimensions (for example, the two diagonals d1 and d2 of a Vickers indent), which is how the hardness is calculated. A well-formed, symmetric indent gives a trustworthy number; a lopsided or ragged indent is a sign the sample was tilted, rough, or moving.

When you run a pattern of several points, look at the spread as well as the average. The instrument reports statistics such as mean, minimum, maximum, and standard deviation. A large spread can be real (a non-uniform material) or a setup problem (uneven surface, poor focus), so interpret it alongside the indent quality.

#### What This Instrument Cannot Tell You

* Hardness is not the same as strength or toughness. It correlates with them for many metals, but it does not directly measure how much load a part carries or how it fractures. For that, use the [Instron](./instron.html).
* Hardness numbers are method-specific. Vickers values at different loads are equivalent to each other, but Rockwell scales are not interchangeable with each other or with Vickers without a conversion table, and conversions are approximate.
* It only probes a small spot near the surface. A single indent may not represent a coating over a different substrate, or a material that varies internally.
* Results depend on a good surface. A rough, tilted, curved, or dirty surface gives unreliable numbers.
* It does not identify what a material is. It measures a property, not composition.

### Standard Operating Protocol {#sop}

Match the indenter and scale to your sample before testing. Using a scale whose indenter is too soft for a hard surface can damage the indenter or the machine (see [common failure modes](#failures)). If you are not sure which scale is safe for your material, ask staff.

#### Startup {#startup}

* Turn on the machine using the red power switch at the back.
* Log in to the Impressions software. The username is `mit hardness`; leave the password field empty.

#### Operation {#operation}

* Place your sample on the stage.
* Find a clean, flat spot using the camera, moving the stage with the joystick or the software.
* Focus with the 2.5x objective, then switch to 10x and refocus.
* Click the **In Focus** button.
* Choose your hardness test in the top-left blue box (see [test method selection](#test-method)).
* Click **Start**; the test then runs automatically.
* To test several points, click **Pattern** and choose your settings. Return to single-point mode when you are done with the pattern.

#### Shutdown {#shutdown}

* Confirm you are back in single-point mode (patterns are retained across users).
* Remove your sample and turn off the workstation.
* Toggle the power switch at the back of the machine to off.
* Leave the stage and work area clean.

### Compatible Materials And Sample Prep {#materials}

* All materials must be non-hazardous and safe to handle in the Breakerspace.
* Prepare a flat sample, ideally polished. An unpolished sample will not damage the machine but gives worse results, because the indent edges are harder to measure.
* The test surface should be flat and stable on the stage; a tilted, curved, or rocking sample gives unreliable numbers.
* Polishing equipment is available next to the sink.
* The sample must be hard enough that its scale does not risk damaging the indenter; confirm the method suits the material (see [test method selection](#test-method)).

<p class="guidance-note"><em>If you have any questions about whether a material is appropriate to characterize in the Breakerspace, please ask before bringing it to the lab.</em></p>

### Test Method Selection {#test-method}

| Method | Indenter | Read from | Good for |
| --- | --- | --- | --- |
| Vickers (HV) | Diamond pyramid | Optical measurement of the indent diagonals | A wide range of materials and loads; the general-purpose default. |
| Rockwell (HRA, HRB, HRC, etc.) | Diamond cone or hardened ball, depending on scale | Depth of penetration, read directly | Fast metal testing; the indenter and scale must match the material. |
| Brinell (HB) | Larger ball | Optical measurement of the indent diameter | Coarse or non-uniform materials, where averaging over a larger indent helps. |

Two things to get right before you start:

* **Match the Rockwell scale to your material.** Different Rockwell scales use different indenters and loads. A scale whose tip is too soft for your surface can damage the tip or the machine. For example, HRA uses a harder tip than HRB.
* **Know how the numbers compare.** Vickers values taken at different loads are equivalent to one another. Rockwell values are *not* equivalent across scales, and comparing Rockwell to Vickers (or one Rockwell scale to another) requires a conversion table and is only approximate.

### Detailed Operating Instructions {#details}

The sections above are a quick reference for trained users. The section below is a training guide for new users.

#### Running A Test

1. **Load and locate.** Place the sample on the stage and use the camera to find a clean, flat, representative spot, moving the stage with the joystick or the software. Keep indents away from edges and from each other.
2. **Focus carefully.** Focus first with the 2.5x objective, then switch to 10x and refocus. Good focus matters: for Vickers and Brinell the hardness is calculated from the measured indent size, so a poorly focused or mis-measured indent gives a wrong number. Click **In Focus** when the surface is sharp.
3. **Choose the method and scale.** Select your test in the top-left blue box, confirming the scale suits your material (see [test method selection](#test-method)).
4. **Run the test.** Click **Start**. The turret positions the indenter, applies the load, holds it for the set dwell time, withdraws, and (for optical methods) measures the indent automatically.
5. **Check the indent.** A good indent is well-formed and symmetric. A lopsided or ragged indent usually means the surface was tilted, rough, or moving; re-seat the sample and try another spot.

#### Test Patterns

The motorized XY stage can run a pattern of indents automatically, which is useful for mapping hardness across a sample or averaging several measurements.

* Click **Pattern** and choose the pattern settings.
* Space indents far enough apart that one indent does not affect the next.
* **Return to single-point mode when you are finished.** Patterns are retained across users, so leaving a pattern active can disrupt the next person's measurement (and your own if you forget).

### Data Processing And Analysis {#data}

The software reports each measurement as a hardness value with its scale (for example, `669.4 HV 40`), along with the test details: method, scale, dwell time, indent dimensions (such as the Vickers diagonals d1 and d2), and stage position.

* For a pattern, the software also reports statistics across the points: mean, minimum, maximum, standard deviation, and range. Report the mean with its spread rather than a single value when you have run a pattern.
* Always keep the scale with the number; a hardness value without its scale cannot be interpreted or compared.
* You can export a measurement report; save a copy to your own storage.
* To compare values across methods or Rockwell scales, use a hardness conversion table, and treat the conversion as approximate.

### Common Failure Modes {#failures}

| Symptom | Likely cause | What to try |
| --- | --- | --- |
| Next user's or your own test behaves unexpectedly | A test pattern was left active from a previous session | Return to single-point mode before measuring and before shutting down. |
| Indenter or machine damaged, or a warning during indent | Rockwell scale/tip too soft for a hard surface | Match the scale to the material; a harder surface needs a harder tip (HRA uses a harder tip than HRB). Ask staff if unsure. |
| Rockwell and Vickers numbers do not agree | The scales are not directly interchangeable | Use a conversion table; treat cross-method conversions as approximate. |
| Indent looks lopsided or hardness scatters a lot | Surface tilted, rough, unpolished, or unstable | Re-seat the sample flat, polish or find a smoother spot, and refocus. |
| Indent hard to measure or value looks wrong | Poor focus at 10x | Refocus carefully (2.5x then 10x) and click In Focus before testing. |

### Manufacturer Manuals {#manuals}

* [Innovatest Nemesis brochure](https://www.dropbox.com/scl/fi/px92wph6tuclbmpjo4k5z/INNOVATEST_NEMESIS-9100-brochure.pdf?rlkey=kjzo23aznoolzjrfedtwmikkk&st=73l53vy4&dl=0)

### Exercises {#exercises}

* **Level 1 - Single Vickers test:** Prepare a flat metal sample, run a Vickers test, and report the hardness value with its scale and the measured indent diagonals.
* **Level 2 - Hardness pattern:** Use the pattern function to test several points in one run, and report the mean and standard deviation. Remember to return to single-point mode afterward.
* **Level 2 - Method comparison:** Measure the same sample with two methods or scales and use a conversion table to compare, discussing why the raw numbers differ.
* **Level 3 - Processing effect:** Compare the hardness of a metal before and after cold-working or a heat treatment, and relate the change to what happened to the material.
* **Level 3 - Hardness across a feature:** Map hardness across a weld, heat-affected zone, or case-hardened surface with a pattern, and interpret how hardness varies.

### Tutorial To-Do List {#todo}

* Add photos of the power switch, sample on the stage, and the turret with indenters and objectives.
* Add annotated Impressions software screenshots: the camera/focus view, the In Focus button, the top-left test-selection box, and the Pattern setup.
* Add an example result showing a well-formed Vickers indent with its measured diagonals, and a poor indent for comparison.
* Confirm the exact available Rockwell/Vickers/Brinell scales and any lab limits on maximum load or sample size, and note safe scale/material pairings.
* Add or link a hardness conversion table for the common scales used in the lab.
* Confirm approved training samples (a standard hardness block and example alloys) for the exercises once the sample library is ready.
