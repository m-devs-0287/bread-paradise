import Header from "./components/layout/Header";
import Main from "./components/layout/main";
import Footer from "./components/layout/footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
