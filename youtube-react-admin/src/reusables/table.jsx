import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name,day1, day2, day3,day4, day5, day6, day7) {
  return { name, day1, day2, day3,day4, day5, day6, day7};
}

const rows = [
  createData('Active Duration', 159, 6.0, 24, 4.0, 42,234,234),
  createData('Impacted Duration', 159, 6.0, 24, 4.0, 42,234,234),
  createData('Total cells', 159, 6.0, 24, 4.0, 42,234,234),
  createData('Impacted cells', 159, 6.0, 24, 4.0, 42,234,234),
  createData('data Consumption', 159, 6.0, 24, 4.0, 42,234,234),
  createData('Total Voice Calls', 159, 6.0, 24, 4.0, 42,234,234),
  createData('No. of Voice Calls', 159, 6.0, 24, 4.0, 42,234,234),

];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="right">11th june</TableCell>
            <TableCell align="right">10th june</TableCell>
            <TableCell align="right">9th june</TableCell>
            <TableCell align="right">8th june</TableCell>
            <TableCell align="right">7th june</TableCell>
            <TableCell align="right">6th june</TableCell>
            <TableCell align="right">5th june</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.day1}</TableCell>
              <TableCell align="right">{row.day2}</TableCell>
              <TableCell align="right">{row.day3}</TableCell>
              <TableCell align="right">{row.day4}</TableCell>
              <TableCell align="right">{row.day5}</TableCell>
              <TableCell align="right">{row.day6}</TableCell>
              <TableCell align="right">{row.day7}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
