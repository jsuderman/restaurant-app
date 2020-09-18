// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Select from '@material-ui/core/Select';

// function TableTotal() {
//   const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

  
//     const classes = useStyles();
//     const [tableTotal, setTableTotal] = React.useState('');

//     const handleChange = (event) => {
//       setTableTotal(event.target.value);
//       console.log(event.target.value)
//     };


//     return (
//       <div>
//         <div>
//           <FormControl className={classes.formControl}>
//             <InputLabel id="demo-simple-select-label">Amount</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={tableTotal}
//               onChange={handleChange}
//             >
//               <MenuItem value={1}>1</MenuItem>
//               <MenuItem value={2}>2</MenuItem>
//               <MenuItem value={3}>3</MenuItem>
//               <MenuItem value={4}>4</MenuItem>
//               <MenuItem value={5}>5</MenuItem>
//               <MenuItem value={6}>6</MenuItem>
//               <MenuItem value={7}>7</MenuItem>
//               <MenuItem value={8}>8</MenuItem>
//             </Select>
//             <FormHelperText>Amount of People</FormHelperText>
//           </FormControl>
//         </div>
//       </div>
//     )

//   }

//   export default TableTotal;