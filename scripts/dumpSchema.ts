import fs from "fs"
import { printSchema } from "graphql/utilities"
import prettier from "prettier"
import {typeDefs} from "../src/typeDefs"
import { makeExecutableSchema } from "graphql-tools";

const schema = makeExecutableSchema({ typeDefs, parseOptions: {}  })
const schemaText = printSchema(schema)
const prettySchema = prettier.format(schemaText, { parser: "graphql" })

// Save user readable type system shorthand of schema
fs.writeFileSync("_schema.graphql", prettySchema, "utf8")
