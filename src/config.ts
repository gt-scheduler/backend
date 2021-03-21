import * as dotenv from "dotenv";

dotenv.config();

interface Config {
  ATFormTable: string;
  AT_API_KEY: string | undefined;
  AT_TABLE_BASE: string | undefined;
}

const ConfigVariables: Config = {
  ATFormTable: "Website Feedback",
  AT_API_KEY: process.env.AIRTABLE_API_KEY,
  AT_TABLE_BASE: process.env.AIRTABLE_BASE,
};

export default ConfigVariables;
