const TodoController = () => {
  const get = (req, res) => {
    res.send('Request Todo');
  };
 
  return {
    get,
  };
};
 
module.exports = TodoController;