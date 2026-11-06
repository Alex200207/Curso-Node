import { CronJob } from 'cron';

type CronType = string | Date;
type OnTick = () => void;

export class CronService {
  public static createJob(cronTime: CronType, OnTick: OnTick): CronJob {
    const job = new CronJob(cronTime, OnTick);
    job.start();

    return job;
  }
}
