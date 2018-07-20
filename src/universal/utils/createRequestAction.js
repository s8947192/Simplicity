export default function createRequestAction (type) {
  return {
    start: createAction(type),
    success: createAction(`${type}_SUCCESS`),
    failure: createAction(`${type}_FAIL`)
  }
}

export const createAction = (type) => (payload, meta) => {

  const action = {
    type
  }

  if (payload !== undefined) {
    action.payload = payload
  }

  if (meta !== undefined) {
    action.meta = meta
  }

  return action
}
