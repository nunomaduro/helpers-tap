export default function tap<T>(instance: T, callback: CallableFunction): T {
  callback(instance);

  return instance;
}
