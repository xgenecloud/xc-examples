module.exports = `

    input CategoryInput { 
		category_id: Int,
		name: String,
		last_update: String,
	}

    type Query { 
		CategoryList(where: String, limit: Int, offset: Int, sort: String): [Category]
		Category(id:String!): Category
		CategoryExists(id: String!): Boolean
		CategoryFindOne(where: String!): Category
		CategoryCount(where: String!): Int
		CategoryDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Category]
		CategoryGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [CategoryGroupBy]
		CategoryAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [CategoryAggregate]
		CategoryDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		CategoryCreate(data:CategoryInput): Category
		CategoryUpdate(id:String,data:CategoryInput): Category
		CategoryDelete(id:String): Category
		CategoryCreateBulk(data: [CategoryInput]): [Int]
		CategoryUpdateBulk(data: [CategoryInput]): [Int]
		CategoryDeleteBulk(data: [CategoryInput]): [Int]
	},


    type Category { 
		category_id: Int,
		name: String,
		last_update: String,

		FilmCategoryList: [FilmCategory]
		FilmCategoryCount: Int
	}
type CategoryGroupBy { 
		category_id: Int,
		name: String,
		last_update: String,
		count: Int
	}
type CategoryAggregate { 
		category_id: Int,
		name: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;