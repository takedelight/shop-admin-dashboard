import { AsideMenu } from "./components/AsideMenu";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="flex min-h-screen">
      <AsideMenu />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 bg-neutral-100" />
      </div>
    </div>
  );
};
