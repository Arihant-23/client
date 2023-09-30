import React from 'react'
import { Button, Typography,Drawer} from '@material-ui/core';

const ProjectDrawer = ({card,open,handleClose}) => {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
     <div style={{ color:'black', background:'white',  textAlign:'center', alignContent:'center' }}>
          <Typography variant="h6" component="div">
          Project Title
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant='h4' color="text.secondary">
        {card.card.ProjectTitle}
        </Typography>
        <Typography  component="div">
         Technologies Used
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {card.card.ProjectTechnologies}
        </Typography>
        <Typography  component="div">
         Frontend Technologies
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {card.card.Technical_SkillsetFrontend}
        </Typography>
        <Typography  component="div">
         Backend Technologies
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {card.card.Technical_SkillsetBackend}
        </Typography>
        <Typography  component="div">
         DataBase Technologies
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {card.card.Technical_SkillsetDatabases}
        </Typography>
        <Typography  component="div">
         Technical Infrastructure
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {card.card.Technical_SkillsetInfrastructre}
        </Typography>
        <Typography  component="div">
         Other Informations
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {card.card.Other_InformationAvailability}
        </Typography>
        <Button onClick={handleClose}>Close Modal</Button>
      </div>
  </Drawer>
  )
}

export default ProjectDrawer









