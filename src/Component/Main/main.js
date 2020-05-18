import React from 'react';
import Part1 from './parts/part1'
import Part2 from './parts/part2'
import Part3 from './parts/part3'
import Footer from './parts/footer'
import Login from './login/login'
import './main.css'
export default class Main extends React.Component{
    render(){
        const {login}=this.props
        return(
            <div style={{marginTop:"90px"}}>
                <Part1/>
                <Part2/>
                <Part3/>
                <Footer/>
            {login?<Login Login={this.props.Login}/>:null}
            </div>
        )
    }
}