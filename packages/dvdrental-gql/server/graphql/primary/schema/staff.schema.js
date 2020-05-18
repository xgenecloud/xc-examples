module.exports = `

    input StaffInput { 
		staff_id: Int,
		first_name: String,
		last_name: String,
		address_id: Int,
		picture: String,
		email: String,
		store_id: Int,
		active: Int,
		username: String,
		password: String,
		last_update: String,
	}

    type Query { 
		StaffList(where: String, limit: Int, offset: Int, sort: String): [Staff]
		Staff(id:String!): Staff
		StaffExists(id: String!): Boolean
		StaffFindOne(where: String!): Staff
		StaffCount(where: String!): Int
		StaffDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Staff]
		StaffGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [StaffGroupBy]
		StaffAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [StaffAggregate]
		StaffDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		StaffCreate(data:StaffInput): Staff
		StaffUpdate(id:String,data:StaffInput): Staff
		StaffDelete(id:String): Staff
		StaffCreateBulk(data: [StaffInput]): [Int]
		StaffUpdateBulk(data: [StaffInput]): [Int]
		StaffDeleteBulk(data: [StaffInput]): [Int]
	},


    type Staff { 
		staff_id: Int,
		first_name: String,
		last_name: String,
		address_id: Int,
		picture: String,
		email: String,
		store_id: Int,
		active: Int,
		username: String,
		password: String,
		last_update: String,

		PaymentList: [Payment]
		PaymentCount: Int
		RentalList: [Rental]
		RentalCount: Int

		Store(id:String): Store
		Address(id:String): Address
	}
type StaffGroupBy { 
		staff_id: Int,
		first_name: String,
		last_name: String,
		address_id: Int,
		picture: String,
		email: String,
		store_id: Int,
		active: Int,
		username: String,
		password: String,
		last_update: String,
		count: Int
	}
type StaffAggregate { 
		staff_id: Int,
		first_name: String,
		last_name: String,
		address_id: Int,
		picture: String,
		email: String,
		store_id: Int,
		active: Int,
		username: String,
		password: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;