
import './App.css'
import ClassificationTable from './components/Classification'
import Logo from './components/Logo'



function App() {
  
  return (
    <div class='w-screen h-screen flex flex-col bg-[#252525] p-2 border-solid border-white border-2 rounded-xl' >
        <div class='flex flex-row'>
          <Logo/>
        </div>
        <div class='flex flex-row'>
          <ClassificationTable />
        </div>
    </div>
  )
}

export default App
