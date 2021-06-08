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

function classNames(classObject:{[key: string]: Boolean}): string {
  let resultstr:string = '';
  Object.entries(classObject).forEach((item) => {
    if (item[1] === true) {
      resultstr += ` ${item[0]}`;
    }
  });
  return resultstr;
}

function outputClassName(classContain:{[key: string]: {[key: string]: string[]}}, className?:string, ...args: Object[]):string {
  const classResult:{[key:string]:Boolean} = {};
  args.forEach((item) => {
    const classKey:string = Object.entries(item)[0][0];
    const classValue:string = Object.entries(item)[0][1];
    classContain[classKey][classValue].forEach((classItem:string) => {
      classResult[classItem] = true;
      if (className !== undefined) {
        className.split(' ').forEach((customItem) => {
          classResult[customItem] = true;
          const customItemReg = customItem.match(/^.*?(?=-)/g) === null ? [customItem] : customItem.match(/^.*?(?=-)/g) as string[];
          if (classItem.indexOf(customItemReg[0]) === 0) {
            classResult[classItem] = false;
          }
        });
      }
    });
  });
  return classNames(classResult);
}
// 还需要优化时间复杂度
export { listen, outputClassName };
