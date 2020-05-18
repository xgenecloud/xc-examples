module.exports = `

    input InventoryInput { 
		inventory_id: Int,
		film_id: Int,
		store_id: Int,
		last_update: String,
	}

    type Query { 
		InventoryList(where: String, limit: Int, offset: Int, sort: String): [Inventory]
		Inventory(id:String!): Inventory
		InventoryExists(id: String!): Boolean
		InventoryFindOne(where: String!): Inventory
		InventoryCount(where: String!): Int
		InventoryDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Inventory]
		InventoryGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [InventoryGroupBy]
		InventoryAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [InventoryAggregate]
		InventoryDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		InventoryCreate(data:InventoryInput): Inventory
		InventoryUpdate(id:String,data:InventoryInput): Inventory
		InventoryDelete(id:String): Inventory
		InventoryCreateBulk(data: [InventoryInput]): [Int]
		InventoryUpdateBulk(data: [InventoryInput]): [Int]
		InventoryDeleteBulk(data: [InventoryInput]): [Int]
	},


    type Inventory { 
		inventory_id: Int,
		film_id: Int,
		store_id: Int,
		last_update: String,

		RentalList: [Rental]
		RentalCount: Int

		Store(id:String): Store
		Film(id:String): Film
	}
type InventoryGroupBy { 
		inventory_id: Int,
		film_id: Int,
		store_id: Int,
		last_update: String,
		count: Int
	}
type InventoryAggregate { 
		inventory_id: Int,
		film_id: Int,
		store_id: Int,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;