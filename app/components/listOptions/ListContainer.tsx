import * as React from "react"



export const ListContainer = ({ children }) => {

    // context layers that holds all the weird shit
    // pull the saved options from the local storage?

    // switch statement that renders the different types of list children

    return (
        <div className="list-container">
            {children}
        </div>
    )
}