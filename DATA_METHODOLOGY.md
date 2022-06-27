# Methods and Data

Welcome to the Open Emission Factors Database (OEFDB) methods documentation! This document provides explanations and context for methods employed in the [OEFDB](https://github.com/climatiq/Open-Emission-Factors-DB), for example data quality assessments, detection of potentially erroneous values, calculations of data points etc.

### BEIS spend-based emissions (University of Leeds consumption-based model)

Emission factors were obtained from the "Data download consumption emissions 1990-2018.xls" file available at the [UK government's carbon footprinting website](https://www.gov.uk/government/statistics/uks-carbon-footprint).

Following consultation with the team that generated these factors, where emission factors are identical across a variety of activities they have been grouped to ensure the most accurate reflection of the consumption activities included in the generation of these factors.

For example, a single "Meat (fresh/chilled/frozen/processed)" emission factor of 2.471 kgCO2e/£ has been included in the OEFDB instead of the following 9 meat-related emission factors (all with the same value of 2.471 kgCO2e/£).

1.1.5 Beef (fresh, chilled or frozen)
1.1.6 Pork (fresh, chilled or frozen)
1.1.7 Lamb (fresh, chilled or frozen)
1.1.8 Poultry (fresh, chilled or frozen)
1.1.9 Bacon and ham
1.1.10.1 Sausages
1.1.10.2 Offal, pate etc
1.1.10.3 Other preserved or processed meat and meat preparations
1.1.10.4 Other fresh, chilled or frozen edible meat

These various categories are then listed in the description field of the emission factor to ensure the relationship with the original factors are apparent.

This avoids a false sense of accuracy that would be produced by having a per-category emission factor which appears to relate to a specific sub-category of meat when in fact the factor applies to the production of all meat products in the UK.


### EXIOBASE data quality assessment methodology

Emission factors were obtained from the M.txt matrix of the impacts output of the EXIOBASE. The values initially are supplied in kgCO2e/Million Euro and were divided by 1 million to obtain kgCO2e/Euro.

EXIOBASE relies on various sources of data inputs, with different levels of uncertainty, which can translate into erroneous impact multipliers, or emission factors (EFs). Therefore, the obtained EFs were analysed against several criteria to detect potentially erroneous values. We assumed that an EF is erroneous when:

-  at least two EFs across the same or related (e.g. gasoline products and petroleum derivatives) NACE category (Eurostat 2008) for one region have exactly the same values (marked as “h”, referring to suspicious homogeneity)
- for one NACE category, across all 49 regions the EFs are identified as outliers (marked as “o”, referring to outlier)

The distributions of EFs in almost all NACE categories  were non-normal, right-skewed, and often with a long heavy tail formed by several large values. Given the non-normality of the underlying distributions, Density-Based Spatial Clustering of Applications with Noise DBSCAN (Ester et al. 1996) was applied to detect the outliers. We assumed that a minimum of 3 values form a cluster. The DBSCAN method was used to detect large values, applying it to all available values. For detection of outliers on the left side of the distribution, given its skew, we first transformed each value by dividing it by the 25th percentile of the entire set and then applied the DBSCAN method. Note that the DBSCAN method was applied only to NACE categories, which contained more than 15 data points. 

[Ester M., Kriegel H.P., Sander J. and Xu X.(1996): A density-based algorithm for discovering clusters in large spatial databases with noise. In *kdd*  (Vol. 96, No. 34, pp. 226-231)](https://www.aaai.org/Papers/KDD/1996/KDD96-037.pdf)

[Eurostat (2008): NACE Rev. 2. Statistical classification of economic activities in the European Community. Eurostat
Methodologies and Working papers. Luxembourg: European Commission](https://ec.europa.eu/eurostat/documents/3859598/5902521/KS-RA-07-015-EN.PDF)
