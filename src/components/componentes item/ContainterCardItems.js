import CardItem from "./CardItem"
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect } from "react";
import "../../styles/containerCardItems.css"
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
    const [datos, setDatos] = useState([]);
    let { idCategory } = useParams()

    useEffect(() => {

        setDatos([]);

        if (idCategory === undefined) {
            fetchSimultion(productos, 1000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
        } else {
            fetchSimultion(productos.filter(filter => filter.type === idCategory), 2000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
        }

    }, [idCategory])

    return (
        <div className="containerCardItems">
            {
                datos.map(product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.firstImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                ))
            }
        </div>
    )
}


export default ContainerCardItems;