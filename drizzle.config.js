/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://AI-Content-generator_owner:QiY8Ux5kDoTI@ep-restless-recipe-a5q0fbrf.us-east-2.aws.neon.tech/AI-Content-generator?sslmode=require",
    }
  };