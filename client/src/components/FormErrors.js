import React from 'react';

export const FormErrors = ({formErrors}) => {
	let key = 0;
	return (
		<div>
			{Object.keys(formErrors).map((formErrorField) => {
				return (
					formErrors[formErrorField].map((error) => {
						return (
							<p key={key++}>{formErrorField} {error}</p>
						)
					})
				)
			})}
		</div>
	)
}
