interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

export class CheckService implements CheckServiceUseCase {
  async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      req.ok ? console.info('Service is up') : console.info('Service is down');
      return req.ok;
    } catch (err) {
      console.error('Error occurred while checking service status', err);
      return false;
    }
  }
}
