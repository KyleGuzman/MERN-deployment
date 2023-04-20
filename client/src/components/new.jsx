import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { AiOutlineCloudUpload } from "react-icons/ai";


const New = props => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setskillOne] = useState('')
    const [skillTwo, setskillTwo] = useState('')
    const [skillThree, setskillThree] = useState('')
    const [errors, setErrors] = useState(null)
    const newPet = e => {
        e.preventDefault()
        const newPet = {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }
        axios.post('http://localhost:8000/api/pets/new', newPet)
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
            <h4 className="my-sub">Know a pet needing a home?</h4>
            <Form className="my-form" onSubmit={newPet}>
                <div>
                    <FormGroup>
                        <Label>Pet Name:</Label>
                        <Input onChange={e => { setName(e.target.value) }} type="text" />
                        {
                            errors?.name && (
                                <p style={{ color: 'red' }}>{errors.name?.message}</p>
                            )
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label>Pet Type:</Label>
                        <Input onChange={e => { setType(e.target.value) }} type="text" />
                        {
                            errors?.type && (
                                <p style={{ color: 'red' }}>{errors.type?.message}</p>
                            )
                        }
                    </FormGroup>
                    <div>
                        <Label>Pet Description:</Label>
                        <Input onChange={e => { setDescription(e.target.value) }} type="text" />
                        {
                            errors?.description && (
                                <p style={{ color: 'red' }}>{errors.description?.message}</p>
                            )
                        }
                    </div>
                    <div>
                        <Button color="primary" className="my-button" type="submit"><AiOutlineCloudUpload className="my-icon" />Add Pet</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <label className="mbottom">Skills (optional):</label>
                    </div>
                    <FormGroup>
                        <Label>Skill 1:</Label>
                        <Input onChange={e => { setskillOne(e.target.value) }} type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Skill 2:</Label>
                        <Input onChange={e => { setskillTwo(e.target.value) }} type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Skill 3:</Label>
                        <Input onChange={e => { setskillThree(e.target.value) }} type="text" />
                    </FormGroup>
                </div>
            </Form>
        </div>
    )
}

export default New