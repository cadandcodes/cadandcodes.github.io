export default function ({ $axios, redirect }) {
    // Set baseURL for axios
    $axios.defaults.baseURL = 'https://api.example.com';
  
    // Add a request interceptor
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url);
      return config;
    });
  
    // Add a response interceptor
    $axios.onResponse(response => {
      console.log('Received response:', response);
      return response;
    });
  
    // Handle errors
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status);
      if (code === 400) {
        redirect('/400');
      }
    });
  }