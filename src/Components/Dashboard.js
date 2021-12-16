import Loader from './Loader'
import {useEffect, useState} from "react";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import {Button} from "react-bootstrap";
const Dashboard = () => {

    const [employees, setEmployees] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentEmployee,setCurrentEmployee] = useState([])
    const [showCard, setShowCard] = useState(false)

    const getEmployees =  async ()=>{
        setLoading(true)
        const {data} = await axios.get("https://statenweb.mockable.io/employees")
        console.log(typeof(data))
        setEmployees(data)
        setLoading(false)

    }

    const getEmployee =  async (id)=>{
        setLoading(true)
        const {data} = await axios.get(`http://statenweb.mockable.io/employee/${id} `)
        console.log(data)

        setCurrentEmployee(data)
        setLoading(false)
        setShowCard(true)

    }

    useEffect(()=>{
        getEmployees()
    },[])


    return(

        <div className="App-header" >
            <div className="d-flex justify-content-center">


            {loading ? <Loader/> : <>
                {showCard ? <>

                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={currentEmployee.photo}/>
                            <Card.Body>
                                <Card.Title>{currentEmployee.name}</Card.Title>
                                <Card.Text>
                                   <ul>
                                       <li>Role : {currentEmployee.role}</li>
                                       <li>Start Date : {currentEmployee.startDate}</li>
                                       <li>Department : {currentEmployee.department}</li>
                                   </ul>
                                </Card.Text>
                                <Button variant="primary" onClick={()=>setShowCard(false)}>Back to employees</Button>
                            </Card.Body>
                        </Card>
                    </> :
                    <ListGroup as="li">
                        {employees.map((employee, index) => (
                            <ListGroup.Item action onClick={() => getEmployee(employee.id)}>
                                {employee.name} {' '}

                                <Badge pill bg="info">
                                    {employee.department}
                                </Badge>
                            </ListGroup.Item>

                        ))}

                    </ListGroup>
                }

            </>}
            </div>
        </div>
    )

}



export default  Dashboard;