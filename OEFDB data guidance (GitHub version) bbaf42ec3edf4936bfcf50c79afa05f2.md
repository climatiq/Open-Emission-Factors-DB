# OEFDB data guidance

Welcome to the Open Emission Factors Database (OEFDB) data guidance documentation on GitHub! This document provides definitions and context for each of the different fields available in the [OEFDB](https://github.com/climatiq/Open-Emission-Factors-DB) and explain how we standardize and normalize emission factor data from our sources to allow for straightforward conversion to emission estimations for a given activity, either manually or via the [Climatiq API](https://docs.climatiq.io).

## Field definitions:

### sector

The overarching category of an emission factor. 

### category

Emission factor category. Aligned with `sector`, but more specific.

### id

[Canonical](https://en.wikipedia.org/wiki/Canonicalization) identifying value of an emission factor. Normalized to provide comparability in emission factors from different sources. This is the main data point referred to when choosing a calculation method. This value needs to be descriptive and concise, and always watch that there are no duplicates with the same year, source, and region for different emission factors.

**Requirements:** 

- Lowercase alphanumeric, with no special characters except for:
. for decimal places
_ instead of spaces
- to separate sub IDs
- Sub IDs are defined per category - see the full list of these in the [ID structure per category document.](https://www.notion.so/ID-structure-per-category-GitHub-version-9ccd41b02f4a4a28a2b5d3ceca04ad41)
- See a list of glossary terms and abbreviations used in the OEFDB ID field at the foot of the [ID structure per category document.](https://www.notion.so/ID-structure-per-category-GitHub-version-9ccd41b02f4a4a28a2b5d3ceca04ad41)

**Important:** The uniqueness of an emission factor is defined by **id**, **source**, **year,** and **region**. No more than one emission factor can be defined with the same values for all four fields. This is what defines an emission factor as a unique entity and allows the system to understand the differences and blanks in the data. 

When designing an ID, the important question is: do you think another emission factor from the same **source**, **region** and **year**, could hold **different methodologies/particularities** for the same activity? If the answer is yes, it needs to be in the ID.

See full list of ID structures here [link].

### name

Display name of the emission factor. This field provides a human-readable version of the `id`, and should provide enough information (but no more!) to allow someone using the data to decide whether this is the right emission factor for their activity (along with the region, year and source fields).

For example: for `id`: "electricity-energy_source_grid_mix", `name` would be: "Grid mix", contextualised by being in the Energy category, and the region, source and year attributed to the emission factor.

### unit

The unit of an activity used to multiply with this emission factor to calculate emission estimates for the activity. This value dictates what kind of activity can be used to calculate emission estimates, with further details in methodology provided in the `description` field or by the `source` as linked.

For example: 

- `kg-CO2/km` is kgCO2e emissions produced over distance traveled (in kilometers).
- `kg-CO2/tkm` is kgCO2e emissions produced per unit of weight (in tonnes) moved a certain distance (in kilometers).
- `kgCO2/kWh` is kgCO2e emissions per kilowatt-hour of electricity consumed or expended.

### factor

The emissions produced by this activity in **kgCO2e** per `unit`. This is the linear calculation factor used to perform the emission calculation.

The value is always expressed in kgCO2e, also known as kgCO2 equivalent. This value includes all emitted GHG emissions and is computed based on GWP (global warming potential). 

### uncertainty

This field provides any uncertainty (expressed as %) around the emission factor mentioned by the source.

### source

The source from which an emission factor was retrieved. This refers to the publishing entity, which may not be the original calculator of the emission factor.

### year

Year for which the emission factor has been calculated according to the source. This number can differ from the year of publication.

### region

Region to which the emission factor applies. In order to provide standardised regions, we use United Nations Code for Trade and Transport Locations (UN/LOCODE) ids to refer to specific regions in the open database. UN/LOCODE is a geographic coding scheme developed and maintained by United Nations Economic Commission for Europe (UNECE). UN/LOCODE assigns codes to locations used in trade and transport with functions such as seaports, rail and road terminals, airports, Postal Exchange Office and border crossing points.

**Source**: [https://unece.org/trade/uncefact/unlocode](https://unece.org/trade/uncefact/unlocode)

**Countries**: [https://unece.org/trade/cefact/unlocode-code-list-country-and-territory](https://unece.org/trade/cefact/unlocode-code-list-country-and-territory)

**Subdivisions** (regions): [https://unece.org/trade/uncefact/unlocode-country-subdivisions-iso-3166-2](https://unece.org/trade/uncefact/unlocode-country-subdivisions-iso-3166-2)

### description

Descriptive string, giving context and detail about the emission factor. This value explains what activity the emission factor applies to, as a complement to the `name` field, and any contextual information the user may need. Can include for example: when and by whom an emission factor was published (if this is not clear from other fields); what activity it describes; or what assumptions were used in its computation. It should not include information that can be gleaned from other fields.

### date_accessed

This is the date the contributor accessed the data, important for understanding how up to date an emission factor is.

### source_link

Link to the source for reference and cross-validation. This ideally links to the specific emission factor, or if not to the specific file from which the emission factor was retrieved.
