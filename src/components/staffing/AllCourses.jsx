import React, { useState } from 'react'
import StaffingKeyToSuccess from '../modals/StaffingKeyToSuccess'
import StaffingLogin from '../modals/StaffingLogin'
import { coursesData } from './coursesData'
import './styles.css'

export default function AllCourses({ setChecList, setTraining }) {

    const courseHandler = (i) => {
        setChecList(i.name)
        setTraining(false)
        document.getElementById('staffingLogin').classList.add('active')
    }
    return (
        <div className="news_container">
            <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>All Courses</h1>

            <div className='newsBoxes'>
                {
                    coursesData.map((item, index) => {
                        return (
                            <div className='newsBox' key={index} onClick={() => courseHandler(item)} >
                                <p className='bage' style={{ fontSize: '16px' }} >{item.bage}</p>
                                <i className={item.icon} style={{ fontSize: '70px', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: '#fff', color: '#a7a428', marginBottom: '10px', }} ></i>
                                <p style={{ marginBottom: '10px', fontSize: '30px', fontWeight: "bold", color: '#fff' }}>{item.newsTotal}</p>
                                <h3 style={{ fontSize: '24px', color: '#fff' }} >{item.name}</h3>
                                <i style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#fff' }} className="fa fa-long-arrow-alt-right"></i>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}
