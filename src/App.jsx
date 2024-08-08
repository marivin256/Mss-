
import {Route, createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';
  import Mainlayout from './Layouts/Mainlayout' 
  import Page1 from './Portpages/page1'
  import Page2 from './Portpages/page2'
  import Page3 from './Portpages/page3'
  import Page4 from './Portpages/page4'
  import Page5 from './Portpages/page5'
  import Page6 from './Portpages/page6'
  import Notfoundpage from './Pages/Notfoundpage'
  const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
  
  <Route index element={<Page1/>}/>
  <Route path='/shop' element={<Page2/>}/>
  <Route path='/blog' element={<Page3/>}/>
  <Route path='/about' element={<Page4/>}/>
  <Route path='/contact' element={<Page5/>}/>
  <Route path='/review' element={<Page6/>}/>
  <Route path='*' element={<Notfoundpage/>}/>
  
  </Route>
  
  )
  )
  
  function App (){
  return(
  <RouterProvider router={router}/>
  )
  }
  export default App;
  