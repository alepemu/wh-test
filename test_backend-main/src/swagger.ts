import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Wheel Hub Test API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8080/",
        description: "Local server",
      },
    ],
  },
  apis: ["src/routes/user.routes.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
