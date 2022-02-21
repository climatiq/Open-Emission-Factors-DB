const {parse} = require("csv-parse");
const Joi = require("joi");
const fs = require("fs");
const path = require("path");

const numberOrEmpty = Joi.alternatives([
  Joi.number(),
  Joi.string().valid(''),
  Joi.string().valid('not-supplied'),
  Joi.string().regex(/-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+\-]?\d+)?/)
]);

// Validation schema
const schemaObject = {
  sector: Joi.string(),
  category: Joi.string(),
  activity_id: Joi.string()
    .regex(/[a-zA-Z0-9\-]+/)
    .min(3),
  name: Joi.string(),
  activity_unit: Joi.string(),
  "kgCO2e-AR5": numberOrEmpty,
  "kgCO2e-AR4": numberOrEmpty,
  "kgCO2": numberOrEmpty,
  "kgCH4": numberOrEmpty,
  "kgN2O": numberOrEmpty,
  "kgCO2e-OtherGHGs-AR5": numberOrEmpty,
  "kgCO2e-OtherGHGs-AR4": numberOrEmpty,
  uncertainty: numberOrEmpty,
  scope: Joi.string().allow(""),
  lca_activity: Joi.string(),
  source: Joi.string(),
  year_released: Joi.number().integer().min(1900),
  region: Joi.string(),
  date_accessed: Joi.string().regex(/^\d{4}\/\d{2}\/\d{2}$/),
  description: Joi.string(),
  source_link: Joi.string(),
};
const schema = Joi.object(schemaObject);

const data = fs.readFileSync(
  path.join(process.cwd(), "OpenEmissionFactorsDB.csv"),
  { encoding: "utf8", flag: "r" }
);

parse(
  data,
  {
    encoding: "utf8",
    columns: Object.keys(schemaObject),
    from_line: 2,
  },
  function (err, output) {
    const redColor = "\x1b[31m";

    if (err) {
      console.log(
        redColor,
        `Error while parsing the CSV file -- [${err.code}] ${err.message}`
      );
      process.exit(1);
    }

    let line = 2;
    let errors = false;
    output.forEach(function (row) {
      const result = schema.validate(row);
      if (result.error) {
        result.error.details.forEach(function ({ message }) {
          errors = true;
          console.log(`${redColor} Error in line ${line}: ${message}.`);
        });
      }

      line++;
    });

    if (errors) {
      process.exit(1);
    }

    console.log("\x1b[32m", "All good, the CSV file is valid!");
    process.exit(0);
  }
);
