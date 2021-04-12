import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { CustomCardButton } from '../../utils/reuseableStyles';
import { projectObj } from './projectData/projectDataObj';

const StyledProjectsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;`

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 150,
    },
});

const ShowcaseCard = () => {
   
    const classes = useStyles();
    
    return (
<StyledProjectsContainer>
    {projectObj.map((obj) => {
      return <Card key={obj.id} className={classes.root} style={{margin: "5px"}} >
        <CardMedia
          className={classes.media}
          image={obj.projectPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize: "1.6rem", fontWeight: 900}} >
            {obj.projectName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "1.4rem", fontWeight: 600}} >
           {obj.projectAbout}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="large" color="primary">
          Site
        </Button>
        <Button size="large" color="primary">
          Code
        </Button>
      </CardActions>
    </Card>
    })}
    </StyledProjectsContainer>
    )
}

export default ShowcaseCard
