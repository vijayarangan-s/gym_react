import React from 'react'
import {Route, Redirect} from 'react-router-dom';

const ProtectedRouter = ({component : Component, ...rest}) => {
    const token = localStorage.getItem("token")
    console.log({token})
    return (
        <Route
            {...rest}
            render = {props =>{
                return token ? <Component {...props} /> : <Redirect to={
                    {
                        pathname: '/Login', 
                        state: {
                            from: props.location
                        }
                    }
                } />
            }}
        />
    )
}

export default ProtectedRouter;


