---
layout: single-poster
author: esmb
day: "All"
group: "poster"
title: "Eliminating the Need for User-Definition of Gap Penalties using Linear Programming"
subgroup: "OTHE"
presenter: "Rahul  Bishnoi"
institution: "IIT Guwahati"
abstract: "In the widely renowned `Needleman-Wunsch’ algorithm for sequence
alignment, an affine gap penalty system is used for penalizing the
algorithm for the usage of gaps. There are two types of gaps used:
opening gap penalty and extending gap penalty, where the former
refers to the introduction of a gap and the latter to the extension of
pre-existing gaps. The choice of determining the values of these gap
penalties has to be predefined by the user. As a result, there may
arise an inefficient sequence alignment solely due to the poor choice
of opening and extending gap penalties.
In this poster, we aim to address this concern by constructing a
mathematical black-box model which is governed by a set of linear
equations in the form of a modified scoring system for judging
the quality of the alignment. We use three dynamic programming states (Identity, Similarity, and DP score) to determine
the optimal alignment. While iterating through various values of the scoring parameters, the highest cumulative score determines an optimal alignment and the respective gap penalty.
For distantly-related and average-related sequences, our algorithm
shows a significant increase in terms of identity and similarity for
all the cases as compared to EMBOSS-Needle. 
We eliminate the need for the user to
choose the gap penalties based on mere intuition and judgement and provide an automated method of choosing the optimal values specifically for each set of sequences."
---
