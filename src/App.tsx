import { subscribe } from './subscribe';

function App() {
  return (
    <>
    <h1>hello</h1>
    <div>
      <button onClick={async () => {
        const creds = await subscribe()
        console.log(creds)
        navigator.clipboard.writeText(creds);
        }}>Subscribe</button>
    </div>
    </>
  )
}

export default App
