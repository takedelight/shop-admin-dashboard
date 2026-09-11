import { AsideMenu } from "./components/AsideMenu";


export const App = () => {
  return (
    <div className="flex flex-col  min-h-screen">
      <main className=" flex-1 bg-neutral-100">
        <section>
          <AsideMenu />
        </section>
      </main>
    </div>
  );
};
