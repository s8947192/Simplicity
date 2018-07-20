const mergeEntities = (...entities) => (state, { payload }) => {
  return state.withMutations(state =>
    entities.reduce(
      (_state, entity) => _state.mergeDeepIn([entity], payload.entities[entity]),
      state
    )
  )
}

export default mergeEntities
