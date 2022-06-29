const items = buildItems()
items.sort(cmpDencity)
items.reverse()
console.log("Сортировка по удельной цене даёт:")
testGreedy(items, 20, cmpDencity)
function cmpDencity(itemA, itemB)
{
	r =   (itemA.value + itemB.value)-(1/itemA.maxWeight + 1/itemB.maxWeight)
	return r
}
function testGreedy(items, maxWeight, cmpFunction)
{
	const {totalValue, taken} = greedy(items, maxWeight, cmpFunction)
	console.log("Полная цена = ", totalValue.toString())
	console.log("Взяли:", taken.toString())
}

function greedy(items, maxWeight, cmpFunction)
{
items.sort(cmpDencity)
items.reverse()	
	let totalWeight = 0
	let totalValue = 0
	const taken = []
	for (let i = 0; i<items.length; i++)
	{
		if( totalWeight + items[i].weight <= maxWeight)
		{
			taken.push(items[i].name)
			totalWeight += items[i].weight
			totalValue += items[i].value
		}
	}
	return { "totalValue": totalValue, "taken": taken}
}


function buildItems()
{
	const names = [ "ваза","часы",  "книга","радио"]
	const values = [ 50,175, 10,  20, ]
	const weights = [2, 4, 1, 10, ]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push({
			name:names[i], 
			value: values[i], 
			weight: weights[i]
		})
	} 
	return items
}

