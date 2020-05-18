module.exports = `

    input AddressInput { 
		address_id: Int,
		address: String,
		address2: String,
		district: String,
		city_id: Int,
		postal_code: String,
		phone: String,
		location: String,
		last_update: String,
	}

    type Query { 
		AddressList(where: String, limit: Int, offset: Int, sort: String): [Address]
		Address(id:String!): Address
		AddressExists(id: String!): Boolean
		AddressFindOne(where: String!): Address
		AddressCount(where: String!): Int
		AddressDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Address]
		AddressGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [AddressGroupBy]
		AddressAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [AddressAggregate]
		AddressDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		AddressCreate(data:AddressInput): Address
		AddressUpdate(id:String,data:AddressInput): Address
		AddressDelete(id:String): Address
		AddressCreateBulk(data: [AddressInput]): [Int]
		AddressUpdateBulk(data: [AddressInput]): [Int]
		AddressDeleteBulk(data: [AddressInput]): [Int]
	},


    type Address { 
		address_id: Int,
		address: String,
		address2: String,
		district: String,
		city_id: Int,
		postal_code: String,
		phone: String,
		location: String,
		last_update: String,

		CustomerList: [Customer]
		CustomerCount: Int
		StaffList: [Staff]
		StaffCount: Int
		StoreList: [Store]
		StoreCount: Int

		City(id:String): City
	}
type AddressGroupBy { 
		address_id: Int,
		address: String,
		address2: String,
		district: String,
		city_id: Int,
		postal_code: String,
		phone: String,
		location: String,
		last_update: String,
		count: Int
	}
type AddressAggregate { 
		address_id: Int,
		address: String,
		address2: String,
		district: String,
		city_id: Int,
		postal_code: String,
		phone: String,
		location: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;