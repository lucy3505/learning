import React from 'react'
import PropTypes from 'prop-types'
import { padLeft,range } from '../utility'

class MonthPicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:false,
      selectedYear:this.props.year
    }
  }
  
  componentDidMount=(e)=>{
  
    window.addEventListener('click',this.close)
    console.log(window)
  }

close=()=>{
  this.setState({
    isOpen:false
  })
}

 toggleDropdown = (e) =>{
   e.preventDefault()
   this.setState({
     isOpen:!this.state.isOpen,
     
   })
 }

 selectYear = (e,yearNumber)=>{
   e.preventDefault()
   this.setState({
     selectedYear:yearNumber
   })
 }

 selectMonth = (e,monthNumber)=>{
  e.preventDefault()
  this.setState({
    monthNumber:monthNumber,
    isOpen:false,
  })
  this.props.onChange(this.state.selectedYear, monthNumber)
}


  render() {
    const { year, month } = this.props
    const { isOpen, selectedYear } = this.state
    const monthRange = range(12,1)
    const yearRange = range(9, -4).map(number => number + year)
    console.log(yearRange)
    return (
      <div className="dropdown month-picker-component"
        ref={(e)=>{e&&e.addEventListener("click",()=>{
          window.removeEventListener('click',this.close)
          })
        }
        }
      >
        <h4>选择月份</h4>
        <button className="btn btn-lg btn-secondary dropdown-toggle" onClick={this.toggleDropdown}>
          {`${year}年 ${padLeft(month)}月`}
          
        </button>
        { isOpen &&
          <div className="dropdown-menu" style={{display:'block'}}>
            <div className="row">
              <div className="col border-right">
                { yearRange.map((yearNumber,index) =>{
                  return(
                  <a key={index} 
                  className={yearNumber===selectedYear?"dropdown-item active":'dropdown-item'}
                    href="#"
                    onClick={(e)=>{this.selectYear(e,yearNumber)}}
                  >
                    {yearNumber} 年
                  </a>)
                })}
              </div>
              <div className="col">
                { monthRange.map((monthNumber,index)=>{
                  return(
                  <a key={index} 
                  href="#"
                  className={monthNumber===month?"dropdown-item active":'dropdown-item'}
                  onClick={(e)=>this.selectMonth(e,monthNumber)}
                  >
                  {padLeft(monthNumber)} 月
                </a>)
                })

                }
                
              </div>
            </div>

          </div>

        }
      </div>
    )
  }

}
MonthPicker.propTypes={
  year:PropTypes.number.isRequired,
  month:PropTypes.number.isRequired,
  onChange:PropTypes.func.isRequired
}

export default MonthPicker