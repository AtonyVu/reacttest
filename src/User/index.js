import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from './data.json'
export default class Index extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      dataUser: data,
      editdata:{},
      status:false,
      searchFi:'',
      test:[1,2,3,4,5,6,7],
      check:true,
    }
    

  }
  deleteItem=(deleteItem)=>{
    let vitri = this.findIndex(deleteItem.username);
    let dataDetele =[...this.state.dataUser];
    dataDetele.splice(vitri,1);
    this.setState({dataUser:[...dataDetele]})
  }

  addUser = ()=>{
     this.setState({editdata:'',check:false});
     
  }
  findIndex =(id)=>{
       return(this.state.dataUser.findIndex((item)=>{
            return item.id === id
       }))
  }
  recidata =async(data)=>{
    
   
     if(this.state.check)
     {
      let vitri =   this.findIndex(data.id);
      let data1 = [...this.state.dataUser]
     data1[vitri].name=data.name;
      data1[vitri].username=data.username;
      data1[vitri].email=data.email;
      data1[vitri].phoneNumber=data.phoneNumber;
    data1[vitri].type=data.type;
        this.setState({dataUser:data1});
     }
     else{
      let data1 = [...this.state.dataUser,data]
      this.setState({dataUser: [...data1]});
     }
     
    
    
  }
  onchangeSearch =(event)=>{
       this.setState({searchFi:event.target.value});
       
  }
  editUser= async (dataedit,check)=>{
  await this.setState({editdata:dataedit,check:check});
       console.log(this.state.check);
  }

  render() {

    const serfi= this.state.dataUser.filter((item)=>{ 
      return item.name.toLowerCase().includes(this.state.searchFi.toLowerCase()) })
      console.log("dayne ",serfi);
    return (
    
      <div className="container d-block">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search onchangeSearch={this.onchangeSearch}/>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick= {this.addUser}
          >
            Add User
          </button>
        </div>
        <Users dataUser={serfi} editUser={this.editUser} deleteItem={(deleteUser)=>{ this.deleteItem(deleteUser)}}/>
        <Modal sendEditdata={this.state.editdata}  recidata={this.recidata} checkHeader={this.state.check}/>
      </div>
    );
  }
}

