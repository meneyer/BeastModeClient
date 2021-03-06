import React, { Children } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import APIURL from "../../helpers/environment";


moment.locale("en-US");
const localizer = momentLocalizer(moment);
// const myEventsList = {} //empty object for now

const CURRENT_DATE = moment().toDate();
const ColoredDateCellWrapper = ({children, value}) =>
    React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            backgroundColor: value < CURRENT_DATE ? 'lightgrey' : '',
        },
    });

class CalendarComp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      cal_events: [],
    }
}
convertDate = (date) => {
  return moment.utc(date).toDate()
}

  

  componentDidMount(props){
    let self = this;
    fetch(`${APIURL}/events/`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      }).then((res) => res.json())
        .then((response) => {
          console.log(response);
          let appointments = response;
          
          for (let i = 0; i < appointments.length; i++) {
            appointments[i].start =    moment.utc(appointments[i].date).add(1, 'd');
            appointments[i].end = moment.utc(appointments[i].date).add(1, 'd');
            appointments[i].allDay = true;
            appointments[i].title = appointments[i].raceName;
            console.log(appointments[i])
          }    
          this.setState({
            cal_events:appointments
          })
    
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render(){
    const { cal_events } = this.state

    return(
      <div id="calendar">
        <div id="calendarInside">
          <Calendar
            localizer={localizer}
            events={cal_events}
            startAccessor="start"
            endAccessor="end"
            allDayAccessor="allDay"
            drilldownView="agenda"
            components={{
              // you have to pass your custom wrapper here
              // so that it actually gets used
              dateCellWrapper: ColoredDateCellWrapper,
          }}
          />
        </div>
      </div>
    )
  }
}

export default CalendarComp;