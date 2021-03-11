import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router"
import { deleteContact, fetchContacts } from "../store/actions/contactAction"

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ContactCard (props) {
  const history = useHistory();
  const dispatch = useDispatch()
  const handleDetailOnClick = (id) => {
    history.push(`contact/${id}`)
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
    dispatch(fetchContacts)
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className="cardContainer">
      <Card className={classes.root} style={{width: "18rem", marginBottom: 75, marginLeft: 75}}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {(props.contact.photo).includes("http") ? (
              <img src={props.contact.photo} style={{width: 70}}></img>
              ):(
              <img src="https://st4.depositphotos.com/1156795/20814/v/600/depositphotos_208142524-stock-illustration-profile-placeholder-image-gray-silhouette.jpg" style={{width: 70}}></img>
              )}
            </Avatar>
          }
          title= {`${props.contact.firstName} ${props.contact.lastName}`}
          subheader={`Age: ${props.contact.age}`}
        />
        <CardMedia
          className={classes.media}
          image={props.contact.photo}
          title="Paella dish"
          style={{padding: 150}}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <EditIcon onClick={() => handleDetailOnClick(props.contact.id)} />
          </IconButton>
          <IconButton aria-label="share">
            <DeleteIcon onClick={() => handleDelete(props.contact.id)} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}





// export default function ContactCard (props) {
//   const history = useHistory();
//   const dispatch = useDispatch()
//   const handleDetailOnClick = (id) => {
//     history.push(`contact/${id}`)
//   }

//   const handleDelete = (id) => {
//     dispatch(deleteContact(id))
//     dispatch(fetchContacts)
//   }

//   return (
//     <div className="cardContainer" style={{width: "18rem", marginBottom: 20, marginLeft: 30,}}>
//       <div className="card">
//         <div onClick={() => handleDetailOnClick(props.contact.id)}>
//           {(props.contact.photo).includes("http") ? (
//             <img src={props.contact.photo} className="card-img-top" style={{height: 285}} alt="photoURL"/>
//           ): (
//             <img src="https://st4.depositphotos.com/1156795/20814/v/600/depositphotos_208142524-stock-illustration-profile-placeholder-image-gray-silhouette.jpg" className="card-img-top" style={{height: 285}} alt="photoURL"/>
//           )}
//           <div className="card-body">
//             <h5 className="card-title">{props.contact.firstName} {props.contact.lastName}</h5>
//             <p className="card-text">Age: {props.contact.age}</p>
//           </div>
//         </div>
//           <button onClick={() => handleDelete(props.contact.id)} className="btn btn-danger">Delete</button>
//       </div>
//     </div>
//   )
// }