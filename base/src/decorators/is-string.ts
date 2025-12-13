export function IsString() {
  return function (target: any, propertyKey: string) {
    console.log(target, propertyKey);
  };
}
