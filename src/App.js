import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App bg-zinc-900 font-mono">
      <div className="h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
