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

function outputClassName(ClassMap:Map<string, Map<string, string[]>>, className?:string, ...args: Object[]):string {
  const result :string[] = [];
  args.forEach((item) => {
    const classKey:string = Object.entries(item)[0][0];
    const classValue:string = Object.entries(item)[0][1];
    ClassMap.get(classKey)?.get(classValue)?.forEach((classItem) => {
      let classResult:string = '';
      if (className !== undefined) {
        const classNameReg = className.match(/^.*?(?=-)/g) === null ? null : className.match(/^.*?(?=-)/g) as string[];
        if (classNameReg === null) {
          if (classItem.indexOf(className) !== -1) {
            classResult = className;
          }
        } else if (classItem.indexOf(classNameReg[0]) === 0) {
          classResult = className;
        }
      }
      if (classResult === '') {
        classResult = classItem;
      }
      result.push(classResult);
    });
  });
  return result.join(' ');
}
// 还需要将classname切割成数组，并需要优化时间复杂度
export { listen, outputClassName };
