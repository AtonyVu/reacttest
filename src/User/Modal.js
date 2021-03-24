import React, { Component } from "react";



class Modal extends Component {

  constructor(props)
  {
    
    super(props);
    this.data1='';
    this.state={
          id:'',
        name:'',
        username:'',
        email:'',
        phoneNumber:'',
        type:'User',
      
    }
    this.Close = React.createRef();
    
  }
   async UNSAFE_componentWillReceiveProps(nextProps)
  {
     const{sendEditdata,checkHeader}=  nextProps;
    if(checkHeader)
    {
   await  this.setState({id:sendEditdata.id, name:sendEditdata.name,username:sendEditdata.username,email:sendEditdata.email,type:sendEditdata.type,phoneNumber:sendEditdata.phoneNumber
    });
  }
  else
  {
    await  this.setState({id:'',name:"",username:"",email:"",type:'User',phoneNumber:''
    });
  }
  }
 submit = async()=>{

   let state={
    id:this.state.id,
    name:this.state.name,
    username:this.state.username,
    email:this.state.email,
    phoneNumber:this.state.phoneNumber,
    type:this.state.type,
}
  await this.props.recidata(state);

 this.Close.current.click();
      
 }
handOnchage= async(event)=>{
  const {name,value} = event.target;
  await this.setState({
    [name]:value,
  });

  
}
render () {
      
     const{checkHeader}= this.props;
     let header='';
    if(checkHeader)
    {
          header="EDIT User";
    }
    else
    {
      header="ADD User";
    }
    console.log(header);
    return (
      <div
        className="modal fade modall"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{header}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.Close}
                onClick={this.props.clearEdit}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" value={this.state.username} name='username' onChange={this.handOnchage}/>
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.handOnchage}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control"   name='email' value={this.state.email} onChange={this.handOnchage} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control"  name='phoneNumber' value={this.state.phoneNumber} onChange={this.handOnchage}/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control"   name='type' value={this.state.type} onChange={this.handOnchage}>
                    <option>USER</option>   
                    <option>VIP</option>
                  </select>
                </div>
                <button type="reset" className="btn btn-success "  onClick={this.submit}  >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
