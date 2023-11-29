import { ReactNode, Suspense, ComponentType } from "react";

export function lazyLoad<
  T extends ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): ReactNode {
  const ModuleMap = Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] }))),
  });

  const TheComponent = ModuleMap[name];
  return (
    <Suspense>
      <TheComponent />
    </Suspense>
  );
}
