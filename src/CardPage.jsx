import React from 'react'
import ProjectCard from './ProjectCard';
import { Grid, Typography } from '@material-ui/core';



const CardPage = ({backendData}) => {
  return (
    <Grid container spacing={2}>
        {backendData.map( (card) =>{
            return(
                <Grid item xs={3}  >             
               <ProjectCard card={card} />
            </Grid>
            )
        })}
   
    </Grid>

  )
}

export default CardPage;