import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import staffing from '../assets/companies/staffing.webp'
import StaffingSessionModal from '../components/modals/StaffingSessionModal'
import StaffingLogin from '../components/modals/StaffingLogin'
import StaffingCourses from '../components/modals/StaffingCourses'
import StaffingKeyToSuccess from '../components/modals/StaffingKeyToSuccess'
import AllCourses from '../components/staffing/AllCourses'


const Staffing = () => {

  const [checkList, setChecList] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [training, setTraining] = useState(false)

  const openModal = () => {
    setTraining(true)
    document.getElementById('staffingSessionModal').classList.add('active')
  }
  return (
    <Layout>
      <div id="Hero" className="Hero">
        <div className="HeroSlider">

          <div

            className={`   firstSlide  active'   slide`}
          >
            <div id className="slideImg">
              <img src={staffing} alt="" />

            </div>

            <div className="slideContent">
              <div className="badge">
                <em> Staffing</em>
              </div>
              <h1 >
                Through Patience Great Things are accomplished
              </h1>
              <div className="slideSubContent">
                <p  >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, autem. Nobis sint placeat incidunt nisi, reiciendis quo iure esse magni. Explicabo consequuntur nostrum nesciunt eaque libero harum quo possimus sapiente.
                </p>

                <button onClick={openModal} className='FirstHeroBtnForVerticalPage'>
                  Training
                </button>
                <button onClick={openModal} className='SecondHeroBtnForVerticalPage'>
                  Join Now
                </button>





              </div>
            </div>
          </div>



        </div>

        <StaffingSessionModal id='staffingSessionModal' />
        <StaffingLogin training={training} loggedIn={loggedIn} setLoggedIn={setLoggedIn} id='staffingLogin' />
        <StaffingCourses setChecList={setChecList} id='staffingCourses' />
        <StaffingKeyToSuccess name={checkList} id='staffingKeyToSuccess' />
      </div>
      <AllCourses setTraining={setTraining} setChecList={setChecList} />
    </Layout>
  )
}

export default Staffing