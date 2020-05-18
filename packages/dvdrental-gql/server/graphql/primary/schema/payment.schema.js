module.exports = `

    input PaymentInput { 
		payment_id: Int,
		customer_id: Int,
		staff_id: Int,
		rental_id: Int,
		amount: Float,
		payment_date: String,
		last_update: String,
	}

    type Query { 
		PaymentList(where: String, limit: Int, offset: Int, sort: String): [Payment]
		Payment(id:String!): Payment
		PaymentExists(id: String!): Boolean
		PaymentFindOne(where: String!): Payment
		PaymentCount(where: String!): Int
		PaymentDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Payment]
		PaymentGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [PaymentGroupBy]
		PaymentAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [PaymentAggregate]
		PaymentDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		PaymentCreate(data:PaymentInput): Payment
		PaymentUpdate(id:String,data:PaymentInput): Payment
		PaymentDelete(id:String): Payment
		PaymentCreateBulk(data: [PaymentInput]): [Int]
		PaymentUpdateBulk(data: [PaymentInput]): [Int]
		PaymentDeleteBulk(data: [PaymentInput]): [Int]
	},


    type Payment { 
		payment_id: Int,
		customer_id: Int,
		staff_id: Int,
		rental_id: Int,
		amount: Float,
		payment_date: String,
		last_update: String,

		Rental(id:String): Rental
		Customer(id:String): Customer
		Staff(id:String): Staff
	}
type PaymentGroupBy { 
		payment_id: Int,
		customer_id: Int,
		staff_id: Int,
		rental_id: Int,
		amount: Float,
		payment_date: String,
		last_update: String,
		count: Int
	}
type PaymentAggregate { 
		payment_id: Int,
		customer_id: Int,
		staff_id: Int,
		rental_id: Int,
		amount: Float,
		payment_date: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;