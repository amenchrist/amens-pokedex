import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FlipCardDiv, FlipCardInnerDiv, FlipCardBackDiv, FlipCardFrontDiv,StyledCard } from "./styledComponents";

function FlipCard({content}) {
  return (
    <FlipCardDiv>
        <FlipCardInnerDiv>
            <FlipCardFrontDiv>
            <StyledCard>
                <CardMedia component="img" image={content.imageUrl} alt={content.name} />
                <Typography gutterBottom variant="h5" component="h2">
                    {content.name}
                </Typography>
            </StyledCard>
            </FlipCardFrontDiv>
            <FlipCardBackDiv >
            <StyledCard align='left'>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {content.name}
                    </Typography>
                    <Typography>Number: {content.id}</Typography>
                    <Typography>Types: {content.types}</Typography>
                    <Typography>Weight: {content.weight/10}kg</Typography>
                    <Typography>Height: {content.height*10}cm</Typography>
                    <Typography>Abilities: {content.abilities}</Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">View</Button>
                </CardActions> */}
            </StyledCard>
            </FlipCardBackDiv>
        </FlipCardInnerDiv>
    </FlipCardDiv>
        
  )
}

export default FlipCard