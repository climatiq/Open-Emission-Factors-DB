const {parse} = require("csv-parse");
const Joi = require("joi");
const fs = require("fs");
const path = require("path");

// Validation schema
const schemaObject = {
  id: Joi.string()
    .regex(/[a-zA-Z0-9\-]+/)
    .min(3),
  sector: Joi.string(),
  category: Joi.string(),
  name: Joi.string(),
  unit: Joi.string(),
  factor: Joi.number(),
  uncertainty: Joi.number().allow(""),
  source: Joi.string(),
  year: Joi.number().integer().min(1900),
  region: Joi.string(),
  date_accessed: Joi.string().regex(/^\d{4}\/\d{2}\/\d{2}$/),
  description: Joi.string(),
  source_link: Joi.string(),
  activity: Joi.string(),
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
