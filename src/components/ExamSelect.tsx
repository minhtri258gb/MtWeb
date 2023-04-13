import { Select } from 'antd'

export const ExamSelect = () => {

  return (
    <div>
		<Select
		mode='multiple'
		placeholder="Select fruit"
		maxTagCount={2}
		options={[
			{ value: 'jack', label: 'Jack' },
			{ value: 'lucy', label: 'Lucy' },
			{ value: 'Yiminghe', label: 'yiminghe' },
			{ value: 'disabled', label: 'Disabled', disabled: true },
		]}
		>
		</Select>
    </div>
  )
}