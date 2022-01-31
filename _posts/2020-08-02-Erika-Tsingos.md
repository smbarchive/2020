---
layout: single-poster
author: esmb
day: "All"
group: "poster"
title: "A computational tool to optimise experiments for estimating cell cycle parameters"
subgroup: "CDEV"
presenter: "Erika Tsingos"
institution: "Centre for Organismal Studies"
abstract: "Determining how quickly cells traverse the cell cycle is of key interest in growing organ(oid)s, tissues in turnover, and tumours. Estimating cell cycle times requires direct monitoring of a large dynamic cell population [1]. Acquiring and analysing such time-resolved data is challenging, and becomes practicably impossible in complex multicellular tissues. Over the years, several experimental assays have attempted to circumvent these limitations and estimate cell cycle parameters in fixed tissue samples [2-4]. However, there is only fragmentary information on how biological variation, underlying cell heterogeneity, or technical limitations affect the accuracy of these estimates. Here, we develop a computational tool to address these issues with the aim of determining optimal experimental strategies to uncover cell cycle parameters in samples that cannot be monitored directly. We simulate a population of cells traversing a stochastic 4-phase model of the cell cycle. Based on experimental observations and previous theoretical work [1,5], we model the duration of each cell cycle phase with Erlang distributions (a special case of the Gamma distribution), which are parametrised by a shape parameter k and a rate parameter L. These two parameters are used to define the mean phase duration m=k/L and variance B=k/L^2. We implement three different assays used in the literature to estimate cell cycle parameters, then systematically test how biological and technical variability affect the accuracy of the estimate in virtual experiments. Surprisingly, the error of the estimate increases when the duration of the cell cycle is long compared to the duration of the experiment. This implies that the parameter that the assay aims to determine needs to be known beforehand. To overcome this dilemma, we suggest combining different assays to extract maximal information in as few experiments as possible."
---


