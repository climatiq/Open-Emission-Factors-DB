# Data guidance

Welcome to the Open Emission Factors Database (OEFDB) data guidance documentation on GitHub! This document provides definitions and context for each of the different fields available in the [OEFDB](https://github.com/climatiq/Open-Emission-Factors-DB) and explain how we standardize and normalize emission factor data from our sources to allow for straightforward conversion to emission estimations for a given activity, either manually or via the [Climatiq API](https://docs.climatiq.io).

A note on data ordering: for ease of inspection, the OEFDB is ordered alphanumerically by sector > category > name > region > year_released (latest first) > source - please ensure any contribution follows this.

## Field definitions:

### sector

The overarching category of an emission factor. Should align with existing sectors in the DB unless proposing a new sector (please include details and justification in the pull request)

### category

Emission factor category. Aligned with `sector`, but more specific to the activity in question; again this should align with existing unless a new category is being proposed.

### activity_id

[Canonical](https://en.wikipedia.org/wiki/Canonicalization) identifying value of an emission factor for a given activity. Normalized to provide comparability in emission factors from different sources. This is the main data point referred to when choosing a calculation method. This value needs to be descriptive and concise, and always watch that there are no duplicates with the same year, source, and region for different emission factors.

**Requirements:** 

- Lowercase alphanumeric, with no special characters except for:
  - `.` for decimal places
  - `_` instead of spaces
  - `-` to separate sub IDs
- Sub IDs are defined per category - see the full list of these in the [ID structure guidance document.](/ID_STRUCTURE_GUIDANCE.md)
- See a list of glossary terms and abbreviations used in the OEFDB ID field at the foot of the [ID structure guidance document.](/ID_STRUCTURE_GUIDANCE.md)

**Important:** The uniqueness of an emission factor is defined by **id**, **source**, **year,** and **region**. No more than one emission factor can be defined with the same values for all four fields. This is what defines an emission factor as a unique entity and allows the system to understand the differences and blanks in the data. 

When designing an ID, the important question is: do you think another emission factor from the same **source**, **region** and **year**, could hold **different methodologies/particularities** for the same activity? If the answer is yes, it needs to be in the ID.

See full list of ID structures [here](/ID_STRUCTURE_GUIDANCE.md).

### name

Display name of the emission factor. This field provides a human-readable version of the `id`, and should provide enough information (but no more!) to allow someone using the data to decide whether this is the right emission factor for their activity (along with the region, year and source fields).

For example: for `id`: "electricity-energy_source_grid_mix", `name` would be: "Grid mix", contextualised by being in the Energy category, and the region, source and year attributed to the emission factor.

### activity_unit

The unit of an activity used to multiply with this emission factor to calculate emission estimates for the activity. This value dictates what kind of activity can be used to calculate emission estimates, with further details in methodology provided in the `description` field or by the `source` as linked. Units currently supported can be found at https://docs.climatiq.io/.

### GHG gasses (multiple: field definitions below)

The emissions produced by this activity per `activity_unit`. This is the linear calculation factor used to perform emission calculations.

The following emission volumes are available (NB not every gas will be available for each activity):

- `kgCO2e-AR5`: 100-year Global Warming Potential of all included GHGs expressed in kgCO2-equivalent according to the IPCC's Fifth Assessment Report
- `kgCO2e-AR4`: 100-year Global Warming Potential of all included GHGs expressed in kgCO2-equivalent according to the IPCC's Fourth Assessment Report
- `kgCO2`: Carbon dioxide emissions
-	`kgCH4`: Methane emissions
- `kgN2O`: Nitrous oxide emissions
- `kgCO2e-OtherGHGs-AR5`: 100-year Global Warming Potential of GHGs other than CO2, CH4 or N2O, expressed in kgCO2-equivalence according to the IPCC's Fifth Assessment Report
- `kgCO2e-OtherGHGs-AR4`: 100-year Global Warming Potential of GHGs other than CO2, CH4 or N2O, expressed in kgCO2-equivalence according to the IPCC's Fourth Assessment Report

### uncertainty

This field provides any uncertainty (expressed as %) around the emission factor mentioned by the source.

### scope

This field provides the scope of emissions identified by the source. The scopes are 1,2, and 3, or a combination of these. The format includes `|` as a delimiter between values. There is also "Outside of scopes", which includes biogenic CO2 factors that should be used to account for the direct carbon dioxide (CO2) impact of burning biomass and biofuels.

### source

The source from which an emission factor was retrieved. This refers to the publishing entity, which may not be the original calculator of the emission factor.

### year_released

Year of publication of the emission factor by the source. Note that this is typically not the year from which the emissions were calculated - care should be taken when applying emission factors that may vary year-on-year.

### years_valid

The range of years for which the data is considered valid by the source.

### years_calculated_from

The range of years for which the data is calculated from, if such information is provided by the source.

### region

Region to which the emission factor applies. In order to provide standardised regions, we use United Nations Code for Trade and Transport Locations (UN/LOCODE) ids to refer to specific regions in the open database. UN/LOCODE is a geographic coding scheme developed and maintained by United Nations Economic Commission for Europe (UNECE). UN/LOCODE assigns codes to locations used in trade and transport with functions such as seaports, rail and road terminals, airports, Postal Exchange Office and border crossing points.

**Source**: [https://unece.org/trade/uncefact/unlocode](https://unece.org/trade/uncefact/unlocode)

**Countries**: [https://unece.org/trade/cefact/unlocode-code-list-country-and-territory](https://unece.org/trade/cefact/unlocode-code-list-country-and-territory)

**Subdivisions** (regions): [https://unece.org/trade/uncefact/unlocode-country-subdivisions-iso-3166-2](https://unece.org/trade/uncefact/unlocode-country-subdivisions-iso-3166-2)

### data_quality

This field flags any wrong/unreliable data point detected by the team or users. The format includes `|` as a delimiter between values. Data quality labels are as follows:

- `o`: outlier 
-	`e`: erroneous calculation 
-	`d`: outdated
-	`p`: partial factor (e.g. CO2 only)
-	`h`: suspicious homogeneity across multiple entries 
-	`m`: notable methodological variance or lack of clarity

More details on how these flags are determined and applied can be found in the [OEFDB methodology guide here](https://github.com/climatiq/Open-Emission-Factors-DB/blob/main/DATA_METHODOLOGY.md).

### contributor

The contributor is either the organization, which officially provided the data point or the GitHub handle of the person who provided the contribution.

### description

Descriptive string, giving context and detail about the emission factor. This value explains what activity the emission factor applies to, as a complement to the `name` field, and any contextual information the user may need. Can include for example: when and by whom an emission factor was published (if this is not clear from other fields); what activity it describes, with details on boundaries, terms or initialisms provided; what assumptions or factors were used in its computation or translation from the source. It should not include information that can be gleaned from other fields or easily from the source link.

### date_accessed

This is the date the contributor accessed the data, important for understanding how up to date an emission factor is. Expressed in YYYY/MM/DD format.

### source_link

Link to the source for reference and cross-validation. This ideally links to the specific emission factor, or if not to the specific file from which the emission factor was retrieved.

### lca_activity

Life cycle assessment activity to which the emission factor applies. This can be one or several phases from "cradle" to "grave", including: 

**upstream emissions**; LCA activities included in the OEFDB for this phase are:  `cradle_to_shelf`, `cradle_to_gate`, `fuel_upstream`, `manufacturing`, `plant_amortization`, `fugitive_emissions`, `well_to_propeller`, `well_to_tank`, `upstream`

**use_phase emissions**; LCA activities included in the OEFDB for this phase are: `electricity_consumption` (including transmission and distribution losses), `electricity_generation` (excluding transmission and distribution losses), `fuel_combustion`, `use_phase`

**end-of-life emissions**; LCA activities included in the OEFDB for this phase are: `gate_to_grave`, `end_of_life`

There are also `transport_and_delivery`, `transmission_and_distribution` emissions. 

If the source does not provide such information, the field is marked as `unknown`.
