---
layout: group
author: esmb
day: "Monday"
group: "MS2"
subgroup: "MFBM"
title:  "Simulations and Experiments in Small Scale Bio-Locomotion"
organizers: "Hoa Nguyen and Orrin Shindell"
description: "The most numerous organisms on Earth are also the smallest. Over the past four billion years,
single-celled and simple multicellular organisms have evolved motility mechanisms particularly-suited
for locomotion in their low Reynolds number environment. Considerable progress has been made to
understand biological processes and fluid dynamics at this small scale over the past fifty years. Simulations
and experiments have shed light on the complex locomotion strategies spanning from a lone single cell to
collective groups of cells in Newtonian and non-Newtonian fluids.
In this two-part mini-symposium, researchers studying the locomotion of simple organisms through
computer simulations, fluid dynamics theory, and experimental measurements, will present their results.
The diversity of these presentations shows the importance of the coordination between modeling and experiments to further our knowledge of the interactions of organisms and their surrounding fluid environment."
author1: "Madeleine		Hall"
author2: "David		Smith"
author3: "Hoa		Nguyen"
author4: "Genevieve		O' Brien"
inst1: "Imperial College London,	United Kingdom,	madeleine.hall17@imperial.ac.uk"
inst2: "University of Birmingham,	United Kingdom, 	D.J.Smith@bham.ac.uk"
inst3: "Trinity University,	United States, hnguyen5@trinity.edu	"
inst4: "Johns Hopkins University,		United States,	gsteinobrien@jhmi.edu"
title1: "Optimal Turning Gaits for Undulators"
title2: "Algorithmic Developments in the Method of Regularized Stokeslets for the Study of Micro-Locomotion"
title3: "Effects of Cell Morphology, Attachment to a Surface, and Colony Formation on the Hydrodynamic Performance of Choanoflagellates"
title4: "Decomposing cell identity for transfer learning across cellular measurements, platforms, tissues, and species"
abstract1: "An organism’s ability to efficiently traverse and search their surroundings can be important to its survival. This has inspired the study of optimal gaits and locomotion strategies, in particular for the case of undulatory movement of slender bodies. The primary focus has been on finding optimal waveforms for moving forwards along straight paths. However, the ability to turn and manoeuvre is also relevant to survival. We revisit this problem in the context of low Reynolds number hydrodynamics and obtain the optimal waveforms for undulators along curved trajectories. For shallow turning angles, we obtain small perturbations of a travelling wave as optimal. For larger turning angles, however, the optimal gait can be radically different, with the undulator abruptly curling and uncurling itself. We believe that these results can lend insight into the search behaviours of simple organisms, such as C. elegans, as well as be a tool for phenotyping their behaviour across mutant strains and under different environmental conditions." 
abstract2: "Microscopic swimming and propulsion due to cilia and flagella are characterised by complex shaped moving boundaries, and for Newtonian fluids, the linear Stokes flow equations. These features of the problem have motivated the development of methods based on singularity distributions (Stokeslets/Oseen tensors). In recent years the methods of regularized Stokeslets has become widely used in biological fluid dynamics; this technique avoids the need for generation of a connected surface mesh, removes the need to compute singular integrals, and therefore is very convenient and accessible. This talk focuses on some algorithmic refinements to the method of regularized Stokeslets aimed at improving the efficiency of the method while retaining the convenience and accessibility of the method. We discuss (1) the use of meshless interpolation, in particular the nearest-neighbour discretisation, (2) exploitation of graphical processing unit computing to handle relatively large problems through built-in linear algebra routines in Matlab, (3) the NEAREST software package in Matlab, and benchmarking against a compiled Fortran code. The focus will be on providing practical and reliable tools for the quantitative biology of microscopic motility."
abstract3: "Choanoflagellates, eukaryotes that are important predators on bacteria in aquatic ecosystems, share a common ancestor with sponges and are used as a model system to study the evolution of animals from protozoan ancestors. The choanoflagellate Salpingoeca rosetta, which has a complex life cycle that includes unicellular and multicellular stages, provides a model system to study within one species the functional consequences of: 1) different cell morphologies (swimming cell with a collar of prey- capturing microvilli surrounding a single flagellum; dispersal-stage cell with a slender body, long flagellum, and short collar), 2) being free-swimming vs. sessile (thecate cell attached to a surface), and 3) being a single cell vs. a multicellular colony. For model organisms of different life stages, we use the method of regularized Stokeslets to examine the effects of different morphological features on swimming and feeding performance. We compare the model predictions with lab experiments that used high-speed microvideography to measure swimming and feeding currents produced by different life stages. We find that a longer flagellum increases swimming speed, longer microvilli reduce speed, and cell shape only affects speed when the collar is very short. The flux of prey-carrying water into the collar capture zone is greater for swimming than sessile cells, but this advantage decreases with collar size. Stalk length has little effect on flux for sessile cells."
abstract4: "Single cell RNA sequencing (scRNAseq) has lead to the discovery of new cell types. Thus, it is important to have methods to determine the identifying and consequential features of cells. To this end, we developed scCoGAPS to learn robust feature dimensions from scRNAseq and projectR to investigate these, or other continuous valued, feature dimensions in biologically related data across technologies, omics, and species. We demonstrate how this implementation of transfer learning via dimension reduction represent a platform for in silico experimentation and hypothesis generation where knowledge from multiple data sets is leveraged for selection of meaningful feature dimensions for validation."
---

