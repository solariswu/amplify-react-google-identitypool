import './App.css';
// import GoogleBtn from './GoogleBtn';
import SignInWithGoogle from './SignInWithGoogle';


function App() {

  // window.addEventListener("message", ({ data }) => {
  //   console.log(data);
  // });

  return (
    <div className="App">
      <SignInWithGoogle></SignInWithGoogle>
      {/* <GoogleBtn /> */}
    </div>
  );
}

export default App;
