# Methods and Data

Welcome to the Open Emission Factors Database (OEFDB) methods documentation! This document provides explanations and context for methods employed in the [OEFDB](https://github.com/climatiq/Open-Emission-Factors-DB) for e.g. data quality assessments, detection of potentially erroneous values, calculations of data points etc.

### EXIOBASE data quality assessment methodology

Emission factors were obtained from the M.txt matrix of the impacts output of the EXIOBASE. The values initially are supplied in kgCO2e/Million Euro and were divided by 1 million to obtain kgCO2e/Euro.

EXIOBASE relies on various sources of data inputs, with different levels of uncertainty, which can translate into erroneous impact multipliers, or emission factors (EFs). Therefore, the obtained EFs were analysed against several criteria to detect potentially erroneous values. We assumed that an EF is erroneous when:

-  at least two EFs across the same or related (e.g. gasoline products and petroleum derivatives) NACE category (Eurostat 2008) for one region have exactly the same values (marked as “h”, referring to suspicious homogeneity)
- for one NACE category, across all 49 regions the EFs are identified as outliers (marked as “o”, referring to outlier)

The distributions of EFs in almost all NACE categories  were non-normal, right-skewed, and often with a long heavy tail formed by several large values. Given the non-normality of the underlying distributions, Density-Based Spatial Clustering of Applications with Noise DBSCAN (Ester et al. 1996) was applied to detect the outliers. We assumed that a minimum of 3 values form a cluster. The DBSCAN method was used to detect large values, applying it to all available values. For detection of outliers on the left side of the distribution, given its skew, we first transformed each value by dividing it by the 25th percentile of the entire set and then applied the DBSCAN method. Note that the DBSCAN method was applied only to NACE categories, which contained more than 15 data points. 

[Ester M., Kriegel H.P., Sander J. and Xu X.(1996): A density-based algorithm for discovering clusters in large spatial databases with noise. In *kdd*  (Vol. 96, No. 34, pp. 226-231)](https://www.aaai.org/Papers/KDD/1996/KDD96-037.pdf)

[Eurostat (2008): NACE Rev. 2. Statistical classification of economic activities in the European Community. Eurostat
Methodologies and Working papers. Luxembourg: European Commission](https://ec.europa.eu/eurostat/documents/3859598/5902521/KS-RA-07-015-EN.PDF)