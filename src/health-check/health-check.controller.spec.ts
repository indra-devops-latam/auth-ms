import { HealthCheckController } from './health-check.controller';

describe('HealthCheckController', () => {
  let controller: HealthCheckController;

  beforeEach(() => {
    controller = new HealthCheckController();
  });

  it('returns the gateway health status', () => {
    expect(controller.healthCheck()).toBe('Client Gateway is up and running!!');
  });
});
