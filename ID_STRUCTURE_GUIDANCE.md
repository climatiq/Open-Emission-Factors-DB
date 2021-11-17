# ID structure guidance

## Full list of ID structures for different categories that currently exist in the OEFDB

Please find guidance for population of the `ID` field below, per category. It is advisable that you review existing IDs in the category you intend to contribute to before compiling these alongside other identifying and informative fields as outlined in the [data guidance](/DATA_GUIDANCE.md), to ensure comparability with existing emission factors in the database.

**Electricity**

This category is for estimating the CO2 equivalent emissions of electricity use or production.

`electricity-energy_source_[e.g. "grid_mix" or "coal_fired_plant"]`

**Fuel**

This category is for estimating the CO2 equivalent emissions of fuel production or fuel combustion. 

`fuel_type_[e.g. "coal"]-fuel_use_[e.g. "industrial"]`

**Computing (including CPU, Memory, and Networking categories)**

This category is for estimating the CO2 equivalent emissions of CPU utilization, memory, and networking categories within the computing sector.

`["cpu" or "memory" or "networking"]-provider_[e.g. "aws"]-region_[e.g. "af_south_1"]`

**Computing (Storage category)**

This category is for estimating the CO2 equivalent emissions produced by cloud data storage.

`storage-provider_[e.g."aws"]-region_[e.g. "af_south_1"]-type_[e.g. "hdd"]`

**Accommodation**

This category is for estimating the CO2 equivalent emissions of an average hotel stay.

`accomodation_type_[e.g. "hotel_stay"]`

**Vehicle**

This category is for estimating the CO2 equivalent emissions of different types of vehicles.

`["passenger" or "commercial" or "rental"]_vehicle-vehicle_type_[e.g. "car" or "bus"]-fuel_source_[e.g. "diesel" or "cng"]-engine_size_[e.g."gt_3000cc"]-vehicle_age_[e.g. "post_2015"]-vehicle_weight_[e.g."gt_12t"]`

**Road Travel**

This category is for estimating the CO2 equivalent emissions of individual road travel.

`passenger_vehicle-vehicle_type_[e.g. "car" or "bus"]-fuel_source_[e.g. "diesel" or "cng"]-distance_[e.g. "short"]-engine_size_[e.g. "small"]`

**Air Travel**

This category is for estimating the CO2 equivalent emissions of individual air travel.

`passenger_flight-route_type_[e.g. "international" or "domestic"]-aircraft_type_[e.g. "medium" or "jet"]-distance_[e.g. "lt_300km", "long_haul" or "short_haul_<300km" or "na"]-class_[e.g. "economy" or "na"]-contrails_["included" or "excluded" or "na"]`

**Rail Travel**

This category is for estimating the CO2 equivalent emissions of individual rail travel.

`passenger_train-route_type_[e.g. "intercity" or "local"]-fuel_source_[e.g. "electricity" or "diesel"]`

**Sea travel**

This category is for estimating the CO2 equivalent emissions of individual (or car) sea travel.

`passenger_ferry-route_type_[e.g. "foot_passenger" or "car_passenger"]-fuel_source_[e.g. "na"]`

**Road Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by road.

`freight_vehicle-vehicle_type_[e.g. "commercial" or "hgv_rigid"]-fuel_source_[e.g. "diesel" or "bev"]-vehicle_weight_[e.g. "3.5t_7.5t"]*-percentage_load_[e.g. "50_laden"]`

**Air Transport (to become Air Freight)**

This category is for estimating the CO2 equivalent emissions of shipping goods by air.

`freight_flight-route_type_[e.g. "international" or "domestic"]-distance_[e.g. "lt_500km", "long_haul" or "na"]-weight_[e.g. "gt_100t" or "na"]-contrails_["included" or "excluded" or "na"]`

**Rail Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by rail.

`freight_train-route_type_[e.g. "domestic" or "na"]-fuel_type_[e.g. diesel]`

**Sea Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by sea.

`sea_transport-vessel_type [e.g. "bulk_carrier"]- route_type_[e.g. "intra_mediterranean"]-vessel_length_[e.g. "gt-8000-teu"]-tonnage_[e.g. "gt_200000dwt"]-fuel_source_[e.g. "na" or "diesel"]`

## Glossary of terms, initialisms, and acronyms used in the OEFDB ID field

avgas - aviation gasoline - petrol-based aviation fuel

avtur - aviation turbine (or jet) fuel - kerosine-based aviation fuel

lt - less than

lte - less than or equal to

fcev - fuel cell electric vehicle - refers to hydrogen fuel cell vehicles

gt - greater than (boolean)

gte - great than or equal to (boolean)

hev - hybrid electric vehicle (non plug-in, with electric-only mode)

hvo - hydrogenated vegetable oil

me - methyl ester

mhev - mild hybrid electric vehicle (non plug-in, no electric-only mode)

na - Not available or not applicable - this is used where a given dimension of an ID either doesn't apply to that particular factor (not applicable or provided as an average and therefore not required as an identifier) or is not specified by the source (not available). We use a single value of NA in all cases to avoid large amounts of interpretation being required; the context for each NA is available in the description field of each EF. 

phev - plug-in hybrid electric vehicle
