var name = "ABC";
var className = "XYZ";
var heading = "Division heading";
var state = "Virginia";
var name1 = "Ulysses S. Grant";
var name2 = "Robert E. Lee";
var street = "Appomattox Court House";
var warType = "Civil War";
var facultyType = "English faculty";

$(document.body).append(
	createElement('div', {class: "someclass"},
		[
			createElement('h3', {class: "heading"}, heading),
			createElement('span', {class: "inner-span"},
				[
					'When ',
					name1,
					' and ',
					name2,
					' met in the parlor of a modest house at ',
					street,
					', ',
					state,
					',...a great chapter in American life came to a close.'
				]
			),
			createElement('span', {class: "paragraph"},
				[
					'These men were bringing the ',
					warType,
					' to its virtual finish.'
				]
			),
			createElement('span', {class: "paragraph"},
				[
					'Refer to Capital\'s Guide for Writing Research Papers and, especially, the ,
					facultyType,
					'\'s Suggestions for Writing Papers for Literature Courses for further help in handling quotations.'
				]
			)
		]
	)
);