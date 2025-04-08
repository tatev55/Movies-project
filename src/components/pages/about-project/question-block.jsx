import { useState } from 'react';
import { Card, CardHeader, CardContent, IconButton, Collapse, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';


const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const QuestionBlock = ({ question, answer , }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return (
    <Card sx={{ marginBottom: 2 , backgroundColor:'#3B3B3B', boxShadow: 3, color: "#fff", fontSize: '20px'}}>
      <CardHeader
        title={question}
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx = {{ color: "white"}}/>
          </ExpandMore>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx ={{fontSize: "20px"}}>{answer}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default QuestionBlock;
