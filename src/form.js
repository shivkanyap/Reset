// import React from "react";
// import axios from "axios";

// class TicketForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       department: "",
//       priority: "",
//       message: "",
//       depOption: [
//         { id: 1, name: "Technical" },
//         { id: 2, name: "Manager" },
//         { id: 3, name: "Hr" },
//         { id: 4, name: "Hardwaredpt" },
//         { id: 5, name: "Helpdesk" },
//       ],
//     };
//   }
//   handleNameChange = (e) => {
//     const name = e.target.value;
//     this.setState(() => ({ name }));
//   };
//   handleMessageChange = (e) => {
//     const message = e.target.value;
//     this.setState(() => ({ message }));
//   };

//   handleDeptChange = (e) => {
//     const department = e.target.value;
//     this.setState(() => ({ department }));
//   };
//   handlePriorityChange = (e) => {
//     const priority = e.target.value;
//     this.setState(() => ({ priority }));
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       name: this.state.name,
//       department: this.state.department,
//       priority: this.state.priority,
//       message: this.state.message,
//     };
//     console.log(formData, "formdata");

//     axios
//       .post(
//         "http://dct-api-data.herokuapp.com/tickets?api_key=ae10e2fa0a200eb8",
//         formData
//       )
//       .then((response) => {
//         console.log(response.data, "res");
//         if (response.data.hasOwnProperty("errors")) {
//           this.setState(() => ({ errors: response.data.errors }));
//         } else {
//           this.props.handleTicketForm(response.data);
//           this.setState(() => ({
//             notice: "succesfully submitted the form",
//           }));
//           setTimeout(() => {
//             this.setState(() => ({
//               notice: "",
//             }));
//           }, 2000);

//           this.resetForm();
//         }
//       });
//   };
//   handleReset = (e) => {
//     e.preventDefault();
//     this.resetForm();
//   };
//   resetForm() {
//     this.setState(() => ({
//       name: "",
//       department: "",
//       priority: "",
//       message: "",
//     }));
//   }
//   render() {
//     return (

// <div class="mb-3 row">
//       <form onSubmit={this.handleSubmit}>
//           <div>

//           </div>
//         <div className="form-control form-control-lg">
//           <label>
//             Name:
//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.handleNameChange}
//             />
//           </label>
//           <br />
//         </div>

//         <div className="form-control form-control-lg">
//           <label>
//             Email
//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.handleNameChange}
//             />
//           </label>
//           <br />
//         </div>
//         <div className="form-control form-control-lg">
//           <label>
//             Phone Number
//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.handleNameChange}
//             />
//           </label>
//           <br />
//         </div>
//       </form>
//       </div>
//     );
//   }
// }
// export default TicketForm;

import React from 'react'
import styles from './styles.css'
const TicketForm=()=>{
  return(
    <div class="container"style={{marginTop:"5rem"}}>
      {/* <div class="row content"> */}
        <div class="col-md-6"  > 
          <h3 class="sigin-text mb-3"> Reset Password</h3>
          <form>
            
            <div class="form-group">
              <label for="password">Old Password</label>
              <input type="password" name="password" class="form-control" aria-describedby="basic-addon1"></input>


              </div>
              <div class="form-group">
              <label for="confirm">  New Password</label>
              <input type="confirm" name="confirm" class="form-control"></input>


              </div>

              <div class="form-group">
              <label for="confirm">Confirm Password</label>
              <input type="confirm" name="confirm" class="form-control"></input>


              </div>
              <button class ="btn btn-class">Change Password</button>
          </form>
        </div>
        <div class="col-md-6" > 

        </div>

      {/* </div> */}

    </div>
  )
}
export default TicketForm