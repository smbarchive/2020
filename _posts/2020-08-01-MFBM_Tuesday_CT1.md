---
layout: group
author: esmb
day: "Tuesday"
group: "CT1"
subgroup: "MFBM"
title:  "Subgroup contributed talks"
author1: "Rui Borges"
author2: "Zoe Lange"
author3: "Anastasios Matzavinos"
inst1: "Vetmeduni Vienna, Austria, ruiborges23@gmail.com"
inst2: "Frankfurt Institute for Advanced Studie, Germany,	zlange@fias.uni-frankfurt.de"
inst3: "Brown University,	United States,	tasos@brown.edu"
title1: "Consistency and identifiability of the polymorphism-aware phylogenetic models"
title2: "Force Inference – Estimating the dynamics of mechanical forces in epithelial tissues from time-lapse images"
title3: "Bayesian uncertainty quantification for particle-based simulation of lipid bilayer membranes"
abstract1: "Polymorphism-aware phylogenetic models (PoMo) constitute an alternative approach for species tree estimation from genome-wide data. PoMo builds on the standard substitution models of DNA evolution but expands the classic alphabet of the four nucleotide bases to include polymorphic states. By doing so, PoMo accounts for ancestral and current intra-population variation, while also accommodating population-level processes ruling the substitution process (e.g. genetic drift, mutations, allelic selection). PoMo has shown to be a valuable tool in several phylogenetic applications but a proof of statistical consistency (and identifiability, a necessary condition for consistency) is lacking. Here, we prove that PoMo is identifiable and, using this result, we further show that the maximum a posteriori (MAP) tree estimator of PoMo is a consistent estimator of the species tree. We complement our theoretical results with a simulated data set mimicking the diversity observed in natural populations exhibiting incomplete lineage sorting. We implemented PoMo in a Bayesian framework and show that the MAP tree easily recovers the true tree for typical numbers of sites that are sampled in genome-wide analyses." 
abstract2: "Embryonic development, wound repair and cancer growth are complex results of collective cell migration. Collective cell migration is based on the biochemical and mechanical interactions between cells with individual cells regulating their mechanical state and exerting forces on the surrounding tissue. To gain further insights into the multi-scale effects of force propagation from cells to tissues and the shaping properties on whole organisms, it is of great interest to study spatial and temporal dynamics of forces. Force inference is a computational approach to estimate tissue stress from images using a biomechanical model and a mathematical inverse method. It is a good supplement to experimental force measurement techniques like laser ablation. As a non-invasive observation technique, it requires no mechanical probing of the tissue and yields results for the whole system at once. The force inference method proposed by Ishihara and Sugimura (2012) applies a Bayesian framework to handle the indefiniteness of a system of linear force-balance equations. In this study, we use cell-vertex simulation generated data to validate our implementation of Bayesian force inference and apply it to investigate force dynamics in a classical wound healing assay. We discuss our workflow including image segmentation, graph construction and calibration based on force geometry relation, as well as robustness for segmentation errors and theoretical limits of force inference. We find that the method is challenged by ragged boundaries produced with a scratching technique. We show that pressure gradients flatten with closing of the wound."
abstract3: "A number of problems of interest in applied mathematics and biology involve the quantification of uncertainty in computational and real-world models. A recent approach to Bayesian uncertainty quantification using transitional Markov chain Monte Carlo (TMCMC) is extremely parallelizable and has opened the door to a variety of applications which were previously too computationally intensive to be practical. In this talk, we first explore the machinery required to understand and implement Bayesian uncertainty quantification using TMCMC. We then describe dissipative particle dynamics, a computational particle simulation method which is suitable for modeling biological structures on the subcellular level, and develop an example simulation of a lipid membrane in fluid. Finally, we apply the algorithm to a basic model of uncertainty in our lipid simulation, effectively recovering a target set of parameters (along with distributions corresponding to the uncertainty) and demonstrating the practicality of Bayesian uncertainty quantification for complex particle simulations. This work was partially supported by the NSF through grant no. DMS-1552903."
---


