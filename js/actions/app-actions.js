var AppConstants = require('../constants/app-constants.js')
var AppDispatcher = require('../dispatcher/app-dispatcher.js') 

var AppActions = {
  addComment: function(comment) {
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_COMMENT,
      item: comment
    })
  },

  removeComment: function(id) {
    AppDispatcher.handleViewAction({
      actionType:AppConstants.REMOVE_COMMENT,
      id: id
    })
  }
}

module.exports = AppActions
