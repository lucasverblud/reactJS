import React from "react";



export default function ItemDetail({ producto }) {

    return (
        <>
            <div>
                {(producto.id) ?
                    <>{producto.id + " " + producto.title + " " + producto.pictureUrl}</>
                    :
                    <>Loading...</>
                }
                {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
            </div>
        </>
    );
}