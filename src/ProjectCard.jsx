import React, { useState } from 'react'
import {Box, Card, CardActions,CardContent,Button,Typography, Modal} from '@material-ui/core';
import './Card.css'
import ProjectDrawer from './ProjectDrawer';
const ProjectCard = (card) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    
    setIsModalOpen(true);
    
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
       <Card className='project-card'>
        <CardActions onClick={handleOpenModal}>
      <CardContent >   

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
        <Button onClick={handleOpenModal}>
          Open Modal
        </Button>
        </CardContent>
        <ProjectDrawer
        card={card}
      open={isModalOpen}
      handleClose={handleCloseModal}
    />
    </CardActions>
    </Card>
    
    </>
 
  );
}

export default ProjectCard;


     


  