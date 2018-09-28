webpackJsonp([0],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactModal = __webpack_require__(12);

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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

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
              '2018 @OctaviusMoore.com'
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactModal = __webpack_require__(12);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  overlay: {
    backgroundColor: 'none'
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
    _this.openModal = _this.openModal.bind(_this);
    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalIsOpen: true });
    }
  }, {
    key: 'afterOpenModal',
    value: function afterOpenModal() {}
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
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
            _react2.default.createElement('img', { className: 'img-fluid rounded-circle', src: 'images/self.png', width: '80px', alt: '' }),
            _react2.default.createElement(
              'h1',
              { className: 'mb-1' },
              'I\'m Octavius'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'mb-3' },
              'Front End Web Developer'
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
              contentLabel: 'Example Modal' },
            _react2.default.createElement(
              'h2',
              { className: 'mb-2' },
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
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.freecodecamp.org/thebigtuna' },
              _react2.default.createElement('i', { className: 'fa fa-free-code-camp ml-3 social fa-lg' })
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactModal = __webpack_require__(12);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Modal = __webpack_require__(14);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  overlay: {
    backgroundColor: 'none'
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

  function Navbar() {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

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
    }
  }, {
    key: 'afterOpenModal',
    value: function afterOpenModal() {}
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
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
            _react2.default.createElement('img', { className: 'img-fluid rounded-circle mr-2', src: 'images/self.png', id: 'navImg', width: '30px', alt: '' }),
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
                    { className: 'nav-link', id: 'navList1', href: '#headSec' },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList3', href: '#projectsSec' },
                    'Projects'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList4', onClick: this.openModal },
                    'Contact'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement('a', { className: 'nav-link', id: 'navList2', href: '#aboutSec' })
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
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.freecodecamp.org/thebigtuna' },
                  _react2.default.createElement('i', { className: 'fa fa-free-code-camp ml-3 social fa-lg' })
                )
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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects() {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Projects, [{
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
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project1/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/polar.png', height: '300px', alt: '' })
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
                    'The Polar Bay'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-bootstrap-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-react-original-wordmark colored pIcon' }),
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
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project2/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/T7.png', height: '300px', alt: '' })
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
                    'Tekken 7 Frame Data App'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-bootstrap-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-javascript-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-jquery-plain-wordmark colored pIcon' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: 'http://sybeq.com/html/home.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/SybeqSite.png', height: '300px', alt: '' })
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
                    'SYBEQ'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-bootstrap-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-javascript-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-jquery-plain-wordmark colored pIcon' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project3/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/Untitled.png', height: '300px', alt: '' })
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
                    'Dylan Webpage'
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
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project4/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/youtube.png', height: '300px', alt: '' })
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
                    'Youtube-Web Application'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-bootstrap-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-react-original-wordmark colored pIcon' }),
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
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project5/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/oldPortfolio.png', height: '300px', alt: '' })
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
                    'Portfolio'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'mb-0' },
                    _react2.default.createElement('i', { className: 'devicon-html5-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-css3-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-javascript-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-jquery-plain-wordmark colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-php-plain colored pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-mysql-plain-wordmark pIcon' }),
                    _react2.default.createElement('i', { className: 'devicon-git-plain-wordmark colored pIcon' })
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Navbar = __webpack_require__(35);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Header = __webpack_require__(34);

var _Header2 = _interopRequireDefault(_Header);

var _About = __webpack_require__(32);

var _About2 = _interopRequireDefault(_About);

var _Projects = __webpack_require__(36);

var _Projects2 = _interopRequireDefault(_Projects);

var _Footer = __webpack_require__(33);

var _Footer2 = _interopRequireDefault(_Footer);

var _Modal = __webpack_require__(14);

var _Modal2 = _interopRequireDefault(_Modal);

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
      name: 'Octavius'
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
        if (pos < 300) {
          navSec.style.backgroundColor = "#0575e6";
          navSec.style.borderBottom = "none";
          navImg.style.display = "none";
          navText1.style.color = "white";
          navList1.style.color = "white";
          navList2.style.color = "white";
          navList3.style.color = "white";
          navList4.style.color = "white";
        } else {
          navSec.style.backgroundColor = "white";
          navSec.style.borderBottom = ".5px solid rgba(0,0,0,0.6)";
          navImg.style.display = "block";
          navText1.style.color = "black";
          navList1.style.color = "black";
          navList2.style.color = "black";
          navList3.style.color = "black";
          navList4.style.color = "black";
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onScroll: this.navScroll() },
        _react2.default.createElement(_Navbar2.default, { name: this.state.name }),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_About2.default, null),
        _react2.default.createElement(_Projects2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[38]);