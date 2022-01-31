---
layout: single-poster
author: esmb
day: "Unconfirmed"
group: "poster"
title: "Temporospatial Modeling of CRC-CAF relation using molecular and tissue level"
subgroup: "MFBM"
presenter: "Furkan Kurtoglu"
institution: "Indiana University"
abstract: "Molecular communication between cells is a complex system when we think that the system consists of intelligent agents and microenvironment. In our project, we aimed to computationally model molecular communication between Colorectal Cancer Cells (CRCs) and Cancer-Associated Fibroblasts (CAFs) using a multi-scale agent-based modeling approach. To create this model, each cell is assumed as an agent that can change their behavior according to the microenvironment. We are using 3-D physics-based intelligent system simulator software that is called PhysiCell. While each cell is an off-lattice centered agent, the microenvironment is designed as a structured Cartesian grid. Microenvironment stores a number of external metabolites that cells can uptake from it or secrete to it with specific transfer reactions. Each cell has custom cell data that corresponds to some phenotypic attributes such as cell cycle, death, pressure. This data-structure also can be used for intracellular metabolite concentrations. Intracellular chemical reactions are modeled as ODEs that are represented as Systems Biology Markup Language (SBML). The ODE model includes a pseudo-metabolite that is called 'Energy'. This chemical is a bridge between intracellular-level and tissue-level with determining cellular cycle rate and death rate. The cross-platform 'Lib-roadrunner' is used to solve SBML models in one molecular time step. Integrating SBML to multi-scale models required to solve some design problems, such as, integration of uptake rates or defining transportable species. In addition, SBML parameters is stored as PhysiCell variable therefore each cell can have unique kinetic parameters which yields heterogeneity in the tumor. As the main goal, integrating molecular simulations with each agent might help us to understand cellular behaviors in complex systems."
---
