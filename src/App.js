import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Profile from './components/Profile';
import SocialLink from './components/SocialLink';

function App() {
  return (
    <div className="App">
      <main>
        <Profile />
        <Button/>
        <SocialLink />
      </main>
      <Footer />
    </div>
  );
}

export default App;
