import { config } from "dotenv";
import { Decommas, ChainName } from "../src";
import { getEnumValues } from "./utils";

config();

const { X_DECOMMAS_KEY } = process.env;
export const decommas = new Decommas(X_DECOMMAS_KEY);

export const chainNames = getEnumValues(ChainName);
