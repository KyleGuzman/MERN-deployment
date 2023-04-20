import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { AiFillEdit } from "react-icons/ai";


const Edit = props => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [errors, setErrors] = useState(null)
    const [tempname, setTempname] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                const {
                    name,
                    type,
                    description,
                    skillOne,
                    skillTwo,
                    skillThree
                } = res.data
                setName(name)
                setTempname(name)
                setType(type)
                setDescription(description)
                setSkillOne(skillOne)
                setSkillTwo(skillTwo)
                setSkillThree(skillThree)
            })
            .catch(err => {
                navigate('/')
            })
    }, [id])
    const editPet = e => {
        e.preventDefault()
        const editedPet = { name, type, description, skillOne, skillTwo, skillThree }
        axios.put(`http://localhost:8000/api/pets/edit/${id}`, editedPet)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <Link to={'/'}>back to home</Link>
            <h4 className="my-sub">Edit {tempname}</h4>
            <Form className="my-form" onSubmit={editPet}>
                <div>
                    <FormGroup>
                        <Label>Pet Name:</Label>
                        <Input value={name} onChange={e => { setName(e.target.value) }} type="text" />
                        {
                            errors?.name && (
                                <p style={{ color: 'red' }}>{errors.name?.message}</p>
                            )
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label>Pet Type:</Label>
                        <Input value={type} onChange={e => { setType(e.target.value) }} type="text" />
                        {
                            errors?.type && (
                                <p style={{ color: 'red' }}>{errors.type?.message}</p>
                            )
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label>Pet Description:</Label>
                        <Input value={description} onChange={e => { setDescription(e.target.value) }} type="text" />
                        {
                            errors?.description && (
                                <p style={{ color: 'red' }}>{errors.description?.message}</p>
                            )
                        }
                    </FormGroup>
                    <div>
                        <Button className="my-button" color="primary" type="submit"><AiFillEdit className="my-icon" />Edit Pet</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Skills (optional):</label>
                    </div>
                    <FormGroup>
                        <Label>Skill 1:</Label>
                        <Input value={skillOne} onChange={e => { setSkillOne(e.target.value) }} type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Skill 2:</Label>
                        <Input value={skillTwo} onChange={e => { setSkillTwo(e.target.value) }} type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Skill 3:</Label>
                        <Input value={skillThree} onChange={e => { setSkillThree(e.target.value) }} type="text" />
                    </FormGroup>
                </div>
            </Form>
        </div>
    )
}

export default Edit