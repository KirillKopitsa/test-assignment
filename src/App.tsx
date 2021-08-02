import * as React from 'react';
import ClientsSchedule from "./components/ClientsSchedule";
import ButtonAppBar from "./components/Header";


function App() {

    return (
        <>
            <ButtonAppBar/>
            <div style={{backgroundColor: '#fafafa'}}>
                <ClientsSchedule/>
            </div>
        </>
    );
}

export default App;