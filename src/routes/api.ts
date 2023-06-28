import {Request, Response, Router} from 'express';
import StatusCodes from 'http-status-codes';

import {Stat} from '@models/stats'
import {Benefit} from '@models/benefits'
import {Trend} from "@models/trend";
import { WeekendFarm } from "@models/weekend-farms";

const router = Router();

router.get("/trends", async (req: Request, res: Response) => {
  const { age, gender } = req.query;
  let age1 = Number(age) - (Number(age) % 10);
  age1 = age1 < 30 ? 30 : age1;
  age1 = age1 > 70 ? 70 : age1;
  const trends = await Trend.find({
    age: age1,
    gender: Number(gender) == 1 ? "male" : "female",
  });
  return res.status(StatusCodes.OK).json({ trends });
});

router.get("/stats", async (req: Request, res: Response) => {
  const { province } = req.query;
  const stats = await Stat.find({ province });
  return res.status(StatusCodes.OK).json({ stats });
});

router.get("/benefits", async (req: Request, res: Response) => {
  const options = {
    page: Number(req.query.page || 1),
    limit: Number(req.query.limit || 10),
  };
  const query = req.query.province
    ? { province: req.query.province }
    : undefined;
  const benefits = await Benefit.paginate(query, options);
  return res.status(StatusCodes.OK).json(benefits);
});

router.get("/weekend-farms", async (req: Request, res: Response) => {
  const options = {
    page: Number(req.query.page || 1),
    limit: Number(req.query.limit || 10),
  };
  const query = req.query.province
    ? { province: req.query.province }
    : undefined;
  const weekendFarms = await WeekendFarm.paginate(query, options);
  return res.status(StatusCodes.OK).json(weekendFarms);
});

// Export default.
export default router;


