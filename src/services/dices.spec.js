import DicesService from './dices';

describe('DicesService', () => {
  const service = new DicesService();

  it('.analyze', () => {
    const test = '+13/+11 melee (4d6+4)';

    //service.analyze(test)
  });

  it('.attack (single attack)', () => {
    const test = '+13';
    service.attack(test);

    const results = service.attack(test);

    expect(results[0]).toBeGreaterThan(13);
    expect(results[0]).toBeLessThan(34);
  });

  it('.damage', () => {
    const test = '4d6 + 3';
    const results = service.damage(test);
  });
});
