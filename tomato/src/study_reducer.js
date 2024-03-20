
import { useReducer } from 'react';

function reducer(signValue, action) {
    switch (action.type) {
        case "Create": { 
            return {
                ...signValue,
                id: "CreateId",
                password: "CreatePassword"
            };
        }
        case "UpdatePassword": {
            return {
                ...signValue,
                id: "UpdatePassword",
            };
        }
        case "UpdateId": {
            return {
                ...signValue,
                id: "UpdateId",
            };
        }
        case "Delete": {
            return {
                ...signValue,
                id: "",
                password: "",
            };
        }
        default: return signValue;
    }; 
} 

function App() {

    const [signValue, dispatch] = useReducer(reducer, {
        id:"initId",
        password:"initPassword"
    });

    const onUpdatePassword = ()=> {
        dispatch({
            type:"UpdatePassword",
        })
    }
    const onCreate = ()=> {
        dispatch({
            type:"Create",
        })
    }
    console.log(`id = ${signValue.id}, password = ${signValue.password}`);


    return (

        <div className="App">
            <button onClick={onCreate}>Create</button>
            <button onClick={onUpdatePassword}>UpdatePassword</button>
        </div>
    );
}

export default App;
