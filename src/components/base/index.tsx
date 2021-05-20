function listen(params:Map<string, any>):any {
  const handler = {
    get(target :Map<string, any>, prop:string): any {
      if (Array.isArray(target.get(prop))) {
        return target.get(prop).join(' ');
      }
      if (typeof target.get(prop) === 'object' && target.get(prop) !== null) {
        return new Proxy(target.get(prop), handler);
      }
      return Reflect.get(target, prop);
    },
  };
  return new Proxy(params, handler);
}

export default listen;
