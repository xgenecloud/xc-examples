module.exports = `

    input CityInput { 
		city_id: Int,
		city: String,
		country_id: Int,
		last_update: String,
	}

    type Query { 
		CityList(where: String, limit: Int, offset: Int, sort: String): [City]
		City(id:String!): City
		CityExists(id: String!): Boolean
		CityFindOne(where: String!): City
		CityCount(where: String!): Int
		CityDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [City]
		CityGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [CityGroupBy]
		CityAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [CityAggregate]
		CityDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		CityCreate(data:CityInput): City
		CityUpdate(id:String,data:CityInput): City
		CityDelete(id:String): City
		CityCreateBulk(data: [CityInput]): [Int]
		CityUpdateBulk(data: [CityInput]): [Int]
		CityDeleteBulk(data: [CityInput]): [Int]
	},


    type City { 
		city_id: Int,
		city: String,
		country_id: Int,
		last_update: String,

		AddressList: [Address]
		AddressCount: Int

		Country(id:String): Country
	}
type CityGroupBy { 
		city_id: Int,
		city: String,
		country_id: Int,
		last_update: String,
		count: Int
	}
type CityAggregate { 
		city_id: Int,
		city: String,
		country_id: Int,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;