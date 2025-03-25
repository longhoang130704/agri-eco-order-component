import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const pluginSwaggerApi = (app, port) => {
    console.log(`Swagger running at port ${port}`);

    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Agriculture Ecommerce Order Service API',
                version: '1.0.0',
                description: 'API documentation for the Agriculture Ecommerce Platform',
            },
            servers: [
                {
                    url: `http://localhost:8000/`,
                }
            ],
        },
        // apis: [path.resolve('./src/route/*.js')],  // Load tất cả route
        apis: [path.resolve('./src/route/swagger/*.js')],  // Load tất cả route
    };

    const swaggerSpec = swaggerJSDoc(options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default pluginSwaggerApi;
