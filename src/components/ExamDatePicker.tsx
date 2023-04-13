import { DatePicker, TimePicker } from 'antd'

export const ExamDatePicker = () => {

  return (
    <div>
      <DatePicker />
      <DatePicker picker='month'/>
      <DatePicker picker='year'/>
      <DatePicker picker='quarter'/>
      <DatePicker.RangePicker />
      <DatePicker.RangePicker picker='month'/>
      <TimePicker />
      <TimePicker disabled/>
    </div>
  )
}