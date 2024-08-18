import React, { useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,

    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend

);


function Internalrep() {

    const [chartData, setChartData] = useState({
        employeeCount: {
            labels: ['<30', '30-50', '>50'], 
            datasets: [
                {
                    label: 'Employee Count',
                    data: [8298, 2254, 52], 
                    backgroundColor: 'rgba(231, 69, 10, 0.749)',
                    
                },
            ],
        },
        employeeCountManagementlevel: {
            labels: ['Senior', 'Middle', 'Junior','Restaurent'], 
            datasets: [
                {
                    label: 'Employee Count Management level',
                    data: [20, 504, 2109, 7971],
                    backgroundColor: 'rgba(231, 69, 10, 0.749)',
                    
                },
            ],
        },
        newhires: {
            labels: ['Senior', 'Middle', 'Junior','Restaurent'],
            datasets: [
                {
                    label: 'New Hires',
                    data: [2, 166, 724, 10095], 
                    backgroundColor: 'rgba(231, 69, 10, 0.749)',
                    
                },
            ],
        },
        turnover: {
            labels:['Senior', 'Middle', 'Junior','Restaurent'], 
            datasets: [
                
                {
                    label:'Turnover(Female)',
                    data:[0, 28, 31, 99], 
                    backgroundColor: 'rgba(231, 69, 10, 0.749)',
                    
                },
                {
                    label:'Turnover(Male)',
                    data:[17, 24, 49, 124] , 
                    backgroundColor: 'gray',
                    
                },
            ],
        },
        averagetraininghours: {
            labels: ['FY 2021-22','FY 2022-23'], 
            datasets: [
                {
                    label: 'Average Training Hours',
                    data: [21,90], 
                    backgroundColor: 'rgba(231, 69, 10, 0.749)',
                    
                },
                
            ],
        },
        
    });

    const options = {
        responsive: true, 
        maintainAspectRatio: false,
        height: 600,
      };

    return (
        <div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <p>We have seen an increase in the number of new hires this year, with 17% more males and 36% more women joining the organization than previous year.</p>
                        <div className='row'>
                            <div className='col-6'>
                                
                                
                             <div className='mt-4'><Bar id='chart' data={chartData.employeeCount} options={options} /></div>

                            <div className='mt-5'> <Bar id='chart' data={chartData.newhires} options={options} /></div>

                            </div>
                            <div className='col-6'>

                            <div className='mt-4'><Bar id='chart' data={chartData.employeeCountManagementlevel} options={options} /></div>

                            <div className='mt-5'><Bar id='chart' data={chartData.turnover} options={options} /></div>

                            </div>

                            <div className='row mt-5'>
                                 <div className='col-6 mt-4'><h6><b>Career Growth and Development</b></h6>
                                 <p id='paragraph'>Our human capital managerent practices are designed to provide equal opportunities for employees to learn, inovate and enhance their skill sets at every stage of their careers. By investing in training. development, and mentoring. we empower our employees to grow in their personal and professional capacities. <br /> To ensure a focused and purposeful growth trajectory. considering our short-term and long-term goals as well as indvidual employee development objective, we thoroughly evaluate the training and development needs at every level</p>
                                 </div>
                                 <div className='col-6 mt-4'>
                                    <p id='paragraph'>within our organization. We have thoughtfully crafted training programs that are spocifically tailored to cater to dstinct requirements, facilitating a clear pathway for progression within our organization. This approach opens abundant growth opportunities within our organization, including avenues for vertical adivancemnent, cross-functional roverents, and lateral transitions.
                                    <br />To ensure a seamnlessintegration of our employees into ous company's culture, we have established a clear pathway that provides comprehensive support from their induction to joining the organization.</p>
                                 </div>
                            </div>


                        </div>
                    </div>




                    <div className='col-sm-12 col-lg-6'>
                        <h5 style={{ color: 'rgba(231, 69, 10, 0.749)' }}><b>Our Training Programs</b></h5>
                        <MDBTable id='table'>
                            <MDBTableBody>
                                <tr>
                                    <th id='tablehead' scope='row'><p style={{ color: 'white', marginTop: '30px' }}><b>All New Joiners</b></p></th>
                                    <td ><b>CHAMPS and Orientation</b> program is a training program fo new joiners. to make them feel more comfortable within their new roles, teamns and departments, while also making them aware of company expectations and policies</td>

                                </tr>
                                <tr>
                                    <th id='tablehead' scope='row'><p style={{ color: 'white', marginTop: '55px' }}><b>Team Members(TM)</b></p></th>
                                    <td >All team members undergo <b>Leading a shift</b> programme that alms to empower Individuals with the necessary skil sets to thrive a5 effective managers to become shift program empl lasizes the importance of team bulding., wihsnegle lo cutivate strong Iinterpersonal connections and leveraga them strengths egular popcorn learning modu les that is bite sized learring is also imparted to empiloyees on difterent topics</td>

                                </tr>
                                <tr>
                                    <th id='tablehead' scope='row'><p style={{ color: 'white' }}><b>Shift Managers(SM)/ <br />Assistant Restaurant Manager(ARM)</b></p></th>
                                    <td ><b>Ready to lead developing champions and Leading a restaurant program (LAR 182)</b> are training program developed for restaurant Managers who are traned on jot trainings that help them be competent in operational and leadership skills and handle large tearns. Allteam merbers go through this program to become shift managers</td>

                                </tr>
                                <tr>
                                    <th id='tablehead' scope='row'><p style={{ color: 'white', marginTop: '30px' }}><b>Restaurant General Manager</b></p></th>
                                    <td ><b>Leading Multiple Restaurant</b> program provides a platfiorm to build leaders to manage multiple restaurants, Coaching your team, Profit & Loss Statement, Ikdentifying People Resources, Review your: ACSR, Examine Monthly Calendars, CMM, Customner Interaction are few aspects covered in the program</td>

                                </tr>
                                <tr>
                                    <th id='tablehead' scope='row'><p style={{ color: 'white', marginTop: '30px' }}><b>Above Store Leader(ASL)</b></p></th>
                                    <td >Training program centered around how to <b>"lead self"</b>, lead team and lead my area These training programs have been curated for all employees Above Store Leader til operational managers. Programs such as Master cass with Sanijay are conducted.</td>

                                </tr>


                            </MDBTableBody>
                        </MDBTable>

                        <div className='row mt-5'>
                            <div className='col-6'><div><Bar id='chart1' data={chartData.averagetraininghours} options={options} /></div></div>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <h2 style={{color:'rgba(231, 69, 10, 0.749)'}}> <b>90</b></h2> 
                                        <p>Average Annual Training Hours per Employee</p>
                                        <hr />
                                        <h2 style={{color:'rgba(231, 69, 10, 0.749)'}}> <b>38</b></h2>
                                        <p>(INR Million) <br />Amout Spend on Training and Development</p>
                                    
                                    </div>

                                    <div className='col-6'>
                                    <h2 style={{color:'rgba(231, 69, 10, 0.749)'}}> <b>2.87</b></h2> 
                                        <p>million <br />Total Training Hours</p>
                                        <hr />
                                        <h2 style={{color:'rgba(231, 69, 10, 0.749)'}}> <b>3500</b></h2>
                                        <p>INR <br />Average amount spent on Training and Development Employee</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internalrep