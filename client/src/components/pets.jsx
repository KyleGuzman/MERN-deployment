import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { Table } from 'reactstrap'

const Pets = props => {
    const [pets, setPets] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/')
            .then(res => {
                setPets(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    pets.sort((a, b) => {
        if (a.type < b.type) {
            return -1
        }
        if (a.type > b.type) {
            return 1
        }
        return 0
    })
    return (
        <div className="my-table">
            <Link to={'/pets/new'}>Add a pet to the shelter</Link>
            <h4 className="my-sub">These pets are looking for a good home</h4>
            <Table bordered striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map(pet => {
                        return (
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>details</Link>
                                    <> | </>
                                    <Link to={`/pets/edit/${pet._id}`}>edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Pets