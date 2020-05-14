module.exports = `

    input ActorInput { 
		actor_id: Int,
		first_name: String,
		last_name: String,
		last_update: String,
		title4: Int,
	}

    type Query { 
		ActorList(where: String, limit: Int, offset: Int, sort: String): [Actor]
		ActorRead(id:String): Actor
		ActorExists(id: String): Boolean
		ActorFindOne(where: String): Actor
		ActorCount(where: String): Int
		ActorDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Actor]
		ActorGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [ActorGroupBy]
		ActorAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [ActorAggregate]
		ActorDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		ActorCreate(data:ActorInput): Actor
		ActorUpdate(id:String,data:ActorInput): Actor
		ActorDelete(id:String): Actor
		ActorCreateBulk(data: [ActorInput]): [Int]
		ActorUpdateBulk(data: [ActorInput]): [Int]
		ActorDeleteBulk(data: [ActorInput]): [Int]
	},


    type Actor { 
		actor_id: Int,
		first_name: String,
		last_name: String,
		last_update: String,
		title4: Int,

		FilmActorList: [FilmActor]
		FilmActorCount: Int
	}
type ActorGroupBy { 
		actor_id: Int,
		first_name: String,
		last_name: String,
		last_update: String,
		title4: Int,
		count: Int
	}
type ActorAggregate { 
		actor_id: Int,
		first_name: String,
		last_name: String,
		last_update: String,
		title4: Int,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;