module.exports = `

    input RentalInput { 
		rental_id: Int,
		rental_date: String,
		inventory_id: Int,
		customer_id: Int,
		return_date: String,
		staff_id: Int,
		last_update: String,
	}

    type Query { 
		RentalList(where: String, limit: Int, offset: Int, sort: String): [Rental]
		Rental(id:String!): Rental
		RentalExists(id: String!): Boolean
		RentalFindOne(where: String!): Rental
		RentalCount(where: String!): Int
		RentalDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Rental]
		RentalGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [RentalGroupBy]
		RentalAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [RentalAggregate]
		RentalDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		RentalCreate(data:RentalInput): Rental
		RentalUpdate(id:String,data:RentalInput): Rental
		RentalDelete(id:String): Rental
		RentalCreateBulk(data: [RentalInput]): [Int]
		RentalUpdateBulk(data: [RentalInput]): [Int]
		RentalDeleteBulk(data: [RentalInput]): [Int]
	},


    type Rental { 
		rental_id: Int,
		rental_date: String,
		inventory_id: Int,
		customer_id: Int,
		return_date: String,
		staff_id: Int,
		last_update: String,

		PaymentList: [Payment]
		PaymentCount: Int

		Staff(id:String): Staff
		Inventory(id:String): Inventory
		Customer(id:String): Customer
	}
type RentalGroupBy { 
		rental_id: Int,
		rental_date: String,
		inventory_id: Int,
		customer_id: Int,
		return_date: String,
		staff_id: Int,
		last_update: String,
		count: Int
	}
type RentalAggregate { 
		rental_id: Int,
		rental_date: String,
		inventory_id: Int,
		customer_id: Int,
		return_date: String,
		staff_id: Int,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;