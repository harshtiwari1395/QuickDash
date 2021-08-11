import React from 'react';
import { slideDown, slideUp } from './anim';
import './style.css';
import { MdArrowDropDownCircle } from "react-icons/md";
import AccordianTableTry from './accordianTable';
import TabulatorTable from '../../reusables/reactTabulator';

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
      <tr key="main" onClick={this.toggleExpander}>
        {/* <td><input className="uk-checkbox" type="checkbox" /></td> */}
        <td className="uk-table-shrink"><MdArrowDropDownCircle/></td>
        <td className="uk-table-shrink">{user.siteid}</td>
        <td className="uk-table-shrink">{user.cellid}</td>
        <td className="uk-table-shrink">{user.band}</td>       
        <td className="uk-table-shrink">{user.poorExp}</td>         
        <td className="uk-table-shrink">{user.cellAction}</td>       
        <td className="uk-table-shrink">{user.plannedDate}</td>      
        <td className="uk-table-shrink">{user.woNumber}</td>        
        <td className="uk-table-shrink">{user.engineerName}</td>    
            </tr>,
      this.state.expanded && (



<tr className="expandable" key="tr-expander">
          <td className="uk-background-muted" colSpan={6}>
            <div ref="expanderBody" className="inner uk-grid">
              <div className="uk-width-1-4 uk-text-center">
              <AccordianTableTry/>
              {/* <TabulatorTable/> */}
              </div>

            </div>
          </td>
        </tr>
       
      )
    ];
  }
}

const dummyData=[
    {siteid: "S-1", cellid:"C-1", band: "850", poorExp: "20", cellAction: "RF optimiz", plannedDate: "20/7/21", woNumber: "WO-1", engineerName: "X"},
    {siteid: "S-1", cellid:"C-1", band: "850", poorExp: "20", cellAction: "RF optimiz", plannedDate: "20/7/21", woNumber: "WO-1", engineerName: "X"},
    {siteid: "S-1", cellid:"C-1", band: "850", poorExp: "20", cellAction: "RF optimiz", plannedDate: "20/7/21", woNumber: "WO-1", engineerName: "X"}
];

class AccordianTable extends React.Component {

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
        <div className="table-container">
          <div className="uk-overflow-auto">
            <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
              <thead>
                <tr>
                  
                  <th className="uk-table-shrink" />
                  <th className="uk-table-shrink">Site id</th>
                  <th>cell Id</th>
                  <th>Band</th>
                  <th>Poor Experience</th>
                  <th>Cell Action</th>
                  <th>Planned Date</th>
                  <th>WO Number</th>
                  <th>Name of Engineer</th>
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ? <tr><td colSpan={6} className="uk-text-center"><em className="uk-text-muted">Loading...</em></td></tr>
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


export default AccordianTable