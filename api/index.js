const fs = require('fs');
const path = require('path');

module.exports = async function handler(request, response) {
  try {
    const modulesDir = path.join(__dirname, '../src/module');
    const modules = fs.readdirSync(modulesDir)
      .filter(file => file.endsWith('.js'))
      .map(file => file.replace('.js', ''))
      .sort();

    const info = {
      name: "天天基金网 API",
      description: "TiantianFund API Service for Vercel",
      version: "1.0.3",
      totalEndpoints: modules.length,
      usage: {
        endpoint: "/api/action",
        method: "GET",
        parameters: {
          action_name: "Required. The API endpoint to call",
          "...params": "Additional parameters specific to each endpoint"
        },
        example: "/api/action?action_name=fundSearch&m=1&key=天弘"
      },
      availableActions: modules,
      documentation: "https://kouchao.github.io/TiantianFundApi/"
    };

    response.status(200).json(info);
  } catch (error) {
    console.error('API Info Error:', error);
    response.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
};