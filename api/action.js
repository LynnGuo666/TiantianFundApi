module.exports = async function handler(request, response) {
  try {
    const action = request.query.action_name;
    
    if (!action) {
      return response.status(400).json({ 
        error: 'Missing action_name parameter',
        usage: 'Please provide action_name parameter to specify which API to call'
      });
    }
    
    const api = require(`../src/module/${action}.js`);
    const data = await api(request.query);
    response.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    response.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
};
