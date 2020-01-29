import React, {Component} from 'react'
import Footer from './Footer'
import data from './Data'

export default class Main extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: data,
            index: 0
            // name: { first: '', last: ''},
            // city: '',
            // country: '',
            // employer: '',
            // title: '',
            // favoriteMovies: []
        }
        
// this.nextButton = this.nextButton.bind(this)
    }

nextButton = () => {
    // console.log('nextButton hit')
    if(this.state.index <= 25){
    this.setState({
        index: this.state.index + 1 
    })
} 
} //set this

prevButton = () => {
    if(this.state.index >= 1 ){
    this.setState({
        index: this.state.index - 1
    })
    }

}



render(){
   
console.log(this.state)
const {data, index} = this.state
    return(
        <div>
        <div className='main'>
            <div className='counter'>{data[index].id}/25</div>
            <div><h1>{data[index].name.first} {data[index].name.last}</h1></div>
            <div> <span>From:</span> {data[index].city}, {data[index].country}</div>
            
            <div><span>Job Title:</span> {data[index].title} </div>
            <div><span>Employer:</span> {data[index].employer} </div> 
            <br></br>
            <div><span>Favorite Movies:</span> {data[index].favoriteMovies}</div>
            </div>

            <Footer next={this.nextButton}
                    prev={this.prevButton}/>

    
        </div>
    )

}




}