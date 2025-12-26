import "reflect-metadata";

export type Constructor<T = any> = new (...args: any[]) => T;

export class Container {
  private instances = new Map<Constructor, any>();
  private registries = new Set<Constructor>();
  private resolving = new Set<Constructor>();

  register(target: Constructor) {
    this.registries.add(target);
  }

  resolve<T>(target: Constructor<T>): T {
    if (this.instances.has(target)) {
      return this.instances.get(target);
    }

    if (this.resolving.has(target)) {
      const chain = [...this.resolving, target].map((t) => t.name).join(" -> ");
      throw new Error(`순환 의존성이 발생함: ${chain}`);
    }

    this.resolving.add(target);

    try {
      const instance = this.createInstance(target);
      this.instances.set(target, instance);
      return instance;
    } finally {
      this.resolving.delete(target);
    }
  }

  private createInstance<T>(target: Constructor<T>): T {
    if (!this.registries.has(target)) {
      throw new Error(`${target.name}은 컨테이너에 등록되지 않은 클래스입니다`);
    }

    const paramTypes: Constructor[] = Reflect.getMetadata("design:paramtypes", target) || [];

    const dependencies = paramTypes.map((paramType) => {
      return this.resolve(paramType);
    });

    return new target(...dependencies);
  }
}

export const container = new Container();

export function Injectable() {
  return function (target: any) {
    container.register(target);
  };
}
