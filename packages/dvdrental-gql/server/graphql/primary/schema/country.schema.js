module.exports = `

    input CountryInput { 
		country_id: Int,
		country: String,
		last_update: String,
	}

    type Query { 
		CountryList(where: String, limit: Int, offset: Int, sort: String): [Country]
		Country(id:String!): Country
		CountryExists(id: String!): Boolean
		CountryFindOne(where: String!): Country
		CountryCount(where: String!): Int
		CountryDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Country]
		CountryGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [CountryGroupBy]
		CountryAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [CountryAggregate]
		CountryDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		CountryCreate(data:CountryInput): Country
		CountryUpdate(id:String,data:CountryInput): Country
		CountryDelete(id:String): Country
		CountryCreateBulk(data: [CountryInput]): [Int]
		CountryUpdateBulk(data: [CountryInput]): [Int]
		CountryDeleteBulk(data: [CountryInput]): [Int]
	},


    type Country { 
		country_id: Int,
		country: String,
		last_update: String,

		CityList: [City]
		CityCount: Int
	}
type CountryGroupBy { 
		country_id: Int,
		country: String,
		last_update: String,
		count: Int
	}
type CountryAggregate { 
		country_id: Int,
		country: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;