import 'dotenv/config'
import logger from 'jet-logger';
import server from './server';
import { connect } from "@models/connector";

// Constants
const serverStartMsg = 'Express server started on port: ',
        port = (process.env.PORT || 3000);

// Start server
(
    async () => {
        await connect()
        server.listen(port, () => {
            logger.info(serverStartMsg + port);
        });
    }
)()

