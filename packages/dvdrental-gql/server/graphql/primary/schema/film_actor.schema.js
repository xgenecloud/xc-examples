module.exports = `

    input FilmActorInput { 
		actor_id: Int,
		film_id: Int,
		last_update: String,
	}

    type Query { 
		FilmActorList(where: String, limit: Int, offset: Int, sort: String): [FilmActor]
		FilmActor(id:String!): FilmActor
		FilmActorExists(id: String!): Boolean
		FilmActorFindOne(where: String!): FilmActor
		FilmActorCount(where: String!): Int
		FilmActorDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [FilmActor]
		FilmActorGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [FilmActorGroupBy]
		FilmActorAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [FilmActorAggregate]
		FilmActorDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		FilmActorCreate(data:FilmActorInput): FilmActor
		FilmActorUpdate(id:String,data:FilmActorInput): FilmActor
		FilmActorDelete(id:String): FilmActor
		FilmActorCreateBulk(data: [FilmActorInput]): [Int]
		FilmActorUpdateBulk(data: [FilmActorInput]): [Int]
		FilmActorDeleteBulk(data: [FilmActorInput]): [Int]
	},


    type FilmActor { 
		actor_id: Int,
		film_id: Int,
		last_update: String,

		Actor(id:String): Actor
		Film(id:String): Film
	}
type FilmActorGroupBy { 
		actor_id: Int,
		film_id: Int,
		last_update: String,
		count: Int
	}
type FilmActorAggregate { 
		actor_id: Int,
		film_id: Int,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;