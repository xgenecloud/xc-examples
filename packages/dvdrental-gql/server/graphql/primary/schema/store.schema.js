module.exports = `

    input StoreInput { 
		store_id: Int,
		manager_staff_id: Int,
		address_id: Int,
		last_update: String,
	}

    type Query { 
		StoreList(where: String, limit: Int, offset: Int, sort: String): [Store]
		Store(id:String!): Store
		StoreExists(id: String!): Boolean
		StoreFindOne(where: String!): Store
		StoreCount(where: String!): Int
		StoreDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Store]
		StoreGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [StoreGroupBy]
		StoreAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [StoreAggregate]
		StoreDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		StoreCreate(data:StoreInput): Store
		StoreUpdate(id:String,data:StoreInput): Store
		StoreDelete(id:String): Store
		StoreCreateBulk(data: [StoreInput]): [Int]
		StoreUpdateBulk(data: [StoreInput]): [Int]
		StoreDeleteBulk(data: [StoreInput]): [Int]
	},


    type Store { 
		store_id: Int,
		manager_staff_id: Int,
		address_id: Int,
		last_update: String,

		CustomerList: [Customer]
		CustomerCount: Int
		InventoryList: [Inventory]
		InventoryCount: Int
		StaffList: [Staff]
		StaffCount: Int

		Address(id:String): Address
	}
type StoreGroupBy { 
		store_id: Int,
		manager_staff_id: Int,
		address_id: Int,
		last_update: String,
		count: Int
	}
type StoreAggregate { 
		store_id: Int,
		manager_staff_id: Int,
		address_id: Int,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;