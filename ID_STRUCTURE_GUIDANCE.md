# ID structure guidance

## Full list of ID structures for different categories that currently exist in the OEFDB

Please find guidance for population of the `ID` field below, per category. It is advisable that you review existing IDs in the category you intend to contribute to before compiling these alongside other identifying and informative fields as outlined in the [data guidance](/DATA_GUIDANCE.md), to ensure comparability with existing emission factors in the database.
\
\
\
***Sector: Agriculture and Fishing and Forestry***

- **Agriculture and Forestry support**  
- **Arable Farming**  
- **Livestock Farming**  
- **Timber and Forestry Products**  
- **Wild Fish and Game**  

These categories are for estimating the CO2 equivalent emissions of agricultural, fishing and forestry activities.

`[category e.g. "arable_farming"]-type_[e.g. "fresh_vegetables_melons_potatoes"]`
\
\
\
***Sector: Buildings and Infrastructure***

- **Housing**
- **Construction**
- **Infrastructure**
- **Maintanance and Repair**
- **Other Real Estate**
- **Pavement and Surfacing**

These categories are for estimating the CO2 equivalent emissions of building and infrastructure activities.

`[category e.g. "Construction"]-type_[e.g. "transportation_structures_highways_streets"]`
\
\
\
***Sector: Consumer Goods and Services***

- **Alcoholic Beverages and Tobacco**
- **Clothing and Footwear**
- **Consumer Goods Rental**
- **DIY and gardening equipment**
- **Domestic services**
- **Food and Non-Alcoholic Beverages**
- **Furnishings and Household**
- **General Retail**
- **Health Care**
- **Paper Products**
- **Personal Care and Accessories**
- **Professional services**
- **Recreation and Culture**
- **Vehicle Maintenance and Services**

These categories are for estimating the CO2 equivalent emissions incurred through expenditure on consumer goods or services.

`consumer_["goods" or "service"]-type_[e.g. "hairdressing_beauty_treatment"]`
\
\
\
***Sector: Education***

- **Education**

This category is for estimating the CO2 equivalent emissions of education activities.

`education-type_[e.g. "elementary_secondary_schools"]`
\
\
\
***Sector: Energy***

- **Electricity**

This category is for estimating the CO2 equivalent emissions of electricity use or production.

`electricity-energy_source_[e.g. "grid_mix" or "coal_fired_plant"]`

- **Fuel**

This category is for estimating the CO2 equivalent emissions of fuel production or fuel combustion. 

`fuel_type_[e.g. "coal"]-fuel_use_[e.g. "industrial"]`
\
\
\
***Sector: Equipment***

- **Electrical Equipment**
- **Electronics**
- **Equipment Rental**
- **Machinery**
- **Office equipment**

These categories are for estimating the CO2 equivalent emissions incurred through expenditure on equipment. 

`[category e.g. "office_equipment"]-type_[e.g. "office_supplies_not_paper"]`
\
\
\
***Sector: Health and Social Care***

- **Health Care**
- **Social Care**

These categories are for estimating the CO2 equivalent emissions incurred through expenditure on health or social care services or supplies. 

`["health" or "social"]_care-type_[e.g. "vaccines_other_biological_medical_products"]`
\
\
\
***Sector: Information and Communication***

- **Information and Communication Services**

This category is for estimating the CO2 equivalent emissions incurred through expenditure on information and communication services. 

`communication_services-type_[e.g. "internet_publishing_broadcasting"]` 

- **Cloud Computing - CPU**
- **Cloud Computing - Memory**
- **Cloud Computing - Networking**

These categories are for estimating the CO2 equivalent emissions of CPU utilization, memory, and networking categories within the computing sector.

`["cpu" or "memory" or "networking"]-provider_[e.g. "aws"]-region_[e.g. "af_south_1"]`

- **Cloud Computing - Storage**

This category is for estimating the CO2 equivalent emissions produced by cloud data storage.

`storage-provider_[e.g."aws"]-region_[e.g. "af_south_1"]-type_[e.g. "hdd" or "sdd"]`
\
\
\
***Sector: Insurance and Financial Services***

- **Financial Services**
- **Insurance**

These categories are for estimating the CO2 equivalent emissions incurred through expenditure on insurance and financial services. 

`["insurance" or "financial_services"]-type_[e.g. "bank_fees"]`
\
\
\
***Sector: Materials***

- **Chemical Products**
- **Fabricated Metal Products**
- **Mined Materials**
- **Plastics and Rubber Products**
- **Primary Metals**
- **Vehicle Parts**

These categories are for estimating the CO2 equivalent emissions incurred through expenditure on  materials. 

`[category e.g. "chemicals" or "metal_products"]-type_[e.g. "adhesives" or "ball_roller_bearings"]`
\
\
\
***Sector: Organizational activities***

- **Government Activities**
- **Non-profit Activities**
- **Operational Activities**
- **Professional Services and Activities**
- **Wholesale Trade**

These categories are for estimating the CO2 equivalent emissions incurred through expenditure on organizational activities. 

`[category e.g. "professional_services" or "wholesale_trade"]-type_[e.g. "legal_services" or "customs_duties"]`
\
\
\
***Sector: Restaurants and Accommodation***

**Accommodation**

This category is for estimating the CO2 equivalent emissions of an average hotel stay.

`accomodation_type_[e.g. "hotel_stay"]`

**Food and Beverage Services**

This category is for estimating the CO2 equivalent emissions incurred through expenditure on food and beverage services.

`consumer_services-type_[e.g. "food_beverage_services_dine_in_takeaway"]` 
\
\
\
***Sector: Transport***

**Air Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by air.

`freight_flight-route_type_[e.g. "international" or "domestic"]-distance_[e.g. "lt_500km", "long_haul" or "na"]-weight_[e.g. "gt_100t" or "na"]-contrails_["included" or "excluded" or "na"]`

**Air Travel**

This category is for estimating the CO2 equivalent emissions of individual air travel.

`passenger_flight-route_type_[e.g. "international" or "domestic"]-aircraft_type_[e.g. "medium" or "jet"]-distance_[e.g. "lt_300km", "long_haul" or "short_haul_<300km" or "na"]-class_[e.g. "economy" or "na"]-contrails_["included" or "excluded" or "na"]`

**Rail Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by rail.

`freight_train-route_type_[e.g. "domestic" or "na"]-fuel_type_[e.g. diesel]`

**Rail Travel**

This category is for estimating the CO2 equivalent emissions of individual rail travel.

`passenger_train-route_type_[e.g. "intercity" or "local"]-fuel_source_[e.g. "electricity" or "diesel"]`

**Road Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by road.

`freight_vehicle-vehicle_type_[e.g. "commercial" or "hgv_rigid"]-fuel_source_[e.g. "diesel" or "bev"]-vehicle_weight_[e.g. "3.5t_7.5t"]*-percentage_load_[e.g. "50_laden"]`

**Road Travel**

This category is for estimating the CO2 equivalent emissions of individual road travel.

`passenger_vehicle-vehicle_type_[e.g. "car" or "bus"]-fuel_source_[e.g. "diesel" or "cng"]-distance_[e.g. "short"]-engine_size_[e.g. "small"]`

**Sea Transport**

This category is for estimating the CO2 equivalent emissions of shipping goods by sea.

`sea_transport-vessel_type [e.g. "bulk_carrier"]- route_type_[e.g. "intra_mediterranean"]-vessel_length_[e.g. "gt-8000-teu"]-tonnage_[e.g. "gt_200000dwt"]-fuel_source_[e.g. "na" or "diesel"]`

**Sea travel**

This category is for estimating the CO2 equivalent emissions of individual (or car) sea travel.

`passenger_ferry-route_type_[e.g. "foot_passenger" or "car_passenger"]-fuel_source_[e.g. "na"]`

**Tickets and Passes**

This category is for estimating the CO2 equivalent emissions of expenditure on tickets and passes for travel.

`tickets_passes-transport_type_[e.g. "bus_and_coach"]-ticket_type_[e.g. "season_pass"]` 

**Vehicle**

This category is for estimating the CO2 equivalent emissions of different types of vehicles.

`["passenger" or "commercial" or "rental"]_vehicle-vehicle_type_[e.g. "car" or "bus"]-fuel_source_[e.g. "diesel" or "cng"]-engine_size_[e.g."gt_3000cc"]-vehicle_age_[e.g. "post_2015"]-vehicle_weight_[e.g."gt_12t"]`

**Warehousing and Storage**

This category is for estimating the CO2 equivalent emissions of warehousing and storage of goods in transit.

`warehouse_storage-type_[e.g. "warehousing"]` 
\
\
\
***Sector: Refrigerants and Fugitive Gases***

**Refrigerants and Fugitive Gases**

This category is for estimating the CO2 equivalent emissions of refrigerants and fugitive gases. These conversion factor should be used to report leakage from air-conditioning refrigeration units or the release to the atmosphere of other gases that have global warming potential (GWP).

`fugitive_gas-type_[e.g. "carbon_dioxide" or "dimethylether"]`
\
\
\
***Sector: Waste***

**Waste Disposal**

This category is for estimating the CO2 equivalent emissions produced by the disposal of waste.

`waste_type_[e.g."aggregates"]-disposal_method_[e.g."open-loop"]`
\
\
\
***Sector: Water***

**Waste Disposal**

This category is for estimating the CO2 equivalent emissions produced by provision or treatment of water.

`water-[e.g. "supply" or "treatment"]`
\
\
\

## Glossary of terms, initialisms, and acronyms used in the OEFDB ID field

avgas - aviation gasoline - petrol-based aviation fuel

avtur - aviation turbine (or jet) fuel - kerosine-based aviation fuel

aws - amazon web service

lldpe - linear low-density polyethylene 

ldpe - low-density polyethylene

lt - less than

lte - less than or equal to

fcev - fuel cell electric vehicle - refers to hydrogen fuel cell vehicles

gt - greater than (boolean)

gte - great than or equal to (boolean)

hdpe - high-density polyethylene

hev - hybrid electric vehicle (non plug-in, with electric-only mode)

hvo - hydrogenated vegetable oil

me - methyl ester

mhev - mild hybrid electric vehicle (non plug-in, no electric-only mode)

na - Not available or not applicable - this is used where a given dimension of an ID either doesn't apply to that particular factor (not applicable or provided as an average and therefore not required as an identifier) or is not specified by the source (not available). We use a single value of NA in all cases to avoid large amounts of interpretation being required; the context for each NA is available in the description field of each EF. 

pet - polyethylene terephthalate

phev - plug-in hybrid electric vehicle

ps - polystrene

pp - polypropylene

pvc - polyvinyl chloride

weee - waste from electrical and electronic equipment
