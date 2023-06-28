import mongoose from 'mongoose';
import logger from 'jet-logger';

export const connect = async (): Promise<void> => {
    await mongoose.connect(process.env.DB_URI as string)
    logger.info("mongodb connected")
}

