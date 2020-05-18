module.exports = `

    input CustomerInput { 
		customer_id: Int,
		store_id: Int,
		first_name: String,
		last_name: String,
		email: String,
		address_id: Int,
		active: Int,
		create_date: String,
		last_update: String,
	}

    type Query { 
		CustomerList(where: String, limit: Int, offset: Int, sort: String): [Customer]
		Customer(id:String!): Customer
		CustomerExists(id: String!): Boolean
		CustomerFindOne(where: String!): Customer
		CustomerCount(where: String!): Int
		CustomerDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Customer]
		CustomerGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [CustomerGroupBy]
		CustomerAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [CustomerAggregate]
		CustomerDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		CustomerCreate(data:CustomerInput): Customer
		CustomerUpdate(id:String,data:CustomerInput): Customer
		CustomerDelete(id:String): Customer
		CustomerCreateBulk(data: [CustomerInput]): [Int]
		CustomerUpdateBulk(data: [CustomerInput]): [Int]
		CustomerDeleteBulk(data: [CustomerInput]): [Int]
	},


    type Customer { 
		customer_id: Int,
		store_id: Int,
		first_name: String,
		last_name: String,
		email: String,
		address_id: Int,
		active: Int,
		create_date: String,
		last_update: String,

		PaymentList: [Payment]
		PaymentCount: Int
		RentalList: [Rental]
		RentalCount: Int

		Address(id:String): Address
		Store(id:String): Store
	}
type CustomerGroupBy { 
		customer_id: Int,
		store_id: Int,
		first_name: String,
		last_name: String,
		email: String,
		address_id: Int,
		active: Int,
		create_date: String,
		last_update: String,
		count: Int
	}
type CustomerAggregate { 
		customer_id: Int,
		store_id: Int,
		first_name: String,
		last_name: String,
		email: String,
		address_id: Int,
		active: Int,
		create_date: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;