import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import ChatPage from "./pages/ChatPage";
function App() {
  return (
    <div className="h-screen text-text">
      <Hero />
      <Navbar />
      <ChatPage />
    </div>
  );
}

export default App;
