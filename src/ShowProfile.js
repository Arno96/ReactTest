import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as  Router,Route} from 'react-router-dom';
import axios from 'axios';



class ShowProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fullname:'',
        email:'',
        password:'',
        
      };
       
    }
    getProfile(){
        axios.post('/getProfile', {
        })
        .then(function (response) {
          if(response){
            this.setState({fullname:response.data.fullname});
            this.setState({email:response.data.email});
            this.setState({password:response.data.password});  
          }
        })
        .catch(function (error) {
          console.log('error is ',error);
        });

    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setState({[nam]: val});
      }
    componentDidMount(){
    //   document.getElementById('addHyperLink').className = "";
    //   document.getElementById('homeHyperlink').className = "";
    //   document.getElementById('profileHyperlink').className = "active";
      this.getProfile();
    }
    render() {
        return (
          <div className="col-md-5">
            <div className="form-area">  
                <form>
                  <br styles="clear:both" />
                  <div className="form-group">
                    <input value={this.state.fullname} type="text" name = "fullname" onChange={this.myChangeHandler} className="form-control" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input value={this.state.email} type="text" name = "email" onChange={this.myChangeHandler} className="form-control" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input value={this.state.password} type="password" name = "pw" onChange={this.myChangeHandler} className="form-control" placeholder="Password" required />
                  </div>
                  
                  <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
                </form>
            </div>
          </div>
        )
      }
    }


    // ReactDOM.render(
    //     <Router >
    //         {/* <Route component={ShowPost} path="/"></Route>
    //         <Route component={AddPost} path="/addPost(/:id)"></Route> */}
    //         <Route component={ShowProfile} path="/showProfile"></Route>
    //     </Router>,
    // document.getElementById('profile'));


    export default ShowProfile;