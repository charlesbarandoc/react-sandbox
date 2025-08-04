import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="Spongebob" age="4" isCook={true}/>
      <Student name="Patrick" age={29} isCook={false}/>
      <Student name="Squidward" age={45} isCook={false}/>
      <Student name="Sandy" age={33} isCook={false}/>
    </>
  );
}

export default App
