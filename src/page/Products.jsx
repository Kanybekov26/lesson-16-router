import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../components/Ui/Button"




const Products = ({products}) => {
   const  product = useNavigate()
    return(
        <>
         <StyledUl>
        {products.map((element, index)=> {
            return (
                <StyledList key={index}><p>{element.title}</p> <Button onClick={() => product(`/products/${element.id}/detail`)}>Details</Button></StyledList>
            )
        })}
        <Outlet/>
    </StyledUl>


        </>
   
    )
}
export default Products

const StyledUl = styled.ul`
    margin:auto;
    width: 500px;
    list-style: none;
    margin-top:50px;
    padding-bottom:20px;
`
const StyledList = styled.li`
    width: 100%;
    background-color:white;
    padding:25px;
    margin-bottom:20px;
    display:flex;
    justify-content:space-between;
`