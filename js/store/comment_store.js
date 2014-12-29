var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;
$ = require('jquery')

var CHANGE_EVENT = "change";

_comments = []

function _addComment(comment) {
  $.ajax({
    url: "/process_comments",
    method: "POST",
    data: {
      process_id: 1,
      text: comment.text,
      author: comment.author
    },
    success: function(data) {
      _comments.push(data.comment)
      CommentStore.emitChange();
    }
  });
}

function _retrieveComments(process_id) {
  $.ajax({
    url: "/process_comments",
    method: "GET",
    data: {
      process_id: 1,
    },
    success: function(comments) {
      _comments = comments.comments
      CommentStore.emitChange();
    }
  });
}

var CommentStore = merge(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getComments: function() {
    return _comments
  },

  pullComments: function(id) {
    _retrieveComments(id)
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {

    var action = payload.action;
    switch(action.actionType) {
      case AppConstants.ADD_COMMENT:
        _addComment(payload.action.item);
        break;
    }

    return true;

  })
})

module.exports = CommentStore
