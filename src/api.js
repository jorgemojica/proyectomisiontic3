const callApi = async (url,options ={}) => {
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
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
    // ventas

    ventas: {
      list() {
        return callApi("/ventas");
      },
      create(ventas) {
        return callApi("/ventas",{method: "POST", body:JSON.stringify(ventas)});
      
      },
  
      delete(id) {
        console.log("API1");
        return callApi(`/ventas/${id}`, {
          method: "DELETE",
          
        });
       
      },

      getVentasId(id){
        console.log(id);
        return callApi(`/ventas/${id}`);
       
      },


     edit(ventas){
        return callApi(`/ventas/${ventas._id}`,{
            method: "PUT",
            body: JSON.stringify(ventas),
        });
      },
  
    },
  
  };
  
  export default api;