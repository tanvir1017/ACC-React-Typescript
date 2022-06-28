import { Footer } from "./common/footer";
import { Header } from "./common/header";
import { Main } from "./common/main";

export const TheLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
