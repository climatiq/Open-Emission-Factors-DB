# ID structure per category

## Full list of ID structures for different categories that currently exist in the OEFDB:

**Air Travel**

This category is for estimating the CO2 equivalent emissions of individual air travel.

passenger_flight-route_type_*[e.g. "international" or "domestic"]*-aircraft_type_*[e.g. "medium" or "jet"]*-distance_*[e.g. "lt_300km", "long_haul" or "short_haul_<300km" or "na"]*-class_*[e.g. "economy" or "na"]*-contrails_*["included" or "excluded" or "na"]*

*An example from NZ MfE:*

[Untitled](https://www.notion.so/447ee2e2a37d4b1f96a2a558b8f350fb)

**Air Transport (to become Air Freight)**

This category is for estimating the CO2 equivalent emissions of shipping goods by air.

freight_flight-route_type_*[e.g. "international" or "domestic"]*-distance_*[e.g. "lt_500km", "long_haul" or "na"]*-weight_*[e.g. "gt_100t" or "na"]*-contrails_*["included" or "excluded" or "na"]*

*An example from ADEME:*

[ ](https://www.notion.so/df35116ac96741e8903e6b5ce0a59293)

**Compute (including CPU, Memory, and Networking categories)**

This category is for estimating the CO2 equivalent emissions of CPU utilization, memory, and networking categories within the computing sector.

category-provider_[e.g. "aws"]-region_[e.g. "*af_south_1"*]

*An example from CCF:*

[Untitled](https://www.notion.so/6437aec8718042e59881fde5b8b7b81f)

**Compute (Storage category)**

This category is for estimating the CO2 equivalent emissions of storage category within the computing sector.

storage-provider_[e.g.*"aws"*]-region_[e.g. *"af_south_1"*]-type_[e.g. *"hdd"*]

*An example from CCF:*

[Untitled](https://www.notion.so/3e78441aed8d4022a88a9de3aade0255)

**Fuel**

This category is for estimating the CO2 equivalent emissions of different types of fuel across different activities such as fuel production or fuel combustion.

fuel_type_*[e.g. "butane"]*

*An example from BEIS:* 

[Untitled](https://www.notion.so/c50d1dc716174a15b23a88ae0411fc82)

**Accommodation**

This category is for estimating the CO2 equivalent emissions of average hotel stay.

accomodation_type_*[e.g. "hotel_stay"]*

*An example from BEIS:*

[Untitled](https://www.notion.so/afd0b7c348514ef1a50ac3b208935246)

**Electricity**

This category is for estimating the CO2 equivalent emissions of electricity use or production.

electricity-energy_source_*[e.g. "grid_mix" or "coal_fired_plant"*

*An example from ADEME:* 

[Untitled](https://www.notion.so/e33fc8dede254a36b704f79bd2960ba4)

**Rail Travel**

This category is for estimating the CO2 equivalent emissions of individual rail travel.

passenger_train-route_type_[e.g. "intercity" or "local"]-fuel_source_[e.g. "electricity" or "diesel"]

*An example from EPA* 

[Untitled](https://www.notion.so/6ad1c2a261d44f25b10e0117c7e72449)

**Rail Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by rail.

freight_train-route_type_[e.g. "domestic" or "na"]-fuel_type_[e.g. diesel]

*An example from BEIS:*

[Untitled](https://www.notion.so/268ec41b797b4d059a2322bf94de993b)

**Road Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by road.

freight_vehicle-vehicle_type_*[e.g. "commercial" or "hgv_rigid"]*-fuel_source_*[e.g. "diesel" or "bev"]*-vehicle_weight_*[e.g. "3.5t_7.5t"]*-percentage_load_*[e.g. "50_laden"]*

*An example from MfE:* 

[Untitled](https://www.notion.so/91ec55a787424cde83860c35f97055ef)

**Sea travel**

This category is for estimating the CO2 equivalent emissions of individual (or car) sea travel.

passenger_ferry-route_type_[e.g. "foot_passenger" or "car_passenger"]-fuel_source_[e.g. "na"]

*An example from BEIS:* 

[Untitled](https://www.notion.so/4af02a8d37fd4290ba078e7dfd3febb6)

**Sea Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by sea.

sea_transport-vessel_type *[e.g. "bulk_carrier"]-* route_type_*[e.g. "intra_mediterranean"]*-vessel_length_*[e.g. "gt-8000-teu"]*-tonnage_*[e.g. "gt_200000dwt"]-fuel_source_[e.g. "na" or "diesel"]*

*An example from MfE:* 

[Untitled](https://www.notion.so/a8b2f612188a4e1f96fd33ea9057de48)

**Vehicle**

This category is for estimating the CO2 equivalent emissions of different types of vehicles.

passenger_vehicle-vehicle_type_[e.g. *"car"* or *"bus"*]-fuel_source_*[e.g. "diesel" or "cng"]-engine_size_[e.g."gt_3000cc"]-vehicle_age_[e.g. "post_2015"]-vehicle_weight_[e.g."gt_12t"]*

*An example from BEIS:* 

[Untitled](https://www.notion.so/952a1f6a55e6463e93767c956cafcdb0)

**Road Travel**

This category is for estimating the CO2 equivalent emissions of individual road travel.

passenger_vehicle-vehicle_type_[e.g. *"car"* or *"bus"*]-fuel_source_*[e.g. "diesel" or "cng"]-distance_[e.g. "short"]-engine_size_[e.g. "small"]*

*An example from ADEME:* 

[Untitled](https://www.notion.so/dcda9fee5ae04127b1ad630cad58f329)

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

osr - Oil Seed Rape, common source of vegetable oil and used as shorthand for Rapeseed Oil or Canola
