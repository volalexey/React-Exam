import logo from './logo.svg';
import './App.css';
import {PlantList} from "./Pages/PlantList/PlantList";
import {Provider} from "react-redux";
import store from './Store/index';
import {AddPlant} from "./Pages/AddPlant/AddPlant";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import {EditPlant} from "./Pages/EditPlant/EditPlant";

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<PlantList/>}/>
            <Route path='/add' element={<AddPlant/>}/>
            <Route path='/edit/:id' element={<EditPlant/>}/>
        </Route>
    ))

  return (
    <div className="App">
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </div>
  );
}

export default App;
