import React from 'react'
import s from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getActivities, getCountries } from '../../redux/actions'

function LandingPage() {

  const dispatch = useDispatch();

  useEffect(() => {  
    dispatch(getCountries())  
    dispatch(getActivities())
  },[dispatch])

  return (
    <div className={s.divMayor}>



        <hr width={"100%"} />


        <div className={s.Titulo}>
            <h1 className={s.Title}>WELCOME</h1>
            <h4 className={s.Title}>TO</h4>
            <h2 className={s.Title}>THE COUNTRY WEB APP</h2>
        </div>


        <div className={s.ubiBtn}>    
            <Link to = {'/home'}> <button className={s.stiBtn}>¡ENTER!</button></Link>
        </div>


        <hr width={"100%"} />  


    </div>
  )
}

export default LandingPage
