const Api = {
  // apiUrl: 'http://localhost:3001',
  apiUrl: `${process.env.REACT_APP_BACKEND}`,
  fetchGetAll: () => fetch(Api.apiUrl),
  fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (data) => {
    return fetch(`${Api.apiUrl}/novo`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  },
  fetchPut: (data, id) => {
    return fetch(`${Api.apiUrl}/editar/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/deletar/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;