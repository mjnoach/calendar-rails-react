import moment from 'moment';

export const validations = {
	checkMinLength: function(text, minLength) {
		return (text.length >= minLength)
			? ''
			: `length should be at least ${minLength} characters long`;
	},

	timeShouldBeInTheFuture: function(time) {
		return moment(time).isValid() && moment(time).isAfter()
			? ''
			: `can't be in the past`;
	}
}