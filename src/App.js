import React from 'react';
import UsandoFecthAPI from './components/UsandoFecthAPI';
import UsandoAxios from './components/UsandoAxios';
import UsandojQuery from './components/UsandojQuery';
import UsandoHookUseState from './components/UsandoHookUseState';
import IncrementandoVariavel from './components/IncrementandoVariavel';
import UsandoHookUseEffect from './components/UsandoHookUseEffect';


import { Routes, Route, Link } from 'react-router-dom';
    function App() {
        
        return (
            <>
                <header>
                    <h1>EnsineMe React</h1>
                    <nav>
                        <Link to="/">Home</Link> | {" "}
                        <Link to="/hookUseState">Página 1</Link> | {" "}
                        <Link to="/increment">Página 2</Link> | {" "}
                        <Link to="/hookUseEffect">Página 3</Link> | {" "}
                        <Link to="/fecth">Página 4</Link> | {" "}
                        <Link to="/axios">Página 5</Link> | {" "}
                        <Link to="/jQuery">Página 6</Link> | {" "}
                    </nav>
                </header>
                
                <main className='conteudo-principal'>
                    <Routes>
                      
                        <Route path="" element={""} />
                        <Route path="axios" element={<UsandoAxios />} />
                        <Route path="fecth" element={<UsandoFecthAPI />} />
                        <Route path="jQuery" element={<UsandojQuery />} /> 
                        <Route path="hookUseState" element={<UsandoHookUseState />} />
                        <Route path="increment" element={<IncrementandoVariavel />} />
                        <Route path="hookUseEffect" element={<UsandoHookUseEffect />} />
                        
                    </Routes>
                </main>
            </>
        );
    }
    
    export default App;