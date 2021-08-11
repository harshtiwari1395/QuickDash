// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(cnum, sname, jsid, jpid, mjpid, celllat, cellng, custLat, custLng, distfromCell, GH7, city) {
//   return { cnum, sname, jsid, jpid, mjpid, celllat, cellng, custLat, custLng, distfromCell, GH7, city};
// }

// const rows = [
//   createData(),
//   createData("cn-1","sec-1","jc-1","JP-1","MJP-1","71.56","72.5","71","71","10","JH-4","Mumbai"),

// ];

// export default function AccordiamTableTry() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//           {/* cnum, sname, jsid, jpid, mjpid, celllat, cellng, custLat, custLng, distfromCell, GH7, city}; */}
//             <TableCell align="center">cnum</TableCell>
//             <TableCell align="center">sname</TableCell>
//             <TableCell align="center">jsid</TableCell>
//             <TableCell align="center">jpid</TableCell>
//             <TableCell align="center">mjpid</TableCell>
//             <TableCell align="center">celllat</TableCell>
//             <TableCell align="center">cellng</TableCell>
//             <TableCell align="center">custLat</TableCell>
//             <TableCell align="center">custLng</TableCell>
//             <TableCell align="center">distfromCell</TableCell>
//             <TableCell align="center">GH7</TableCell>
//             <TableCell align="center">city</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell className="uk-table-shrink" component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.cnum}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.sname}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.jsid}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.jpid}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.mjpid}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.celllat}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.cellng}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.custLat}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.custLng}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.distfromCell}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.GH7}</TableCell>
//               <TableCell className="uk-table-shrink" align="right">{row.city}</TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React from 'react';
import { slideDown, slideUp } from './anim';
import './style.css';
import { MdArrowDropDownCircle } from "react-icons/md";

function formatDate(str) {
  return str.substr(0, 10);
}

function capitalize(str) {
  return str.split(' ').map(s => {
    return s.charAt(0).toUpperCase() + s.substr(1);
  }).join(' ');
}


class UserTableRow extends React.Component {
  state = { expanded: false }

  toggleExpander = (e) => {
    if (e.target.type === 'checkbox') return;

    if (!this.state.expanded) {
      this.setState(
        { expanded: true },
        () => {
          if (this.refs.expanderBody) {
            slideDown(this.refs.expanderBody);
          }
        }
      );
    } else {
      slideUp(this.refs.expanderBody, {
        onComplete: () => { this.setState({ expanded: false }); }
      });
    }
  }

  render() {
    const { user } = this.props;
    return [
      <tr key="main" >
        <td className="uk-table-shrink">{user.cnum}</td>
        <td className="uk-table-shrink">{user.sname}</td>
        <td className="uk-table-shrink">{user.jsid}</td>       
        <td className="uk-table-shrink">{user.jpid}</td>         
        <td className="uk-table-shrink">{user.mjpid}</td>       
        <td className="uk-table-shrink">{user.celllat}</td>      
        <td className="uk-table-shrink">{user.cellng}</td>        
        <td className="uk-table-shrink">{user.custLat}</td>    
        <td className="uk-table-shrink">{user.custLng}</td>       
        <td className="uk-table-shrink">{user.distfromCell}</td>      
        <td className="uk-table-shrink">{user.GH7}</td>        
        <td className="uk-table-shrink">{user.city}</td>    
            </tr>
    ];
  }
}

const dummyData=[
                           { cnum:"cn-1" , sname:"sec-1", jsid: "jc-1",
                            jpid:"JP-1", mjpid: "MJP-1", celllat: "71.56", cellng:"72.5", custLat:"71", custLng:"71", distfromCell: "10", GH7: "JH-4", city: "Mumbai"}

   // ,,"jc-1","JP-1","MJP-1","71.56","72.5","71","71","10","JH-4","Mumbai"
];

class AccordianTableTry extends React.Component {

  state = { users: dummyData }

//   componentDidMount() {
//     fetch('https://randomuser.me/api/1.1/?results=15')
//       .then(response => response.json())
//       .then(data => { this.setState({users: data.results}); console.log(data.results) });
//   }

  render() {
    const { users } = this.state;
    const isLoading = users === null;
    return (
      <main>
        <div >
          <div 
        //   className="uk-overflow-auto"
          >
            <table style={{width: "100%"}}>
              <thead>
                <tr>

                  <th >cnum</th>
                  <th>sname</th>
                  <th>jsid</th>
                  <th>jpid</th>
                  <th>mjpid</th>
                  <th>celllat</th>
                  <th>cellng</th>
                  <th>custLat</th>
                  <th>custLng</th>
                  <th>distfromCell</th>
                  <th>GH7</th>
                  <th>city</th>
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ? <tr><td colSpan={8} ><em className="uk-text-muted">Loading...</em></td></tr>
                  : dummyData.map((user, index) =>
                      <UserTableRow key={index} index={index + 1} user={user}/>
                    )
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}


export default AccordianTableTry