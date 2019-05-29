import tap from '../src/tap';

class TappableClass {
  private name!: string;

  public setName(name: string): void {
    self.name = name;
  }

  public getName(): string {
    return self.name;
  }
}

test('tap function', (): void => {
  const value = new TappableClass();

  const name = tap<TappableClass>(
    value,
    (instance: TappableClass): void => {
      instance.setName('foo');
    },
  ).getName();

  expect(name).toBe('foo');
});
