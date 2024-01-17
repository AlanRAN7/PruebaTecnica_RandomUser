import React from 'react'
import PersonalForm from './Forms/PersonalForm/PersonalForm';
import Typography from '@mui/material/Typography'


export default function PersonalInformation({dataUser}) {
  const {large} = dataUser.picture;
  const {title, first, last} = dataUser.name;
  return (
    <>
      <section className='titleSection'>
      <Typography variant="h4" color="initial" className='titleTypography'>Personal Information</Typography>
      </section>
    <section className='personalInformationSection'>
      <section></section>
    <section className="profilePicture">
    <img src={large} alt={title + " " + first + " " + last} className='profilePicImg' />
    <Typography variant="h5" color="initial"> {title + " " + first + " " + last}</Typography>
    </section>
    <PersonalForm dataUser={dataUser} />
      {/* personal info */}
    {/* </PersonalForm>k */}
  </section>
    </>
  )
}
