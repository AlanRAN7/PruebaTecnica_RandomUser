import React from 'react'
import SecurityForm from './Forms/SecurityForm/SecurityForm.jsx';
import Typography from '@mui/material/Typography'


export default function SecurityInformation({dataUser}) {
  return (
    <>
     <section className='titleSection'>
      <Typography variant="h4" color="initial" className='titleTypography'>Security Information</Typography>
      </section>
    <SecurityForm dataUser = {dataUser} />
  </>
  )
}
