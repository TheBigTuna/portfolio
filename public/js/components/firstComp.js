webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactModal = __webpack_require__(116);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

_reactModal2.default.setAppElement('div');

var ModalBox = function (_React$Component) {
  _inherits(ModalBox, _React$Component);

  function ModalBox() {
    _classCallCheck(this, ModalBox);

    var _this = _possibleConstructorReturn(this, (ModalBox.__proto__ || Object.getPrototypeOf(ModalBox)).call(this));

    _this.state = {
      name: "Octavius",
      modalIsOpen: false
    };
    _this.openModal = _this.openModal.bind(_this);
    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(ModalBox, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalIsOpen: true });
    }
  }, {
    key: 'afterOpenModal',
    value: function afterOpenModal() {
      this.subtitle.style.color = '#f00';
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'modalSec' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'button',
              { onClick: this.openModal },
              'Open Modal'
            ),
            _react2.default.createElement(
              _reactModal2.default,
              {
                isOpen: this.state.modalIsOpen,
                onAfterOpen: this.afterOpenModal,
                onRequestClose: this.closeModal,
                style: customStyles,
                contentLabel: 'Example Modal'
              },
              _react2.default.createElement(
                'h2',
                { ref: function ref(subtitle) {
                    return _this2.subtitle = subtitle;
                  } },
                'Hello'
              ),
              _react2.default.createElement(
                'button',
                { onClick: this.closeModal },
                'close'
              ),
              _react2.default.createElement(
                'div',
                null,
                'I am a modal'
              ),
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement('input', null),
                _react2.default.createElement(
                  'button',
                  null,
                  'tab navigation'
                ),
                _react2.default.createElement(
                  'button',
                  null,
                  'stays'
                ),
                _react2.default.createElement(
                  'button',
                  null,
                  'inside'
                ),
                _react2.default.createElement(
                  'button',
                  null,
                  'the modal'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ModalBox;
}(_react2.default.Component);

exports.default = ModalBox;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

    _this.state = {
      name: "Octavius"
    };
    return _this;
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'aboutSec' },
        _react2.default.createElement('div', { className: 'container text-center my-auto' })
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'footer',
          { className: 'py-5 mt-5', id: 'footerSec' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              { className: 'm-0 text-center text-white footerText' },
              '2018 @octaviusmoore.com'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactModal = __webpack_require__(116);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This is the header component for the portfolio

var customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.85)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

_reactModal2.default.setAppElement('div');

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Octavius"
    };
    // Toggles A react js modal
    _this.openModal = _this.openModal.bind(_this);
    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  // Sets state after opening the modal


  _createClass(Header, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalIsOpen: true });
      document.getElementById("navSec").style.display = "none";
    }
  }, {
    key: 'afterOpenModal',
    value: function afterOpenModal() {}

    // Sets state after closing the modal

  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
      document.getElementById("navSec").style.display = "block";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'headSec' },
        _react2.default.createElement(
          'header',
          { className: 'masthead d-flex' },
          _react2.default.createElement(
            'div',
            { className: 'container text-left my-auto' },
            _react2.default.createElement('img', _defineProperty({ className: 'img-fluid selfImg', src: 'images/IMG_0978-min.jpg', alt: 'images/self.png', width: '80px' }, 'alt', '')),
            _react2.default.createElement(
              'h2',
              { className: 'mb-1' },
              'Hello I\'m Octavius'
            ),
            _react2.default.createElement(
              'h1',
              { className: 'mb-3' },
              'A Web Developer'
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-light rounded btn-xl js-scroll-trigger contactBtn hidden-xs mt-3', onClick: this.openModal },
              'CONTACT'
            )
          ),
          _react2.default.createElement(
            _reactModal2.default,
            {
              isOpen: this.state.modalIsOpen,
              onAfterOpen: this.afterOpenModal,
              onRequestClose: this.closeModal,
              style: customStyles,
              contentLabel: 'Contact Modal' },
            _react2.default.createElement(
              'h2',
              { className: 'mb-2 text-center' },
              'Contact'
            ),
            _react2.default.createElement(
              'h6',
              null,
              'Phone'
            ),
            _react2.default.createElement(
              'p',
              null,
              '(313)293-9440'
            ),
            _react2.default.createElement(
              'h6',
              null,
              'Email'
            ),
            _react2.default.createElement(
              'p',
              null,
              'mooreoctavius94@gmail.com'
            ),
            _react2.default.createElement(
              'h6',
              null,
              'Social'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/in/octavius-moore-6a84a7b0/' },
              _react2.default.createElement('i', { className: 'fa fa-linkedin social fa-lg' })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/TheBigTuna' },
              _react2.default.createElement('i', { className: 'fa fa-github ml-3 social fa-lg' })
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLoading = __webpack_require__(119);

var _reactLoading2 = _interopRequireDefault(_reactLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Load = function (_React$Component) {
  _inherits(Load, _React$Component);

  function Load(_ref) {
    var type = _ref.type,
        color = _ref.color;

    _classCallCheck(this, Load);

    var _this = _possibleConstructorReturn(this, (Load.__proto__ || Object.getPrototypeOf(Load)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Load, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'loading-dots' },
        _react2.default.createElement('div', { className: 'loading-dots--dot' }),
        _react2.default.createElement('div', { className: 'loading-dots--dot' }),
        _react2.default.createElement('div', { className: 'loading-dots--dot' }),
        _react2.default.createElement('div', { className: 'loading-dots--dot' })
      );
    }
  }]);

  return Load;
}(_react2.default.Component);

exports.default = Load;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactModal = __webpack_require__(116);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Modal = __webpack_require__(118);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.85)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

_reactModal2.default.setAppElement('div');

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = {
      name: "Octavius"
    };
    _this.openModal = _this.openModal.bind(_this);
    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalIsOpen: true });
      document.getElementById("navSec").style.display = "none";
    }
  }, {
    key: 'afterOpenModal',
    value: function afterOpenModal() {}
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
      document.getElementById("navSec").style.display = "block";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand-lg navbar-dark navbar-custom fixed-top', id: 'navSec' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement('img', _defineProperty({ className: 'img-fluid selfImg mr-2', src: 'images/IMG_0978-min.jpg', alt: 'images/self.png', id: 'navImg', width: '30px' }, 'alt', '')),
            _react2.default.createElement(
              'p',
              { className: 'navbar-brand', id: 'navText1' },
              'Octavius'
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'navbarResponsive' },
              _react2.default.createElement(
                'ul',
                { className: 'navbar-nav ml-auto' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList1', onClick: this.props.homeScroll },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList3', onClick: this.props.projectScroll },
                    'Projects'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList2', onClick: this.openModal },
                    'About'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement('a', { className: 'nav-link', id: 'navList4', onClick: this.openModal })
                )
              ),
              _react2.default.createElement(
                _reactModal2.default,
                {
                  isOpen: this.state.modalIsOpen,
                  onAfterOpen: this.afterOpenModal,
                  onRequestClose: this.closeModal,
                  style: customStyles,
                  contentLabel: 'Example Modal' },
                _react2.default.createElement(
                  'h2',
                  { className: 'mb-2' },
                  'About Me'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'modalText' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Hello my name is Octavius Moore and, I\'m a web developer based out of Detroit MI.',
                    _react2.default.createElement('br', null),
                    'As a self-taught developer I welcome you to browse through my portfolio and freelance projects.',
                    _react2.default.createElement('br', null),
                    'I\'m always looking to collaborate and join a great team so please feel free to contact me.',
                    _react2.default.createElement('br', null)
                  )
                ),
                _react2.default.createElement(
                  'h5',
                  null,
                  'My Skills'
                ),
                _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-bootstrap-plain-wordmark colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-javascript-plain colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-jquery-plain-wordmark colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-react-original-wordmark colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-git-plain-wordmark colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-php-plain colored pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-mysql-plain-wordmark pIcon' }),
                _react2.default.createElement('i', { className: 'devicon-wordpress-plain-wordmark colored pIcon' })
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAnimatedCss = __webpack_require__(435);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects() {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this));

    _this.state = { name: "Octavius" };
    _this.iconDisplay = _this.iconDisplay.bind(_this);
    _this.iconHide = _this.iconHide.bind(_this);
    return _this;
  }

  _createClass(Projects, [{
    key: 'iconDisplay',
    value: function iconDisplay() {
      var hB1 = document.getElementById('hoverBox1');
      // let hB2 = document.getElementById('hoverBox2');  
      // let hB3 = document.getElementById('hoverBox3');  
      var hB4 = document.getElementById('hoverBox4');
      var hB5 = document.getElementById('hoverBox5');
      var hB6 = document.getElementById('hoverBox6');
      var p1 = document.getElementById('p1');
      var p2 = document.getElementById('p2');
      // let p3 = document.getElementById('p3');  
      var p4 = document.getElementById('p4');
      var p5 = document.getElementById('p5');
      var p6 = document.getElementById('p6');
      var d1 = document.getElementById('display1');
      // let d2 = document.getElementById('display2');
      // let d3 = document.getElementById('display3');
      var d4 = document.getElementById('display4');
      var d5 = document.getElementById('display5');
      var d6 = document.getElementById('display6');

      p1.addEventListener('mouseover', function () {
        hB1.style.display = 'block';d1.setAttribute("class", "Animated flipInX");
      });
      // p2.addEventListener('mouseover', () =>{hB2.style.display = 'block'; d2.setAttribute("class", "Animated flipInX");});
      // p3.addEventListener('mouseover', () =>{hB3.style.display = 'block'; d3.setAttribute("class", "Animated flipInX");});
      p4.addEventListener('mouseover', function () {
        hB4.style.display = 'block';d4.setAttribute("class", "Animated flipInX");
      });
      p5.addEventListener('mouseover', function () {
        hB5.style.display = 'block';d5.setAttribute("class", "Animated flipInX");
      });
      p6.addEventListener('mouseover', function () {
        hB6.style.display = 'block';d6.setAttribute("class", "Animated flipInX");
      });
    }
  }, {
    key: 'iconHide',
    value: function iconHide() {
      var hB1 = document.getElementById('hoverBox1');
      // let hB2 = document.getElementById('hoverBox2');  
      // let hB3 = document.getElementById('hoverBox3');  
      var hB4 = document.getElementById('hoverBox4');
      var hB5 = document.getElementById('hoverBox5');
      var hB6 = document.getElementById('hoverBox6');
      var p1 = document.getElementById('p1');
      // let p2 = document.getElementById('p2');  
      // let p3 = document.getElementById('p3');  
      var p4 = document.getElementById('p4');
      var p5 = document.getElementById('p5');
      var p6 = document.getElementById('p6');
      p1.addEventListener('mouseleave', function () {
        hB1.style.display = 'none';
      });
      // p2.addEventListener('mouseleave', () =>{hB2.style.display = 'none';});  
      // p3.addEventListener('mouseleave', () =>{hB3.style.display = 'none';});  
      p4.addEventListener('mouseleave', function () {
        hB4.style.display = 'none';
      });
      p5.addEventListener('mouseleave', function () {
        hB5.style.display = 'none';
      });
      p6.addEventListener('mouseleave', function () {
        hB6.style.display = 'none';
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'content-section-heading text-center' },
            _react2.default.createElement(
              'h2',
              { className: 'mb-5 mt-3', id: 'projectsSec' },
              'PROJECTS'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row no-gutters' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', id: 'p1', href: 'https://animerooms.com', target: '_blank', onMouseEnter: this.iconDisplay, onMouseLeave: this.iconHide },
                _react2.default.createElement(
                  'div',
                  { className: 'hoverBox', id: 'hoverBox1' },
                  _react2.default.createElement(
                    'h4',
                    { id: 'display1' },
                    'Display',
                    _react2.default.createElement('i', { className: 'fa fa-arrow-right', 'aria-hidden': 'true' })
                  )
                ),
                _react2.default.createElement('img', _defineProperty({ className: 'img-fluid projectImg', src: 'images/animerooms.png', alt: 'images/animerooms.png', height: '300px' }, 'alt', ''))
              ),
              _react2.default.createElement(
                'span',
                { className: 'caption' },
                _react2.default.createElement(
                  'span',
                  { className: 'caption-content' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'pName mt-1' },
                    'animerooms.com'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-javascript-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-php-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-mysql-plain-wordmark pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-git-plain-wordmark colored pIcon' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', id: 'p6', href: 'https://thebigtuna.github.io/DetDigitalAgency/', target: '_blank', onMouseEnter: this.iconDisplay, onMouseLeave: this.iconHide },
                _react2.default.createElement(
                  'div',
                  { className: 'hoverBox', id: 'hoverBox6' },
                  _react2.default.createElement(
                    'h4',
                    { id: 'display6' },
                    'Display',
                    _react2.default.createElement('i', { className: 'fa fa-arrow-right', 'aria-hidden': 'true' })
                  )
                ),
                _react2.default.createElement('img', _defineProperty({ className: 'img-fluid projectImg', src: 'images/Det-min.png', alt: 'images/Det.png', height: '300px' }, 'alt', ''))
              ),
              _react2.default.createElement(
                'span',
                { className: 'caption' },
                _react2.default.createElement(
                  'span',
                  { className: 'caption-content' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'pName mt-1' },
                    'Detroit Sightings Website'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-javascript-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-jquery-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-git-plain-wordmark colored pIcon' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', id: 'p4', href: 'https://octaviusmoore.com/SkateKicks/', target: '_blank', onMouseEnter: this.iconDisplay, onMouseLeave: this.iconHide },
                _react2.default.createElement(
                  'div',
                  { className: 'hoverBox', id: 'hoverBox4' },
                  _react2.default.createElement(
                    'h4',
                    { id: 'display4' },
                    'Display',
                    _react2.default.createElement('i', { className: 'fa fa-arrow-right', 'aria-hidden': 'true' })
                  )
                ),
                _react2.default.createElement('img', _defineProperty({ className: 'img-fluid projectImg', src: 'images/skatekicks-min.png', alt: 'images/skatekicks.png', height: '300px' }, 'alt', ''))
              ),
              _react2.default.createElement(
                'span',
                { className: 'caption' },
                _react2.default.createElement(
                  'span',
                  { className: 'caption-content' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'pName mt-1' },
                    'Skatekicks Website'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-wordpress-plain-wordmark colored pIcon' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', id: 'p5', href: 'https://alleuro.com', target: '_blank', onMouseEnter: this.iconDisplay, onMouseLeave: this.iconHide },
                _react2.default.createElement(
                  'div',
                  { className: 'hoverBox', id: 'hoverBox5' },
                  _react2.default.createElement(
                    'h4',
                    { id: 'display5' },
                    'Display',
                    _react2.default.createElement('i', { className: 'fa fa-arrow-right', 'aria-hidden': 'true' })
                  )
                ),
                _react2.default.createElement('img', _defineProperty({ className: 'img-fluid projectImg', src: 'images/AllEuro.png', alt: 'images/youtube.png', height: '300px' }, 'alt', ''))
              ),
              _react2.default.createElement(
                'span',
                { className: 'caption' },
                _react2.default.createElement(
                  'span',
                  { className: 'caption-content' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'pName mt-1' },
                    'All European Website'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-bootstrap-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-jquery-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-php-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-mysql-plain-wordmark pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-git-plain-wordmark colored pIcon' }),
                    _react2.default.createElement(
                      'a',
                      { href: 'https://github.com/TheBigTuna/youtubeplayer', target: '_blank' },
                      _react2.default.createElement(
                        'button',
                        { className: 'viewCode btn' },
                        'View Code'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Projects;
}(_react2.default.Component);

exports.default = Projects;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLoading = __webpack_require__(119);

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _Navbar = __webpack_require__(185);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Header = __webpack_require__(183);

var _Header2 = _interopRequireDefault(_Header);

var _About = __webpack_require__(181);

var _About2 = _interopRequireDefault(_About);

var _Projects = __webpack_require__(186);

var _Projects2 = _interopRequireDefault(_Projects);

var _Footer = __webpack_require__(182);

var _Footer2 = _interopRequireDefault(_Footer);

var _Modal = __webpack_require__(118);

var _Modal2 = _interopRequireDefault(_Modal);

var _Loading = __webpack_require__(184);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Octavius',
      isLoading: true
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'navScroll',
    value: function navScroll() {
      var posTop = window.scrollTo(0, 0);
      document.addEventListener("scroll", function () {
        var navSec = document.getElementById('navSec');
        var navText1 = document.getElementById('navText1');
        var pos = pageYOffset;
        var navImg = document.getElementById('navImg');
        var navList1 = document.getElementById('navList1');
        var navList2 = document.getElementById('navList2');
        var navList3 = document.getElementById('navList3');
        var navList4 = document.getElementById('navList4');
        if (pos < 220) {
          navSec.style.backgroundColor = "#0575e6";
          navSec.style.borderBottom = "none";
          navImg.style.display = "none";
          navText1.style.color = "white";
          navList1.style.color = "white";
          navList2.style.color = "white";
          navList3.style.color = "white";
          navList4.style.color = "white";
          navSec.style.boxShadow = "none";
        } else {
          navSec.style.backgroundColor = "white";
          navSec.style.borderBottom = ".5px solid rgba(0,0,0,0.6)";
          navImg.style.display = "block";
          navText1.style.color = "black";
          navList1.style.color = "black";
          navList2.style.color = "black";
          navList3.style.color = "black";
          navList4.style.color = "black";
          navSec.style.boxShadow = " 0 3px 2px -2px gray";
        }
      });
    }
  }, {
    key: 'homeScroll',
    value: function homeScroll() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, {
    key: 'projectScroll',
    value: function projectScroll() {
      window.scrollTo({
        top: 585,
        behavior: "smooth"
      });
    }
  }, {
    key: 'showPortfolio',
    value: function showPortfolio() {
      window.addEventListener("load", function (event) {
        var loadContainer = document.getElementsByClassName("loadContainer")[0];
        var portfolioContainer = document.getElementsByClassName("portfolioContainer")[0];
        loadContainer.classList.remove('block');
        loadContainer.classList.add('none');
        portfolioContainer.classList.remove('none');
        portfolioContainer.classList.add('block');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.showPortfolio(),
        _react2.default.createElement(
          'div',
          { className: 'loadContainer block' },
          _react2.default.createElement(_Loading2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'portfolioContainer none' },
          _react2.default.createElement(
            'div',
            { onScroll: this.navScroll() },
            _react2.default.createElement(_Navbar2.default, {
              homeScroll: this.homeScroll,
              projectScroll: this.projectScroll }),
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(_About2.default, null),
            _react2.default.createElement(_Projects2.default, null),
            _react2.default.createElement(_Footer2.default, null)
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[190]);