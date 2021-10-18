const callApi = async (url,options ={}) => {
  const token = localStorage.getItem("token");
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      };
    const response = await fetch("http://localhost:3002/api" + url, options);
    const data = await response.json();
    return data;
  };
  
  const api = {
    products: {
      list() {
        return callApi("/products");
      },
      create(producto) {
        return callApi("/products", {
          method: "POST",
          body: JSON.stringify(producto),
        });
      },
      delete(id){
        return callApi(`/products/${id}`,{
            method: "DELETE",
        });
      },
      edit(producto){
        return callApi(`/products/${producto._id}`,{
            method: "PUT",
            body: JSON.stringify(producto),
        });
      },
      getProduct(id){
        return callApi(`/products/${id}`);
      },
    },
    user:{
      getUser(){
      return callApi("/user/")
      },
      validarAdmin(){
        return callApi("/user/validarAdmin");
    },
  },
    // categorias: {
    //   list() {
    //     return callApi("/categoria");
    //   },
    // },
  };
  
  export default api;