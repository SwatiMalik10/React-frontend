import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {},
      departmemt: {},
      organization: {},
    };
  }
  componentDidMount() {
    EmployeeService.getEmployee().then((response) => {
      this.setState({ employee: response.data.employee });
      this.setState({ departmemt: response.data.departmemt });
      this.setState({ organization: response.data.organization });
    });
  }

  render() {
    return (
      <div>
        <br /> <br />
        <div className="container col-md-6 card offset-md-3">
          <h3 className="text-center card-header"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <p>
                <strong>Employee First Name: </strong>
                {this.state.employee.firstName}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
