---
layout: single-poster
author: esmb
day: "Unconfirmed"
group: "poster"
title: "Missing Data Imputation and Gene Network Inference in Single Cell Analysis"
subgroup: "MFBM"
presenter: "Jungmin Han"
institution: "National Institutes of Health"
abstract: "With advances in single-cell techniques, collecting a large quantity of data has become more accessible and efficient. In contrast, the increased complexity of data has made it more challenging to draw biologically relevant conclusions. As a result, there is an increase in demand for computational methods capable of dealing with such complexity and of providing some predictive deductions from the data. In this study, we present the use of neural networks in imputing missing data and a novel method for the inference of a gene network using least absolute deviation regression. Fowlkes et al. (Cell, 2008) published a set of gene expressions measured from 6078 Drosophila blastoderm during six different time cohorts that spanned the 50 minutes prior to the onset of gastrulation. Out of 95 genes and four proteins, only 27 of them had complete temporal information from all the cells, while the rest were measured only in a subset of cells. The missing data constituted about 37% of the whole data set. To impute the missing data, we trained and tested neural networks with one hidden layer on the complete 27 genes as predictors and the genes that were measured only in subsets of cells as targets. With the trained neural network, we imputed the missing gene expressions. To test the imputation method’s performance, we arbitrarily selected three genes from the complete 27 genes and randomly removed time points from their gene profiles. Then, the missing values were imputed using the same method. The medians of the imputed values were compared to those of the observed values and showed negligible differences. We then used a variation of least absolute deviation regression to infer a mechanistic model of the gene network that governs the discrete gene dynamics. The accuracy of the model was compared to those of mechanistic models inferred with a standard least squared regression and with non-mechanistic neural networks with multiple hidden layers. The models were used to predict the gene profiles given the initial values, and the errors were computed. Since the regression methods have different cost functions, we compared the distributions of errors in two metrics, in $L_{1}$ norm and $L_{2}^{2}$ norm. The model inferred with the least absolute deviation regression showed higher predictive power than the models using other methods. The data set was titrated to a smaller sample size to evaluate performance. In the limit of small sample size, the model inferred with our choice of regression performed better than the one inferred with least squared regression, but not as well as the trained neural networks."
---