import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { Table, Button } from 'reactstrap'
import { AiTwotoneHome } from "react-icons/ai";

const View = props => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data)
            })
            .catch(err => {
                console.log(err)
                navigate('/')
            })
    }, [id])
    const { name, type, description, skillOne, skillTwo, skillThree } = pet
    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                navigate('/')
            })
    }
    return (
        <div className="my-table">
            <Link to={'/'}>back to home</Link>
            <h4 className="my-sub">Details about: {name}</h4>
            <Button className="adopt" color="danger" onClick={() => handleDelete(id)}><AiTwotoneHome className="my-icon" />Adopt {name}</Button>
            <div className="my-border" >
                <Table borderless>
                    <tbody>
                        <tr>
                            <td>Pet Type:</td>
                            <td>{type}</td>
                        </tr>
                        <tr>
                            <td>Pet Description:</td>
                            <td>{description}</td>
                        </tr>
                        <tr>
                            <td>Skills:</td>
                            <td>
                                {skillOne && <div>{skillOne}</div>}
                                {skillTwo && <div>{skillTwo}</div>}
                                {skillThree && <div>{skillThree}</div>}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default View