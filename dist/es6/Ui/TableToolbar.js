'use strict';var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_Icon=require('../Components/Icon'),_Icon2=_interopRequireDefault(_Icon),_TableSearch=require('../Ui/TableSearch'),_TableSearch2=_interopRequireDefault(_TableSearch),_ColumnEditor=require('../Ui/ColumnEditor'),_ColumnEditor2=_interopRequireDefault(_ColumnEditor),_RowUtils=require('../Utils/RowUtils'),_RowUtils2=_interopRequireDefault(_RowUtils),_RowCounter=require('../Ui/RowCounter'),_RowCounter2=_interopRequireDefault(_RowCounter);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var TableToolbar=function(_React$PureComponent){function TableToolbar(props){_classCallCheck(this,TableToolbar);var _this=_possibleConstructorReturn(this,(TableToolbar.__proto__||Object.getPrototypeOf(TableToolbar)).call(this,props));return _this.renderTitle=_this.renderTitle.bind(_this),_this.renderSearch=_this.renderSearch.bind(_this),_this.renderCounter=_this.renderCounter.bind(_this),_this.renderChildren=_this.renderChildren.bind(_this),_this.renderAddRemoveColumns=_this.renderAddRemoveColumns.bind(_this),_this}return _inherits(TableToolbar,_React$PureComponent),_createClass(TableToolbar,[{key:'renderTitle',value:function renderTitle(){var options=this.props.options,title=options.title;return title?_react2.default.createElement('h1',{className:'TableToolbar-Title'},title):null}},{key:'renderSearch',value:function renderSearch(){var _props=this.props,options=_props.options,uiState=_props.uiState,eventHandlers=_props.eventHandlers,onSearch=eventHandlers.onSearch,searchQuery=uiState.searchQuery;return onSearch?_react2.default.createElement(_TableSearch2.default,{query:searchQuery,onSearch:onSearch}):void 0}},{key:'renderCounter',value:function renderCounter(){var _props2=this.props,rows=_props2.rows,options=_props2.options,uiState=_props2.uiState,eventHandlers=_props2.eventHandlers,pagination=uiState.pagination,filteredRowCount=uiState.filteredRowCount,totalRows=pagination.totalRows,rowsPerPage=pagination.rowsPerPage,showCount=options.showCount;if(!showCount)return null;var isPaginated='onPageChange'in eventHandlers,isSearching=uiState.searchQuery&&uiState.searchQuery.length,count=totalRows?totalRows:rows.length,noun=(isSearching?'result':'row')+(1==count%rowsPerPage?'':'s'),start=isPaginated?(pagination.currentPage-1)*rowsPerPage+1:null,end=isPaginated?start+rowsPerPage>count?count:start-1+rowsPerPage:null;return _react2.default.createElement('div',{className:'TableToolbar-Info'},_react2.default.createElement(_RowCounter2.default,{count:count,noun:noun,start:start,end:end,filteredRowCount:filteredRowCount}))}},{key:'renderChildren',value:function renderChildren(){var children=this.props.children;return children?_react2.default.createElement('div',{className:'TableToolbar-Children'},children):null}},{key:'renderAddRemoveColumns',value:function renderAddRemoveColumns(){var _props3=this.props,options=_props3.options,columns=_props3.columns,eventHandlers=_props3.eventHandlers,editableColumns=options.editableColumns,columnsAreHideable=columns.some(function(column){return column.hideable});if(!editableColumns||!columnsAreHideable)return null;var onShowColumn=eventHandlers.onShowColumn,onHideColumn=eventHandlers.onHideColumn;return _react2.default.createElement(_ColumnEditor2.default,{columns:columns,onShowColumn:onShowColumn,onHideColumn:onHideColumn},_react2.default.createElement('button',null,_react2.default.createElement(_Icon2.default,{fa:'columns'}),_react2.default.createElement('span',null,'Add/Remove Columns')))}},{key:'render',value:function render(){var Title=this.renderTitle,Search=this.renderSearch,Counter=this.renderCounter,Children=this.renderChildren,AddRemove=this.renderAddRemoveColumns;return _react2.default.createElement('div',{className:'Toolbar TableToolbar'},_react2.default.createElement(Title,null),_react2.default.createElement(Search,null),_react2.default.createElement(Counter,null),_react2.default.createElement(Children,null),_react2.default.createElement(AddRemove,null))}}]),TableToolbar}(_react2.default.PureComponent);exports.default=TableToolbar;