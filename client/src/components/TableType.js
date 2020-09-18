// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Select from '@material-ui/core/Select';

// function TableType() {
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
//     const [tableType, setTableType] = React.useState('');

//     const handleChange = (event) => {
//       setTableType(event.target.value);
//       console.log(event.target.value)
//     };
    

//     return (
//       <div>
//         <div>
//           <FormControl className={classes.formControl}>
//             <InputLabel id="demo-simple-select-label">Type</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={tableType}
//               onChange={handleChange}
//             >
//               <MenuItem value={1}>Bar</MenuItem>
//               <MenuItem value={2}>Booth</MenuItem>
//               <MenuItem value={3}>High-Top</MenuItem>
//               <MenuItem value={4}>Table</MenuItem>
//             </Select>
//             <FormHelperText>Type of Table</FormHelperText>
//           </FormControl>
//         </div>
//       </div>
//     )

//   }

//   export default TableType;