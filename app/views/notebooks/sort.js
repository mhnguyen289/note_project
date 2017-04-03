var people = [
{
	name: 'Minh', 
	salary: 50000,
},
{
	name: 'Avi', 
	salary: 300000,
},
{
	name: 'Sally', 
	salary: 25000,
},
{
	name: 'Obama',
	salary: 1200000
}
];

function findMinimumIndexOfArrayByKey(array, startIndex, key) {
	var minValue = array[startIndex][key];
	var minIndex = startIndex;

	for (var i = startIndex + 1; i < array.length; i++){
		if (array[i][key] < minValue) {
			minValue = array[i][key]; 
			minIndex = i;
		}
	}

	return minIndex 
}

function swap(array, indexOne, indexTwo) {
	var value = array[indexOne]
	array[indexOne] = array[indexTwo]
	array[indexTwo] = value

	return array;
}

function sortByKey(array, key) {
	var newArray = Object.assign([], array);

	for (var i = 0; i < newArray.length; i++) { 
		var minIndex = findMinimumIndexOfArrayByKey(newArray, i, key)
		swap(newArray, i, minIndex) 
	}

	return newArray;
}


console.log(sortByKey(people, 'salary'));
console.log(people)

