import { registerAs } from '@nestjs/config';

export default registerAs('config', () =>
    // 👈 export default
    ({
        app: {
            port: process.env.APP_PORT,
        },
        mongo: {
            port: process.env.MONGODB_PORT,
            host: process.env.MONGODB_HOST,
        },
    }),
);
