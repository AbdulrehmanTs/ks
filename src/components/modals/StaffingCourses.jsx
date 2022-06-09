import { Grid, Paper, styled, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import Modal from './Modal'
import { coursesData } from '../../components/staffing/coursesData'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
  fontSize: "25px"
}));



const StaffingCourses = ({ id, setChecList }) => {
  const closeModal = (e) => {
    document.getElementById(id).classList.remove('active')
    document.getElementById('staffingKeyToSuccess').classList.add('active')
    setChecList(e.target.innerHTML)
  }
  useEffect(() => {
    window.addEventListener('click', (e) => {

      if (e.target.id === id) {
        document.getElementById(id).classList.remove('active')

      }
    })
  })
  return (
    <Modal id={id}>
      <h2> Courses</h2>
      <Grid container spacing={2}>
        {
          coursesData.map((item, index) => {
            return (
              <Grid key={index} onClick={(e) => closeModal(e)} item xs={4}>
                <Item>{item.name}</Item>
              </Grid>
            )
          })
        }
      </Grid>
    </Modal>
  )
}

export default StaffingCourses